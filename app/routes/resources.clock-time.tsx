import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { ClockTimeResource } from "~/components/resources/ClockTime";

export const meta: MetaFunction = () => {
  return [
    { title: "Clock time" },
    {
      name: "description",
      content: "Clock time in Oneida",
    },
  ];
};

export default function ResourcesClockTime() {
  return (
    <div>
      <ClockTimeResource />
    </div>
  );
}
