import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/aunt",
    translation: "{{pronounPossessive}} aunt",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["yuk"], "nulhá·"],
      },
      {
        breakdown: [["yesa"], "nulhá·"],
      },
      {
        breakdown: [["luwa"], "nulhá·"],
      },
      {
        breakdown: [["utat"], "nulhá·"],
      },
      {
        breakdown: [["yukhi"], "nulhá·"],
      },
      {
        breakdown: [["yetshi"], "nulhá·"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
