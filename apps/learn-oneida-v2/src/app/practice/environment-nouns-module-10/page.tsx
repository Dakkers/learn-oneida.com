"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { createModule10EnvironmentNounsList } from "@/data/module10";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Environment noun identification (module 10)",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeEnvironmentNounIdentificationModule10() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn: Array<{ key: string; text: string }> = [];
    const resultOn: Array<{ key: string; text: string }> = [];
    const list = createModule10EnvironmentNounsList();

    for (const datum of list) {
      const key = datum.key;
      const text = datum.en[0];
      resultOn.push({ key: `${key}-root`, text: datum.root[0] });
      resultEn.push({ key: `${key}-root`, text: `${text} (root)` });

      resultOn.push({ key, text: datum.standalone[0] });
      resultEn.push({ key, text });

      if (datum.onNoun) {
        resultOn.push({ key: `${key}-on`, text: datum.onNoun });
        resultEn.push({ key: `${key}-on`, text: `on the ${text}` });
      }

      if (datum.inNoun) {
        resultOn.push({ key: `${key}-in`, text: datum.inNoun });
        resultEn.push({ key: `${key}-in`, text: `in the ${text}` });
      }
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>
        Practice identifying environment nouns from module 10
      </SectionHeading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
