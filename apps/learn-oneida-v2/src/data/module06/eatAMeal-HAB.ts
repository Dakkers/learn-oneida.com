"use client";
import { createParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} eat (meals)",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "eat")} (meals)`,
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["s"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["l"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["yu"], "tekhu·níheʔ"],
      },
      {
        breakdown: [["w"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["ty"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["yaky"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["tsy"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["hy"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["ky"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["tw"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["yakw"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["sw"], "atekhu·níheʔ"],
      },
      {
        breakdown: [["lu"], "tekhu·níheʔ"],
      },
      {
        breakdown: [["ku"], "tekhu·níheʔ"],
      },
    ],
  },
  pronouns,
);
