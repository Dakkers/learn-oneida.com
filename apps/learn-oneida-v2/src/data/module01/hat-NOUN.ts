import { pronouns } from "@ukwehuwehneke/language-components";
import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} hat",
    type: "PLB",
    phrases: [
      {
        breakdown: [["akw"], "aná·loleʔ"],
      },
      {
        breakdown: [["s"], "aná·loleʔ"],
      },
      {
        breakdown: [["lao"], "ná·loleʔ"],
      },
      {
        breakdown: [["ako"], "ná·loleʔ"],
      },
      {
        breakdown: [["ao"], "ná·loleʔ"],
      },
      {
        breakdown: [["uky"], "aná·loleʔ"],
      },
      {
        breakdown: [["uky"], "aná·loleʔ"],
      },
      {
        breakdown: [["tsy"], "aná·loleʔ"],
      },
      {
        breakdown: [["laon"], "aná·loleʔ"],
      },
      {
        breakdown: [["aon"], "aná·loleʔ"],
      },
      {
        breakdown: [["ukw"], "aná·loleʔ"],
      },
      {
        breakdown: [["ukw"], "aná·loleʔ"],
      },
      {
        breakdown: [["sw"], "aná·loleʔ"],
      },
      {
        breakdown: [["laon"], "aná·loleʔ"],
      },
      {
        breakdown: [["aon"], "aná·loleʔ"],
      },
    ],
  },
  pronouns,
);

export default data;
