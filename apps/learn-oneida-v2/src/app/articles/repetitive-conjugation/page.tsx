import React from "react";
import { RepetitiveFeatureArticle } from "~/components/articles/RepetitiveFeature";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Repetitive Conjugation",
  description: "The repetitive conjugation in Oneida",
};

export default function ArticlesRepetitiveConjugation() {
  return (
    <PageWrapper>
      <RepetitiveFeatureArticle />
    </PageWrapper>
  );
}
