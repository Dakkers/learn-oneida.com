import type { Meta, StoryFn } from "@storybook/react";
import { Notice } from "./Notice";

export default {
  title: "Components/Notice",
  component: Notice,
} satisfies Meta<typeof Notice>;

export const Basic: StoryFn<typeof Notice> = (args) => (
  <Notice {...args}>Text goes here.</Notice>
);
