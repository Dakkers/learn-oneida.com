
import React from "react";
import { ClockTimeArticle } from "~/components/articles/ClockTime";

export const meta: any = () => {
  return [
    { title: "Clock time" },
    {
      name: "description",
      content: "Clock time in Oneida",
    },
  ];
};

export default function ArticlesClockTime() {
  return (
    <div>
      <ClockTimeArticle />
    </div>
  );
}
