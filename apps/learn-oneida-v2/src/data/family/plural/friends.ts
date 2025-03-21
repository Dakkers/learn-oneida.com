import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/friends",
    translation: "{{pronounPossessive}} friends {{note}}",
    type: "PO",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["ukw"], "atʌloʔsl", ["a", "JOIN"], "ʔshúha"],
      },
      {
        breakdown: [["sw"], "atʌloʔsl", ["a", "JOIN"], "ʔshúha"],
      },
      {
        breakdown: [["lon"], "atʌloʔsl", ["a", "JOIN"], "ʔshúha"],
      },
      {
        breakdown: [["lon"], "atʌloʔsl", ["a", "JOIN"], "ʔshúha"],
      },
      {
        breakdown: [["on"], "atʌloʔsl", ["a", "JOIN"], "ʔshúha"],
      },
    ],
  },
  // @ts-expect-error Pronoun shenanigans
  ["i", "u", "m", "f", "f_f"],
);

export default data;
