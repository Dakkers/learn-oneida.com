import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";

import dataIsHere from "../data/module04/is-here";
import dataWasHere from "../data/module04/was-here";
import dataWillBeHere from "../data/module04/will-be-here";
import dataMightBeHere from "../data/module04/might-be-here";
import dataIsNotHere from "../data/module04/is-not-here";
import dataWasNotHere from "../data/module04/was-not-here";
import dataWillNotBeHere from "../data/module04/will-not-be-here";
import dataIsThere from "../data/module04/is-there";
import dataWillBeThere from "../data/module04/will-be-there";
import dataWasThere from "../data/module04/was-there";
import dataMightBeThere from "../data/module04/might-be-there";
import dataIsNotThere from "../data/module04/is-not-there";
import dataWasNotThere from "../data/module04/was-not-there";
import dataWillNotBeThere from "../data/module04/will-not-be-there";
import dataIsAtHome from "../data/module04/is-at-home";
import dataWasAtHome from "../data/module04/was-at-home";
import dataWillBeAtHome from "../data/module04/will-be-at-home";
import dataMightBeAtHome from "../data/module04/might-be-at-home";
import dataIsNotAtHome from "../data/module04/is-not-at-home";
import dataWasNotAtHome from "../data/module04/was-not-at-home";
import dataWillNotBeAtHome from "../data/module04/will-not-be-at-home";
import dataLivesThere from "../data/module04/lives-there";
import dataUsedToLiveThere from "../data/module04/used-to-live-there";
import dataWillLiveThere from "../data/module04/will-live-there";
import dataMightLiveThere from "../data/module04/might-live-there";
import dataDoesntLiveThere from "../data/module04/doesnt-live-there";
import dataDidntUsedToLiveThere from "../data/module04/didnt-used-to-live-there";
import dataWillNotLiveThere from "../data/module04/will-not-live-there";
import { convertBreakdownToPlainText } from "~/components/TextBreakdown";
import { translatePhrase } from "~/utils";
import { MultipleChoiceButtons, NextBtn, QuizContainerContext } from "~/components/practice/QuizContainer";
import { Quiz, useQuizContext } from "~/components/practice/Quiz";
import { RadioGroup } from "@/design/components/RadioGroup";
import { Select } from "@/design/components/select";
import { Box } from "@/design/components/box";
import { Button } from "@/design/primitives/button";
import _ from "lodash";
import { Text } from "@/design/components/text";

