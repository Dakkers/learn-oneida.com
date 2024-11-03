import React from "react";
import { CountingTimeArticle } from "~/components/articles/CountingTime";

const meta: any = () => {
  return [
    { title: "Counting lengths of time" },
    {
      name: "description",
      content: "Counting lengths of time in Oneida",
    },
  ];
};

export default function ArticlesCountingTime() {
  return <CountingTimeArticle />;
}
