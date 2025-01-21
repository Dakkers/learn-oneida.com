import React from "react";
import { StressArticle } from "~/components/articles/Stress";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stress and Accents",
  description: "Stress and accents in Oneida",
};

export default function ArticlesStress() {
  return (
    <PageWrapper>
      <StressArticle />
    </PageWrapper>
  );
}
