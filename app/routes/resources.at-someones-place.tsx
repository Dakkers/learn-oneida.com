import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { AtSomeonesPlaceResource } from "~/components/resources/AtSomeonesPlace";

export const meta: MetaFunction = () => {
  return [
    { title: "AtSomeonesPlace" },
    {
      name: "description",
      content: "At someone's place in Oneida",
    },
  ];
};

export default function ResourcesAtSomeonesPlace() {
  return (
    <div>
      <AtSomeonesPlaceResource />
    </div>
  );
}
