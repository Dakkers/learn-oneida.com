import React from "react";
import { CountingPeopleArticle } from "~/components/articles/CountingPeople";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counting people",
  description: "Counting people in Oneida",
};

export default function ArticlesCountingPeople() {
  return (
    <PageWrapper>
      <CountingPeopleArticle />
    </PageWrapper>
  );
}
