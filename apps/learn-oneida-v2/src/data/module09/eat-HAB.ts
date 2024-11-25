import { createParadigmData } from "~/components/ParadigmTable";
import { pronouns } from "~/utils";

export default createParadigmData(
  {
    translation: "{{pronoun}} {{refVerb}} eating",
    type: "PR",
    phrases: [
      {
        breakdown: ["i·", ["k"], "éks"],
      },
      {
        breakdown: ["í", ["hs"], "eks"],
      },
      {
        breakdown: ["í·", ["l"], "aks"],
      },
      {
        breakdown: ["i·", ["y"], "éks"],
      },
      {
        breakdown: ["i·", ["w"], "áks"],
      },
      {
        breakdown: ["í", ["tn"], "eks"],
      },
      {
        breakdown: [["yákn"], "eks"],
      },
      {
        breakdown: ["í", ["sn"], "eks"],
      },
      {
        breakdown: ["í·", ["n"], "eks"],
      },
      {
        breakdown: ["í", ["kn"], "eks"],
      },
      {
        breakdown: ["í", ["tw"], "aks"],
      },
      {
        breakdown: [["yákw"], "aks"],
      },
      {
        breakdown: ["í", ["sw"], "aks"],
      },
      {
        breakdown: [["lʌ·n"], "éks"],
      },
      {
        breakdown: [["ku·n"], "éks"],
      },
    ],
    whispered: false,
  },
  pronouns,
);
