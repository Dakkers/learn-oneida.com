import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module01/pronominals/blue/O",
    translation: "{{pronoun}} {{refVerbPast}} pulled it out",
    type: "PO",
    phrases: [
      {
        breakdown: [["wak"], "ótshyu"],
      },
      {
        breakdown: [["s"], "ótshyu"],
      },
      {
        breakdown: [["la"], "ótshyu"],
      },
      {
        breakdown: [["yaka"], "ótshyu"],
      },
      {
        breakdown: [["ya"], "ótshyu"],
      },
      {
        breakdown: [["yukn"], "ótshyu"],
      },
      {
        breakdown: [["yukn"], "ótshyu"],
      },
      {
        breakdown: [["sn"], "ótshyu"],
      },
      {
        breakdown: [["lon"], "ótshyu"],
      },
      {
        breakdown: [["yon"], "ótshyu"],
      },
      {
        breakdown: [["yuky"], "ótshyu"],
      },
      {
        breakdown: [["yuky"], "ótshyu"],
      },
      {
        breakdown: [["tsy"], "ótshyu"],
      },
      {
        breakdown: [["lon"], "ótshyu"],
      },
      {
        breakdown: [["yon"], "ótshyu"],
      },
    ],
    whispered: false,
  },
  pronouns,
);

export default data;
