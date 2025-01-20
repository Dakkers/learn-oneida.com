import React from "react";
import { ClansArticle } from "~/components/articles/Clans";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clans",
  description: "Clans in Oneida",
};

export default function ArticlesClans() {
  return (
    <PageWrapper>
      <ClansArticle />
    </PageWrapper>
  );
}
