import { createParadigmData } from "@/utils/paradigm";
import { pronouns } from "@ukwehuwehneke/language-components";

export default createParadigmData(
  {
    audioFolder: "module04/doesnt_want",
    translation: "{{pronoun}} don't want",
    translationFn: (pronoun) =>
      `{{pronoun}} ${["m", "f", "it"].includes(pronoun) ? "doesn't" : "don't"} want`,
    type: "PR",
    phrases: [
      {
        breakdown: ["yáh té·", ["k"], "elheʔ"],
      },
      {
        breakdown: ["yáh té", ["hs"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["l"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["y"], "ʌ́lheʔ"],
      },
      {
        breakdown: ["yáh té·", ["w"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["tn"], "elheʔ"],
      },
      {
        breakdown: ["yáh téʔ", ["yákn"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["sn"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["n"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["kn"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["tw"], "elheʔ"],
      },
      {
        breakdown: ["yáh téʔ", ["yákw"], "elheʔ"],
      },
      {
        breakdown: ["yáh té·", ["sw"], "elheʔ"],
      },
      {
        breakdown: ["yáh te", ["hʌ·n"], "élheʔ"],
      },
      {
        breakdown: ["yáh teʔ", ["ku·n"], "élheʔ"],
      },
    ],
  },
  pronouns,
);
