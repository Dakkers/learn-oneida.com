import React from "react";
import { AtSomeonesPlaceArticle } from "~/components/articles/AtSomeonesPlace";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At Someone's Place",
  description: "At someone's place in Oneida",
};

export default function ArticlesAtSomeonesPlace() {
  return (
    <PageWrapper>
      <AtSomeonesPlaceArticle />
    </PageWrapper>
  );
}
