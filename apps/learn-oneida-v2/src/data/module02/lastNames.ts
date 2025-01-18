import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/last_names",
    translation: "{{pronounPossessive}} last name",
    type: "PS",
    phrases: [
      { breakdown: [["te", "DUAL"], ["k"], "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], ["ts"], "ʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], ["ha"], "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], ["ye"], "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], ["hati"], "hsʌná·se·le̲ʔ"] },
    ],
  },
  ["i", "u", "m", "f", "ms"],
);

export default data;
