import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { WhisperedEndingsArticle } from "~/components/articles/WhisperedEndings";

export const meta: MetaFunction = () => {
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
