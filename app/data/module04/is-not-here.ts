import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerb}} not here",
    type: "PR",
    phrases: [
      {
        breakdown: ["yáh kʌʔ té·", { text: "k" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té", { text: "hs" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "l" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ te·", { text: "y" }, "ʌ́·seʔ"],
      },
      {
        breakdown: ["yáh kʌʔ te·", { text: "w" }, "é·seʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "tn" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ teʔ", { text: "yákn" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "sn" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "n" }, "ehse"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "kn" }, "ehseʔ"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "tw" }, "eʔse"],
      },
      {
        breakdown: ["yáh kʌʔ teʔ", { text: "yákw" }, "eʔse"],
      },
      {
        breakdown: ["yáh kʌʔ té·", { text: "sw" }, "eʔse"],
      },
      {
        breakdown: ["yáh kʌʔ te", { text: "hʌ·n" }, "é·seʔ"],
      },
      {
        breakdown: ["yáh kʌʔ te", { text: "ku·n" }, "é·seʔ"],
      },
    ],
  },
  pronouns
);
