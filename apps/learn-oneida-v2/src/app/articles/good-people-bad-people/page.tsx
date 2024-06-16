
import React from "react";
import { GoodPeopleBadPeopleArticle } from "~/components/articles/GoodPeopleBadPeople";

export const meta: any = () => {
  return [
    { title: "Good people and bad people" },
    {
      name: "description",
      content: "Good people and bad people conjugation in Oneida",
    },
  ];
};

export default function ArticleGoodPeopleBadPeople() {
  return (
    <div>
      <GoodPeopleBadPeopleArticle />
    </div>
  );
}
