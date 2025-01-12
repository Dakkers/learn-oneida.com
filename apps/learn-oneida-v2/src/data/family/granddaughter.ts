import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/granddaughter",
    translation: "{{pronounPossessive}} granddaughter",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khey"], "atléha̲"],
      },
      {
        breakdown: [["shey"], "atléha̲"],
      },
      {
        breakdown: [["shako"], "tléha̲"],
      },
      {
        breakdown: [["utat"], "atléha̲"],
      },
      {
        breakdown: [["yethiy"], "atléha̲"],
      },
      {
        breakdown: [["yetshiy"], "atléha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
