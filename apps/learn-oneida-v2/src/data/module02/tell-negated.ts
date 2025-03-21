import { createInteractiveParadigmData } from "@/utils/paradigm";

const data = createInteractiveParadigmData(
  {
    audioFolder: "module02/tell_negated",
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
    translation: "({{agent}}) Don't tell {{subject}}!",
    type: "PI",
  },
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
