import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: `module01/pronominals/red/I`,
    translation: "{{pronoun}} {{refVerb}} at home",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "í·tluʔ"],
      },
      {
        breakdown: [["ts"], "í·tluʔ"],
      },
      {
        breakdown: [["lʌ́"], "·tluʔ"],
      },
      {
        breakdown: [["yé"], "·tluʔ"],
      },
      {
        breakdown: [["kʌ́"], "·tluʔ"],
      },
      {
        breakdown: [["tn"], "í·tluʔ"],
      },
      {
        breakdown: [["yakn"], "í·tluʔ"],
      },
      {
        breakdown: [["sn"], "í·tluʔ"],
      },
      {
        breakdown: [["hn"], "í·tluʔ"],
      },
      {
        breakdown: [["kn"], "í·tluʔ"],
      },
      {
        breakdown: [["twʌ́"], "·tluʔ"],
      },
      {
        breakdown: [["yakwʌ́"], "·tluʔ"],
      },
      {
        breakdown: [["swʌ́"], "·tluʔ"],
      },
      {
        breakdown: [["lat"], "í·tluʔ"],
      },
      {
        breakdown: [["kut"], "í·tluʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
