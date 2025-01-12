import { nonSingularPronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/familiar_recp",
    translation: "{{pronoun}} are familiar with each other",
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
