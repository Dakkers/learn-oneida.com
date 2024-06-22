import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export const Basic: StoryFn<typeof Card> = (args) => (
  <Card {...args}>Card</Card>
);
