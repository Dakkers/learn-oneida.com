"use client";
import { createInteractiveParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";

const data = createInteractiveParadigmData({
  translation: "{{agent}} remembers {{subject}}",
  translationFn: (pronoun) =>
    `{{agent}} ${pluralizeVerbCommon(pronoun, "remember")} {{subject}}`,
  type: "PI",
  phrases: [
    {
      breakdown: [["kuy"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["liy"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["khey"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["sk"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["shey"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["lakw"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["h", "RPL"], ["yay"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["law"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["shakaw"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["yukw"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["yes"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["luw"], "ehya·lá·seʔ"],
    },
    {
      breakdown: [["yutat"], "ehya·lá·seʔ"],
    },
  ],
});

export default data;
