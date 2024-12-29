import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{pronounPossessive}} house",
    type: "PLB",
    phrases: [
      {
        breakdown: [["ak"], "núhsaʔ"],
      },
      {
        breakdown: [["sa"], "núhsaʔ"],
      },
      {
        breakdown: [["lao"], "núhsaʔ"],
      },
      {
        breakdown: [["ako"], "núhsaʔ"],
      },
      {
        breakdown: [["ao"], "núhsaʔ"],
      },
      {
        breakdown: [["ukni"], "núhsaʔ"],
      },
      {
        breakdown: [["ukni"], "núhsaʔ"],
      },
      {
        breakdown: [["sni"], "núhsaʔ"],
      },
      {
        breakdown: [["laoti"], "núhsaʔ"],
      },
      {
        breakdown: [["aoti"], "núhsaʔ"],
      },
      {
        breakdown: [["ukwa"], "núhsaʔ"],
      },
      {
        breakdown: [["ukwa"], "núhsaʔ"],
      },
      {
        breakdown: [["swa"], "núhsaʔ"],
      },
      {
        breakdown: [["laoti"], "núhsaʔ"],
      },
      {
        breakdown: [["aoti"], "núhsaʔ"],
      },
    ],
    whispered: false,
  },
  pronouns,
);

export default data;
