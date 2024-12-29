import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{subject}} {{verb}} {{object}}",
    type: "PP",
    phrases: [
      {
        breakdown: [["kuy"], "ahlístaʔ"],
      },
      {
        breakdown: [["liy"], "ahlístaʔ"],
      },
      {
        breakdown: [["khey"], "ahlístaʔ"],
      },
      {
        breakdown: [["skw"], "ahlístaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "ahlístaʔ"],
      },
      {
        breakdown: [["shey"], "ahlístaʔ"],
      },
      {
        breakdown: [["lakw"], "ahlístaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["y"], "ahlístaʔ"],
      },
      {
        breakdown: [["lo"], "ahlístaʔ"],
      },
      {
        breakdown: [["shako"], "ahlístaʔ"],
      },
      {
        breakdown: [["yukw"], "ahlístaʔ"],
      },
      {
        breakdown: [["yes"], "ahlístaʔ"],
      },
      {
        breakdown: [["luw"], "ahlístaʔ"],
      },
      {
        breakdown: [["yutat"], "ahlístaʔ"],
      },
    ],
  },
  pronounsPurple,
);

export default data;
