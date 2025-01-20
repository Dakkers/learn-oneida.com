import React from "react";
import { LetterHArticle } from "~/components/articles/LetterH";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "The Letter H",
  description: "The letter H in Oneida",
};

export default function ArticlesLetterH() {
  return (
    <PageWrapper>
      <LetterHArticle />
    </PageWrapper>
  );
}
