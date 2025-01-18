import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/mother",
    translation: "{{pronounPossessive}} mother",
    type: "PO",
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
        breakdown: [["yukhi", "PI"], "nulhá·"],
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
