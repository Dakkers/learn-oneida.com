import { createParadigmData } from "@/utils/paradigm";

export default createParadigmData(
  {
    // audioFolder: "module03/good_person_past",
    translation: "{{pronoun}} used to be a good person",
    type: "PS",
    phrases: [
      {
        breakdown: [["k"], "ukweʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["s"], "ukweʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["h", "RPL"], ["l"], "ukweʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["yak"], "ukweʔtiyo", ["hné·", "PAST"]],
      },
      {
        breakdown: [["lʌn"], "ukweʔtiyóhs", ["kweʔ", "PAST"]],
        whispered: true,
      },
    ],
    whispered: false,
  },
  ["i", "u", "m", "f", "ms"],
);
