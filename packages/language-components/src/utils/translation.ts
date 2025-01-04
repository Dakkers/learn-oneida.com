import { arrayify } from "./misc";
import {
  type Pronoun,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PRONOUN_MAP_EN_POSSESSIVE,
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
      note: "",
      pronoun: arrayify(PRONOUN_MAP_EN[pronoun])[i],
      pronounObjective: arrayify(PRONOUN_MAP_EN_OBJECTIVE[pronoun])[i],
      pronounPossessive: arrayify(PRONOUN_MAP_EN_POSSESSIVE[pronoun])[i],
      reflexive: REFLEXIVE_MAP[pronoun],
      refVerb: REF_VERB_MAP[pronoun],
      refVerbPast: REF_VERB_PASTTENSE_MAP[pronoun],
      refVerbPastAlt: REF_VERB_PASTTENSE_ALT_MAP[pronoun],
      ...(legacyTranslationFn ? legacyTranslationFn({ pronoun }) : {}),
    });
  });
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
