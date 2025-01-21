import React from "react";
import { CountingTimeArticle } from "~/components/articles/CountingTime";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counting lengths of time",
  description: "Counting lengths of time in Oneida",
};

export default function ArticlesCountingTime() {
  return (
    <PageWrapper>
      <CountingTimeArticle />
    </PageWrapper>
  );
}
