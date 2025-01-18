import { createParadigmData } from "@/utils/paradigm";

export default createParadigmData(
  {
    audioFolder: "module03/good_kids_past",
    translation: "{{pronoun}} used to be a good kid",
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "eksaʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["h", "RPL"], ["s"], "eksaʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["la"], "ksaʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["ye"], "ksaʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["lati"], "ksaʔtiyóhs", ["kweʔ", "PAST"]],
        whispered: true,
      },
    ],
    whispered: false,
  },
  ["i", "u", "m", "f", "ms"],
);
