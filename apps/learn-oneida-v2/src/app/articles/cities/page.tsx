
import React from "react";
import { CitiesArticle } from "~/components/articles/Cities";

const meta: any = () => {
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
