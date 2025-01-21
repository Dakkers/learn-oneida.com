import { pluralizeVerbCommon } from "@/utils/translation";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData({
  // audioFolder: "module01/know-negated",
  translation: "{{pronoun}} {{negation}} know",
  type: "PO",
  phrases: [
    {
      breakdown: ["yáh teʔ", ["wak"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["s"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh te", ["ho"], "núhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yako"], "núhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yo"], "núhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yuky"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yuky"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["tsy"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh te", ["hon"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yon"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yukw"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yukw"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["sw"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh te", ["hon"], "anúhte̲ʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yon"], "anúhte̲ʔ"],
    },
  ],
});

export default data;
