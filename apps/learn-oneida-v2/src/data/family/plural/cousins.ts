import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/cousins",
    translation: "{{pronounPossessive}} cousins {{note}}",
    type: "PO",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["ukw"], "alaʔsé·shuha"],
      },
      {
        breakdown: [["sw"], "alaʔsé·shuha"],
      },
      {
        breakdown: [["lon"], "alaʔsé·shuha"],
      },
      {
        breakdown: [["lon"], "alaʔsé·shuha"],
      },
      {
        breakdown: [["on"], "alaʔsé·shuha"],
      },
    ],
  },
  // @ts-expect-error Pronoun shenanigans
  ["i", "u", "m", "f", "f_f"],
);

export default data;
