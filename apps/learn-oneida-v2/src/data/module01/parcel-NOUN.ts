import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} parcel",
    type: "PLB",
    phrases: [
      {
        breakdown: [["ak"], "itstósliʔ"],
      },
      {
        breakdown: [["sʌ"], "tstósliʔ"],
      },
      {
        breakdown: [["lao"], "tstósliʔ"],
      },
      {
        breakdown: [["ako"], "tstósliʔ"],
      },
      {
        breakdown: [["ao"], "tstósliʔ"],
      },
      {
        breakdown: [["ukn"], "itstósliʔ"],
      },
      {
        breakdown: [["ukn"], "itstósliʔ"],
      },
      {
        breakdown: [["sn"], "itstósliʔ"],
      },
      {
        breakdown: [["laon"], "itstósliʔ"],
      },
      {
        breakdown: [["aon"], "itstósliʔ"],
      },
      {
        breakdown: [["ukwʌ"], "tstósliʔ"],
      },
      {
        breakdown: [["ukwʌ"], "tstósliʔ"],
      },
      {
        breakdown: [["swʌ"], "tstósliʔ"],
      },
      {
        breakdown: [["laon"], "itstósliʔ"],
      },
      {
        breakdown: [["aon"], "itstósliʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
