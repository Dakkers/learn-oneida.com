import type { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;

export const Basic: StoryFn<typeof Heading> = (args) => (
  <Heading {...args}>Heading</Heading>
);
