import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CountingTimeArticle } from "~/components/articles/CountingTime";

export const meta: MetaFunction = () => {
  return [
    { title: "Counting lengths of time" },
    {
      name: "description",
      content: "Counting lengths of time in Oneida",
    },
  ];
};

export default function ArticlesCountingTime() {
  return (
    <div>
      <CountingTimeArticle />
    </div>
  );
}
