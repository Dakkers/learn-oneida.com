"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { convertBreakdownToPlainText } from "@ukwehuwehneke/language-components";
import {
  createModule8CharacteristicsList,
  getEnglishTranslation,
} from "@/data/module08";

const meta: any = () => {
  return [
    { title: "Object characteristics (module 8)" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

export default function PracticeObjectCharacteristicsModule8() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    const list = createModule8CharacteristicsList();

    for (const datum of list) {
      for (const attr of [
        "verb",
        "verbNegated",
        "withNoun",
        "haveNoun",
        "haveNounPlural",
        "verbPast",
        "withNounPast",
        "haveNounPast",
        "haveNounPastPlural",
      ] as const) {
        if (!datum[attr]) {
          continue;
        }
        const key = `${datum.key}-${attr}`;
        // @ts-expect-error Need better typing on the module 8 list
        resultOn.push({ key, text: convertBreakdownToPlainText(datum[attr]) });
        resultEn.push({ key, text: getEnglishTranslation(datum, attr) });
      }
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice identifying characteristics from module 8
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
