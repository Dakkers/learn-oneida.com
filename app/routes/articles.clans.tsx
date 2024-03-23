import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { ClansArticle } from "~/components/articles/Clans";

export const meta: MetaFunction = () => {
  return [
    { title: "Clans" },
    {
      name: "description",
      content: "Clans in Oneida",
    },
  ];
};

export default function ArticlesClans() {
  return (
    <div>
      <ClansArticle />
    </div>
  );
}
