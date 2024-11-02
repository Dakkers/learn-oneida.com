"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { arrayify } from "~/utils";
import { createModule7NounsList } from "@/data/module07";
import { convertBreakdownToPlainText } from "@ukwehuwehneke/language-components";

const meta: any = () => {
  return [
    { title: "Noun identification (module 7)" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

export default function PracticeNounIdentificationModule7() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    const list = createModule7NounsList();

    for (const datum of list) {
      resultEn.push({ key: datum.key, text: datum.en });
      resultOn.push({
        key: datum.key,
        text: convertBreakdownToPlainText(datum.single),
      });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice identifying nouns from module 7
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
