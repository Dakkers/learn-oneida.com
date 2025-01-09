import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/great_grandson",
    translation: "{{pronounPossessive}} great-grandson",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["liy"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["lo"], "tleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["luw"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["ethy"], "atleʔslʌ́·tuhe̲ʔ"],
      },
      {
        breakdown: [["h", "RPL"], ["etshy"], "atleʔslʌ́·tuhe̲ʔ"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
