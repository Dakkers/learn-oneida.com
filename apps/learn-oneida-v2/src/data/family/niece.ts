import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/niece",
    translation: "{{pronounPossessive}} niece",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khey"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["shey"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["shakoy"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["utaty"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["yethiy"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["yetshiy"], "uhwatʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
