import React from "react";
import { CardinalDirectionsArticle } from "~/components/articles/CardinalDirections";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardinal directions",
  description: "Cardinal directions in Oneida",
};

export const runtime = "edge";

export default function ArticlesCardinalDirections() {
  return (
    <PageWrapper>
      <CardinalDirectionsArticle />
    </PageWrapper>
  );
}
