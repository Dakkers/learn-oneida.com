import { Flex } from "@/design/components/flex";
import {
  AnswerMultipleChoiceButtons,
  QuizContainerContext,
  AnswerText,
  NextBtn,
  Settings,
  QuizOption,
} from "./QuizContainer";
import { Quiz, useQuizContext } from "./Quiz";
import { Text } from "@/design/components/text";
import React from "react";
import { Box } from "@/design/components/box";
import { Button } from "@/design/primitives/button";
import _ from "lodash";
import { sanitizeIrregularCharacters } from "~/utils/words";

export interface EnglishToOneidaQuizProps {
  englishOptions: QuizOption[];
  oneidaOptions: QuizOption[];
}

interface Question {
  answer: string;
  key: string;
  options: QuizOption[];
  text: string;
  type: "english_to_oneida" | "oneida_to_english";
}

export function EnglishToOneidaQuiz({
  englishOptions,
  oneidaOptions,
}: EnglishToOneidaQuizProps) {
  const [languageSetting, setLanguageSetting] = React.useState("both");
  const [answerSetting, setAnswerSetting] = React.useState("text");
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

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
      <Content englishOptions={englishOptions} oneidaOptions={oneidaOptions} />
    </QuizContainerContext.Provider>
  );
}

function Content({ englishOptions, oneidaOptions }: EnglishToOneidaQuizProps) {
  const [hasStarted, setHasStarted] = React.useState(false);
  const questions = useEnglishToOneidaQuestions({
    englishOptions,
    hasStarted,
    oneidaOptions,
  });
  const getResultForQuestion = useEnglishToOneidaResultChecker({
    englishOptions,
    oneidaOptions,
    questions,
  });
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext");
  }

  return (
    <>
      {hasStarted ? (
        <Quiz
          getResultForQuestion={getResultForQuestion}
          numberOfQuestions={Number(context.questionCountSetting)}
          onReset={() => setHasStarted(false)}
        >
          <Flex align="center" direction="column" justify="center" gap={8}>
            <Quiz.Questions>
              {questions.map((q) => (
                <StandardQuestion
                  key={q.key}
                  options={q.options}
                  questionKey={q.key}
                  text={q.text}
                />
              ))}
            </Quiz.Questions>

            <Box>
              <NextBtn />
            </Box>
          </Flex>
        </Quiz>
      ) : (
        <Flex direction="column" gap={4}>
          <Settings />

          <Box>
            <Button onClick={() => setHasStarted(true)}>Start</Button>
          </Box>
        </Flex>
      )}
    </>
  );
}

interface TypicalOptions {
  englishOptions: QuizOption[];
  oneidaOptions: QuizOption[];
}

export function StandardQuestion({
  options,
  questionKey,
  text,
}: {
  options: QuizOption[];
  questionKey: string;
  text: string;
}) {
  const context = React.useContext(QuizContainerContext);
  const quizContext = useQuizContext();
  return (
    <Flex align="center" direction="column" gap={8}>
      <Text variant="headlineS">{text}</Text>

      <div className="w-[600px]">
        <Flex align="center" direction="column" gap={4}>
          {context?.answerSetting === "multipleChoice" ? (
            <AnswerMultipleChoiceButtons
              isCorrect={quizContext.answer === questionKey}
              questionKey={questionKey}
              options={options}
            />
          ) : (
            <AnswerText />
          )}
        </Flex>
      </div>
    </Flex>
  );
}

export function useEnglishToOneidaQuestions({
  englishOptions,
  hasStarted = false,
  oneidaOptions,
}: TypicalOptions & {
  hasStarted?: boolean;
}) {
  const context = React.useContext(QuizContainerContext);

  const questions: Array<Question> = React.useMemo(() => {
    if (!context || !hasStarted) {
      return [];
    }

    const numOptions =
      context.languageSetting === "both"
        ? englishOptions.length + oneidaOptions.length
        : context.languageSetting === "en"
        ? englishOptions.length
        : oneidaOptions.length;

    const result: typeof questions = new Array(
      Math.min(Number(context.questionCountSetting), numOptions)
    );
    for (let i = 0; i < result.length; i++) {
      const langKey = determineLangKey(context.languageSetting);
      const list = langKey === "en" ? englishOptions : oneidaOptions;
      const oppositeList = langKey === "en" ? oneidaOptions : englishOptions;

      const questionDatum =
        _.sample(
          list.filter(
            (datum) =>
              !result.find((existingEntry) => existingEntry?.key === datum.key)
          )
        ) ?? list[0];
      const answerDatum = oppositeList.find(
        (opt) => opt.key === questionDatum.key
      );

      const optionsForQuestion = [];
      if (answerDatum) {
        optionsForQuestion.push({
          key: answerDatum.key,
          text: answerDatum.text,
        });
      }
      const sampledOptions = _.sampleSize(oppositeList, 5);
      for (const item of sampledOptions) {
        if (item.key !== questionDatum.key) {
          optionsForQuestion.push({
            key: item.key,
            text: item.text,
          });
        }
        if (optionsForQuestion.length >= 4) {
          break;
        }
      }
      result[i] = {
        answer: answerDatum?.text ?? "",
        key: questionDatum.key,
        options: _.shuffle(optionsForQuestion),
        text: questionDatum.text,
        type: langKey === "en" ? "english_to_oneida" : "oneida_to_english",
      };
    }
    return result;
  }, [context, hasStarted, englishOptions, oneidaOptions]);

  return questions;
}

export function useEnglishToOneidaResultChecker({
  englishOptions,
  oneidaOptions,
  questions,
}: TypicalOptions & {
  questions: Question[];
}) {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext");
  }

  return (index: number, userAnswer: string) => {
    const q = questions[index];
    const listToUse =
      q.type === "english_to_oneida" ? oneidaOptions : englishOptions;
    const correctAnswerObj = listToUse.find((obj) => obj.key === q.key);

    let isCorrect = false;
    let selectedAnswer = userAnswer;

    if (context.answerSetting === "text") {
      isCorrect =
        sanitizeIrregularCharacters(userAnswer) ===
        sanitizeIrregularCharacters(correctAnswerObj?.text ?? "");
    } else {
      const selectedAnswerObj = listToUse.find((obj) => obj.key === userAnswer);
      isCorrect = q.key === selectedAnswer;
      selectedAnswer = selectedAnswerObj?.text ?? "";
    }

    return {
      correctAnswer: correctAnswerObj?.text ?? "",
      isCorrect,
      question: q.text,
      selectedAnswer,
    };
  };
}

function determineLangKey(languageSetting: string): "en" | "on" {
  if (languageSetting === "en" || languageSetting === "on") {
    return languageSetting;
  }
  return Math.random() < 0.5 ? "en" : "on";
}
