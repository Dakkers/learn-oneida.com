import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/aunt",
    translation: "{{pronounPossessive}} aunt",
    type: "PI",
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
    whispered: false,
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
