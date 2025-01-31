import { createParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";

export default createParadigmData({
  translation: "{{pronoun}} get things",
  translationFn: (pronoun) =>
    `{{pronoun}} ${pluralizeVerbCommon(pronoun, "get")} things`,
  type: "PS",
  phrases: [
    {
      breakdown: [["k"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["s"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["la"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["ye"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["ka"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["tni"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["yakni"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["sni"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["h", "RPL"], ["ni"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["kni"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["twa"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["yakwa"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["swa"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["lati"], "kó·n", ["ehseʔ", "HAB"]],
    },
    {
      breakdown: [["kuti"], "kó·n", ["ehseʔ", "HAB"]],
    },
  ],
});
