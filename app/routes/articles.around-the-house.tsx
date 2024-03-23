import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { AroundTheHouseArticle } from "~/components/articles/AroundTheHouse";

export const meta: MetaFunction = () => {
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
