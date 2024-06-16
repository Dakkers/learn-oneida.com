
import React from "react";
import { WhisperedEndingsArticle } from "~/components/articles/WhisperedEndings";

export const meta: any = () => {
  return [
    { title: "Whispered Endings" },
    {
      name: "description",
      content: "Whispered endings in Oneida",
    },
  ];
};

export default function ArticlesWhisperedEndings() {
  return <WhisperedEndingsArticle />;
}
