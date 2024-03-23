import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { NationsArticle } from "~/components/articles/Nations";

export const meta: MetaFunction = () => {
  return [
    { title: "Nations" },
    {
      name: "description",
      content: "Nations in Oneida",
    },
  ];
};

export default function ArticlesNations() {
  return (
    <div>
      <NationsArticle />
    </div>
  );
}
