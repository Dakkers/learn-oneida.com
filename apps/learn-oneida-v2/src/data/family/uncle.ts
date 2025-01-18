import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/uncle",
    translation: "{{pronounPossessive}} uncle",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["lak"], "nulhá·"],
      },
      {
        breakdown: [["ya"], "nulhá·"],
      },
      {
        breakdown: [["lo"], "nulhá·"],
      },
      {
        breakdown: [["ako", "PO"], "nulhá·"],
      },
      {
        breakdown: [["shukwa"], "nulhá·"],
      },
      {
        breakdown: [["h", "RPL"], ["etswa"], "nulhá·"],
      },
    ],
    whispered: false,
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
