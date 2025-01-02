import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/love_red",
    translation: "{{pronoun}} {{verb}} it",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["s"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["la"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ye"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ka"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["tni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yakni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["sni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["kni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["twa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yakwa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["swa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lati"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["kuti"], "nolúkhwaʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
