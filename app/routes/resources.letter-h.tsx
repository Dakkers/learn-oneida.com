import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { LetterHResource } from "~/components/resources/LetterH";

export const meta: MetaFunction = () => {
  return [
    { title: "The Letter H" },
    {
      name: "description",
      content: "The letter H in Oneida",
    },
  ];
};

export default function ResourcesLetterH() {
  return <LetterHResource />;
}
