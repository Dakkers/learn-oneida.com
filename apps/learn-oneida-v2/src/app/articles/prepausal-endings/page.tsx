import React from "react";
import { PrepausalEndingsArticle } from "~/components/articles/PrepausalEndings";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepausal Endings",
  description: "Prepausal vs. medial endings in Oneida",
};

export default function ArticlesPrepausalEndings() {
  return (
    <PageWrapper>
      <PrepausalEndingsArticle />
    </PageWrapper>
  );
}
