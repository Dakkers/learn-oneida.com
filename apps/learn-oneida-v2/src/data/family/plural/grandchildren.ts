import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/grandchildren",
    translation: "{{pronounPossessive}} grandchildren",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khey"], "atleʔokúha̲"],
      },
      {
        breakdown: [["shey"], "atleʔokúha̲"],
      },
      {
        breakdown: [["shako"], "tleʔokúha̲"],
      },
      {
        breakdown: [["luwʌn"], "atleʔokúha̲"],
      },
      {
        breakdown: [["yethiy"], "atleʔokúha̲"],
      },
      {
        breakdown: [["yetshiy"], "atleʔokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
