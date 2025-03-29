import { createParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerb}} drinking",
    // translationFn: (pronoun) =>
    //   `{{pronoun}} ${pluralizeVerbCommon(pronoun, "drink")}`,
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["s"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["la"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["ye"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["ka"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["tni"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["yakni"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["sni"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["ni"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["kni"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["twa"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["yakwa"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["swa"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["lati"], "hnekíl", ["haʔ", "HAB"]],
      },
      {
        breakdown: [["kuti"], "hnekíl", ["haʔ", "HAB"]],
      },
    ],
  },
  pronouns,
);
