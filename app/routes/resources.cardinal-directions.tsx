import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CardinalDirectionsResource } from "~/components/resources/CardinalDirections";

export const meta: MetaFunction = () => {
  return [
    { title: "Cardinal directions" },
    {
      name: "description",
      content: "Cardinal directions in Oneida",
    },
  ];
};

export default function ResourcesCardinalDirections() {
  return (
    <div>
      <CardinalDirectionsResource />
    </div>
  );
}
