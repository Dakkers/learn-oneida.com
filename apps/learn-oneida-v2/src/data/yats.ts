import { createParadigmData } from "~/components/ParadigmTable";

const data = createParadigmData(
  {
    audioFolder: "module01/yats",
    translation: "They call {{pronounObjective}} ...",
    type: "PP",
    phrases: [
      {
        breakdown: [["yuk"], "yáts"],
      },
      {
        breakdown: [["yesa·"], "yáts"],
      },
      {
        breakdown: [["luwa·"], "yáts"],
      },
      {
        breakdown: [["yutat"], "yáts"],
      },
      {
        breakdown: [["kuwa·"], "yáts"],
      },
      {
        breakdown: [["luwati·"], "yáts"],
      },
      {
        breakdown: [["kuwati·"], "yáts"],
      },
    ],
  },
  ["i", "u", "m", "f", "it", "ms", "fs"],
);

export default data;
