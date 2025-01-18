import { createInteractiveParadigmData } from "@/utils/paradigm";

const data = createInteractiveParadigmData({
  translation: "{{agent}} {{refVerb}} watching {{subject}}",
  type: "PI",
  phrases: [
    {
      breakdown: [["kuy"], "atló·loks"],
    },
    {
      breakdown: [["liy"], "atló·loks"],
    },
    {
      breakdown: [["khey"], "atló·loks"],
    },
    {
      breakdown: [["skw"], "atló·loks"],
    },
    {
      breakdown: [["h", "RPL"], ["etsh"], "atló·loks"],
    },
    {
      breakdown: [["shey"], "atló·loks"],
    },
    {
      breakdown: [["lakw"], "atló·loks"],
    },
    {
      breakdown: [["h", "RPL"], ["y"], "atló·loks"],
    },
    {
      breakdown: [["lo"], "tló·loks"],
    },
    {
      breakdown: [["shako"], "tló·loks"],
    },
    {
      breakdown: [["yukw"], "atló·loks"],
    },
    {
      breakdown: [["yes"], "atló·loks"],
    },
    {
      breakdown: [["luw"], "atló·loks"],
    },
    {
      breakdown: [["yutat"], "atló·loks"],
    },
  ],
  whispered: false,
});

export default data;
