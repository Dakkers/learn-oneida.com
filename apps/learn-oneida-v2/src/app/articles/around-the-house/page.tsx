import React from "react";
import { AroundTheHouseArticle } from "~/components/articles/AroundTheHouse";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Around the House",
  description: "Around the house in Oneida",
};

export default function ArticlesAroundTheHouse() {
  return (
    <PageWrapper>
      <AroundTheHouseArticle />
    </PageWrapper>
  );
}
