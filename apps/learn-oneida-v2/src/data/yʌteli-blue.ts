import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/familiar_blue",
    translation: "It is familiar with {{pronounObjective}}",
    type: "PO",
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
