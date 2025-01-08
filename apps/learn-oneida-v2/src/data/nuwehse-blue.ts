import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module01/pronominals/blue/C",
    translation: "It likes {{pronounObjective}}",
    type: "PB",
    phrases: [
      {
        breakdown: [["wak"], "nú·wehseʔ"],
      },
      {
        breakdown: [["sa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["lo"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yako"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yo"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yukni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yukni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["sni"], "nú·wehseʔ"],
      },
      {
        breakdown: [["loti"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yoti"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yukwa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yukwa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["swa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["loti"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yoti"], "nú·wehseʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
