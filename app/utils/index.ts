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

/** These are pronouns for blue pronominals. Because there are duplicates in the blue set,
 * we this is a smaller set than the full pronouns list. */
export const pronounsBlue = [
  ...singlePronouns,
  "uni",
  "u2",
  "2m",
  "2f",
  "us",
  "yall",
];

export type Pronoun = (typeof pronouns)[number];

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

export const PRONOUN_MAP_EN_POSSESSIVE: Record<Pronoun, string> = {
  i: "My",
  u: "Your",
  m: "His",
  f: "Her",
  it: "Its",
  uni: "Our (you and I)",
  soni: "Our (someone and I)",
  u2: "All your",
  "2m": "Their (males, mix)",
  "2f": "Their (females)",
  us: "All our",
  theyni: "All our (they and I)",
  yall: "All of yours",
  ms: "All (males) their",
  fs: "All (females) their",
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

export const REF_VERB_PASTTENSE_MAP: Record<Pronoun, string> = {
  i: "have",
  u: "have",
  m: "has",
  f: "has",
  it: "has",
  uni: "have",
  soni: "have",
  u2: "have",
  "2m": "have",
  "2f": "have",
  us: "have",
  theyni: "have",
  yall: "have",
  ms: "have",
  fs: "have",
};

export const REF_VERB_PASTTENSE_ALT_MAP: Record<Pronoun, string> = {
  i: "was",
  u: "were",
  m: "was",
  f: "was",
  it: "was",
  uni: "were",
  soni: "were",
  u2: "were",
  "2m": "were",
  "2f": "were",
  us: "were",
  theyni: "were",
  yall: "were",
  ms: "were",
  fs: "were",
};

export const PURPLES_MAP = {
  i_you: "I → you",
  i_him: "I → him",
  i_her: "I → her",
  you_me: "You → me",
  you_him: "You → him",
  you_her: "You → her",
  he_me: "He → me",
  he_you: "He → you",
  he_him: "He → him",
  he_her: "He → her",
  she_me: "She → me",
  she_you: "She → you",
  she_him: "She → him",
  she_her: "She → her",
};

export const isPlural = (pronoun: Pronoun) => pluralPronouns.includes(pronoun);

export const arrayify = (value: unknown) =>
  Array.isArray(value) ? value : [value];
