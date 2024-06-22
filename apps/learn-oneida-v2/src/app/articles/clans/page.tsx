
import React from "react";
import { ClansArticle } from "~/components/articles/Clans";

const meta: any = () => {
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
