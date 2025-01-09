import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    translation: "{{pronoun}} are siblings",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "RECP"], ["ty"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["yaky"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["tsy"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["hy"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["ky"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["tw"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["yakw"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["sw"], ["ata", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["hu"], ["ta", "REFL"], "hnu·téle̲ʔ"],
      },
      {
        breakdown: [["te", "RECP"], ["ku"], ["ta", "REFL"], "hnu·téle̲ʔ"],
      },
    ],
  },
  ["uni", "soni", "u2", "2m", "2f", "us", "theyni", "yall", "ms", "fs"],
);

export default data;
