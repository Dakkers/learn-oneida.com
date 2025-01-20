import React from "react";
import { ClockTimeArticle } from "~/components/articles/ClockTime";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Clock time",
  description: "Clock time in Oneida",
};

export default function ArticlesClockTime() {
  return (
    <PageWrapper>
      <ClockTimeArticle />
    </PageWrapper>
  );
}
