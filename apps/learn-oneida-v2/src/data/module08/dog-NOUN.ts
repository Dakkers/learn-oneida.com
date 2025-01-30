import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} pet dog",
    type: "PP",
    phrases: [
      {
        breakdown: [["ak"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["sʌ"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["lao"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["ako"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["ao"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["ukn"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["ukn"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["sn"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["laot"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["aot"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["ukwʌ"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["ukwʌ"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["swʌ"], "tshenʌ é·lhal"],
      },
      {
        breakdown: [["laot"], "itshenʌ é·lhal"],
      },
      {
        breakdown: [["aot"], "itshenʌ é·lhal"],
      },
    ],
  },
  pronouns,
);

export default data;
