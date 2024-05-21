import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} open something",
    type: "PR",
    phrases: [
      {
        breakdown: [["ke"], "nhotúkwas"],
      },
      {
        breakdown: [["se"], "nhotúkwas"],
      },
      {
        breakdown: [["la"], "nhotúkwas"],
      },
      {
        breakdown: [["ye"], "nhotúkwas"],
      },
      {
        breakdown: [["ka"], "nhotúkwas"],
      },
      {
        breakdown: [["tni"], "nhotúkwas"],
      },
      {
        breakdown: [["yakni"], "nhotúkwas"],
      },
      {
        breakdown: [["sni"], "nhotúkwas"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "nhotúkwas"],
      },
      {
        breakdown: [["kni"], "nhotúkwas"],
      },
      {
        breakdown: [["twa"], "nhotúkwas"],
      },
      {
        breakdown: [["yakwa"], "nhotúkwas"],
      },
      {
        breakdown: [["swa"], "nhotúkwas"],
      },
      {
        breakdown: [["lati"], "nhotúkwas"],
      },
      {
        breakdown: [["kuti"], "nhotúkwas"],
      },
    ],
    whispered: false,
  },
  pronouns,
);
