"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { DATA_MONTHS } from "~/components/articles/Months";
import {
  EnglishToOneidaQuiz,
  EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";

const meta: any = () => {
  return [
    { title: "Months" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

export default function PracticeMonths() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of DATA_MONTHS) {
      resultEn.push({ key: datum.key, text: datum.en });
      resultOn.push({ key: datum.key, text: datum.translation });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice months
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
