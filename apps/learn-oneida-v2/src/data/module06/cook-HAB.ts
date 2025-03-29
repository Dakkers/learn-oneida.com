"use client";
import { createParadigmData } from "@/utils/paradigm";
import { pluralizeVerbCommon } from "@/utils/translation";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerb}} cooking",
    // translationFn: (pronoun) =>
    //   `{{pronoun}} ${pluralizeVerbCommon(pronoun, "cook")}`,
    type: "PS",
    phrases: [
      {
        breakdown: [["ke"], "khu·níheʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["se"], "khu·níheʔ"],
      },
      {
        breakdown: [["la"], "khu·níheʔ"],
      },
      {
        breakdown: [["ye"], "khu·níheʔ"],
      },
      {
        breakdown: [["ka"], "khu·níheʔ"],
      },
      {
        breakdown: [["tni"], "khu·níheʔ"],
      },
      {
        breakdown: [["yakni"], "khu·níheʔ"],
      },
      {
        breakdown: [["sni"], "khu·níheʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["ni"], "khu·níheʔ"],
      },
      {
        breakdown: [["kni"], "khu·níheʔ"],
      },
      {
        breakdown: [["twa"], "khu·níheʔ"],
      },
      {
        breakdown: [["yakwa"], "khu·níheʔ"],
      },
      {
        breakdown: [["swa"], "khu·níheʔ"],
      },
      {
        breakdown: [["lati"], "khu·níheʔ"],
      },
      {
        breakdown: [["kuti"], "khu·níheʔ"],
      },
    ],
  },
  pronouns,
);
