import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerb}} there",
    type: "PR",
    phrases: [
      {
        breakdown: [
          "thó ye",
          { text: "he·", type: "RPL" },
          { text: "k" },
          "é·seʔ",
        ],
      },
      {
        breakdown: ["thó yé", { text: "hs" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé·", { text: "l" }, "ehseʔ"],
      },
      {
        breakdown: ["thó ye·", { text: "y" }, "ʌ́·seʔ"],
      },
      {
        breakdown: ["thó ye·", { text: "w" }, "é·seʔ"],
      },
      {
        breakdown: ["thó yé", { text: "tn" }, "ehseʔ"],
      },
      {
        breakdown: ["thó ye", { text: "yákn" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé", { text: "sn" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé·", { text: "n" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé", { text: "kn" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé", { text: "tw" }, "ehseʔ"],
      },
      {
        breakdown: ["thó ye", { text: "yákw" }, "ehseʔ"],
      },
      {
        breakdown: ["thó yé", { text: "sw" }, "ehseʔ"],
      },
      {
        breakdown: ["thó ye", { text: "hʌ·n" }, "é·seʔ"],
      },
      {
        breakdown: ["thó ye", { text: "ku·n" }, "é·seʔ"],
      },
    ],
  },
  pronouns
);
