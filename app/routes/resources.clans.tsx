import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { ClansResource } from "~/components/resources/Clans";

export const meta: MetaFunction = () => {
  return [
    { title: "Clans" },
    {
      name: "description",
      content: "Clans in Oneida",
    },
  ];
};

export default function ResourcesClans() {
  return (
    <div>
      <ClansResource />
    </div>
  );
}
