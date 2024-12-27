import type { PronominalRules } from "./types";

const meDual = {
  default: ["yukn"],
  c: ["yukni"],
  a: ["yuky"],
};

const maleNonSingular = {
  default: ["lon"],
  c: ["loti"],
  i: ["lot"],
};

const femaleNonSingular = {
  default: ["yon"],
  c: ["yoti"],
  i: ["yot"],
};

const mePlural = {
  default: ["yukw"],
  c: ["yukwa"],
  i: [
    {
      excp: "1",
      breakdown: ["yukw", ["ʌ", "OP"]],
    } as const,
  ],
  o: ["yuky"],
};

const data: PronominalRules = {
  i: {
    default: ["wak"],
    c: [
      "wak",
      {
        excp: "3",
        breakdown: ["wake"],
      },
    ],
  },
  u: {
    default: ["s"],
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
        breakdown: ["l", ["o", "OP"]],
      },
    ],
    c: ["lo"],
    e: ["law"],
    o: ["la"],
  },
  f: {
    default: [
      {
        excp: "1",
        breakdown: ["yak", ["o", "OP"]],
      },
    ],
    c: ["yako"],
    e: ["yakaw"],
    o: ["yaka"],
  },
  it: {
    default: [
      {
        excp: "1",
        breakdown: ["y", ["o", "OP"]],
      },
    ],
    c: ["yo"],
    e: ["yaw"],
    o: ["ya"],
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
  // @ts-expect-error IDK
  us: mePlural,
  // @ts-expect-error IDK
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
