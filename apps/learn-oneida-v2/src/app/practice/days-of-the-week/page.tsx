import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { getDaysOfWeekData } from "@/data/module04";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Days of the week",
  description: "Match the Oneida words with the English words.",
};

export default function PracticeDaysOfTheWeek() {
  return (
    <PageWrapper>
      <Heading level={1} variant="headlineL">
        Days of the Week
      </Heading>

      {/* @ts-expect-error Who cares about this component right now? */}
      <MatchingGamePage data={getDaysOfWeekData().days} />
    </PageWrapper>
  );
}
