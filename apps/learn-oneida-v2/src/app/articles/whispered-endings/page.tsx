import React from "react";
import { WhisperedEndingsArticle } from "~/components/articles/WhisperedEndings";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whispered Endings",
  description: "Whispered endings in Oneida",
};

export const runtime = "edge";

export default function ArticlesWhisperedEndings() {
  return (
    <PageWrapper>
      <WhisperedEndingsArticle />
    </PageWrapper>
  );
}
