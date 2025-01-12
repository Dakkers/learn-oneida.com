import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module01/pronominals/red/V",
    translation: "{{pronoun}} {{refVerb}} hard to please",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "ʌto·lé·"],
      },
      {
        breakdown: [["s"], "ʌto·lé·"],
      },
      {
        breakdown: [["l"], "ʌto·lé·"],
      },
      {
        breakdown: [["yak"], "ʌto·lé·"],
      },
      {
        breakdown: [["w"], "ʌto·lé·"],
      },
      {
        breakdown: [["tn"], "ʌto·lé·"],
      },
      {
        breakdown: [["yakn"], "ʌto·lé·"],
      },
      {
        breakdown: [["sn"], "ʌto·lé·"],
      },
      {
        breakdown: [["n"], "ʌto·lé·"],
      },
      {
        breakdown: [["kn"], "ʌto·lé·"],
      },
      {
        breakdown: [["tw"], "ʌto·lé·"],
      },
      {
        breakdown: [["yakw"], "ʌto·lé·"],
      },
      {
        breakdown: [["sw"], "ʌto·lé·"],
      },
      {
        breakdown: [["lʌn"], "ʌto·lé·"],
      },
      {
        breakdown: [["kun"], "ʌto·lé·"],
      },
    ],
  },
  pronouns,
);

export default data;
