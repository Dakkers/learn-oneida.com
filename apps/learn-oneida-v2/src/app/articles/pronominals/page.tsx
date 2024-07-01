import React from "react";
import { PronominalsArticle } from "~/components/articles/Pronominals";

const meta: any = () => {
  return [
    { title: "Pronominals" },
    {
      name: "description",
      content: "Pronominals in Oneida",
    },
  ];
};

export default function ArticlesPronominals() {
  return <PronominalsArticle />;
}
