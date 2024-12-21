export type PronounSingular = "i" | "u" | "m" | "f" | "it";
export type PronounDualic = "uni" | "soni" | "u2" | "2m" | "2f";
export type PronounPlural = "us" | "theyni" | "yall" | "ms" | "fs";
export type Pronoun = PronounSingular | PronounDualic | PronounPlural;

export const singlePronouns: Pronoun[] = ["i", "u", "m", "f", "it"];
export const dualicPronouns: Pronoun[] = ["uni", "soni", "u2", "2m", "2f"];
export const pluralPronouns: Pronoun[] = ["us", "theyni", "yall", "ms", "fs"];

export const pronouns: Pronoun[] = [
  ...singlePronouns,
  ...dualicPronouns,
  ...pluralPronouns,
];

/** These are pronouns for blue pronominals. Because there are duplicates in the blue set,
 * we this is a smaller set than the full pronouns list. */
export const pronounsBlue: Pronoun[] = [
  ...singlePronouns,
  "uni",
  "u2",
  "2m",
  "2f",
  "us",
  "yall",
];

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
  us: "twakwekú",
  theyni: "yakwakwekú",
  yall: "swakwekú",
  ms: "latikwekú",
  fs: "kutikwekú",
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
  i_u2: "I → you two",
  i_yall: "I → All of you",

  you_me: "You → me",
  you_him: "You → him",
  you_her: "You → her",
  you_theyni: "You → them & I",

  he_me: "He → me",
  he_you: "He → you",
  he_him: "He → him",
  he_her: "He → her",
  he_u2: "He → you two",

  she_me: "She → me",
  she_you: "She → you",
  she_him: "She → him",
  she_her: "She → her",

  uni_him: "You & I → him",

  u2_me: "You two → me",
  u2_him: "You two → him",

  us_her: "All of us → her",
  us_him: "All of us → him",

  theyni_you: "They & I → you",

  yall_me: "All of you → me",
  yall_her: "All of you → her",

  cmd_you_me: "You → me (command)",
  cmd_yall_me: "All of you → me (command)",
  cmd_u2_me: "You two → me (command)",
};

export const isPlural = (pronoun: Pronoun) => pluralPronouns.includes(pronoun);
