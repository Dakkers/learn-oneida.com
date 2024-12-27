import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{subject}} tell {{object}}!",
    type: "PP",
    phrases: [
      {
        breakdown: [["tak"], "hlo·lí"],
      },
      {
        breakdown: [["takwa"], "hlo·lí"],
      },
      {
        breakdown: [["she"], "hlo·lí"],
      },
      {
        breakdown: [["h", "RPL"], ["ets"], "hlo·lí"],
      },
    ],
  },
  // @ts-expect-error Pronominal things
  ["cmd_u_i", "cmd_u_theyni", "u_f", "u_m"],
);

export default data;
