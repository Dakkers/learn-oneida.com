import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/grandfather",
    translation: "{{pronounPossessive}} grandfather",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["lak"], "hsótha̲"],
      },
      {
        breakdown: [["ya"], "hsótha̲"],
      },
      {
        breakdown: [["lo"], "hsótha̲"],
      },
      {
        breakdown: [["ako", "PO"], "hsótha̲"],
      },
      {
        breakdown: [["shukwa"], "hsótha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etswa"], "hsótha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
