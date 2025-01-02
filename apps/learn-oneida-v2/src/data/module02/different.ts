import { createParadigmData } from "@/components/ParadigmTable";
import { nonSingularPronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    audioFolder: "module02/being_different",
    translation: "{{pronoun}} are different",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "DUAL"], ["ty"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["yaky"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["tsy"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["hy"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["ky"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["tw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["yakw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["sw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["hu"], ["t", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["ku"], ["t", "SRFL"], "tíhʌ"],
      },
    ],
  },
  nonSingularPronouns,
);
