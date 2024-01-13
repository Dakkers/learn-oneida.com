// const listThingy = [
//   {
//     pronoun: "I",
//     present: "am",
//     past: "was",
//   },
//   {},
// ];

export function formatTranslation(text: string, params) {
  let result = text;
  for (const key in params) {
    result = result.replace(new RegExp(`{{${key}}}`, "g"), params[key]);
  }
  return result;
}

export const singlePronouns = ["i", "u", "m", "f", "it"];
export const dualicPronouns = ["uni", "soni", "u2", "2m", "2f"];
export const pluralPronouns = ["us", "theyni", "yall", "ms", "fs"];

export const pronouns = [
  ...singlePronouns,
  ...dualicPronouns,
  ...pluralPronouns,
] as const;

export type Pronoun = (typeof pronouns)[number];

export type BreakdownType = "RPL" | "PR" | "PB" | "PP" | "PLB" | "PAST" | "OP";

export const PRONOUN_MAP_ONEIDA: Record<Pronoun, string> = {
  i: "í",
  u: "isé",
  m: "laulhá",
  f: "akaulhá",
  it: "aulhá",
  uni: "tetniyáhse",
  soni: "teyakniyáhse",
  u2: "tesniyáhse",
  "2m": "tehniyáhse",
  "2f": "tekniyáhse",
  us: "twakweku",
  theyni: "yakwakweku",
  yall: "swakweku",
  ms: "latikweku",
  fs: "kutikweku",
};

export const PRONOUN_MAP_EN: Record<Pronoun, string> = {
  i: "I",
  u: "You",
  m: "He",
  f: "She",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": "Two males",
  "2f": "Two females",
  us: "You all and I",
  theyni: "They and I",
  yall: "All of you",
  ms: "They (males)",
  fs: "They (females)",
};

export const PRONOUN_MAP_EN_OBJECTIVE: Record<Pronoun, string> = {
  i: "Me",
  u: "You",
  m: "Him",
  f: "Her",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": "Two males",
  "2f": "Two females",
  us: "You all and I",
  theyni: "Them and I",
  yall: "All of you",
  ms: "Them (males)",
  fs: "Them (females)",
};

export const REF_VERB_MAP: Record<Pronoun, string> = {
  i: "am",
  u: "are",
  m: "is",
  f: "is",
  it: "is",
  uni: "are",
  soni: "are",
  u2: "are",
  "2m": "are",
  "2f": "are",
  us: "are",
  theyni: "are",
  yall: "are",
  ms: "are",
  fs: "are",
};

export const isPlural = (pronoun: Pronoun) =>
  ["us", "theyni", "yall", "ms", "fs"].includes(pronoun);

export const arrayify = (value: unknown) =>
  Array.isArray(value) ? value : [value];
