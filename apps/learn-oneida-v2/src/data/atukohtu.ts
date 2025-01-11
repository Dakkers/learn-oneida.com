import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/passed_on",
    translation: "{{pronoun}} {{refVerbPast}} passed on",
    type: "PB",
    phrases: [
      {
        breakdown: [["lo"], "tukóhtu̲"],
      },
      {
        breakdown: [["yako"], "tukóhtu̲"],
      },
      {
        breakdown: [["yo"], "tukóhtu̲"],
      },
      {
        breakdown: [["lon"], "atukóhtu̲"],
      },
      {
        breakdown: [["yon"], "atukóhtu̲"],
      },
    ],
  },
  ["m", "f", "it", "ms", "fs"],
);

export default data;
