import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PronominalsResource } from "~/components/resources/Pronominals";

export const meta: MetaFunction = () => {
  return [
    { title: "Pronominals" },
    {
      name: "description",
      content: "Pronominals in Oneida",
    },
  ];
};

export default function ResourcesPronominals() {
  return <PronominalsResource />;
}
