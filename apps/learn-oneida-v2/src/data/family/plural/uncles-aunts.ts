import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/aunts_and_uncles",
    translation: "{{pronounPossessive}} aunts & uncles",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuk"], "nulhaʔshúha̲"],
      },
      {
        breakdown: [["yesa"], "nulhaʔshúha̲"],
      },
      {
        breakdown: [["luwa"], "nulhaʔshúha̲"],
      },
      {
        breakdown: [["shakoti"], "nulhaʔshúha̲"],
      },
      {
        breakdown: [["yukhi"], "nulhaʔshúha̲"],
      },
      {
        breakdown: [["yetshi"], "nulhaʔshúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
