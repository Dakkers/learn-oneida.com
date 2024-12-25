import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} uncle",
  type: "PP",
  phrases: [
    {
      pronoun: "i",
      phrase: "laknulhá·",
      breakdown: [{ text: "lak" }, "nulhá·"],
    },
    {
      pronoun: "u",
      phrase: "yanulhá·",
      breakdown: [{ text: "ya" }, "nulhá·"],
    },
    {
      pronoun: "m",
      phrase: "lonulhá·",
      breakdown: [{ text: "lo" }, "nulhá·"],
    },
    {
      pronoun: "f",
      phrase: "akonulhá·",
      breakdown: [{ text: "ako", type: "PB" }, "nulhá·"],
    },
    {
      pronoun: "us",
      phrase: "shukwanulhá·",
      breakdown: [{ text: "shukwa" }, "nulhá·"],
    },
    {
      pronoun: "yall",
      phrase: "hetswanulhá·",
      breakdown: [["h", "RPL"], { text: "etswa" }, "nulhá·"],
    },
  ],
};

export default data;
