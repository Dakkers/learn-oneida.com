import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/friend",
    translation: "{{pronoun}} are friends",
    type: "PLB",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["uky"], "atʌ·ló̲"],
      },
      {
        breakdown: [["tsy"], "atʌ·ló̲"],
      },
      {
        breakdown: [["lon", "PB"], "atʌ·ló̲"],
      },
      {
        breakdown: [["yon", "PB"], "atʌ·ló̲"],
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
