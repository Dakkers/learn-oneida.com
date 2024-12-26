import { pronounsPurple } from "@ukwehuwehneke/language-components";
import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{subject}} {{verb}} {{object}}",
    type: "PP",
    phrases: [
      {
        breakdown: [["ku"], "nú·wehseʔ"],
      },
      {
        breakdown: [["li"], "nú·wehseʔ"],
      },
      {
        breakdown: [["khe"], "nú·wehseʔ"],
      },
      {
        breakdown: [["sk"], "nú·wehseʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "nú·wehseʔ"],
      },
      {
        breakdown: [["she"], "nú·wehseʔ"],
      },
      {
        breakdown: [["lak"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ya"], "nú·wehseʔ"],
      },
      {
        breakdown: [["lo"], "nú·wehseʔ"],
      },
      {
        breakdown: [["shako"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yuk"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yesa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["luwa"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yutat"], "nú·wehseʔ"],
      },
    ],
  },
  pronounsPurple,
);

export default data;