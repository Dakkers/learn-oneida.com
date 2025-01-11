import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/grandparents",
    translation: "{{pronounPossessive}} grandparents",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuk"], "hsótha̲"],
      },
      {
        breakdown: [["yesa"], "hsótha̲"],
      },
      {
        breakdown: [["luwa"], "hsótha̲"],
      },
      {
        breakdown: [["shakoti"], "hsótha̲"],
      },
      {
        breakdown: [["yukhi"], "hsothokúha̲"],
      },
      {
        breakdown: [["yetshi"], "hsothokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
