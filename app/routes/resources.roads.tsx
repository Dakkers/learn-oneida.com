import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { RoadsResource } from "~/components/resources/Roads";

export const meta: MetaFunction = () => {
  return [
    { title: "Roads" },
    {
      name: "description",
      content: "Roads in the Oneida of the Thames community",
    },
  ];
};

export default function ResourcesRoads() {
  return (
    <div>
      <RoadsResource />
    </div>
  );
}
