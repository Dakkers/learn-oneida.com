import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/familiar_purple",
    translation: "{{agent}} {{verb}} {{subject}}",
    type: "PP",
    phrases: [
      {
        breakdown: [["ku"], "yʌtelí"],
      },
      {
        breakdown: [["li"], "yʌtelí"],
      },
      {
        breakdown: [["khe"], "yʌtelí"],
      },
      {
        breakdown: [["sk"], "yʌtelí"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "yʌtelí"],
      },
      {
        breakdown: [["she"], "yʌtelí"],
      },
      {
        breakdown: [["lak"], "yʌtelí"],
      },
      {
        breakdown: [["ya"], "yʌtelí"],
      },
      {
        breakdown: [["lo"], "yʌtelí"],
      },
      {
        breakdown: [["shako"], "yʌtelí"],
      },
      {
        breakdown: [["yuk"], "yʌtelí"],
      },
      {
        breakdown: [["yesa"], "yʌtelí"],
      },
      {
        breakdown: [["luwa"], "yʌtelí"],
      },
      {
        breakdown: [["yutat"], "yʌtelí"],
      },
    ],
  },
  pronounsPurple,
);

export default data;
