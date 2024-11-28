import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} ate",
    type: "PR",
    phrases: [
      {
        breakdown: [["wá·", "DEF"], ["k"], "ekeʔ"],
      },
      {
        breakdown: [["wá", "DEF"], ["hs"], "ekeʔ"],
      },
      {
        // Correct
        breakdown: [["wá·", "DEF"], ["l"], "ekeʔ"],
      },
      {
        breakdown: [["wá·", "DEF"], ["y"], "ekeʔ"],
      },
      {
        breakdown: [["wá·", "DEF"], ["w"], "ekeʔ"],
      },
      {
        breakdown: [["wé", "DEF"], ["tn"], "ekeʔ"],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ákn"], "ekeʔ"],
      },
      {
        breakdown: [["wé", "DEF"], ["sn"], "ekeʔ"],
      },
      {
        breakdown: [["wá·", "DEF"], ["n"], "ekeʔ"],
      },
      {
        breakdown: [["wá·", "DEF"], ["kn"], "ekeʔ"],
      },
      {
        breakdown: [["wé", "DEF"], ["tw"], "ekeʔ"],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ákw"], "ekeʔ"],
      },
      {
        breakdown: [["wé", "DEF"], ["sw"], "ekeʔ"],
      },
      {
        breakdown: [["wá", "DEF"], ["hʌ·n"], "ekeʔ"],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ku·n"], "ekeʔ"],
      },
    ],
  },
  pronouns,
);
