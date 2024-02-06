import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { RepetitiveFeatureResource } from "~/components/resources/RepetitiveFeature";

export const meta: MetaFunction = () => {
  return [
    { title: "Repetitive Conjugation" },
    {
      name: "description",
      content: "The repetitive conjugation in Oneida",
    },
  ];
};

export default function ResourcesRepetitiveConjugation() {
  return (
    <div>
      <RepetitiveFeatureResource />
    </div>
  );
}
