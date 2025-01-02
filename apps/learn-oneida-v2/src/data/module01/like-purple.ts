import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    // audioFolder: "module01/pronominals/purple/C",
    translation: "{{agent}} {{verb}} {{subject}}",
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
        breakdown: [["h", "RPL"], ["ya"], "nú·wehseʔ"],
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
