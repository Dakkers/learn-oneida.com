
import React from "react";
import { CardinalDirectionsArticle } from "~/components/articles/CardinalDirections";

const meta: any = () => {
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
