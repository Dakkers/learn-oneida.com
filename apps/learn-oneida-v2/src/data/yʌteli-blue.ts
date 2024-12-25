import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{pronoun}} {{verb}} it",
    type: "PB",
    phrases: [
      {
        breakdown: [["wak"], "yʌtelí"],
      },
      {
        breakdown: [["sa"], "yʌtelí"],
      },
      {
        breakdown: [["lo"], "yʌtelí"],
      },
      {
        breakdown: [["yako"], "yʌtelí"],
      },
      {
        breakdown: [["yo"], "yʌtelí"],
      },
      {
        breakdown: [["yukni"], "yʌtelí"],
      },
      {
        breakdown: [["yukni"], "yʌtelí"],
      },
      {
        breakdown: [["sni"], "yʌtelí"],
      },
      {
        breakdown: [["loti"], "yʌtelí"],
      },
      {
        breakdown: [["yoti"], "yʌtelí"],
      },
      {
        breakdown: [["yukwa"], "yʌtelí"],
      },
      {
        breakdown: [["yukwa"], "yʌtelí"],
      },
      {
        breakdown: [["swa"], "yʌtelí"],
      },
      {
        breakdown: [["loti"], "yʌtelí"],
      },
      {
        breakdown: [["yoti"], "yʌtelí"],
      },
    ],
  },
  pronouns,
);

export default data;
