import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/father",
    translation: "{{pronounPossessive}} father",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["lake"], "ʔníha̲"],
      },
      {
        breakdown: [["ya"], "ʔníha̲"],
      },
      {
        breakdown: [["lo"], "ʔníha̲"],
      },
      {
        breakdown: [["ako", "PB"], "ʔníha̲"],
      },
      {
        breakdown: [["shukwa"], "ʔníha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etswa"], "ʔníha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
