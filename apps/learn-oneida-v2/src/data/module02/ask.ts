import { createInteractiveParadigmData } from "~/components/ParadigmTable";

const data = createInteractiveParadigmData(
  {
    audioFolder: "module02/ask",
    translation: "({{agent}}) Ask {{subject}}!",
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
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
