import {
  createParadigmData,
  type ParadigmData,
} from "~/components/ParadigmTable";

const data: ParadigmData = createParadigmData(
  {
    audioFolder: "module02/ask",
    translation: "{{agent}} ask {{subject}}!",
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
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
