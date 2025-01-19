import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/friend",
    translation: "{{pronoun}} are friends",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["uky"], "atʌ·ló̲"],
      },
      {
        breakdown: [["tsy"], "atʌ·ló̲"],
      },
      {
        breakdown: [["lon", "PO"], "atʌ·ló̲"],
      },
      {
        breakdown: [["yon", "PO"], "atʌ·ló̲"],
      },
      {
        breakdown: [["ukw"], "atʌ·ló̲"],
      },
      {
        breakdown: [["sw"], "atʌ·ló̲"],
      },
    ],
  },
  ["soni", "u2", "2m", "2f", "us", "yall"],
);

export default data;
