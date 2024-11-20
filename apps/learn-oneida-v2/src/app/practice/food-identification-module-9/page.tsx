"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { createModule9FoodLists } from "@/data/module09";

const meta: any = () => {
  return [
    { title: "Food identification (module 9)" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

export default function PracticeFoodIdentificationModule9() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    const list = createModule9FoodLists();

    for (const datum of list) {
      const key = datum.key;
      if (datum.singular) {
        resultOn.push({ key, text: datum.singular[0] });
        resultEn.push({ key, text: datum.en[0] });
      }
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice identifying food from module 9
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
