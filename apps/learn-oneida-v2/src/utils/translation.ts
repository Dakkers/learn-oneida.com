import pluralize from "pluralize";

export function pluralizeVerbCommon(pronoun: string, verb: string) {
  return ["m", "f", "it"].includes(pronoun) ||
    pronoun.startsWith("m_") ||
    pronoun.startsWith("f_")
    ? pluralize(verb)
    : verb;
}
