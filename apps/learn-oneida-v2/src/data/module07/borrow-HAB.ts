import { createParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} borrow something",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "borrow")} things`,
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["s"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["l"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["yu"], "tʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["w"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["ty"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["yaky"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["tsy"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["y"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["ky"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["tw"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["yakw"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["sw"], "atʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["lu"], "tʌníha", ["s", "HAB"]],
      },
      {
        breakdown: [["ku"], "tʌníha", ["s", "HAB"]],
      },
    ],
    whispered: false,
  },
  pronouns,
);
