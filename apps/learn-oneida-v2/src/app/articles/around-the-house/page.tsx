import React from "react";
import { AroundTheHouseArticle } from "~/components/articles/AroundTheHouse";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "AroundTheHouse",
  description: "Around the house in Oneida",
};

export default function ArticlesAroundTheHouse() {
  return (
    <PageWrapper>
      <AroundTheHouseArticle />
    </PageWrapper>
  );
}
