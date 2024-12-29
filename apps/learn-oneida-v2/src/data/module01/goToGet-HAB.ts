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
        breakdown: [["ku"], "hnúkseʔ"],
      },
      {
        breakdown: [["l"], "ihnúkseʔ"],
      },
      {
        breakdown: [["khe"], "hnúkseʔ"],
      },
      {
        breakdown: [["sk"], "ihnúkseʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "ihnúkseʔ"],
      },
      {
        breakdown: [["she"], "hnúkseʔ"],
      },
      {
        breakdown: [["lak"], "ihnúkseʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["yʌ"], "ihnúkseʔ"],
      },
      {
        breakdown: [["lo"], "hnúkseʔ"],
      },
      {
        breakdown: [["shako"], "hnúkseʔ"],
      },
      {
        breakdown: [["yuk"], "ihnúkseʔ"],
      },
      {
        breakdown: [["yesʌ"], "hnúkseʔ"],
      },
      {
        breakdown: [["luwʌ"], "hnúkseʔ"],
      },
      {
        breakdown: [["yutat"], "ihnúkseʔ"],
      },
    ],
  },
  pronounsPurple,
);

export default data;
