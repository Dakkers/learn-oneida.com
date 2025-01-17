import { pluralizeVerbCommon } from "@/utils/translation";
import { createInteractiveParadigmData } from "@/utils/paradigm";

const data = createInteractiveParadigmData({
  translation: "{{agent}} forbid {{subject}} to do it",
  translationFn: (pronoun) =>
    `{{agent}} ${pluralizeVerbCommon(pronoun, "forbid")} {{subject}} to do it`,
  type: "PP",
  phrases: [
    {
      breakdown: [["kuy"], "ahlístaʔ"],
    },
    {
      breakdown: [["liy"], "ahlístaʔ"],
    },
    {
      breakdown: [["khey"], "ahlístaʔ"],
    },
    {
      breakdown: [["skw"], "ahlístaʔ"],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "ahlístaʔ"],
    },
    {
      breakdown: [["shey"], "ahlístaʔ"],
    },
    {
      breakdown: [["lakw"], "ahlístaʔ"],
    },
    {
      breakdown: [["h", "RPL"], ["y"], "ahlístaʔ"],
    },
    {
      breakdown: [["lo"], "hlístaʔ"],
    },
    {
      breakdown: [["shako"], "hlístaʔ"],
    },
    {
      breakdown: [["yukw"], "ahlístaʔ"],
    },
    {
      breakdown: [["yes"], "ahlístaʔ"],
    },
    {
      breakdown: [["luw"], "ahlístaʔ"],
    },
    {
      breakdown: [["yutat"], "ahlístaʔ"],
    },
  ],
});

export default data;
