import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/love_blue",
    translation: "{{pronoun}} {{verb}} it",
    type: "PB",
    phrases: [
      {
        breakdown: [["wak"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["sa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lo"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yako"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yo"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yukni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yukni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["sni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["loti"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yoti"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yukwa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yukwa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["swa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["loti"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yoti"], "nolúkhwaʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
