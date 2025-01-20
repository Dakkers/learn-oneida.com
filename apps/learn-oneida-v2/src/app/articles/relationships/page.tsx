import React from "react";
import { RelationshipsArticle } from "~/components/articles/Relationships";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Relationships",
  description: "Relationships in Oneida",
};

export default function ArticlesRelationships() {
  return (
    <PageWrapper>
      <RelationshipsArticle />
    </PageWrapper>
  );
}
