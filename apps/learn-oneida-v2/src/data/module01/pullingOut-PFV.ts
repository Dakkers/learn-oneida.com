import { pronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{pronoun}} {{refVerbPast}} pulled it out",
    type: "PB",
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
