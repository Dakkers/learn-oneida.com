import React from "react";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";

const meta: any = () => {
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
