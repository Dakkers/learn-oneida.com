import { ParadigmData } from "~/components/ParadigmTable";

const data: ParadigmData = {
  translation: "{{pronounPossessive}} mother",
  type: "PB",
  phrases: [
    {
      pronoun: "i",
      phrase: "aknulhá·",
      breakdown: [["ak"], "nulhá·"],
    },
    {
      pronoun: "u",
      phrase: "sanulhá·",
      breakdown: [["sa"], "nulhá·"],
    },
    {
      pronoun: "m",
      phrase: "lonulhá·",
      breakdown: [["lo"], "nulhá·"],
    },
    {
      pronoun: "f",
      phrase: "akonulhá·",
      breakdown: [["ako"], "nulhá·"],
    },
    {
      pronoun: "us",
      phrase: "yukhinulhá·",
      breakdown: [{ text: "yukhi", type: "PP" }, "nulhá·"],
    },
    {
      pronoun: "yall",
      phrase: "swanulhá·",
      breakdown: [{ text: "swa" }, "nulhá·"],
    },
  ],
};

export default data;
