import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/niblings",
    translation: "{{pronounPossessive}} nieces & nephews",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khey"], "uhwatʌʔokuha̲"],
      },
      {
        breakdown: [["shey"], "uhwatʌʔokuha̲"],
      },
      {
        breakdown: [["shakon"], "uhwatʌʔokuha̲"],
      },
      {
        breakdown: [["utaty"], "uhwatʌʔokuha̲"],
      },
      {
        breakdown: [["yethiy"], "uhwatʌʔokuha̲"],
      },
      {
        breakdown: [["yetshiy"], "uhwatʌʔokuha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
