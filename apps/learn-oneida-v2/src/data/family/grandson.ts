import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module02/grandson",
    translation: "{{pronounPossessive}} grandson",
    type: "PP",
    categories: ["kinship"],
    phrases: [
      {
        breakdown: [["liy"], "atléha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etsh"], "atléha̲"],
      },
      {
        breakdown: [["lo"], "tléha̲"],
      },
      {
        breakdown: [["luw"], "atléha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["ethy"], "atléha̲"],
      },
      {
        breakdown: [["h", "RPL"], ["etshy"], "atléha̲"],
      },
    ],
  },
  ["i", "u", "m", "f", "us", "yall"],
);

export default data;
