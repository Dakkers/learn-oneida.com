import { createParadigmData } from "@/utils/paradigm";
import { pronouns } from "@ukwehuwehneke/language-components";

// Yes, there is a glottal at the end of a perfective!

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerbPast}} defecated",
    type: "PO",
    phrases: [
      {
        breakdown: [["wak"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["s"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["lo"], "ní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yako"], "ní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yo"], "ní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yuky"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yuky"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["tsy"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["lon"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yon"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yukw"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yukw"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["sw"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["lon"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
      {
        breakdown: [["yon"], "aní·tayʌ", ["ʔ", "PFV"]],
      },
    ],
    whispered: false,
  },
  pronouns,
);
