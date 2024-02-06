import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} thought",
    type: "PR",
    phrases: [
      {
        pronoun: "i",
        breakdown: ["wá·", { text: "k" }, "elheʔ"],
      },
      {
        pronoun: "u",
        breakdown: ["wá", { text: "hs" }, "elheʔ"],
      },
      {
        pronoun: "m",
        breakdown: ["wá·", { text: "l" }, "elheʔ"],
      },
      {
        pronoun: "f",
        breakdown: ["wá·", { text: "y" }, "elheʔ"],
      },
      {
        pronoun: "it",
        breakdown: ["wá·", { text: "w" }, "elheʔ"],
      },
      {
        pronoun: "uni",
        breakdown: ["wé", { text: "tn" }, "elheʔ"],
      },
      {
        pronoun: "soni",
        breakdown: ["waʔ", { text: "ákn" }, "elheʔ"],
      },
      {
        pronoun: "u2",
        breakdown: ["wé", { text: "sn" }, "elheʔ"],
      },
      {
        pronoun: "2m",
        breakdown: ["wá·", { text: "n" }, "elheʔ"],
      },
      {
        pronoun: "2f",
        breakdown: ["wá·", { text: "kn" }, "elheʔ"],
      },
      {
        pronoun: "us",
        breakdown: ["wé", { text: "tw" }, "elheʔ"],
      },
      {
        pronoun: "theyni",
        breakdown: ["waʔ", { text: "ákw" }, "elheʔ"],
      },
      {
        pronoun: "yall",
        breakdown: ["wé", { text: "sw" }, "elheʔ"],
      },
      {
        pronoun: "ms",
        breakdown: ["wa", { text: "hʌ·n" }, "élheʔ"],
      },
      {
        pronoun: "fs",
        breakdown: ["waʔ", { text: "ku·n" }, "élheʔ"],
      },
    ],
  },
  pronouns
);
