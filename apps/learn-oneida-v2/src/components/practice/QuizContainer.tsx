"use client";
import { Button } from "@ukwehuwehneke/ohutsya";
import { useQuizContext } from "./Quiz";
import { cn } from "@ukwehuwehneke/ohutsya";
import React from "react";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Input } from "@ukwehuwehneke/ohutsya";
import { RadioGroup } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";

export interface QuizOption {
  key: string;
  img?: string;
  audioFile?: string | string[];
  text: string;
}

interface QuizContainerContextProps {
  answerSetting: string;
  hasAudio?: boolean;
  hasImages?: boolean;
  languageSetting: string;
  questionCountSetting: string;
  setAnswerSetting: (value: string) => void;
  setLanguageSetting: (value: string) => void;
  setQuestionCountSetting: (value: string) => void;
}

export const QuizContainerContext =
  React.createContext<QuizContainerContextProps | null>(null);

export function Settings({
  enableLanguageSetting = true,
  enableAnswerTypeSetting = true,
  enableQuestionCountSetting = true,
}: {
  enableLanguageSetting?: boolean;
  enableAnswerTypeSetting?: boolean;
  enableQuestionCountSetting?: boolean;
}) {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }

  return (
    <Flex
      align={{ sm: "start" }}
      direction={{ xs: "column", sm: "row" }}
      gap={{
        xs: 2,
        md: 4,
      }}
    >
      {enableLanguageSetting && (
        <RadioGroup
          label="Translate"
          onChange={context.setLanguageSetting}
          value={context.languageSetting}
        >
          <RadioGroup.Option value="en">English to Oneida</RadioGroup.Option>
          <RadioGroup.Option value="on">Oneida to English</RadioGroup.Option>
          <RadioGroup.Option value="both">Both</RadioGroup.Option>
        </RadioGroup>
      )}

      {enableAnswerTypeSetting && (
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
      )}

      {enableQuestionCountSetting && (
        <Select
          label="Number of questions"
          onChange={context.setQuestionCountSetting}
          options={[1, 2, 5, 10, 50]
            .map((value) => value.toString())
            .map((value) => ({ label: value, value }))}
          value={context.questionCountSetting}
        />
      )}
    </Flex>
  );
}

export function AnswerMultipleChoiceButtons({
  questionKey,
  isCorrect,
  options,
}: {
  questionKey?: string;
  isCorrect?: boolean;
  options: QuizOption[];
}) {
  const quizContext = useQuizContext();
  const hasSelected = !!quizContext.hasAnswer;
  const showCorrectState = !!questionKey;

  return (
    <div className="grid gap-2 grid-cols-2">
      {options.map((option) => (
        <button
          className={cn(
            "rounded border border-solid border-slate-500 p-2",

            option.key === questionKey &&
              !isCorrect &&
              hasSelected &&
              showCorrectState &&
              "bg-green-400 text-white",

            showCorrectState &&
              option.key === quizContext.answer &&
              isCorrect &&
              "bg-green-700 text-white",

            showCorrectState &&
              option.key === quizContext.answer &&
              !isCorrect &&
              "bg-red-700 text-white",
          )}
          disabled={hasSelected}
          key={option.key}
          onClick={() => quizContext.changeAnswer?.(option.key)}
          type="button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export function AnswerText() {
  const [value, setValue] = React.useState("");
  const quizContext = useQuizContext();

  return (
    <>
      <Flex gap={2}>
        <Flex.Item grow={1}>
          <Input
            onBlur={() => quizContext.changeAnswer?.(value)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Flex.Item>
      </Flex>
    </>
  );
}

export function NextBtn() {
  const context = useQuizContext();
  return (
    <Button
      onClick={() => {
        context.nextQuestion?.();
      }}
    >
      {context.isFinalQuestion ? "Finish" : "Next"}
    </Button>
  );
}
