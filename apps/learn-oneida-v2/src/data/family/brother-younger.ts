import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/younger_brother",
    translation: "{{pronounPossessive}} younger brother",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["li"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etshe"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["lo"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["luwa"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etni"], "ʔkʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etsni"], "ʔkʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
