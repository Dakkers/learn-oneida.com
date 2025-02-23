import React from "react";
import { PronominalsArticle } from "~/components/articles/Pronominals";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pronominals",
  description: "Pronominals in Oneida",
};

export const runtime = "edge";

export default function ArticlesPronominals() {
  return (
    <PageWrapper>
      <PronominalsArticle />
    </PageWrapper>
  );
}
