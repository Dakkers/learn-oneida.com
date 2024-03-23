import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CitiesArticle } from "~/components/articles/Cities";

export const meta: MetaFunction = () => {
  return [
    { title: "Cities" },
    {
      name: "description",
      content: "Cities in Oneida",
    },
  ];
};

export default function ArticlesCities() {
  return (
    <div>
      <CitiesArticle />
    </div>
  );
}
