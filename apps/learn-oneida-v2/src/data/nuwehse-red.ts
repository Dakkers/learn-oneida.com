import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: `module01/pronominals/red/C`,
    translation: "{{pronoun}} {{verb}} it",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "nú·wehseʔ"],
      },
      {
        breakdown: [["s"], "nú·wehseʔ"],
      },
      {
        breakdown: [["la"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ye"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ka"], "nú·wehseʔ"],
      },
      {
        breakdown: [["tni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yakni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["sni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["kni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["twa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yakwa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["swa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["lati"], "nú·wehseʔ"],
      },
      {
        breakdown: [["kuti"], "nú·wehseʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
