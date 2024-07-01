import React from "react";
import { DomesticatedAnimalsArticle } from "~/components/articles/DomesticatedAnimals";

const meta: any = () => {
  return [
    { title: "Domesticated Animals" },
    {
      name: "description",
      content: "Domesticated animals in Oneida",
    },
  ];
};

export default function ArticlesDomesticatedAnimals() {
  return (
    <div>
      <DomesticatedAnimalsArticle />
    </div>
  );
}
