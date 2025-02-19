"use client";
import { arrayify, Flex } from "@ukwehuwehneke/ohutsya";
import {
  AnswerMultipleChoiceButtons,
  QuizContainerContext,
  AnswerText,
  NextBtn,
  Settings,
  type QuizOption,
} from "./QuizContainer";
import { Quiz, useQuizContext } from "./Quiz";
import { Text } from "@ukwehuwehneke/ohutsya";
import React, { useRef, useState } from "react";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import {
  sanitizeIrregularCharacters,
  standardizeCharacters,
} from "@ukwehuwehneke/language-components";
import { AudioTrack, AudioTrackProps } from "../AudioTrack";
import WaveSurfer from "wavesurfer.js";

export interface EnglishToOneidaQuizProps {
  englishOptions: QuizOption[];
  hasAudio?: boolean;
  hasImages?: boolean;
  oneidaOptions: QuizOption[];
}

interface Question {
  answer: string;
  audioFile?: string;
  img?: string;
  key: string;
  options: QuizOption[];
  text: string;
  type: "english_to_oneida" | "oneida_to_english";
}

export function EnglishToOneidaQuiz({
  englishOptions,
  hasAudio = false,
  hasImages = false,
  oneidaOptions,
}: EnglishToOneidaQuizProps) {
  const [languageSetting, setLanguageSetting] = React.useState(
    hasImages || hasAudio ? "en" : "both",
  );
  const [answerSetting, setAnswerSetting] = React.useState(
    hasImages || hasAudio ? "multipleChoice" : "text",
  );
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

  return (
    <QuizContainerContext.Provider
      value={{
        answerSetting,
        hasAudio,
        hasImages,
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
                  img={q.img}
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
          <Settings
            enableLanguageSetting={!context.hasImages && !context.hasAudio}
            enableAnswerTypeSetting={!context.hasImages && !context.hasAudio}
          />

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
  audioFile,
  img,
  options,
  questionKey,
  text,
}: {
  audioFile?: AudioTrackProps["audioFile"];
  img?: string;
  options: QuizOption[];
  questionKey: string;
  text: string;
}) {
  const context = React.useContext(QuizContainerContext);
  const quizContext = useQuizContext();
  return (
    <Flex align="center" direction="column" gap={8}>
      {audioFile ? (
        <AudioTrackWrapper audioFile={audioFile} />
      ) : img ? (
        <img alt={text} className="h-[250px]" src={img} />
      ) : (
        <Text variant="headlineS">{text}</Text>
      )}

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
      Math.min(Number(context.questionCountSetting), numOptions),
    );
    for (let i = 0; i < result.length; i++) {
      const langKey = determineLangKey(context.languageSetting);
      const list = langKey === "en" ? englishOptions : oneidaOptions;
      const oppositeList = langKey === "en" ? oneidaOptions : englishOptions;

      const questionDatum =
        _.sample(
          list.filter(
            (datum) =>
              !result.find((existingEntry) => existingEntry?.key === datum.key),
          ),
        ) ?? list[0];
      const answerDatum = oppositeList.find(
        (opt) => opt.key === questionDatum.key,
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
        img: questionDatum.img,
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
    const correctAnswer = (correctAnswerObj?.text ?? "").toLowerCase();

    let isCorrect = false;
    let selectedAnswer = userAnswer;

    if (context.answerSetting === "text") {
      isCorrect =
        standardizeCharacters(
          sanitizeIrregularCharacters(userAnswer.toLowerCase()),
        ) === standardizeCharacters(sanitizeIrregularCharacters(correctAnswer));
    } else {
      const selectedAnswerObj = listToUse.find((obj) => obj.key === userAnswer);
      isCorrect = q.key === selectedAnswer;
      selectedAnswer = selectedAnswerObj?.text ?? "";
    }

    return {
      correctAnswer,
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

function AudioTrackWrapper({
  audioFile,
}: {
  audioFile: string | string[]
}) {
  const files = arrayify(audioFile)
  const [prev, setPrev] = useState(null);
  const [src, setSrc] = useState(audioFile);

  if (prev !== audioFile) {
    setPrev(audioFile);
    if (files.length > 1) {

    } else {
      setSrc()
    }
  }

  return (
    <>
      <audio src="" />
    </>
  );
}
