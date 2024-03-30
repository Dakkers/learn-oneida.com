import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { LetterHArticle } from "~/components/articles/LetterH";

export const meta: MetaFunction = () => {
  return [
    { title: "The Letter H" },
    {
      name: "description",
      content: "The letter H in Oneida",
    },
  ];
};

export default function ArticlesLetterH() {
  return <LetterHArticle />;
}
