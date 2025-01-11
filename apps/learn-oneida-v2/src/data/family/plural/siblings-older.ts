import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/older_siblings",
    translation: "{{pronounPossessive}} older siblings",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuke"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["yesa"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["luwa"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["shakoti"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["yukhi"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["yetshi"], "ʔkʌʔokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
