import React from "react";
import { NationsArticle } from "~/components/articles/Nations";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Nations",
  description: "Nations in Oneida",
};

export default function ArticlesNations() {
  return (
    <PageWrapper>
      <NationsArticle />
    </PageWrapper>
  );
}
