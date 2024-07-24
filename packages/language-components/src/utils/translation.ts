import {
  Pronoun,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PRONOUN_MAP_EN_POSSESSIVE,
  REF_VERB_MAP,
  REF_VERB_PASTTENSE_ALT_MAP,
  REF_VERB_PASTTENSE_MAP,
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

export function translatePhrase(
  phrase: string,
  pronoun: Pronoun,
  translationFn?: (arg: { pronoun: Pronoun }) => void,
) {
  return formatTranslation(phrase, {
    pronoun: PRONOUN_MAP_EN[pronoun],
    pronounObjective: PRONOUN_MAP_EN_OBJECTIVE[pronoun],
    pronounPossessive: PRONOUN_MAP_EN_POSSESSIVE[pronoun],
    refVerb: REF_VERB_MAP[pronoun],
    refVerbPast: REF_VERB_PASTTENSE_MAP[pronoun],
    refVerbPastAlt: REF_VERB_PASTTENSE_ALT_MAP[pronoun],
    ...(translationFn ? translationFn({ pronoun }) : {}),
  });
}
