import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { Button } from "@/design/primitives/button";
import { Quiz, useQuizContext } from "~/components/practice/Quiz";
import { Box } from "@/design/components/box";
import {
  bodyTenseData,
  characterTenseData,
  emotionTenseData,
  mindTenseData,
  miscTenseData,
  physicalTenseData,
} from "~/data/module05";
import { convertBreakdownToPlainText } from "~/components/TextBreakdown";
import _ from "lodash";
import { Text } from "@/design/components/text";
import {
  AnswerMultipleChoiceButtons,
  NextBtn,
  QuizContainerContext,
  Settings,
} from "~/components/practice/QuizContainer";
import { Link } from "@remix-run/react";

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

const TENSE_LIST = ["present", "past", "fut", "ifut", "cmd"] as const;
type Tense = (typeof TENSE_LIST)[number];

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
          value: convertBreakdownToPlainText(item.on),
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
        question: datum?.value || '',
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
        <Heading level={1} variant="headlineL">
          Tense Identification
        </Heading>

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
              Use this page to practice identifying what tense conjugation a word contains.
              These words come from <Link className="text-blue-600 underline" to='/learn/module05'>module 5</Link>.
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
  ifut: "Indefinite Future",
  past: "Past",
  present: "Present",
} as const;

function QuestionLol({ answer, id, question }: Q) {
  const quizContext = useQuizContext();
  console.log(quizContext)
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
