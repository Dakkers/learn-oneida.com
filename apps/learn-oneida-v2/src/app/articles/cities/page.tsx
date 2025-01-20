import React from "react";
import { CitiesArticle } from "~/components/articles/Cities";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Cities",
  description: "Cities in Oneida",
};

export default function ArticlesCities() {
  return (
    <PageWrapper>
      <CitiesArticle />
    </PageWrapper>
  );
}
