import React from "react";
import { RelationshipsArticle } from "~/components/articles/Relationships";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationships",
  description: "Relationships in Oneida",
};

export const runtime = "edge";

export default function ArticlesRelationships() {
  return (
    <PageWrapper>
      <RelationshipsArticle />
    </PageWrapper>
  );
}
