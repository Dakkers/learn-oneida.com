import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CitiesResource } from "~/components/resources/Cities";

export const meta: MetaFunction = () => {
  return [
    { title: "Cities" },
    {
      name: "description",
      content: "Cities in Oneida",
    },
  ];
};

export default function ResourcesCities() {
  return (
    <div>
      <CitiesResource />
    </div>
  );
}
