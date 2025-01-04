import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    translation: "{{agent}} {{verb}} {{subject}}",
    type: "PP",
    phrases: [
      {
        breakdown: [["kuy"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["liy"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["khey"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["sk"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["shey"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["lakw"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["yay"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["law"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["shakaw"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["yukw"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["yes"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["luw"], "ʌ́·niheʔ"],
      },
      {
        breakdown: [["yutat"], "ʌ́·niheʔ"],
      },
    ],
  },
  pronounsPurple,
);

export default data;
