import { pluralizeVerbCommon } from "@/utils/translation";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData({
  // audioFolder: "module01/know-negated",
  translation: "{{pronoun}} {{negation}} know",
  type: "PO",
  phrases: [
    {
      breakdown: ["yáh teʔ", ["wak"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["s"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh te", ["ho"], "núhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yako"], "núhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yo"], "núhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yuky"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yuky"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["tsy"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh te", ["hon"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yon"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yukw"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yukw"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["sw"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh te", ["hon"], "anúhteʔ"],
    },
    {
      breakdown: ["yáh teʔ", ["yon"], "anúhteʔ"],
    },
  ],
});

export default data;
