import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { WhisperedEndingsResource } from "~/components/resources/WhisperedEndings";

export const meta: MetaFunction = () => {
  return [
    { title: "Whispered Endings" },
    {
      name: "description",
      content: "Whispered endings in Oneida",
    },
  ];
};

export default function ResourcesWhisperedEndings() {
  return <WhisperedEndingsResource />;
}
