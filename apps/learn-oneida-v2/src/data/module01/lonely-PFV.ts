import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module01/pronominals/blue/V",
    translation: "{{pronoun}} {{refVerbPast}} been lonely",
    type: "PB",
    phrases: [
      {
        breakdown: [["wak"], "ʌtuní"],
      },
      {
        breakdown: [["s"], "ʌtuní"],
      },
      {
        breakdown: [["law"], "ʌtuní"],
      },
      {
        breakdown: [["yakaw"], "ʌtuní"],
      },
      {
        breakdown: [["yaw"], "ʌtuní"],
      },
      {
        breakdown: [["yukn"], "ʌtuní"],
      },
      {
        breakdown: [["yukn"], "ʌtuní"],
      },
      {
        breakdown: [["sn"], "ʌtuní"],
      },
      {
        breakdown: [["lon"], "ʌtuní"],
      },
      {
        breakdown: [["yon"], "ʌtuní"],
      },
      {
        breakdown: [["yukw"], "ʌtuní"],
      },
      {
        breakdown: [["yukw"], "ʌtuní"],
      },
      {
        breakdown: [["sw"], "ʌtuní"],
      },
      {
        breakdown: [["lon"], "ʌtuní"],
      },
      {
        breakdown: [["yon"], "ʌtuní"],
      },
    ],
    whispered: false,
  },
  pronouns,
);

export default data;
