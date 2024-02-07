import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { AroundTheHouseResource } from "~/components/resources/AroundTheHouse";

export const meta: MetaFunction = () => {
  return [
    { title: "AroundTheHouse" },
    {
      name: "description",
      content: "Around the house in Oneida",
    },
  ];
};

export default function ResourcesAroundTheHouse() {
  return (
    <div>
      <AroundTheHouseResource />
    </div>
  );
}
