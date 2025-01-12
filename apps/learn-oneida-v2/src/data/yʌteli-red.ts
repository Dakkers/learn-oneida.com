import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/familiar_red",
    translation: "{{pronoun}} {{refVerb}} familiar with it",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "yʌtelí"],
      },
      {
        breakdown: [["ts"], "yʌtelí"],
      },
      {
        breakdown: [["la"], "yʌtelí"],
      },
      {
        breakdown: [["ye"], "yʌtelí"],
      },
      {
        breakdown: [["ka"], "yʌtelí"],
      },
      {
        breakdown: [["tni"], "yʌtelí"],
      },
      {
        breakdown: [["yakni"], "yʌtelí"],
      },
      {
        breakdown: [["sni"], "yʌtelí"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "yʌtelí"],
      },
      {
        breakdown: [["kni"], "yʌtelí"],
      },
      {
        breakdown: [["twa"], "yʌtelí"],
      },
      {
        breakdown: [["yakwa"], "yʌtelí"],
      },
      {
        breakdown: [["swa"], "yʌtelí"],
      },
      {
        breakdown: [["lati"], "yʌtelí"],
      },
      {
        breakdown: [["kuti"], "yʌtelí"],
      },
    ],
  },
  pronouns,
);

export default data;
