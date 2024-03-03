import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_MONTHS } from "~/components/resources/Months";
import {
  EnglishToOneidaQuiz,
  EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";

export const meta: MetaFunction = () => {
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
    EnglishToOneidaQuizProps["oneidaOptions"]
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of DATA_MONTHS) {
      resultEn.push({ key: datum.key, text: datum.en });
      resultOn.push({ key: datum.key, text: datum.on });
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
