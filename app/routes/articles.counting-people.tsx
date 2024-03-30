import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CountingPeopleArticle } from "~/components/articles/CountingPeople";

export const meta: MetaFunction = () => {
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
