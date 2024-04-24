import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} VERB",
    type: "PB",
    phrases: [
      {
        breakdown: [["k"], ["e", "EP"], "ROOT"],
      },
      {
        breakdown: [["s"], "ROOT"],
      },
      {
        breakdown: [["la"], "ROOT"],
      },
      {
        breakdown: [["ye"], "ROOT"],
      },
      {
        breakdown: [["ka"], "ROOT"],
      },
      {
        breakdown: [["tni"], "ROOT"],
      },
      {
        breakdown: [["yakni"], "ROOT"],
      },
      {
        breakdown: [["sni"], "ROOT"],
      },
      {
        breakdown: [["ni"], "ROOT"],
      },
      {
        breakdown: [["kni"], "ROOT"],
      },
      {
        breakdown: [["twa"], "ROOT"],
      },
      {
        breakdown: [["yakwa"], "ROOT"],
      },
      {
        breakdown: [["swa"], "ROOT"],
      },
      {
        breakdown: [["lati"], "ROOT"],
      },
      {
        breakdown: [["kuti"], "ROOT"],
      },
    ],
  },
  pronouns
);
