import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} used to want",
    type: "PR",
    suffix: "hkwe",
    phrases: [
      {
        pronoun: "i",
        breakdown: [{ text: "k" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "u",
        breakdown: [{ text: "hs" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "m",
        breakdown: [{ text: "l" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "f",
        breakdown: [{ text: "y" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "it",
        breakdown: [{ text: "w" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "uni",
        breakdown: [{ text: "tn" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "soni",
        breakdown: [{ text: "yakn" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "u2",
        breakdown: [{ text: "sn" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "2m",
        breakdown: [{ text: "n" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "2f",
        breakdown: [{ text: "kn" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "us",
        breakdown: [{ text: "tw" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "theyni",
        breakdown: [{ text: "yakw" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "yall",
        breakdown: [{ text: "sw" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "ms",
        breakdown: [{ text: "lʌ·n" }, "élh", { text: "a", type: "JOIN" }],
      },
      {
        pronoun: "fs",
        breakdown: [{ text: "ku·n" }, "élh", { text: "a", type: "JOIN" }],
      },
    ],
  },
  pronouns
);
