"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { Quiz, useQuizContext } from "~/components/practice/Quiz";
import { Box } from "@ukwehuwehneke/ohutsya";
import {
  MODULE_5_VERB_TENSE_LIST,
  type Module5VerbTense,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import { convertBreakdownToPlainText } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  AnswerMultipleChoiceButtons,
  NextBtn,
  QuizContainerContext,
  Settings,
} from "~/components/practice/QuizContainer";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tense Identification",
//   description:
//     "Practice your knowledge of tenses in the Oneida language by identifying a tense conjugation on a stative verb.",
// };

const DATA_FULL_LIST = _.flattenDeep(
  createModule5VerbsList().map((datum) =>
    MODULE_5_VERB_TENSE_LIST.map((tense) => {
      const value = datum[tense];
      return {
        tense,
        value: convertBreakdownToPlainText(value.phrases[0].breakdown),
      };
    }),
  ),
);

interface Q {
  answer: string;
  id: string;
  question: string;
  type: "given_word";
}

export const runtime = "edge";

export default function PracticeTenseIdentification() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [languageSetting, setLanguageSetting] = React.useState("both");
  const [answerSetting, setAnswerSetting] = React.useState("multipleChoice");
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

  const questions: Array<Q> = React.useMemo(() => {
    if (!hasStarted) {
      return [];
    }
    const result: Q[] = new Array(Number(questionCountSetting));
    for (let i = 0; i < result.length; i++) {
      const randomTense =
        MODULE_5_VERB_TENSE_LIST[Math.floor(Math.random() * 5)];
      const datum =
        _.sample(DATA_FULL_LIST.filter((d) => d.tense === randomTense)) ??
        DATA_FULL_LIST.find((d) => d.tense === randomTense);

      // What is the tense of this word?
      result[i] = {
        answer: randomTense,
        id: i.toString(),
        question: datum?.value || "",
        type: "given_word",
      };
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
      <PageWrapper>
        <Heading level={1} variant="headlineL">
          Tense Identification
        </Heading>

        {hasStarted ? (
          <Quiz
            getResultForQuestion={(index, selectedAnswer) => {
              const q = questions[index];
              return {
                correctAnswer:
                  module5VerbTenseMap[q.answer as Module5VerbTense],
                isCorrect: q.answer === selectedAnswer,
                question: `What is the tense for: ${q.question}`,
                selectedAnswer:
                  module5VerbTenseMap[selectedAnswer as Module5VerbTense],
              };
            }}
            numberOfQuestions={Number(questionCountSetting)}
            onReset={() => setHasStarted(false)}
          >
            <Flex align="center" direction="column" justify="center" gap={8}>
              <Quiz.Questions>
                {questions.map((q, i) => (
                  <QuestionLol {...q} key={i} />
                ))}
              </Quiz.Questions>

              <Box>
                <NextBtn />
              </Box>
            </Flex>
          </Quiz>
        ) : (
          <>
            <Text>
              Use this page to practice identifying what tense conjugation a
              word contains. These words come from <LinkWrapper page={5} />.
            </Text>

            <Settings
              enableLanguageSetting={false}
              enableAnswerTypeSetting={false}
            />

            <Box>
              <Button onClick={() => setHasStarted(true)}>Start</Button>
            </Box>
          </>
        )}
      </PageWrapper>
    </QuizContainerContext.Provider>
  );
}

function QuestionLol({ answer, id, question }: Q) {
  const quizContext = useQuizContext();
  return (
    <Flex align="center" direction="column" gap={4}>
      <Text>
        What is the tense in this word: <b>{question}</b>
      </Text>

      <div className="w-[600px]">
        <Flex align="center" direction="column" gap={4}>
          <AnswerMultipleChoiceButtons
            isCorrect={quizContext.answer === answer}
            options={MODULE_5_VERB_TENSE_LIST.map((t) => ({
              key: t,
              text: module5VerbTenseMap[t],
            }))}
            questionKey={id}
          />
        </Flex>
      </div>
    </Flex>
  );
}
