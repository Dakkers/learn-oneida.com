import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/daughter",
    translation: "{{pronounPossessive}} daughter",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khe"], "yʌ́ha̲"],
      },
      {
        breakdown: [["she"], "yʌ́ha̲"],
      },
      {
        breakdown: [["shako"], "yʌ́ha̲"],
      },
      {
        breakdown: [["utat"], "yʌ́ha̲"],
      },
      {
        breakdown: [["yethi"], "yʌ́ha̲"],
      },
      {
        breakdown: [["yetshi"], "yʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
