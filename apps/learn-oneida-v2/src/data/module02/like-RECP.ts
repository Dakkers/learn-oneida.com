import { nonSingularPronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/like_recp",
    translation: "{{pronoun}} {{verb}} each other",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "REFL"], ["ty"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["yaky"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["tsy"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["hy"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["ky"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["twa"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["yakw"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["swa"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["hu"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["te", "REFL"], ["ku"], ["tat", "REFL"], "nú·wehseʔ"],
      },
    ],
  },
  nonSingularPronouns,
);

export default data;
