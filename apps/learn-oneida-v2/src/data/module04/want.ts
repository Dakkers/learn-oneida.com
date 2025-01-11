import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "@ukwehuwehneke/language-components";
import { pluralizeVerbCommon } from "@/utils/translation";

export default createParadigmData(
  {
    audioFolder: "module04/want",
    translation: "{{pronoun}} want",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "want")}`,
    type: "PR",
    phrases: [
      {
        breakdown: [["i·", "RPL"], ["k"], "élheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["hs"], "elheʔ"],
      },
      {
        breakdown: [["í·", "RPL"], ["l"], "elheʔ"],
      },
      {
        breakdown: [["i·", "RPL"], ["y"], "ʌ́lheʔ"],
      },
      {
        breakdown: [["i·", "RPL"], ["w"], "élheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["tn"], "elheʔ"],
      },
      {
        breakdown: [["yákn"], "elheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["sn"], "elheʔ"],
      },
      {
        breakdown: [["í·", "RPL"], ["n"], "elheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["kn"], "elheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["tw"], "elheʔ"],
      },
      {
        breakdown: [["yákw"], "elheʔ"],
      },
      {
        breakdown: [["í", "RPL"], ["sw"], "elheʔ"],
      },
      {
        breakdown: [["lʌ·n"], "élheʔ"],
      },
      {
        breakdown: [["ku·n"], "élheʔ"],
      },
    ],
  },
  pronouns,
);
