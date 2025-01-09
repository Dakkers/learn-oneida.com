import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/uncle",
    translation: "{{pronounPossessive}} uncle",
    type: "PP",
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
        breakdown: [["ako", "PB"], "nulhá·"],
      },
      {
        breakdown: [["shukwa"], "nulhá·"],
      },
      {
        breakdown: [["h", "RPL"], ["etswa"], "nulhá·"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
