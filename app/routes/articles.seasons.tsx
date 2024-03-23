import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { SeasonsArticle } from "~/components/articles/Seasons";

export const meta: MetaFunction = () => {
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
