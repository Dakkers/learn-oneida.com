import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { MonthsArticle } from "~/components/articles/Months";

export const meta: MetaFunction = () => {
  return [
    { title: "Months" },
    {
      name: "description",
      content: "Months in Oneida",
    },
  ];
};

export default function ArticlesMonths() {
  return (
    <div>
      <MonthsArticle />
    </div>
  );
}
