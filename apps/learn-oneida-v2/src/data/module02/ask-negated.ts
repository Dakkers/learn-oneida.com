import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

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
    translation: "({{subject}}) Don't ask {{object}}!",
    type: "PP",
  },
  ["cmd_u_i", "cmd_u_theyni", "u_f", "u_m"],
);

export default data;
