import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { StressResource } from "~/components/resources/Stress";

export const meta: MetaFunction = () => {
  return [
    { title: "Stress and Accents" },
    {
      name: "description",
      content: "Stress and accents in Oneida",
    },
  ];
};

export default function ResourcesStress() {
  return <StressResource />;
}
