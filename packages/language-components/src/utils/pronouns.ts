import _ from "lodash";

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

export const nonSingularPronouns: Pronoun[] = [
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
} as const;

export const PRONOUN_MAP_EN: Record<Pronoun, string | string[]> = {
  i: "I",
  u: "You",
  m: "He",
  f: "She",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": ["2 males", "1 male + 1 female"],
  "2f": "2 females",
  us: "You all and I",
  theyni: "They and I",
  yall: "All of you",
  ms: ["They (males)", "They (males + females)"],
  fs: "They (females)",
} as const;

export const PRONOUN_MAP_EN_OBJECTIVE: Record<Pronoun, string | string[]> = {
  i: "me",
  u: "you",
  m: "him",
  f: "her",
  it: "it",
  uni: "you and I",
  soni: "someone and I",
  u2: "you two",
  "2m": ["2 males", "1 male + 1 female"],
  "2f": "2 females",
  us: "you all and I",
  theyni: "them and I",
  yall: "all of you",
  ms: ["them (males)", "them (males + females)"],
  fs: "them (females)",
} as const;

export const PRONOUN_MAP_EN_POSSESSIVE: Record<Pronoun, string | string[]> = {
  i: "My",
  u: "Your",
  m: "His",
  f: "Her",
  it: "Its",
  uni: "Our (you and I)",
  soni: "Our (someone and I)",
  u2: "You two's",
  "2m": ["Their (2 males)", "Their (1 male + 1 female)"],
  "2f": "Their (2 females)",
  us: "All of ours's",
  theyni: "Ours (they and I)",
  yall: "All of yours's",
  ms: ["Their (males)", "Their (males + females)"],
  fs: "Their (females)",
} as const;

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
} as const;

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
} as const;

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
} as const;

export const REFLEXIVE_MAP: Record<Pronoun, string> = {
  i: "myself",
  u: "yourself",
  m: "himself",
  f: "herself",
  it: "itself",
  uni: "ourselves",
  soni: "ourselves",
  u2: "yourselves",
  "2m": "themselves",
  "2f": "themselves",
  us: "ourselves",
  theyni: "ourselves",
  yall: "yourselves",
  ms: "themselves",
  fs: "themselves",
} as const;

export const pronounsPurple = [
  "i_u", // ku
  "i_m", // li
  "i_f", // khe
  "u_i", // sk
  "u_m", // hetsh
  "u_f", // she
  "m_i", // lak
  "m_u", // ya
  "m_m", // lo
  "m_f", // shako
  "f_i", // yuk
  "f_u", // yesa
  "f_m", // luwa
  "f_f", // yutat
] as const;

export const pronounsPurpleExtended = [
  "i_u", // ku
  "i_m", // li
  "i_f", // khe
  "i_u2", // kni
  "i_yall", // kwa
  "u_i", // sk
  "u_m", // hetsh
  "u_f", // she
  "u_soni", // skni
  "u_theyni", // skwa
  "m_i", // lak
  "m_u", // ya
  "m_m", // lo
  "m_f", // shako
  "m_uni", // shukni
  "m_soni", // shukni
  "m_u2", // hetsni
  "m_us", // shukwa
  "m_theyni", // shukwa
  "m_yall", // hetswa
  "f_i", // yuk
  "f_u", // yesa
  "f_m", // luwa
  "f_f", // yutat
  "f_uni", // yukhi
  "f_soni", // yukhi
  "f_u2", // yetshi
  "f_us", // yukhi
  "f_theyni", // yukhi
  "f_yall", // yetshi
  "uni_m", // hetni
  "uni_f", // yethi
  "soni_u", // kni
  "soni_m", // shakni
  "soni_f", // yakhi
  "soni_u2", // kni
  "soni_yall", // kwa
  "u2_i", // skni
  "u2_m", // hetsni
  "u2_f", // yetshi
  "u2_theyni", // skwa
  "us_m", // hethwa
  "us_f", // yethi
  "theyni_u", // kwa
  "theyni_m", // shakwa
  "theyni_f", // yakhi
  "theyni_u2", // kwa
  "theyni_yall", // kwa
  "yall_i", // skwa
  "yall_m", // hetswa
  "yall_f", // yetshi
  "yall_soni", // skwa
  "yall_theyni", // skwa
  "ms_them", // shakoti
  "fs_them", // yakoti
  "they_ms", // luwati
  "they_fs", // kuwati
  "they_it", // kuwa
  "cmd_u_i", // tak
  "cmd_yall_i", // takwa
  "cmd_u2_i", // takni
] as const;

export type PronounPurple = (typeof pronounsPurple)[number];

export type PronounPurpleExtended = (typeof pronounsPurpleExtended)[number];

function slicePurplePronoun(val: string) {
  return val
    .replace("cmd_", "")
    .split("_")
    .map((word, i) =>
      i === 0
        ? { ...PRONOUN_MAP_EN, they: "They" }[word]
        : { ...PRONOUN_MAP_EN_OBJECTIVE, they: "Them" }[word],
    );
}

export const INTERACTIVE_AGENT_MAP = Object.fromEntries(
  pronounsPurpleExtended.map((p: PronounPurpleExtended) => [
    p,
    slicePurplePronoun(p)[0],
  ]),
) as Record<PronounPurpleExtended, string>;

export const INTERACTIVE_SUBJECT_MAP = Object.fromEntries(
  pronounsPurpleExtended.map((p: PronounPurpleExtended) => [
    p,
    slicePurplePronoun(p)[1],
  ]),
) as Record<PronounPurpleExtended, string>;

const purplePairs = Object.fromEntries(
  pronounsPurpleExtended.map((key) => [
    key,
    key
      .replace("cmd_", "")
      .split("_")
      .map((word, i) =>
        i === 0
          ? { ...PRONOUN_MAP_EN, they: "They" }[word]
          : { ...PRONOUN_MAP_EN_OBJECTIVE, they: "Them" }[word],
      )
      .join(" → "),
  ]),
);

export const PURPLES_MAP = _.pick(purplePairs, pronounsPurple) as Record<
  PronounPurple,
  string
>;

export const PURPLES_MAP_FULL = purplePairs as Record<
  PronounPurpleExtended,
  string
>;

export const isPlural = (pronoun: Pronoun) => pluralPronouns.includes(pronoun);
