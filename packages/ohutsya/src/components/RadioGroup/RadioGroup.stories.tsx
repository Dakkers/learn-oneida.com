import type { Meta, StoryFn } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export const Basic: StoryFn<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <RadioGroup.Option value="1">Option 1</RadioGroup.Option>
    <RadioGroup.Option value="2">Option 2</RadioGroup.Option>
    <RadioGroup.Option value="3">Option 3</RadioGroup.Option>
  </RadioGroup>
);
