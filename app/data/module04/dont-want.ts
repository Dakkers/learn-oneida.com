import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} don't want",
    type: "PR",
    phrases: [
      {
        pronoun: "i",
        breakdown: ["yáh té·", { text: "k" }, "elheʔ"],
      },
      {
        pronoun: "u",
        breakdown: ["yáh té", { text: "hs" }, "elheʔ"],
      },
      {
        pronoun: "m",
        breakdown: ["yáh té·", { text: "l" }, "elheʔ"],
      },
      {
        pronoun: "f",
        breakdown: ["yáh té·", { text: "y" }, "ʌ́lheʔ"],
      },
      {
        pronoun: "it",
        breakdown: ["yáh té·", { text: "w" }, "elheʔ"],
      },
      {
        pronoun: "uni",
        breakdown: ["yáh té·", { text: "tn" }, "elheʔ"],
      },
      {
        pronoun: "soni",
        breakdown: ["yáh téʔ", { text: "yákn" }, "elheʔ"],
      },
      {
        pronoun: "u2",
        breakdown: ["yáh té·", { text: "sn" }, "elheʔ"],
      },
      {
        pronoun: "2m",
        breakdown: ["yáh té·", { text: "n" }, "elheʔ"],
      },
      {
        pronoun: "2f",
        breakdown: ["yáh té·", { text: "kn" }, "elheʔ"],
      },
      {
        pronoun: "us",
        breakdown: ["yáh té·", { text: "tw" }, "elheʔ"],
      },
      {
        pronoun: "theyni",
        breakdown: ["yáh téʔ", { text: "yákw" }, "elheʔ"],
      },
      {
        pronoun: "yall",
        breakdown: ["yáh té·", { text: "sw" }, "elheʔ"],
      },
      {
        pronoun: "ms",
        breakdown: ["yáh te", { text: "hʌ·n" }, "élheʔ"],
      },
      {
        pronoun: "fs",
        breakdown: ["yáh teʔ", { text: "ku·n" }, "élheʔ"],
      },
    ],
  },
  pronouns
);
