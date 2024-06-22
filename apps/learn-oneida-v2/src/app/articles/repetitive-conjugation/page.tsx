
import React from "react";
import { RepetitiveFeatureArticle } from "~/components/articles/RepetitiveFeature";

const meta: any = () => {
  return [
    { title: "Repetitive Conjugation" },
    {
      name: "description",
      content: "The repetitive conjugation in Oneida",
    },
  ];
};

export default function ArticlesRepetitiveConjugation() {
  return (
    <div>
      <RepetitiveFeatureArticle />
    </div>
  );
}
