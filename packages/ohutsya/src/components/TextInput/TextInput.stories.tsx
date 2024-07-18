import type { Meta, StoryFn } from "@storybook/react";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export const Basic: StoryFn<typeof TextInput> = (args) => (
  <TextInput
    {...args}
  />
);
