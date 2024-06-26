import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} father",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "lakeʔníha̲",
      breakdown: [{ text: "lake" }, "ʔníha̲"],
    },
    {
      pronoun: "u",
      phrase: "yaʔníha̲",
      breakdown: [{ text: "ya" }, "ʔníha̲"],
    },
    {
      pronoun: "m",
      phrase: "loʔníha̲",
      breakdown: [{ text: "lo" }, "ʔníha̲"],
    },
    {
      pronoun: "f",
      phrase: "akoʔníha̲",
      breakdown: [{ text: "ako", type: "PLB" }, "ʔníha̲"],
    },
    {
      pronoun: "us",
      phrase: "shukwaʔníha̲",
      breakdown: [{ text: "shukwa" }, "ʔníha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetswaʔníha̲",
      breakdown: [{ text: "h", type: "RPL" }, { text: "etswa" }, "ʔníha̲"],
    },
  ],
};

export default data;
