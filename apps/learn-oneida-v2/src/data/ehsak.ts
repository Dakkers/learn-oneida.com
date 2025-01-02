import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module01/pronominals/red/E",
    translation: "{{pronoun}} {{refVerb}} looking for it",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "éhsaks"],
      },
      {
        breakdown: [["s"], "éhsaks"],
      },
      {
        breakdown: [["l"], "éhsaks"],
      },
      {
        breakdown: [["yak"], "éhsaks"],
      },
      {
        breakdown: [["w"], "éhsaks"],
      },
      {
        breakdown: [["tn"], "éhsaks"],
      },
      {
        breakdown: [["yakn"], "éhsaks"],
      },
      {
        breakdown: [["sn"], "éhsaks"],
      },
      {
        breakdown: [["n"], "éhsaks"],
      },
      {
        breakdown: [["kn"], "éhsaks"],
      },
      {
        breakdown: [["tw"], "éhsaks"],
      },
      {
        breakdown: [["yakw"], "éhsaks"],
      },
      {
        breakdown: [["sw"], "éhsaks"],
      },
      {
        breakdown: [["lʌn"], "éhsaks"],
      },
      {
        breakdown: [["kun"], "éhsaks"],
      },
    ],
    whispered: false,
  },
  pronouns,
);

export default data;
