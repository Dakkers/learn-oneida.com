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
      breakdown: [["kuy"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["liy"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["khey"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["sk"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["shey"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["lakw"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["h", "RPL"], ["yay"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["law"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["shakaw"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["yukw"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["yes"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["luw"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
    {
      breakdown: [["yutat"], "ehya·lá", ["·seʔ, 'HAB"]],
    },
  ],
});

export default data;
