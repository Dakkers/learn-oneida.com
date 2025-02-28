import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { TextWithAudio } from "./TextWithAudio";

const meta = {
  title: "Components/TextWithAudio",
  component: TextWithAudio,
  args: {
    children: "ohkwa·lí̲·",
    filepath:
      "http://localhost:3000/audio/module12/mammals/singular/bear_pp.mp3",
  },
} as Meta;

export default meta;

export const Basic: StoryFn<typeof TextWithAudio> = (args) => (
  <TextWithAudio {...args} />
);
