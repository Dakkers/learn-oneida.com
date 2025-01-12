import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} relative",
    type: "PLB",
    phrases: [
      {
        breakdown: [["ak"], "ukwé·taʔ"],
      },
      {
        breakdown: [["s"], "ukwé·taʔ"],
      },
      {
        breakdown: [["la"], "ukwé·taʔ"],
      },
      {
        breakdown: [["ako"], "kwé·taʔ"],
      },
      {
        breakdown: [["a"], "ukwé·taʔ"],
      },
      {
        breakdown: [["ukn"], "ukwé·taʔ"],
      },
      {
        breakdown: [["ukn"], "ukwé·taʔ"],
      },
      {
        breakdown: [["sn"], "ukwé·taʔ"],
      },
      {
        breakdown: [["laon"], "ukwé·taʔ"],
      },
      {
        breakdown: [["aon"], "ukwé·taʔ"],
      },
      {
        breakdown: [["uky"], "ukwé·taʔ"],
      },
      {
        breakdown: [["uky"], "ukwé·taʔ"],
      },
      {
        breakdown: [["tsy"], "ukwé·taʔ"],
      },
      {
        breakdown: [["laon"], "ukwé·taʔ"],
      },
      {
        breakdown: [["aon"], "ukwé·taʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
