import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { GlottalStopResource } from "~/components/resources/GlottalStop";

export const meta: MetaFunction = () => {
  return [
    { title: "Glottal Stop" },
    {
      name: "description",
      content: "Glottal stops in Oneida",
    },
  ];
};

export default function ResourcesGlottalStop() {
  return <GlottalStopResource />;
}
