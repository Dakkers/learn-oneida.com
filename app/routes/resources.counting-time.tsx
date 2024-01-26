import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CountingTimeResource } from "~/components/resources/CountingTime";

export const meta: MetaFunction = () => {
  return [
    { title: "Counting lengths of time" },
    {
      name: "description",
      content: "Counting lengths of time in Oneida",
    },
  ];
};

export default function ResourcesCountingTime() {
  return (
    <div>
      <CountingTimeResource />
    </div>
  );
}
