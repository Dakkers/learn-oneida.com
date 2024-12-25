import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} grandfather",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "lakhsótha̲",
      breakdown: [{ text: "lak" }, "hsótha̲"],
    },
    {
      pronoun: "u",
      phrase: "yahsótha̲",
      breakdown: [{ text: "ya" }, "hsótha̲"],
    },
    {
      pronoun: "m",
      phrase: "lohsótha̲",
      breakdown: [["lo"], "hsótha̲"],
    },
    {
      pronoun: "f",
      phrase: "akohsótha̲",
      breakdown: [{ text: "ako", type: "PB" }, "hsótha̲"],
    },
    {
      pronoun: "us",
      phrase: "shukwahsótha̲",
      breakdown: [{ text: "shukwa" }, "hsótha̲"],
    },
    {
      pronoun: "yall",
      phrase: "hetswahsótha̲",
      breakdown: [["h", "RPL"], { text: "etswa" }, "hsótha̲"],
    },
  ],
};

export default data;
