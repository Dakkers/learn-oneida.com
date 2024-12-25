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
  i: "Me",
  u: "You",
  m: "Him",
  f: "Her",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": ["2 males", "1 male + 1 female"],
  "2f": "2 females",
  us: "You all and I",
  theyni: "Them and I",
  yall: "All of you",
  ms: ["Them (males)", "Them (males + females)"],
  fs: "Them (females)",
} as const;

export const PRONOUN_MAP_EN_POSSESSIVE: Record<Pronoun, string | string[]> = {
  i: "My",
  u: "Your",
  m: "His",
  f: "Her",
  it: "Its",
  uni: "Our (you and I)",
  soni: "Our (someone and I)",
  u2: "All your",
  "2m": ["Their (2 males)", "Their (1 male + 1 female)"],
  "2f": "Their (2 females)",
  us: "All our",
  theyni: "All our (they and I)",
  yall: "All of yours'",
  ms: ["All (males) their", "All (males + females) their"],
  fs: "All (females) their",
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

const purplePairs = pronounsPurple.map((key) => [
  key,
  key
    .split("_")
    .map((word, i) =>
      i === 0
        ? {
            i: "I",
            u: "You",
            m: "He",
            f: "She",
          }[word]
        : {
            i: "me",
            u: "you",
            m: "him",
            f: "her",
          }[word],
    )
    .join(" → "),
]);

export const PURPLES_MAP = Object.fromEntries(purplePairs);

const purplesPairsFull = [
  ...purplePairs,
  ["i_u2", "I → you two"], // kni
  ["i_yall", "I → All of you"], // kwa

  ["u_soni", "You → someone & I"], // skni
  ["u_theyni", "You → them & I"], // skwa

  ["m_uni", "He → you & I"], // shukni
  ["m_soni", "He → someone & I"], // shukni
  ["m_u2", "He → you two"], // hetsni
  ["m_us", "He → all of us"], // shukwa
  ["m_theyni", "He → they & I"], // shukwa
  ["m_yall", "He → all of you"], // hetswa

  ["f_uni", "She → you & I"], // yukhi
  ["f_soni", "She → someone & I"], // yukhi
  ["f_u2", "She → you two"], // yetshi
  ["f_us", "She → all of us"], // yukhi
  ["f_theyni", "She → they & I"], // yukhi
  ["f_yall", "She → all of you"], // yetshi

  ["uni_m", "You & I → him"], // hetni
  ["uni_f", "You & I → her"], // yethi

  ["soni_u", "Someone & I → you"], // kni
  ["soni_m", "Someone & I → him"], // shakni
  ["soni_f", "Someone & I → her"], // yakhi
  ["soni_u2", "Someone & I → you two"], // kni
  ["soni_yall", "Someone & I → all of you"], // kwa

  ["u2_i", "You two → me"], // skni
  ["u2_m", "You two → him"], // hetsni
  ["u2_f", "You two → her"], // yetshi
  ["u2_theyni", "You two → them and I"], // skwa

  ["us_m", "All of us → him"], // hethwa
  ["us_f", "All of us → her"], // yethi

  ["theyni_u", "They & I → you"], // kwa
  ["theyni_m", "They & I → him"], // shakwa
  ["theyni_f", "They & I → her"], // yakhi
  ["theyni_u2", "They & I → you two"], // kwa
  ["theyni_yall", "They & I → all of you"], // kwa

  ["yall_i", "All of you → me"], // skwa
  ["yall_m", "All of you → him"], // hetswa
  ["yall_f", "All of you → her"], // yetshi
  ["yall_soni", "All of you → someone & I"], // skwa
  ["yall_theyni", "All of you → they & I"], // skwa

  ["ms_them", "They (males / mix) → them"], // shakoti
  ["fs_them", "They (females) → them"], // yakoti

  ["they_ms", "They → them (males / mix)"], // luwati
  ["they_fs", "They → them (females)"], // kuwati
  ["they_it", "They → it"], // kuwa

  ["cmd_u_i", "You → me (command)"], // tak
  ["cmd_yall_i", "All of you → me (command)"], // takwa
  ["cmd_u2_i", "You two → me (command)"], // takni
] as const;

export const PURPLES_MAP_FULL = {
  ...PURPLES_MAP,
  ...Object.fromEntries(purplesPairsFull),
};

export const pronounsPurpleFull = purplesPairsFull.map((pair) => pair[0]);

export const isPlural = (pronoun: Pronoun) => pluralPronouns.includes(pronoun);
