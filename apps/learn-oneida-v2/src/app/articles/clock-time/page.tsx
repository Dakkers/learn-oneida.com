import React from "react";
import { ClockTimeArticle } from "~/components/articles/ClockTime";

const meta: any = () => {
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
