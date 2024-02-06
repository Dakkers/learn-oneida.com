import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { DomesticatedAnimalsResource } from "~/components/resources/DomesticatedAnimals";

export const meta: MetaFunction = () => {
  return [
    { title: "Domesticated animals" },
    {
      name: "description",
      content: "Domesticated animals in Oneida",
    },
  ];
};

export default function ResourcesDomesticatedAnimals() {
  return (
    <div>
      <DomesticatedAnimalsResource />
    </div>
  );
}
