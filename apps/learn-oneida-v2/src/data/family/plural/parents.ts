import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/parents",
    translation: "{{pronounPossessive}} parents",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuk"], "yʌ́ha̲"],
      },
      {
        breakdown: [["yesa"], "yʌ́ha̲"],
      },
      {
        breakdown: [["luwa"], "yʌ́ha̲"],
      },
      {
        breakdown: [["shakoti"], "yʌ́ha̲"],
      },
      {
        breakdown: [["yukhi"], "yʌʔokúha̲"],
      },
      {
        breakdown: [["yetshi"], "yʌʔokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
