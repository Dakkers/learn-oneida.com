import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/nephew",
    translation: "{{pronounPossessive}} nephew",
    type: "PI",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["liy"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etshy"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["la"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["luway"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etniy"], "uhwatʌ́ha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etsniy"], "uhwatʌ́ha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
