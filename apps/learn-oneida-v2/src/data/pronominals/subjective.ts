import type { PronominalRules } from "./types";

const data: PronominalRules = {
  i: {
    default: ["k"],
    c: [
      "k",
      {
        excp: "5",
        breakdown: [["i", "RPL"], "k"],
      },
      {
        excp: "4",
        breakdown: ["ke"],
      },
    ],
  },
  u: {
    default: [
      {
        excp: "3",
        breakdown: [["h", "RPL"], "s"],
      },
    ],
    c: [
      "s",
      {
        excp: "6",
        text: "ts",
      },
      {
        excp: "7",
        breakdown: [["i", "RPL"], "t"],
      },
      {
        excp: ["4", "3"],
        breakdown: [["h", "RPL"], "se"],
      },
    ],
    i: [
      "ts",
      {
        excp: "3",
        breakdown: [["h", "RPL"], "s"],
      },
    ],
  },
  m: {
    default: [
      {
        excp: ["2", "3"],
        breakdown: [["h", "RPL"], "l"],
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "la",
      },
    ],
    a: [
      {
        excp: "2" as const,
        text: "l",
      },
    ],
    i: [
      {
        excp: ["1", "2"],
        breakdown: ["l", ["ʌ", "OP"]],
      },
    ],
  },
  f: {
    default: ["yak"],
    c: ["ye"],
    a: [
      {
        excp: "1",
        breakdown: ["y", ["u", "OP"]],
      },
    ],
    i: [
      {
        excp: "1",
        breakdown: ["y", ["e", "OP"]],
      },
    ],
  },
  it: {
    default: ["w"],
    c: ["ka"],
    i: [
      {
        excp: "1",
        breakdown: ["k", ["ʌ", "OP"]],
      },
    ],
    o: ["y"],
  },
  uni: {
    default: ["tn"],
    c: ["tni"],
    a: ["ty"],
  },
  soni: {
    default: ["yakn"],
    c: ["yakni"],
    a: ["yaky"],
  },
  u2: {
    default: ["sn"],
    c: ["sni"],
    a: ["tsy"],
  },
  "2m": {
    default: [
      {
        excp: "3",
        breakdown: [["h", "RPL"], "n"],
      },
    ],
    c: [
      {
        excp: "3",
        breakdown: [["h", "RPL"], "ni"],
      },
    ],
    a: [
      {
        excp: "3",
        breakdown: [["h", "RPL"], "y"],
      },
    ],
  },
  "2f": {
    default: ["kn"],
    c: ["kni"],
    a: ["ky"],
  },
  us: {
    default: ["tw"],
    c: ["twa"],
    i: [
      {
        excp: "1",
        breakdown: ["tw", ["ʌ", "OP"]],
      },
    ],
    o: ["ty"],
  },
  theyni: {
    default: ["yakw"],
    c: ["yakwa"],
    i: [
      {
        excp: "1",
        breakdown: ["yakw", ["ʌ", "OP"]],
      },
    ],
    o: ["yaky"],
  },
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
  ms: {
    default: [
      {
        excp: "2" as const,
        text: "lʌn",
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "lati",
      },
    ],
    a: [
      {
        excp: ["1", "2"],
        breakdown: ["l", ["u", "OP"]],
      },
    ],
    i: [
      {
        excp: "2" as const,
        text: "lʌn",
      },
      {
        excp: "2" as const,
        text: "lat",
      },
    ],
  },
  fs: {
    default: ["kun"],
    c: ["kuti"],
    a: [
      {
        excp: "1",
        breakdown: ["k", ["u", "OP"]],
      },
    ],
    i: ["kut", "kun"],
  },
};

export default data;
