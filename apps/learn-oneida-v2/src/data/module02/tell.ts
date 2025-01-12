import { createInteractiveParadigmData } from "@/utils/paradigm";

const data = createInteractiveParadigmData(
  {
    audioFolder: "module02/tell",
    translation: "({{agent}}) Tell {{subject}}!",
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
  ["u_i", "yall_i", "u_f", "u_m"],
);

export default data;
