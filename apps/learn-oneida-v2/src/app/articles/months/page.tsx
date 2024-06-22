
import React from "react";
import { MonthsArticle } from "~/components/articles/Months";

const meta: any = () => {
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
