import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/son",
    translation: "{{pronounPossessive}} son",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["li"], "yʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "yʌ́ha̲"],
      },
      {
        breakdown: [["lo"], "yʌ́ha̲"],
      },
      {
        breakdown: [["luwa"], "yʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etni"], "yʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etsni"], "yʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
