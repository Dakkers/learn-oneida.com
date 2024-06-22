
import React from "react";
import { AtSomeonesPlaceArticle } from "~/components/articles/AtSomeonesPlace";

const meta: any = () => {
  return [
    { title: "At Someone's Place" },
    {
      name: "description",
      content: "At someone's place in Oneida",
    },
  ];
};

export default function ArticlesAtSomeonesPlace() {
  return (
    <div>
      <AtSomeonesPlaceArticle />
    </div>
  );
}
