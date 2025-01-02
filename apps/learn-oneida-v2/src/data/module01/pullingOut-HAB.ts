import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module01/pronominals/red/O",
    translation: "{{pronoun}} {{refVerb}} pulling it out",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["s"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["l"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["yak"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["y"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["tn"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["yakn"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["sn"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["n"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["kn"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["ty"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["yaky"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["tsy"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["lʌn"], "ótshyu", ["s", "HAB"]],
      },
      {
        breakdown: [["kun"], "ótshyu", ["s", "HAB"]],
      },
    ],
  },
  pronouns,
);

export default data;
