import React from "react";
import { SeasonsArticle } from "~/components/articles/Seasons";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasons",
  description: "Seasons in Oneida",
};

export const runtime = "edge";

export default function ArticlesSeasons() {
  return (
    <PageWrapper>
      <SeasonsArticle />
    </PageWrapper>
  );
}
