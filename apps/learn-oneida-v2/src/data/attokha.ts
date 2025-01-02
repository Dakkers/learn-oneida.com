import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module01/pronominals/red/A",
    translation: "{{pronoun}} {{refVerb}} wise",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "attókhaʔ"],
      },
      {
        breakdown: [["s"], "attókhaʔ"],
      },
      {
        breakdown: [["l"], "attókhaʔ"],
      },
      {
        breakdown: [["yu"], "ttókhaʔ"],
      },
      {
        breakdown: [["w"], "attókhaʔ"],
      },
      {
        breakdown: [["ty"], "attókhaʔ"],
      },
      {
        breakdown: [["yaky"], "attókhaʔ"],
      },
      {
        breakdown: [["tsy"], "attókhaʔ"],
      },
      {
        breakdown: [["hy"], "attókhaʔ"],
      },
      {
        breakdown: [["ky"], "attókhaʔ"],
      },
      {
        breakdown: [["tw"], "attókhaʔ"],
      },
      {
        breakdown: [["yakw"], "attókhaʔ"],
      },
      {
        breakdown: [["sw"], "attókhaʔ"],
      },
      {
        breakdown: [["lu"], "ttókhaʔ"],
      },
      {
        breakdown: [["ku"], "ttókhaʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
