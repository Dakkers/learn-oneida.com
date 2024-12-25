import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} older brother",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "lakeʔkʌ́ha̲",
      breakdown: [{ text: "lake" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "u",
      phrase: "yaʔkʌ́ha̲",
      breakdown: [{ text: "ya" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "m",
      phrase: "loʔkʌ́ha̲",
      breakdown: [{ text: "lo" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "f",
      phrase: "akoʔkʌ́ha̲",
      breakdown: [{ text: "ako", type: "PB" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "us",
      phrase: "shukwaʔkʌ́ha̲",
      breakdown: [{ text: "shukwa" }, "ʔkʌ́ha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetswaʔkʌ́ha̲",
      breakdown: [["h", "RPL"], { text: "etswa" }, "ʔkʌ́ha̲"],
    },
  ],
};

export default data;
