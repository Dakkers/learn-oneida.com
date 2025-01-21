import React from "react";
import { TimesOfDayArticle } from "~/components/articles/TimesOfDay";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Times of day",
  description: "Times of day in Oneida",
};

export default function ArticlesTimesOfDay() {
  return (
    <PageWrapper>
      <TimesOfDayArticle />
    </PageWrapper>
  );
}
