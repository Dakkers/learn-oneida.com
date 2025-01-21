import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/older_sister",
    translation: "{{pronounPossessive}} older sister",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuke"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["yesa"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["luwa"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["ako", "PO"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["yukhi"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["yetshi"], "ʔkʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
