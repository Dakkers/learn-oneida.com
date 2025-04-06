"use client";
import { pluralizeVerbCommon } from "@/utils/translation";
import { createInteractiveParadigmData } from "@/utils/paradigm";

const data = createInteractiveParadigmData({
  translation: "{{agent}} forbid {{subject}} to do it",
  translationFn: (pronoun) =>
    `{{agent}} ${pluralizeVerbCommon(pronoun, "forbid")} {{subject}} to do it`,
  type: "PI",
  phrases: [
    {
      breakdown: [["kuy"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["liy"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["khey"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["skw"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["shey"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["lakw"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["h", "RPL"], ["y"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["lo"], "hlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["shako"], "hlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["yukw"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["yes"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["luw"], "ahlíst", ["aʔ", "HAB"]],
    },
    {
      breakdown: [["yutat"], "ahlíst", ["aʔ", "HAB"]],
    },
  ],
});

export default data;
