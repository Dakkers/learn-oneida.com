import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { TimesOfDayResource } from "~/components/resources/TimesOfDay";

export const meta: MetaFunction = () => {
  return [
    { title: "Times of day" },
    {
      name: "description",
      content: "Times of day in Oneida",
    },
  ];
};

export default function ResourcesTimesOfDay() {
  return (
    <div>
      <TimesOfDayResource />
    </div>
  );
}
