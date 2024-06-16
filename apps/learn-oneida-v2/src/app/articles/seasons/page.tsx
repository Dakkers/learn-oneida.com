
import React from "react";
import { SeasonsArticle } from "~/components/articles/Seasons";

export const meta: any = () => {
  return [
    { title: "Seasons" },
    {
      name: "description",
      content: "Seasons in Oneida",
    },
  ];
};

export default function ArticlesSeasons() {
  return (
    <div>
      <SeasonsArticle />
    </div>
  );
}
