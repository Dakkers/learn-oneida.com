import { createParadigmData } from "~/components/ParadigmTable";

export default createParadigmData(
  {
    audioFolder: "module03/good_kids",
    translation: "{{pronoun}} {{refVerb}} a good kid",
    type: "PR",
    phrases: [
      {
        breakdown: [["k"], "eksaʔtiyó"],
      },
      {
        breakdown: [["h", "RPL"], ["s"], "eksaʔtiyó"],
      },
      {
        breakdown: [["la"], "ksaʔtiyó"],
      },
      {
        breakdown: [["ye"], "ksaʔtiyó"],
      },
      {
        breakdown: [["lati"], "ksaʔtiyóhseʔ"],
      },
    ],
  },
  ["i", "u", "m", "f", "ms"],
);
