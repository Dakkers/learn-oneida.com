import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/great_granddaughter",
    translation: "{{pronounPossessive}} great-granddaughter",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khey"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["shey"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["shako"], "tleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["utat"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["yethiy"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["yetshiy"], "atleʔslʌ́·tuhe̲ʔ"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
