import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { CountriesResource } from "~/components/resources/Countries";

export const meta: MetaFunction = () => {
  return [
    { title: "Countries" },
    {
      name: "description",
      content: "Countries in Oneida",
    },
  ];
};

export default function ResourcesCountries() {
  return (
    <div>
      <CountriesResource />
    </div>
  );
}
