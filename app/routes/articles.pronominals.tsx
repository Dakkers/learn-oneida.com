import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PronominalsArticle } from "~/components/articles/Pronominals";

export const meta: MetaFunction = () => {
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
