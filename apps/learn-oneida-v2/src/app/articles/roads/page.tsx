
import React from "react";
import { RoadsArticle } from "~/components/articles/Roads";

const meta: any = () => {
  return [
    { title: "Roads" },
    {
      name: "description",
      content: "Roads in the Oneida of the Thames community",
    },
  ];
};

export default function ArticlesRoads() {
  return (
    <div>
      <RoadsArticle />
    </div>
  );
}
