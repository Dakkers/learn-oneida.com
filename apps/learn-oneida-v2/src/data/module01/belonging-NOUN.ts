import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} belonging",
    type: "PP",
    phrases: [
      {
        breakdown: [["akw"], "awʌ́"],
      },
      {
        breakdown: [["s"], "awʌ́"],
      },
      {
        breakdown: [["lao"], "wʌ́"],
      },
      {
        breakdown: [["ako"], "wʌ́"],
      },
      {
        breakdown: [["ao"], "wʌ́"],
      },
      {
        breakdown: [["uky"], "awʌ́"],
      },
      {
        breakdown: [["uky"], "awʌ́"],
      },
      {
        breakdown: [["tsy"], "awʌ́"],
      },
      {
        breakdown: [["laon"], "awʌ́"],
      },
      {
        breakdown: [["aon"], "awʌ́"],
      },
      {
        breakdown: [["ukw"], "awʌ́"],
      },
      {
        breakdown: [["ukw"], "awʌ́"],
      },
      {
        breakdown: [["sw"], "awʌ́"],
      },
      {
        breakdown: [["laon"], "awʌ́"],
      },
      {
        breakdown: [["aon"], "awʌ́"],
      },
    ],
  },
  pronouns,
);

export default data;
