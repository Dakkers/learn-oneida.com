import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { QuizResults } from "./QuizResults";

const meta = {
  title: "Components/QuizResults",
  component: QuizResults,
  args: {
    disabled: false,
    emphasis: "highlight",
  },
} as Meta;

export default meta;

export const Basic: StoryFn<typeof meta> = (args) => (
  <QuizResults
    results={[
      {
        audioFile: "/audio/module12/mammals/singular/bear_pp.mp3",
        correctAnswer: "bear",
        isCorrect: true,
        question: "ohkwali",
        selectedAnswer: "bear",
      },
      {
        audioFile: "/audio/module12/mammals/singular/wolf.mp3",
        correctAnswer: "wolf",
        isCorrect: true,
        selectedAnswer: "wolf",
      },
      {
        correctAnswer: "muskrat",
        isCorrect: false,
        question: "anó·kiʔ",
        selectedAnswer: "weasel",
      },
    ]}
    onReset={() => window.alert("Reset!")}
  />
);
