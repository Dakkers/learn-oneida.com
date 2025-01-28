import React from "react";
import { RepetitiveFeatureArticle } from "~/components/articles/RepetitiveFeature";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

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
