"use client";
import { pluralizeVerbCommon } from "@/utils/translation";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData({
  audioFolder: "module01/anuhte",
  translation: "{{pronoun}} {{verb}}",
  translationFn: (pronoun) =>
    `{{pronoun}} ${pluralizeVerbCommon(pronoun, "know")}`,
  type: "PO",
  phrases: [
    {
      breakdown: [["wak"], "anúhteʔ"],
    },
    {
      breakdown: [["s"], "anúhteʔ"],
    },
    {
      breakdown: [["lo"], "núhteʔ"],
    },
    {
      breakdown: [["yako"], "núhteʔ"],
    },
    {
      breakdown: [["yo"], "núhteʔ"],
    },
    {
      breakdown: [["yuky"], "anúhteʔ"],
    },
    {
      breakdown: [["yuky"], "anúhteʔ"],
    },
    {
      breakdown: [["tsy"], "anúhteʔ"],
    },
    {
      breakdown: [["lon"], "anúhteʔ"],
    },
    {
      breakdown: [["yon"], "anúhteʔ"],
    },
    {
      breakdown: [["yukw"], "anúhteʔ"],
    },
    {
      breakdown: [["yukw"], "anúhteʔ"],
    },
    {
      breakdown: [["sw"], "anúhteʔ"],
    },
    {
      breakdown: [["lon"], "anúhteʔ"],
    },
    {
      breakdown: [["yon"], "anúhteʔ"],
    },
  ],
});

export default data;
