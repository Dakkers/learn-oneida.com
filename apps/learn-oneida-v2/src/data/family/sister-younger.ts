import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/younger_sister",
    translation: "{{pronounPossessive}} younger sister",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khe"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["she"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["shako"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["utate"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["yethi"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["yetshi"], "ʔkʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
