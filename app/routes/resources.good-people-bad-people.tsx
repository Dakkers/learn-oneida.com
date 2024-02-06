import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { GoodPeopleBadPeopleResource } from "~/components/resources/GoodPeopleBadPeople";

export const meta: MetaFunction = () => {
  return [
    { title: "Good people and bad people" },
    {
      name: "description",
      content: "Good people and bad people conjugation in Oneida",
    },
  ];
};

export default function ResourceGoodPeopleBadPeople() {
  return (
    <div>
      <GoodPeopleBadPeopleResource />
    </div>
  );
}
