import { nonSingularPronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/love_recp",
    translation: "{{pronoun}} {{verb}} {{reflexive}}",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "REFL"], ["ty"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["yaky"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["tsy"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["hy"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["ky"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["twa"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["yakw"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["swa"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["hu"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["ku"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
    ],
  },
  nonSingularPronouns,
);

export default data;
