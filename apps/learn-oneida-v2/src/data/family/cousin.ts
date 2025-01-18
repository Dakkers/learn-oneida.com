import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/cousin",
    translation: "{{pronoun}} are cousins",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["uky"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["tsy"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["lon", "PO"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["yon", "PO"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["ukw"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["sw"], "alá·se̲ʔ"],
      },
    ],
  },
  ["soni", "u2", "2m", "2f", "us", "yall"],
);

export default data;
