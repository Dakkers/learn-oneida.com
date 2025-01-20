import React from "react";
import { MonthsArticle } from "~/components/articles/Months";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Months",
  description: "Months in Oneida",
};

export default function ArticlesMonths() {
  return (
    <PageWrapper>
      <MonthsArticle />
    </PageWrapper>
  );
}
