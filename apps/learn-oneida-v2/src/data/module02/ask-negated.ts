import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    phrases: [
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["sk"], "liʔwanu·túse"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["skwa"], "liʔwanu·túse"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["she"], "liʔwanu·túse"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["hets"], "liʔwanu·túse"],
      },
    ],
    translation: "({{agent}}) Don't ask {{subject}}!",
    type: "PP",
  },
  // @ts-expect-error Pronominal things
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
