import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/grandmother",
    translation: "{{pronounPossessive}} grandmother",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["ak"], "hsótha̲"],
      },
      {
        breakdown: [["sa"], "hsótha̲"],
      },
      {
        breakdown: [["lao"], "hsótha̲"],
      },
      {
        breakdown: [["ako"], "hsótha̲"],
      },
      {
        breakdown: [["yukhi", "PI"], "hsótha̲"],
      },
      {
        breakdown: [["swa"], "hsótha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
