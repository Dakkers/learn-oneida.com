import { Link } from "@ukwehuwehneke/ohutsya";
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
    | "dim"
    | "dual"
    | "intro"
    | "rep"
    | "semi";
}) {
  const children = _children
    ? _children
    : isNumber(page)
      ? `module ${page}`
      : {
          coin: "coincident feature",
          dim: "diminutive feature",
          dual: "dualic feature",
          intro: "the introduction page",
          rep: "repetitive feature",
          semi: "semi-reflexive feature",
        }[page];

  const NON_EXISTENT_PAGES = [
    "semi",
    "dim",
    "dual",
    "coin",
    7,
    8,
    9,
    10,
    11,
    12,
  ];

  if (NON_EXISTENT_PAGES.includes(page)) {
    return children;
  }

  return (
    <Link
      href={
        page === "intro"
          ? "/learn/introduction"
          : page === "rep"
            ? "/articles/repetitive-feature"
            : `/learn/module${page.toString().padStart(2, "0")}`
      }
    >
      {children}
    </Link>
  );
}
