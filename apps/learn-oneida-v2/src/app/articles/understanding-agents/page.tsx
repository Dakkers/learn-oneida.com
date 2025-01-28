import React from "react";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";
import { UnderstandingPronominalAgentsArticle } from "@/components/articles/UnderstandingPronominalGroups";

export const metadata: Metadata = {
  title: "Understanding Pronominal Agents",
  description:
    "Learn how agents in Oneida work with simple diagrams and concrete explanations.",
};

export default function ArticlesPronominalAgents() {
  return (
    <PageWrapper>
      <UnderstandingPronominalAgentsArticle />
    </PageWrapper>
  );
}
