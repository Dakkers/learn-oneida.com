import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/younger_siblings",
    translation: "{{pronounPossessive}} younger siblings",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["khe"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["she"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["shako"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["utate"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["yethi"], "ʔkʌʔokúha̲"],
      },
      {
        breakdown: [["yetshi"], "ʔkʌʔokúha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
