import type { PronominalRules } from "./types";

const meDual = {
  default: ["ukn"],
  c: ["ukni"],
  a: ["uky"],
};
const mePlural = {
  default: ["ukw"],
  c: ["ukwa"],
  i: [
    {
      excp: "1",
      breakdown: ["ukw", ["ʌ", "OP"]],
    } as const,
  ],
  o: ["uky"],
};
const maleNonSingular = {
  default: ["laon"],
  c: ["laoti"],
  i: ["laon", "laot"],
};
const femaleNonSingular = {
  default: ["aon"],
  c: ["aoti"],
  i: ["aon", "aot"],
};

const data: PronominalRules = {
  i: {
    default: ["akw"],
    c: [
      "ak",
      {
        excp: "4",
        text: "ake",
      },
    ],
    i: ["ak"],
    o: ["ak"],
  },
  u: {
    default: [["s", "HAB"]],
    c: ["sa"],
    i: [
      {
        excp: "1",
        breakdown: ["s", ["ʌ", "OP"]],
      },
    ],
  },
  m: {
    default: [
      {
        excp: "1",
        breakdown: ["la", ["o", "OP"]],
      },
    ],
    c: ["lao"],
    e: ["law"],
    o: ["la"],
  },
  f: {
    default: [
      {
        excp: "1",
        breakdown: ["ak", ["o", "OP"]],
      },
    ],
    c: ["ako"],
    e: ["akaw"],
    o: ["ak"],
  },
  it: {
    default: [
      {
        excp: "1",
        breakdown: ["a", ["o", "OP"]],
      },
    ],
    c: ["ao"],
    e: ["aw"],
    o: ["a"],
  },
  uni: meDual,
  soni: meDual,
  u2: {
    default: ["sn"],
    c: ["sni"],
    a: ["tsy"],
  },
  "2m": maleNonSingular,
  "2f": femaleNonSingular,
  // @ts-expect-error Pronominal things
  us: mePlural,
  // @ts-expect-error Pronominal things
  theyni: mePlural,
  yall: {
    default: ["sw"],
    c: ["swa"],
    i: [
      {
        excp: "1",
        breakdown: ["sw", ["ʌ", "OP"]],
      },
    ],
    o: ["tsy"],
  },
  ms: maleNonSingular,
  fs: femaleNonSingular,
};

export default data;
