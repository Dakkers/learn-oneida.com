import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { RelationshipsArticle } from "~/components/articles/Relationships";

export const meta: MetaFunction = () => {
  return [
    { title: "Relationships" },
    {
      name: "description",
      content: "Relationships in Oneida",
    },
  ];
};

export default function ArticlesMonths() {
  return (
    <div>
      <RelationshipsArticle />
    </div>
  );
}
