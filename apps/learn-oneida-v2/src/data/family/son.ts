import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} son",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "liyʌ́ha̲",
      breakdown: [{ text: "li" }, "yʌ́ha̲"],
    },
    {
      pronoun: "u",
      phrase: "hetshyʌ́ha̲",
      breakdown: [["h", "RPL"], ["etsh"], "yʌ́ha̲"],
    },
    {
      pronoun: "m",
      phrase: "loyʌ́ha̲",
      breakdown: [{ text: "lo" }, "yʌ́ha̲"],
    },
    {
      pronoun: "f",
      phrase: "luwayʌ́ha̲",
      breakdown: [["luwa"], "yʌ́ha̲"],
    },
    {
      pronoun: "us",
      phrase: "etniyʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etni" }, "yʌ́ha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetsniyʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etsni" }, "yʌ́ha̲"],
    },
  ],
};

export default data;
