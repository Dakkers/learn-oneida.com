import { nonSingularPronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/familiar_recp",
    translation: "{{pronoun}} {{verb}} {{reflexive}}",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "REFL"], ["ty"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["yakya"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["tsy"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["hy"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["ky"], ["atat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["twa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["yakwa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["swa"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["hu"], ["tat", "REFL"], "yʌtelí"],
      },
      {
        breakdown: [["te", "REFL"], ["ku"], ["tat", "REFL"], "yʌtelí"],
      },
    ],
  },
  nonSingularPronouns,
);

export default data;
