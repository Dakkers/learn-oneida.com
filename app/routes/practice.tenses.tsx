import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { RadioGroup } from "@/design/components/RadioGroup";
import { Button } from "@/design/primitives/button";
import { Quiz, useQuizContext } from "~/components/practice/Quiz";
import { Box } from "@/design/components/box";
import { bodyTenseData, characterTenseData, emotionTenseData, mindTenseData, miscTenseData, physicalTenseData } from "~/data/module05";
import { convertBreakdownToPlainText } from "~/components/TextBreakdown";
import _ from "lodash";
import { Text } from "@/design/components/text";
import { NextBtn, QuizContainerContext, Settings } from "~/components/practice/QuizContainer";

export const meta: MetaFunction = () => {
  return [
    { title: "Tenses practice" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of tenses in the Oneida language.",
    },
  ];
};

const TENSE_LIST = [
  "present",
  "past",
  "fut",
  "ifut",
  "cmd",
] as const;

const DATA_FULL_LIST = _.flattenDeep(
  [
    ...characterTenseData,
    ...bodyTenseData,
    ...mindTenseData,
    ...miscTenseData,
    ...emotionTenseData,
    ...physicalTenseData,
  ].map((datum) =>
    TENSE_LIST.map((tense) => {
      const value = datum[tense];
      if (Array.isArray(value)) {
        return { tense, value: convertBreakdownToPlainText(value) };
      } else if ("items" in value) {
        return value.items.map((item) => ({
          tense,
          value: convertBreakdownToPlainText(item),
        }));
      } else {
        return {
          tense,
          value: convertBreakdownToPlainText(value.on),
        };
      }
    })
  )
);

export default function PracticeTenses() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [languageSetting, setLanguageSetting] = React.useState("both");
  const [answerSetting, setAnswerSetting] = React.useState("multipleChoice");
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

  const questions: Array<{
    answer: string;
    question: string;
    type: 'given_word';
  }> = React.useMemo(() => {
    if (!hasStarted) {
      return [];
    }
    const result = new Array(Number(questionCountSetting));
    for (let i = 0; i < result.length; i++) {
      const randomTense = TENSE_LIST[Math.floor(Math.random() * 5)]
      const datum = _.sample(DATA_FULL_LIST.filter((d) => d.tense === randomTense)) ?? DATA_FULL_LIST.find((d) => d.tense === randomTense)

      // What is the tense of this word?
      result[i] = {
        answer: randomTense,
        question: datum?.value,
        type: 'given_word'
      }
    }
    return result;
  }, [hasStarted, questionCountSetting]);

  return (
    <QuizContainerContext.Provider
      value={{
        answerSetting,
        languageSetting,
        questionCountSetting,
        setAnswerSetting,
        setLanguageSetting,
        setQuestionCountSetting,
      }}
    >
      <Flex direction="column" gap={4}>
        <Heading level={1} variant="headlineL">
          Practice your knowledge of tenses!
        </Heading>

        {hasStarted ? (
          <Quiz
            getResultForQuestion={(index, selectedAnswer) => {
              const q = questions[index];
              return {
                correctAnswer: tenseMap[q.answer],
                isCorrect: q.answer === selectedAnswer,
                question: `What is the tense for: ${q.question}`,
                selectedAnswer: tenseMap[selectedAnswer],
              }
            }}
            numberOfQuestions={Number(questionCountSetting)}
            onReset={() => setHasStarted(false)}
          >
            <Quiz.Questions>
              {questions.map((q, i) => (
                <QuestionLol {...q} key={i} />
              ))}
            </Quiz.Questions>

            <Box>
              <NextBtn />
            </Box>
          </Quiz>
        ) : (
          <Flex direction="column" gap={4}>
            <Settings enableLanguageSetting={false} enableAnswerTypeSetting={false} />

            <Box>
              <Button onClick={() => setHasStarted(true)}>Start</Button>
            </Box>
          </Flex>
        )}
      </Flex>
    </QuizContainerContext.Provider>
  );
}

const tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite Future",
  past: "Past",
  present: "Present",
} as const

function QuestionLol({
  question,
}) {
  const context = useQuizContext();
  const id = React.useId();

  return (
    <Flex direction="column" gap={4}>
      <Text id={id}>
        What is the tense in this word: <b>{question}</b>
      </Text>
      <RadioGroup
        aria-labelledby={id}
        onChange={context.changeAnswer}
      >
        {TENSE_LIST.map((t) => (
          <RadioGroup.Option key={t} value={t}>{tenseMap[t]}</RadioGroup.Option>
        ))}
      </RadioGroup>
    </Flex>
  )
}
