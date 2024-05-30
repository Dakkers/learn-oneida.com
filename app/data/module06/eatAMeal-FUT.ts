import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} will eat a meal",
    type: "PR",
    phrases: [
      {
        breakdown: [["ʌ", "FUT"], ["ke"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hs"], "atekhu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["ha"], "tekhu·ní·"],
      },
      {
        breakdown: [["aʌ", "FUT"], ["yu"], "tekhu·ní·"],
      },
      {
        breakdown: [["aʌ", "FUT"], ["ka"], "khu·ní·"],
      },
      {
        breakdown: [["a·ʌ", "FUT"], ["tni"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakni"], "khu·ní·"],
      },
      {
        breakdown: [["a·ʌ", "FUT"], ["sni"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hni"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kni"], "khu·ní·"],
      },
      {
        breakdown: [["a·ʌ", "FUT"], ["twa"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["yakw"], "atekhu·ní·"],
      },
      {
        breakdown: [["a·ʌ", "FUT"], ["swa"], "khu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["hu"], "tekhu·ní·"],
      },
      {
        breakdown: [["ʌ", "FUT"], ["kuti"], "khu·ní·"],
      },
    ],
  },
  pronouns,
);
