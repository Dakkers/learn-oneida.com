import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { TimesOfDayArticle } from "~/components/articles/TimesOfDay";

export const meta: MetaFunction = () => {
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
