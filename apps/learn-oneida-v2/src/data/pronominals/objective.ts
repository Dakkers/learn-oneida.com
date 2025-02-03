import type { PronominalRules } from "./types";

const meDual = {
  default: ["yukn"],
  c: ["yukni"],
  a: ["yuky"],
};

const maleNonSingular = {
  default: [
    {
      excp: "2" as const,
      text: "lon",
    },
  ],
  c: [
    {
      excp: "2" as const,
      text: "loti",
    },
  ],
  i: [
    {
      excp: "2" as const,
      text: "lot",
    },
  ],
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
        excp: "4",
        breakdown: ["wake"],
      },
    ],
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
        excp: ["1", "2"],
        breakdown: ["l", ["o", "OP"]],
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "lo",
      },
    ],
    e: [
      {
        excp: "2" as const,
        text: "law",
      },
    ],
    o: [
      {
        excp: "2" as const,
        text: "la",
      },
    ],
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
