import { createParadigmData } from "@/utils/paradigm";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} ate",
    type: "PS",
    phrases: [
      {
        breakdown: [["wá·", "DEF"], ["k"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá", "DEF"], ["hs"], "ek", ["eʔ", "PUNC"]],
      },
      {
        // Correct
        breakdown: [["wá·", "DEF"], ["l"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá·", "DEF"], ["y"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá·", "DEF"], ["w"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wé", "DEF"], ["tn"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ákn"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wé", "DEF"], ["sn"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá·", "DEF"], ["n"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá·", "DEF"], ["kn"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wé", "DEF"], ["tw"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ákw"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wé", "DEF"], ["sw"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["wá", "DEF"], ["hʌ·n"], "ek", ["eʔ", "PUNC"]],
      },
      {
        breakdown: [["waʔ", "DEF"], ["ku·n"], "ek", ["eʔ", "PUNC"]],
      },
    ],
  },
  pronouns,
);
