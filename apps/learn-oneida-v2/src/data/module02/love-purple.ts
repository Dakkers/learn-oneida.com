import { pluralizeVerbCommon } from "@/utils/translation";
import { pronounsPurple } from "@ukwehuwehneke/language-components";
import {
  createInteractiveParadigmData,
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createInteractiveParadigmData({
  audioFolder: "module02/love_purple",
  translation: "{{agent}} {{verb}} {{subject}}",
  translationFn: (pronoun) =>
    `{{agent}} ${pluralizeVerbCommon(pronoun, "love")} {{subject}}`,
  type: "PP",
  phrases: [
    {
      breakdown: [["ku"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["li"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["khe"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["sk"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["she"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["lak"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["ya"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["lo"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["shako"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["yuk"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["yesa"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["luwa"], "nolúkhwaʔ"],
    },
    {
      breakdown: [["yutat"], "nolúkhwaʔ"],
    },
  ],
});

export default data;
