"use client";
import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/love_red",
    translation: "{{pronoun}} love it",
    translationFn: (pronoun) =>
      `{{pronoun}} ${pluralizeVerbCommon(pronoun, "love")} it`,
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["s"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["la"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ye"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["ka"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["tni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yakni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["sni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["kni"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["twa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["yakwa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["swa"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["lati"], "nolúkhwaʔ"],
      },
      {
        breakdown: [["kuti"], "nolúkhwaʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
