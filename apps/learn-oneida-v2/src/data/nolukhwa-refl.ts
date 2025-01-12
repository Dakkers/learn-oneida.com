import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/love_refl",
    translation: "{{pronoun}} love {{reflexive}}",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "love")} {{reflexive}}`,
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["s"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["l"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yu"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["w"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ty"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yaky"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["tsy"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["y"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ky"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["twa"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yakw"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["swa"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lu"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ku"], ["tat", "REFL"], "nolúkhwaʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
