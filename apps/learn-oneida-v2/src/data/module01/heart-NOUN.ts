import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} heart",
    type: "PP",
    phrases: [
      {
        breakdown: [["akw"], "elyá·ne"],
      },
      {
        breakdown: [["s"], "elyá·ne"],
      },
      {
        breakdown: [["law"], "elyá·ne"],
      },
      {
        breakdown: [["akaw"], "elyá·ne"],
      },
      {
        breakdown: [["aw"], "elyá·ne"],
      },
      {
        breakdown: [["ukn"], "elyá·ne"],
      },
      {
        breakdown: [["ukn"], "elyá·ne"],
      },
      {
        breakdown: [["sn"], "elyá·ne"],
      },
      {
        breakdown: [["laon"], "elyá·ne"],
      },
      {
        breakdown: [["aon"], "elyá·ne"],
      },
      {
        breakdown: [["ukw"], "elyá·ne"],
      },
      {
        breakdown: [["ukw"], "elyá·ne"],
      },
      {
        breakdown: [["sw"], "elyá·ne"],
      },
      {
        breakdown: [["laon"], "elyá·ne"],
      },
      {
        breakdown: [["aon"], "elyá·ne"],
      },
    ],
  },
  pronouns,
);

export default data;
