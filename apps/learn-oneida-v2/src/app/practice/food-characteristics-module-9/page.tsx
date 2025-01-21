import React from "react";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { createModule9FoodCharacteristics } from "@/data/module09";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food characteristics (module 9)",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeFoodIdentificationModule9() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    const list = createModule9FoodCharacteristics();

    for (const datum of list) {
      const key = datum.key;
      resultOn.push({ key, text: datum.one[0] });
      resultEn.push({ key, text: datum.en[0] });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>
        Practice identifying food characteristics from module 9
      </SectionHeading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
