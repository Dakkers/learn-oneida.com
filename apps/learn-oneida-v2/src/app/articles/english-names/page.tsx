import React from "react";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "English Names",
  description: "English names in Oneida",
};

export default function ArticlesEnglishNames() {
  return (
    <PageWrapper>
      <EnglishNamesArticle />
    </PageWrapper>
  );
}
