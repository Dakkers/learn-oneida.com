import React from "react";
import { AroundTheHouseArticle } from "~/components/articles/AroundTheHouse";

const meta: any = () => {
  return [
    { title: "AroundTheHouse" },
    {
      name: "description",
      content: "Around the house in Oneida",
    },
  ];
};

export default function ArticlesAroundTheHouse() {
  return (
    <div>
      <AroundTheHouseArticle />
    </div>
  );
}
