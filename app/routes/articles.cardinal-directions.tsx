import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CardinalDirectionsArticle } from "~/components/articles/CardinalDirections";

export const meta: MetaFunction = () => {
  return [
    { title: "Cardinal directions" },
    {
      name: "description",
      content: "Cardinal directions in Oneida",
    },
  ];
};

export default function ArticlesCardinalDirections() {
  return (
    <div>
      <CardinalDirectionsArticle />
    </div>
  );
}
