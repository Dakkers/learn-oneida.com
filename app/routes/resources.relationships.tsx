import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { RelationshipsResource } from "~/components/resources/Relationships";

export const meta: MetaFunction = () => {
  return [
    { title: "Relationships" },
    {
      name: "description",
      content: "Relationships in Oneida",
    },
  ];
};

export default function ResourcesMonths() {
  return (
    <div>
      <RelationshipsResource />
    </div>
  );
}
