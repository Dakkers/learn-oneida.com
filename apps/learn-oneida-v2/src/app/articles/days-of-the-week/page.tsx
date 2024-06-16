
import React from "react";
import { DaysOfTheWeekArticle } from "~/components/articles/DaysOfTheWeek";

export const meta: any = () => {
  return [
    { title: "Days of the week" },
    {
      name: "description",
      content: "Days of the week in Oneida",
    },
  ];
};

export default function ArticlesDaysOfTheWeek() {
  return (
    <div>
      <DaysOfTheWeekArticle />
    </div>
  );
}
