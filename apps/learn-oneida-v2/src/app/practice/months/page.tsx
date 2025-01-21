import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { createMonthsData } from "@/data/module04";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Months",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeMonths() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of createMonthsData().months) {
      resultEn.push({ key: datum.key, text: datum.en });
      resultOn.push({ key: datum.key, text: datum.translation });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <Heading level={1} variant="headlineL">
        Practice months
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
