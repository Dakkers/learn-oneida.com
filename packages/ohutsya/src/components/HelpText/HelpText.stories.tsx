import type { Meta, StoryFn } from "@storybook/react";
import { HelpText } from "./HelpText";

export default {
  title: "Components/HelpText",
  component: HelpText,
} satisfies Meta<typeof HelpText>;

export const Basic: StoryFn<typeof HelpText> = (args) => (
  <HelpText {...args}>Help text goes here</HelpText>
);