export const meta: MetaFunction = () => {
  return [
    { title: "Being somewhere" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

interface Opt {
  key: string;
  value: string;
}

export default function PracticePlaces() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [languageSetting, setLanguageSetting] = React.useState("both");
  const [answerSetting, setAnswerSetting] = React.useState("multipleChoice");
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

  const [englishOptions, oneidaOptions]: [Opt[], Opt[]] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of [
      dataIsHere,
      dataWasHere,
      dataWillBeHere,
      dataMightBeHere,
      dataIsNotHere,
      dataWasNotHere,
      dataWillNotBeHere,
      dataIsThere,
      dataWillBeThere,
      dataWasThere,
      dataMightBeThere,
      dataIsNotThere,
      dataWasNotThere,
      dataWillNotBeThere,
      dataIsAtHome,
      dataWasAtHome,
      dataWillBeAtHome,
      dataMightBeAtHome,
      dataIsNotAtHome,
      dataWasNotAtHome,
      dataWillNotBeAtHome,
      dataLivesThere,
      dataUsedToLiveThere,
      dataWillLiveThere,
      dataMightLiveThere,
      dataDoesntLiveThere,
      dataDidntUsedToLiveThere,
      dataWillNotLiveThere,
    ]) {
      for (const phrase of datum.phrases) {
        const key = `${datum.translation}_${phrase.pronoun}`
        resultEn.push({
          key,
          value: translatePhrase(datum.translation, phrase.pronoun)})
        resultOn.push({
          key,
          value: convertBreakdownToPlainText(phrase.breakdown, {
            suffix: datum.suffix,
          })
        })
      }
    }
    return [resultEn, resultOn]
  }, []);

  const questions: Array<{
    answer: string;
    key: string;
    options: Array<{key: string; text: string;}>
    text: string;
    type: 'english_to_oneida' | 'oneida_to_english';
  }> = React.useMemo(() => {
    if (!hasStarted) {
      return [];
    }
    const result: typeof questions = new Array(Number(questionCountSetting));
    for (let i = 0; i < result.length; i++) {
      const langKey = determineLangKey(languageSetting);
      const list = langKey === 'en' ? englishOptions : oneidaOptions;
      const oppositeList = langKey === 'en' ? oneidaOptions : englishOptions;

      const questionDatum = _.sample(list) ?? list[0];
      const answerDatum = oppositeList.find((opt) => opt.key === questionDatum.key);

      const optionsForQuestion = [];
      if (answerDatum) {
        optionsForQuestion.push({
          key: answerDatum.key,
          text: answerDatum.value,
        })
      }
      const sampledOptions = _.sampleSize(oppositeList, 5)
      for (const item of sampledOptions) {
        if (item.key !== questionDatum.key) {
          optionsForQuestion.push({
            key: item.key,
            text: item.value,
          });
        }
        if (optionsForQuestion.length >= 4) {
          break;
        }
      }
      result[i] = ({
        answer: answerDatum?.value ?? '',
        key: questionDatum.key,
        options: _.shuffle(optionsForQuestion),
        text: questionDatum.value,
        type: langKey === 'en' ? 'english_to_oneida' : 'oneida_to_english',
      });
    }
    return result;
  }, [
    hasStarted,
    questionCountSetting,
    englishOptions,
    oneidaOptions,
  ]);

  console.log(questions)

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
          Practice verbs related to being or living somewhere
        </Heading>

        {hasStarted ? (
          <Quiz
            getResultForQuestion={(index, selectedAnswer) => {
              const q = questions[index];
              const listToUse = q.type === 'english_to_oneida' ? oneidaOptions : englishOptions;
              const correctAnswerObj = listToUse.find((obj) => obj.key === q.key);
              const selectedAnswerObj = listToUse.find((obj) => obj.key === selectedAnswer)

              return {
                correctAnswer: correctAnswerObj?.value ?? '',
                isCorrect: q.key === selectedAnswer,
                question: q.text,
                selectedAnswer: selectedAnswerObj?.value ?? '',
              }
            }}
            numberOfQuestions={Number(questionCountSetting)}
            onReset={() => setHasStarted(false)}
          >
            <Quiz.Questions>
              {questions.map((q, i) => (
                <QuestionLol
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
          </Quiz>
        ) : (
          <Flex direction="column" gap={4}>
            <Settings />

            <Box>
              <Button onClick={() => setHasStarted(true)}>Start</Button>
            </Box>
          </Flex>
        )}
      </Flex>
    </QuizContainerContext.Provider>
  );
}

function Settings() {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }

  return (
    <Flex align="start" gap={8}>
      <RadioGroup
        label="Translate"
        onChange={context.setLanguageSetting}
        value={context.languageSetting}
      >
        <RadioGroup.Option value="en">English to Oneida</RadioGroup.Option>
        <RadioGroup.Option value="on">Oneida to English</RadioGroup.Option>
        <RadioGroup.Option value="both">Both</RadioGroup.Option>
      </RadioGroup>

      <RadioGroup
        label="Answer with"
        onChange={context.setAnswerSetting}
        value={context.answerSetting}
      >
        <RadioGroup.Option value="multipleChoice">
          Multiple choice
        </RadioGroup.Option>
        <RadioGroup.Option value="text">Text</RadioGroup.Option>
      </RadioGroup>

      <Select
        label="Number of questions"
        onChange={context.setQuestionCountSetting}
        options={[1, 2, 5, 10]
          .map((value) => value.toString())
          .map((value) => ({ label: value, value }))}
        value={context.questionCountSetting}
      />
    </Flex>
  );
}

function determineLangKey(languageSetting: string): "en" | "on" {
  if (languageSetting === "en" || languageSetting === "on") {
    return languageSetting;
  }
  return Math.random() < 0.5 ? "en" : "on";
}

function QuestionLol ({
  options,
  questionKey,
  text,
}) {
  const context = React.useContext(QuizContainerContext);
  const quizContext = useQuizContext();
  return (
    <Flex align="center" direction="column" gap={8}>
      <Text variant="headlineS">
        {text}
      </Text>

      <div className="w-[600px]">
        <Flex align="center" direction="column" gap={4}>
          {context?.answerSetting === "multipleChoice" ? (
            <MultipleChoiceButtons
              isCorrect={quizContext.answer === questionKey}
              questionKey={questionKey}
              options={options}
            />
          ) : null}
        </Flex>
      </div>
    </Flex>
  )
}
