import { createParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/family",
    translation: "{{pronounPossessive}} family",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["ak"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["sa"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["lao"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["ako"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["ao"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["ukni"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["sni"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["ukwa"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["swa"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["laoti"], "hwa·tsíle̲ʔ"],
      },
      {
        breakdown: [["aoti"], "hwa·tsíle̲ʔ"],
      },
    ],
  },
  ["i", "u", "m", "f", "it", "uni", "u2", "us", "yall", "ms", "fs"],
);

export default data;
