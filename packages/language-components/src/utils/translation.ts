import { arrayify } from "./misc";
import {
  INTERACTIVE_AGENT_MAP,
  INTERACTIVE_SUBJECT_MAP,
  NEGATION_MAP,
  type Pronoun,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PRONOUN_MAP_EN_POSSESSIVE,
  PRONOUN_MAP_STANDALONE,
  type PronounPurpleExtended,
  REF_VERB_MAP,
  REF_VERB_PASTTENSE_ALT_MAP,
  REF_VERB_PASTTENSE_MAP,
  REFLEXIVE_MAP,
} from "./pronouns";

export function formatTranslation(
  text: string,
  params: Record<string, string>,
) {
  let result = text;
  for (const key in params) {
    result = result.replace(new RegExp(`{{${key}}}`, "g"), params[key]);
  }
  return result;
}

export function translatePhraseInteractive(
  paradigmData: {
    translation: string;
    translationFn?: (pronoun: PronounPurpleExtended) => string;
  },
  pronoun: PronounPurpleExtended,
) {
  // TODO: use a different map when I map the purples to the same thing
  // e.g. `kwa` and `skwa` are both used for multiple meanings
  const arr = arrayify([pronoun]);
  return arr.map((p) => {
    const content =
      paradigmData.translationFn?.(pronoun) ?? paradigmData.translation;

    const [agent] = p.replaceAll("cmd_", "").split("_");

    return formatTranslation(content, {
      agent: INTERACTIVE_AGENT_MAP[p],
      negation: NEGATION_MAP[agent as Pronoun],
      note: "",
      pronounObjective: arrayify(PRONOUN_MAP_EN_OBJECTIVE[agent as Pronoun])[0],
      pronounPossessive: arrayify(
        PRONOUN_MAP_EN_POSSESSIVE[agent as Pronoun],
      )[0],
      refVerb: REF_VERB_MAP[agent as Pronoun],
      subject: INTERACTIVE_SUBJECT_MAP[p],
    });
  });
}

export function translatePhraseV2(
  paradigmData: {
    translation: string;
    translationFn?: (pronoun: Pronoun) => string;
  },
  pronoun: Pronoun,
  legacyTranslationFn?: (arg: { pronoun: Pronoun }) => void,
) {
  const arr = arrayify(PRONOUN_MAP_EN[pronoun]);
  return arr.map((_, i) => {
    const content =
      paradigmData.translationFn?.(pronoun) ?? paradigmData.translation;
    return formatTranslation(content, {
      negation: NEGATION_MAP[pronoun],
      note: "",
      pronoun: arrayify(PRONOUN_MAP_EN[pronoun])[i],
      pronounObjective: arrayify(PRONOUN_MAP_EN_OBJECTIVE[pronoun])[i],
      pronounPossessive: arrayify(PRONOUN_MAP_EN_POSSESSIVE[pronoun])[i],
      reflexive: REFLEXIVE_MAP[pronoun],
      refVerb: REF_VERB_MAP[pronoun],
      refVerbPast: REF_VERB_PASTTENSE_MAP[pronoun],
      refVerbPastAlt: REF_VERB_PASTTENSE_ALT_MAP[pronoun],
      standalone: PRONOUN_MAP_STANDALONE[pronoun],
      ...(legacyTranslationFn ? legacyTranslationFn({ pronoun }) : {}),
    });
  });
}

export function translatePhraseGeneric(
  paradigmData: {
    categories?: Array<"kinship">;
    translation: string;
    translationFn?: (pronoun: Pronoun) => string;
    type: "PI" | "PO" | "PP" | "PS";
  },
  pronoun: Pronoun,
  legacyTranslationFn?: (arg: { pronoun: Pronoun }) => void,
) {
  return paradigmData.type === "PI" &&
    !paradigmData.categories?.includes("kinship")
    ? translatePhraseInteractive(
        // @ts-expect-error ParadigmData doesn't support purple correctly :(
        paradigmData,
        pronoun,
      )
    : translatePhraseV2(paradigmData, pronoun, legacyTranslationFn);
}

export function translatePhrase(
  phrase: string,
  pronoun: Pronoun,
  translationFn?: (arg: { pronoun: Pronoun }) => void,
) {
  return formatTranslation(phrase, {
    note: "",
    pronoun: arrayify(PRONOUN_MAP_EN[pronoun])[0],
    pronounObjective: arrayify(PRONOUN_MAP_EN_OBJECTIVE[pronoun])[0],
    pronounPossessive: arrayify(PRONOUN_MAP_EN_POSSESSIVE[pronoun])[0],
    reflexive: REFLEXIVE_MAP[pronoun],
    refVerb: REF_VERB_MAP[pronoun],
    refVerbPast: REF_VERB_PASTTENSE_MAP[pronoun],
    refVerbPastAlt: REF_VERB_PASTTENSE_ALT_MAP[pronoun],
    ...(translationFn ? translationFn({ pronoun }) : {}),
  });
}
