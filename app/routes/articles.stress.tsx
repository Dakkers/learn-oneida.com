import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { StressArticle } from "~/components/articles/Stress";

export const meta: MetaFunction = () => {
  return [
    { title: "Stress and Accents" },
    {
      name: "description",
      content: "Stress and accents in Oneida",
    },
  ];
};

export default function ArticlesStress() {
  return <StressArticle />;
}