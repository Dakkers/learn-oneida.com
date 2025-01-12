import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/older_brother",
    translation: "{{pronounPossessive}} older brother",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["lake"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["ya"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["lo"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["ako", "PB"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["shukwa"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etswa"], "ʔkʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
