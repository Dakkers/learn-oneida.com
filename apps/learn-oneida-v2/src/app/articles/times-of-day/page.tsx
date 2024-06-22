
import React from "react";
import { TimesOfDayArticle } from "~/components/articles/TimesOfDay";

const meta: any = () => {
  return [
    { title: "Times of day" },
    {
      name: "description",
      content: "Times of day in Oneida",
    },
  ];
};

export default function ArticlesTimesOfDay() {
  return (
    <div>
      <TimesOfDayArticle />
    </div>
  );
}
