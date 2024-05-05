import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Button } from "@/design/primitives/button";
import { Quiz, useQuizContext } from "~/components/practice/Quiz";
import { Box } from "@/design/components/box";
import _ from "lodash";
import { Text } from "@/design/components/text";
import {
  AnswerMultipleChoiceButtons,
  NextBtn,
  QuizContainerContext,
  Settings,
} from "~/components/practice/QuizContainer";
import { Link } from "@remix-run/react";
import { SectionHeading } from "~/components/SectionHeading";

import { activeVerbsList } from "~/data/module06/activeVerbsList";

export const meta: MetaFunction = () => {
  return [
    { title: "Tense Identification for Active Verbs" },
    {
      name: "description",
      content:
        "Practice your knowledge of tenses in the Oneida language by identifying a tense conjugation on an active verb.",
    },
  ];
};

const TENSE_LIST = ["hab", "def", "fut", "ifut", "cmd", "pfv"] as const;
type Tense = (typeof TENSE_LIST)[number];

const DATA_FULL_LIST = _.flattenDeep(
  activeVerbsList.map((datum) =>
    TENSE_LIST.map((tense) => {
      return (
        datum[tense]?.phrases.map((p) => ({
          tense,
          value: p.phrase,
        })) ?? []
      );
    }),
  ),
);

interface Q {
  answer: string;
  id: string;
  question: string;
  type: "given_word";
}

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
      const randomTense = TENSE_LIST[Math.floor(Math.random() * 5)];
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
      <Flex direction="column" gap={4}>
        <SectionHeading level={1}>
          Tense Identification (Active Verbs)
        </SectionHeading>

        {hasStarted ? (
          <Quiz
            getResultForQuestion={(index, selectedAnswer) => {
              const q = questions[index];
              return {
                correctAnswer: tenseMap[q.answer as Tense],
                isCorrect: q.answer === selectedAnswer,
                question: `What is the tense for: ${q.question}`,
                selectedAnswer: tenseMap[selectedAnswer as Tense],
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
              Use this page to practice identifying what tense conjugation an
              active verb contains. These words come from{" "}
              <Link className="text-blue-600 underline" to="/learn/module06">
                module 6
              </Link>
              .
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
      </Flex>
    </QuizContainerContext.Provider>
  );
}

const tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite",
  def: "Definite",
  pfv: "Perfective",
  hab: "Habitual",
} as const;

function QuestionLol({ answer, id, question }: Q) {
  const quizContext = useQuizContext();
  console.log(quizContext);
  return (
    <Flex align="center" direction="column" gap={4}>
      <Text>
        What is the tense in this word: <b>{question}</b>
      </Text>

      <div className="w-[600px]">
        <Flex align="center" direction="column" gap={4}>
          <AnswerMultipleChoiceButtons
            isCorrect={quizContext.answer === answer}
            options={TENSE_LIST.map((t) => ({
              key: t,
              text: tenseMap[t],
            }))}
            questionKey={id}
          />
        </Flex>
      </div>
    </Flex>
  );
}
