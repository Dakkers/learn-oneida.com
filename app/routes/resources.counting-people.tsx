import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CountingPeopleResource } from "~/components/resources/CountingPeople";

export const meta: MetaFunction = () => {
  return [
    { title: "Counting people" },
    {
      name: "description",
      content: "Counting people in Oneida",
    },
  ];
};

export default function ResourcesCountingPeople() {
  return (
    <div>
      <CountingPeopleResource />
    </div>
  );
}
