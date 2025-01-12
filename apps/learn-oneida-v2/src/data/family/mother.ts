import { createParadigmData } from "@/utils/paradigm";

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
    whispered: false,
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
