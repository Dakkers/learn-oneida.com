import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} grandson",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "liyatléha̲",
      breakdown: [{ text: "liy" }, "atléha̲"],
    },
    {
      pronoun: "u",
      phrase: "hetshatléha̲",
      breakdown: [["h", "RPL"], ["etsh"], "atléha̲"],
    },
    {
      pronoun: "m",
      phrase: "lotléha̲",
      breakdown: [{ text: "lo" }, "tléha̲"],
    },
    {
      pronoun: "f",
      phrase: "luwatléha̲",
      breakdown: [{ text: "luw" }, "atléha̲"],
    },
    {
      pronoun: "us",
      phrase: "hethyatléha̲",
      breakdown: [["h", "RPL"], { text: "ethy" }, "atléha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetshyatléha̲",
      breakdown: [["h", "RPL"], { text: "etshy" }, "atléha̲"],
    },
  ],
};

export default data;
