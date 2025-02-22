import React, { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { QuizButton, QuizButtonProps } from "./QuizButton";
import { Box, Flex } from "@ukwehuwehneke/ohutsya";

const meta = {
  title: "Components/QuizButton",
  component: QuizButton,
  args: {
    disabled: false,
    emphasis: "highlight",
  },
} as Meta;

export default meta;

export const Default: StoryFn<typeof meta> = (args) => (
  <Flex direction="column">
    <QuizButton {...args} onClick={() => window.alert("Clicked!")}>
      bat
    </QuizButton>
  </Flex>
);

export const List: StoryFn<typeof meta> = (args) => {
  const [selected, setSelected] = useState("");
  const correctAnswer = "skunk";

  return (
    <Flex direction="column">
      <Box pb={4}>
        The correct answer is <b>{correctAnswer}</b>.
      </Box>

      {["bat", "skunk", "mole", "weasel"].map((t, i) => {
        const isCorrect = correctAnswer === t;
        const isSelected = t === selected;
        return (
          <QuizButton
            disabled={!!selected}
            isSelected={isSelected}
            isTheAnswer={isCorrect}
            key={i}
            onClick={() => setSelected(t)}
          >
            {t}
          </QuizButton>
        );
      })}
    </Flex>
  );
};
