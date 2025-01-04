import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/tell",
    translation: "{{agent}} tell {{subject}}!",
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
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
