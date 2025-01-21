import React from "react";
import { GoodPeopleBadPeopleArticle } from "~/components/articles/GoodPeopleBadPeople";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Good people and bad people",
  description: "Good people and bad people conjugation in Oneida",
};

export default function ArticleGoodPeopleBadPeople() {
  return (
    <PageWrapper>
      <GoodPeopleBadPeopleArticle />
    </PageWrapper>
  );
}
