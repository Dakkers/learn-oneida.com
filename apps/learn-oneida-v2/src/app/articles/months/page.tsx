import React from "react";
import { MonthsArticle } from "~/components/articles/Months";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Months",
  description: "Months in Oneida",
};

export const runtime = "edge";

export default function ArticlesMonths() {
  return (
    <PageWrapper>
      <MonthsArticle />
    </PageWrapper>
  );
}
