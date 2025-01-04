import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/like_refl",
    translation: "{{pronoun}} like {{reflexive}}",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "like")} {{reflexive}}`,
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["s"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["l"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yu"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["w"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ty"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yaky"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["tsy"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["y"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ky"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["twa"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["yakw"], ["atat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["swa"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["lu"], ["tat", "REFL"], "nú·wehseʔ"],
      },
      {
        breakdown: [["ku"], ["tat", "REFL"], "nú·wehseʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
