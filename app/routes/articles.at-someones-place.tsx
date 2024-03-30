import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { AtSomeonesPlaceArticle } from "~/components/articles/AtSomeonesPlace";

export const meta: MetaFunction = () => {
  return [
    { title: "AtSomeonesPlace" },
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
