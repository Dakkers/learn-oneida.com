import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    translation: "{{subject}} ask {{object}}!",
    type: "PP",
    phrases: [
      {
        breakdown: [["tak"], "liʔwanu·túse"],
      },
      {
        breakdown: [["takwa"], "liʔwanu·túse"],
      },
      {
        breakdown: [["she"], "liʔwanu·túse"],
      },
      {
        breakdown: [["h", "RPL"], ["ets"], "liʔwanu·túse"],
      },
    ],
  },
  // @ts-expect-error Pronominal things
  ["cmd_u_i", "cmd_u_theyni", "u_f", "u_m"],
);

export default data;
