import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { SeasonsResource } from "~/components/resources/Seasons";

export const meta: MetaFunction = () => {
  return [
    { title: "Seasons" },
    {
      name: "description",
      content: "Seasons in Oneida",
    },
  ];
};

export default function ResourcesSeasons() {
  return (
    <div>
      <SeasonsResource />
    </div>
  );
}
