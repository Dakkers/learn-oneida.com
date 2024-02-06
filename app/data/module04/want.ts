import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} want",
    type: "PR",
    phrases: [
      {
        pronoun: "i",
        breakdown: [{ text: "i·", type: "RPL" }, { text: "k" }, "élheʔ"],
      },
      {
        pronoun: "u",
        breakdown: [{ text: "í", type: "RPL" }, { text: "hs" }, "elheʔ"],
      },
      {
        pronoun: "m",
        breakdown: [{ text: "í·", type: "RPL" }, { text: "l" }, "elheʔ"],
      },
      {
        pronoun: "f",
        breakdown: [{ text: "i·", type: "RPL" }, { text: "y" }, "ʌ́lheʔ"],
      },
      {
        pronoun: "it",
        breakdown: [{ text: "i·", type: "RPL" }, { text: "w" }, "élheʔ"],
      },
      {
        pronoun: "uni",
        breakdown: [{ text: "í", type: "RPL" }, { text: "tn" }, "elheʔ"],
      },
      {
        pronoun: "soni",
        breakdown: [{ text: "yákn" }, "elheʔ"],
      },
      {
        pronoun: "u2",
        breakdown: [{ text: "í", type: "RPL" }, { text: "sn" }, "elheʔ"],
      },
      {
        pronoun: "2m",
        breakdown: [{ text: "í·", type: "RPL" }, { text: "n" }, "elheʔ"],
      },
      {
        pronoun: "2f",
        breakdown: [{ text: "í", type: "RPL" }, { text: "kn" }, "elheʔ"],
      },
      {
        pronoun: "us",
        breakdown: [{ text: "í", type: "RPL" }, { text: "tw" }, "elheʔ"],
      },
      {
        pronoun: "theyni",
        breakdown: [{ text: "yákw" }, "elheʔ"],
      },
      {
        pronoun: "yall",
        breakdown: [{ text: "í", type: "RPL" }, { text: "sw" }, "elheʔ"],
      },
      {
        pronoun: "ms",
        breakdown: [{ text: "lʌ·n" }, "élheʔ"],
      },
      {
        pronoun: "fs",
        breakdown: [{ text: "ku·n" }, "élheʔ"],
      },
    ],
  },
  pronouns
);
