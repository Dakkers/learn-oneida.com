import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{pronoun}} {{verb}} {{reflexive}}",
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
        breakdown: [["tsy"], ["atat", "REFL"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yaky"], ["atat", "REFL"], "nolúkhwaʔ"],
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
