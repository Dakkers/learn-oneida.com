"use client";
import React from "react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { getDaysOfWeekData } from "@/data/module04";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { SectionHeading } from "@ukwehuwehneke/language-components";

// export const metadata: Metadata = {
//   title: "Days of the week",
//   description: "Match the Oneida words with the English words.",
// };

export default function PracticeDaysOfTheWeek() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Days of the Week</SectionHeading>

      {/* @ts-expect-error Who cares about this component right now? */}
      <MatchingGamePage data={getDaysOfWeekData().days} />
    </PageWrapper>
  );
}
