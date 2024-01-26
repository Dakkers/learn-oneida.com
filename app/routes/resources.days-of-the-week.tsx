import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { DaysOfTheWeekResource } from "~/components/resources/DaysOfTheWeek";

export const meta: MetaFunction = () => {
  return [
    { title: "Days of the week" },
    {
      name: "description",
      content: "Days of the week in Oneida",
    },
  ];
};

export default function ResourcesDaysOfTheWeek() {
  return (
    <div>
      <DaysOfTheWeekResource />
    </div>
  );
}
