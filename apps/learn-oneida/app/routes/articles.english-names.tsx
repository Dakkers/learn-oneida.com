import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";

export const meta: MetaFunction = () => {
  return [
    { title: "English Names" },
    {
      name: "description",
      content: "English names in Oneida",
    },
  ];
};

export default function ArticlesEnglishNames() {
  return <EnglishNamesArticle />;
}
