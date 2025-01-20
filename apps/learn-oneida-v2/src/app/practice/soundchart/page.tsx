import React from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Soundchart } from "@/components/practice/Soundchart";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundchart",
  description:
    "Master the sounds of the Oneida language with our comprehensive pronunciation guide, including audio examples and helpful tips.",
};

export default function PracticeSoundchart() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Sound Chart</SectionHeading>

      <Soundchart level={2} />
    </PageWrapper>
  );
}
