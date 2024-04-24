import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} will VERB",
    type: "PB",
    phrases: [
      {
        breakdown: [
          ["ʌ", "FUT"],
          ["k"],
          ["e", "EP"],
          "shátst",
          ["ekeʔ", "FUT"],
        ],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hs"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ha"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ye"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ka"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["tni"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakni"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["sni"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hni"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kni"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["twa"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakwa"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["swa"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hati"], "shátst", ["ekeʔ", "FUT"]],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kuti"], "shátst", ["ekeʔ", "FUT"]],
      },
    ],
  },
  pronouns
);
