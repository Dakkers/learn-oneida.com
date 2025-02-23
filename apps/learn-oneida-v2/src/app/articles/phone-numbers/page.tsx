import React from "react";
import { PhoneNumbersArticle } from "~/components/articles/PhoneNumbers";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Numbers",
  description: "Examples of dialogue involving phone numbers in Oneida",
};

export const runtime = "edge";

export default function ArticlesPhoneNumbers() {
  return (
    <PageWrapper>
      <PhoneNumbersArticle />
    </PageWrapper>
  );
}
