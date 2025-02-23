import React from "react";
import { CitiesArticle } from "~/components/articles/Cities";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cities",
  description: "Cities in Oneida",
};

export const runtime = "edge";

export default function ArticlesCities() {
  return (
    <PageWrapper>
      <CitiesArticle />
    </PageWrapper>
  );
}
