import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{pronoun}} {{verb}} {{reflexive}}",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["s"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["l"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["yu"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["w"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["ty"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["tsy"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["yakya"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["h", "RPL"], ["y"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["ky"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["twa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["yakwa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["swa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["lu"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["ku"], ["tat", "REFL"], "yʌtelí"],
      },
    ],
  },
  pronouns,
);

export default data;
