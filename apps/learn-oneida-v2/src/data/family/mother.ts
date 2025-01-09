import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/mother",
    translation: "{{pronounPossessive}} mother",
    type: "PB",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["ak"], "nulhá·"],
      },
      {
        breakdown: [["sa"], "nulhá·"],
      },
      {
        breakdown: [["lo"], "nulhá·"],
      },
      {
        breakdown: [["ako"], "nulhá·"],
      },
      {
        breakdown: [["yukhi", "PP"], "nulhá·"],
      },
      {
        breakdown: [["swa"], "nulhá·"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
