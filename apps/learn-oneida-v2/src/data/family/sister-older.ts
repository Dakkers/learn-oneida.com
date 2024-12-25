import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} older sister",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "yukʔkʌ́ha̲",
      breakdown: [{ text: "yuke" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "u",
      phrase: "yesaʔkʌ́ha̲",
      breakdown: [["yesa"], "ʔkʌ́ha̲"],
    },
    {
      pronoun: "m",
      phrase: "luwaʔkʌ́ha̲",
      breakdown: [["luwa"], "ʔkʌ́ha̲"],
    },
    {
      pronoun: "f",
      phrase: "akoʔkʌ́ha̲",
      breakdown: [{ text: "ako", type: "PB" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "us",
      phrase: "yukhiʔkʌ́ha̲",
      breakdown: [["yukhi"], "ʔkʌ́ha̲"],
    },
    {
      pronoun: "yall",
      phrase: "yetshiʔkʌ́ha̲",
      breakdown: [["yetshi"], "ʔkʌ́ha̲"],
    },
  ],
};

export default data;
