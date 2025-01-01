import { createParadigmData } from "@/components/ParadigmTable";
import { nonSingularPronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    audioFolder: "module02/look_alike",
    translation: "{{pronoun}} look alike",
    type: "PR",
    phrases: [
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["ty"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["ts", "REP"],
          ["yaky"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["tsy"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["hy"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["ky"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["tw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["ts", "REP"],
          ["yakw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["sw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["hu"],
          ["t", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["ku"],
          ["t", "SRFL"],
          "yelʌ́",
        ],
      },
    ],
  },
  nonSingularPronouns,
);
