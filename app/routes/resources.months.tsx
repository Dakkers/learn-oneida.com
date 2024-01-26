import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { MonthsResource } from "~/components/resources/Months";

export const meta: MetaFunction = () => {
  return [
    { title: "Months" },
    {
      name: "description",
      content: "Months in Oneida",
    },
  ];
};

export default function ResourcesMonths() {
  return (
    <div>
      <MonthsResource />
    </div>
  );
}
