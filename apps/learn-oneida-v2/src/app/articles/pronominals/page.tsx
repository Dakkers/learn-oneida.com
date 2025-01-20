import React from "react";
import { PronominalsArticle } from "~/components/articles/Pronominals";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Pronominals",
  description: "Pronominals in Oneida",
};

export default function ArticlesPronominals() {
  return (
    <PageWrapper>
      <PronominalsArticle />
    </PageWrapper>
  );
}
