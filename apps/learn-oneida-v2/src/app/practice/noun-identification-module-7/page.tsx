import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { createModule7NounsList } from "@/data/module07";
import { convertBreakdownToPlainText } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noun identification (module 7)",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export const runtime = "edge";

export default function PracticeNounIdentificationModule7() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    const list = createModule7NounsList();

    for (const datum of list) {
      resultEn.push({ key: datum.key, text: datum.en[0] });
      resultOn.push({
        key: datum.key,
        text: convertBreakdownToPlainText(datum.single),
      });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <Heading level={1} variant="headlineL">
        Practice identifying nouns from module 7
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
