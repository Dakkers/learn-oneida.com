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
      breakdown: [["wak"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["s"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["lo"], "núhte̲ʔ"],
    },
    {
      breakdown: [["yako"], "núhte̲ʔ"],
    },
    {
      breakdown: [["yo"], "núhte̲ʔ"],
    },
    {
      breakdown: [["yuky"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["yuky"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["tsy"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["lon"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["yon"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["yukw"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["yukw"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["sw"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["lon"], "anúhte̲ʔ"],
    },
    {
      breakdown: [["yon"], "anúhte̲ʔ"],
    },
  ],
});

export default data;
