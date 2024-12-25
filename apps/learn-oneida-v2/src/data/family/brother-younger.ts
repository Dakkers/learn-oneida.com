import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} younger brother",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "liʔkʌ́ha̲",
      breakdown: [{ text: "li" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "u",
      phrase: "hetsheʔkʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etshe" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "m",
      phrase: "loʔkʌ́ha̲",
      breakdown: [{ text: "lo" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "f",
      phrase: "luwaʔkʌ́ha̲",
      breakdown: [["luwa"], "ʔkʌ́ha̲"],
    },
    {
      pronoun: "us",
      phrase: "etniʔkʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etni" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetsniʔkʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etsni" }, "ʔkʌ́ha̲"],
    },
  ],
};

export default data;
