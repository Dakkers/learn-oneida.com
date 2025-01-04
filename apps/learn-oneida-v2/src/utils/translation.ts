import type { Pronoun } from "@ukwehuwehneke/language-components";
import pluralize from "pluralize";

export function pluralizeVerbCommon(pronoun: Pronoun, verb: string) {
  return ["m", "f", "it"].includes(pronoun) ? pluralize(verb) : verb;
}
