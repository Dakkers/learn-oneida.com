import { nonSingularPronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/like_recp",
    translation: "{{pronoun}} like each other",
    type: "PS",
    phrases: [
      {
        breakdown: [
          ["te", "REFL"],
          ["ty"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["yaky"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["tsy"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["hy"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["ky"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["twa"],
          ["tat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["yakw"],
          ["atat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["swa"],
          ["tat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["hu"],
          ["tat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
      {
        breakdown: [
          ["te", "REFL"],
          ["ku"],
          ["tat", "REFL"],
          "nú·weh",
          ["seʔ", "HAB"],
        ],
      },
    ],
  },
  nonSingularPronouns,
);

export default data;
