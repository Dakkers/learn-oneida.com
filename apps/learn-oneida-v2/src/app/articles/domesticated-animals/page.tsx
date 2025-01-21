import React from "react";
import { DomesticatedAnimalsArticle } from "~/components/articles/DomesticatedAnimals";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domesticated Animals",
  description: "Domesticated animals in Oneida",
};

export default function ArticlesDomesticatedAnimals() {
  return (
    <PageWrapper>
      <DomesticatedAnimalsArticle />
    </PageWrapper>
  );
}
