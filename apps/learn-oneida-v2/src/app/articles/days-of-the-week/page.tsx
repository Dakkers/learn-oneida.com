import React from "react";
import { DaysOfTheWeekArticle } from "~/components/articles/DaysOfTheWeek";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Days of the week",
  description: "Days of the week in Oneida",
};

export default function ArticlesDaysOfTheWeek() {
  return (
    <PageWrapper>
      <DaysOfTheWeekArticle />
    </PageWrapper>
  );
}
