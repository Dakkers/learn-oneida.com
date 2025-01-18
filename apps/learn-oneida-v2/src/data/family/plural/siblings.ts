import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} siblings",
    type: "PS",
    phrases: [
      {
        breakdown: [["te", "RECP"], ["yakw"], "atahnuteleʔshú·ha̲"],
      },
      {
        breakdown: [["te", "RECP"], ["sw"], "atahnuteleʔshú·ha̲"],
      },
      {
        breakdown: [["te", "RECP"], ["hu"], "tahnuteleʔshú·ha̲"],
      },
      {
        breakdown: [["te", "RECP"], ["hu"], "tahnuteleʔshú·ha̲"],
      },
      {
        breakdown: [["te", "RECP"], ["ku"], "tahnuteleʔshú·ha̲"],
      },
    ],
  },
  // @ts-expect-error Pronoun shenanigans
  ["i", "u", "m", "f", "f_f"],
);

export default data;
