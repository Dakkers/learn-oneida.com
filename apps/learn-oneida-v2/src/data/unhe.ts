import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module01/pronominals/red/U",
    translation: "{{pronoun}} {{refVerb}} alive",
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "únheʔ"],
      },
      {
        breakdown: [["s"], "únheʔ"],
      },
      {
        breakdown: [["l"], "únheʔ"],
      },
      {
        breakdown: [["yak"], "únheʔ"],
      },
      {
        breakdown: [["y"], "únheʔ"],
      },
      {
        breakdown: [["tn"], "únheʔ"],
      },
      {
        breakdown: [["yakn"], "únheʔ"],
      },
      {
        breakdown: [["sn"], "únheʔ"],
      },
      {
        breakdown: [["n"], "únheʔ"],
      },
      {
        breakdown: [["kn"], "únheʔ"],
      },
      {
        breakdown: [["ty"], "únheʔ"],
      },
      {
        breakdown: [["yaky"], "únheʔ"],
      },
      {
        breakdown: [["tsy"], "únheʔ"],
      },
      {
        breakdown: [["lʌn"], "únheʔ"],
      },
      {
        breakdown: [["kun"], "únheʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
