import React from "react";
import { CountingPeopleArticle } from "~/components/articles/CountingPeople";

const meta: any = () => {
  return [
    { title: "Counting people" },
    {
      name: "description",
      content: "Counting people in Oneida",
    },
  ];
};

export default function ArticlesCountingPeople() {
  return (
    <div>
      <CountingPeopleArticle />
    </div>
  );
}
