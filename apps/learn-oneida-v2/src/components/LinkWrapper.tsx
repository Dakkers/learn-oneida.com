import { Link } from "./Link";
import { isNumber } from "lodash";
import type { ReactNode } from "react";

export function LinkWrapper({
  children: _children,
  page,
}: {
  children?: ReactNode;
  page:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "coin"
    | "deriv"
    | "dim"
    | "dual"
    | "intro"
    | "nom"
    | "prep"
    | "refl"
    | "rep"
    | "semi"
    | "soundchart";
}) {
  const children = _children
    ? _children
    : isNumber(page)
      ? `module ${page}`
      : {
          coin: "coincident feature",
          deriv: "derivational suffix",
          dim: "diminutive feature",
          dual: "dualic feature",
          intro: "the introduction page",
          nom: "nominalizer",
          prep: "pre-pronominal prefix",
          refl: "reflexive feature",
          rep: "repetitive feature",
          semi: "semi-reflexive feature",
          soundchart: "sound chart",
        }[page];

  const NON_EXISTENT_PAGES = [
    "coin",
    "deriv",
    "dim",
    "dual",
    "nom",
    "prep",
    "refl",
    "semi",
    7,
    8,
    9,
    10,
    12,
  ];

  if (NON_EXISTENT_PAGES.includes(page)) {
    return children;
  }

  const hrefMap = {
    1: "/learn/module01",
    2: "/learn/module02",
    3: "/learn/module03",
    4: "/learn/module04",
    5: "/learn/module05",
    6: "/learn/module06",
    7: "/learn/module07",
    8: "/learn/module08",
    9: "/learn/module09",
    10: "/learn/module10",
    11: "/learn/module11",
    12: "/learn/module12",
    coin: "/articles/coincident-feature",
    deriv: "/articles/derivational-suffixes",
    dim: "/articles/diminutive-feature",
    dual: "/articles/dualic-feature",
    intro: "/learn/introduction",
    nom: "/articles/nominalizer",
    prep: "/articles/prepronominal-prefix",
    refl: "/articles/reflexive-feature",
    rep: "/articles/repetitive-feature",
    semi: "/articles/semireflexive-feature",
    soundchart: "/practice/soundchart",
  } as const;

  return <Link href={hrefMap[page]}>{children}</Link>;
}
