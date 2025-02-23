import React from "react";
import { DaysOfTheWeekArticle } from "~/components/articles/DaysOfTheWeek";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Days of the week",
  description: "Days of the week in Oneida",
};

export const runtime = "edge";

export default function ArticlesDaysOfTheWeek() {
  return (
    <PageWrapper>
      <DaysOfTheWeekArticle />
    </PageWrapper>
  );
}
