import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{subject}} {{verb}} {{object}}",
    type: "PP",
    phrases: [
      {
        breakdown: [["ku"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["li"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["khe"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["sk"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["she"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lak"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ya"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lo"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["shako"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yuk"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yesa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["luwa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yutat"], "nolúkhwaʔ"],
      },
    ],
  },
  pronounsPurple,
);

export default data;
