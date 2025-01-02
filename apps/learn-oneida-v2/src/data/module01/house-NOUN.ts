import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module01/pronominals/light_blue/C",
    translation: "{{pronounPossessive}} house",
    type: "PLB",
    phrases: [
      {
        breakdown: [["ak"], "núhsoteʔ"],
      },
      {
        breakdown: [["sa"], "núhsoteʔ"],
      },
      {
        breakdown: [["lao"], "núhsoteʔ"],
      },
      {
        breakdown: [["ako"], "núhsoteʔ"],
      },
      {
        breakdown: [["ao"], "núhsoteʔ"],
      },
      {
        breakdown: [["ukni"], "núhsoteʔ"],
      },
      {
        breakdown: [["ukni"], "núhsoteʔ"],
      },
      {
        breakdown: [["sni"], "núhsoteʔ"],
      },
      {
        breakdown: [["laoti"], "núhsoteʔ"],
      },
      {
        breakdown: [["aoti"], "núhsoteʔ"],
      },
      {
        breakdown: [["ukwa"], "núhsoteʔ"],
      },
      {
        breakdown: [["ukwa"], "núhsoteʔ"],
      },
      {
        breakdown: [["swa"], "núhsoteʔ"],
      },
      {
        breakdown: [["laoti"], "núhsoteʔ"],
      },
      {
        breakdown: [["aoti"], "núhsoteʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
