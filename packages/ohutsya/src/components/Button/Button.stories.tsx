import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export const Basic: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
