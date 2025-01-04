import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "@ukwehuwehneke/language-components";
import { pluralizeVerbCommon } from "@/utils/translation";

export default createParadigmData(
  {
    audioFolder: "module01/pronominals/blue/E",
    translation: "{{pronoun}} like the taste",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "like")} the taste`,
    type: "PB",
    phrases: [
      {
        breakdown: [["wak"], "e·ká·seʔ"],
      },
      {
        breakdown: [["s"], "e·ká·seʔ"],
      },
      {
        breakdown: [["law"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yakaw"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yaw"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yukn"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yukn"], "e·ká·seʔ"],
      },
      {
        breakdown: [["sn"], "e·ká·seʔ"],
      },
      {
        breakdown: [["lon"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yon"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yukw"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yukw"], "e·ká·seʔ"],
      },
      {
        breakdown: [["sw"], "e·ká·seʔ"],
      },
      {
        breakdown: [["lon"], "e·ká·seʔ"],
      },
      {
        breakdown: [["yon"], "e·ká·seʔ"],
      },
    ],
  },
  pronouns,
);
