import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    phrases: [
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["sk"], "hlo·lí"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["skwa"], "hlo·lí"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["she"], "hlo·lí"],
      },
      {
        breakdown: ["Tákʌʔ ", ["ʌ", "FUT"], ["hets"], "hlo·lí"],
      },
    ],
    translation: "({{subject}}) Don't tell {{object}}!",
    type: "PP",
  },
  // @ts-expect-error Pronominal things
  ["cmd_u_i", "cmd_u_theyni", "u_f", "u_m"],
);

export default data;
