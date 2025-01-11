import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/cousin",
    translation: "{{pronoun}} are cousins",
    type: "PLB",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["uky"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["tsy"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["lon", "PB"], "alá·se̲ʔ"],
      },
      {
        breakdown: [["yon", "PB"], "alá·se̲ʔ"],
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
