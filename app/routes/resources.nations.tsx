import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { NationsResource } from "~/components/resources/Nations";

export const meta: MetaFunction = () => {
  return [
    { title: "Nations" },
    {
      name: "description",
      content: "Nations in Oneida",
    },
  ];
};

export default function ResourcesNations() {
  return (
    <div>
      <NationsResource />
    </div>
  );
}
