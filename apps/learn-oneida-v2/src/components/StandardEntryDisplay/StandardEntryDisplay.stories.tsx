import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { StandardEntryDisplay } from "./StandardEntryDisplay";
import { Box, Flex } from "@ukwehuwehneke/ohutsya";

const meta = {
  title: "Components/StandardEntryDisplay",
  component: StandardEntryDisplay,
  args: {},
} as Meta;

export default meta;

export const Basic: StoryFn<typeof meta> = (args) => (
  <StandardEntryDisplay
    audioFile="http://localhost:3000/audio/module12/mammals/singular/bat.mp3"
    value="tsiʔklaʔwístal"
  />
);

export const ListOfStrings: StoryFn<typeof meta> = (args) => (
  <StandardEntryDisplay
    audioFile="http://localhost:3000/audio/module12/mammals/singular/beaver.mp3"
    value={["tsyoní·tu̲ʔ", "tsyoní·to̲ʔ"]}
  />
);

export const WithBreakdown: StoryFn<typeof meta> = (args) => (
  <StandardEntryDisplay
    audioFile="http://localhost:3000/audio/module12/mammals/singular/opposum.mp3"
    value={[{ one: [["shako", "PI"], "yelúheʔ otsiʔnowʌhkó·"] }]}
  />
);

export const ManyAttributes: StoryFn<typeof meta> = (args) => (
  <StandardEntryDisplay
    audioFile="http://localhost:3000/audio/module12/mammals/singular/opposum.mp3"
    value={[
      {
        en: "Opossum",
        lit: "The rat (he) tricks them",
        one: [["shako", "PI"], "yelúheʔ otsiʔnowʌhkó·"],
      },
    ]}
  />
);

export const MultipleObjects: StoryFn<typeof meta> = (args) => (
  <StandardEntryDisplay
    audioFile="http://localhost:3000/audio/module12/mammals/singular/beaver.mp3"
    value={[
      {
        en: "beaver",
        one: ["tsyoní·tu̲ʔ"],
      },
      {
        en: "beaver (alternate)",
        one: ["tsyoní·to̲ʔ"],
      },
    ]}
  />
);
