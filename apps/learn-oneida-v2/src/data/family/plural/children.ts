import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/children",
    translation: "{{pronounPossessive}} children",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khe"], "yoʔokúha̲"],
      },
      {
        breakdown: [["she"], "yoʔokúha̲"],
      },
      {
        breakdown: [["shako"], "yʌʔokúha̲"],
      },
      {
        breakdown: [["luwati"], "yʌʔokúha̲"],
      },
      {
        breakdown: [["yethi"], "yʌʔokúha̲"],
      },
      {
        breakdown: [["yetshi"], "yʌʔokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
