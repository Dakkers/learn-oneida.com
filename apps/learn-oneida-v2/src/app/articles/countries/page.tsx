import React from "react";
import { CountriesArticle } from "~/components/articles/Countries";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countries",
  description: "Countries in Oneida",
};

export const runtime = "edge";

export default function ArticlesCountries() {
  return (
    <PageWrapper>
      <CountriesArticle />
    </PageWrapper>
  );
}
