import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} will VERB",
    type: "PB",
    phrases: [
      {
        breakdown: [["ʌ", "FUT"], ["k"], ["e", "EP"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hs"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ha"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ye"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ka"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["tni"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakni"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["sni"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hni"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kni"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["twa"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakwa"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["swa"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hati"], "ROOT", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kuti"], "ROOT", ["ekeʔ", "FUT"]],
      },
    ],
  },
  pronouns
);
