import React from "react";
import { LetterHArticle } from "~/components/articles/LetterH";

const meta: any = () => {
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
