import React from "react";
import { RoadsArticle } from "~/components/articles/Roads";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roads",
  description: "Roads in the Oneida of the Thames community",
};

export default function ArticlesRoads() {
  return (
    <PageWrapper>
      <RoadsArticle />
    </PageWrapper>
  );
}
