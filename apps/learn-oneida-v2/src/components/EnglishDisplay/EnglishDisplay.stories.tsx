import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { EnglishDisplay } from "./EnglishDisplay";

const meta = {
  title: "Components/EnglishDisplay",
  component: EnglishDisplay,
  args: {},
} as Meta;

export default meta;

export const Basic: StoryFn<typeof meta> = (args) => (
  <EnglishDisplay {...args} value="English text" />
);

export const Multiple: StoryFn<typeof meta> = (args) => (
  <EnglishDisplay {...args} value={["English text 1", "English text 2"]} />
);

export const WithDictionary: StoryFn<typeof meta> = (args) => (
  <EnglishDisplay
    {...args}
    value={{
      dict: [42, 750],
      en: ["English text 1", "English text 2"],
    }}
  />
);
