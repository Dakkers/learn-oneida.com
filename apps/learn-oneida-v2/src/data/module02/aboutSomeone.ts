import { singlePronouns } from "@ukwehuwehneke/language-components";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

const data = createParadigmData(
  {
    audioFolder: "module02/about",
    translation: "About {{pronounObjective}}",
    type: "PP",
    phrases: [
      { breakdown: [["ak"], "lihwá·ke"] },
      { breakdown: [["sa"], "lihwá·ke"] },
      { breakdown: [["lao"], "lihwá·ke"] },
      { breakdown: [["ako"], "lihwá·ke"] },
      { breakdown: [["ao"], "lihwá·ke"] },
      { breakdown: [["laoti"], "lihwá·ke"] },
      { breakdown: [["aoti"], "lihwá·ke"] },
    ],
  },

  [...singlePronouns, "ms", "fs"],
);

export default data;
