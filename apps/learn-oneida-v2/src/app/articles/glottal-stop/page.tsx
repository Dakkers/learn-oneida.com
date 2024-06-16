
import React from "react";
import { GlottalStopArticle } from "~/components/articles/GlottalStop";

export const meta: any = () => {
  return [
    { title: "Glottal Stop" },
    {
      name: "description",
      content: "Glottal stops in Oneida",
    },
  ];
};

export default function ArticlesGlottalStop() {
  return <GlottalStopArticle />;
}
