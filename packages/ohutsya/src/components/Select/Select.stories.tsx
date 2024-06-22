import type { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export const Basic: StoryFn<typeof Select> = (args) => (
  <Select {...args} options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]} />
);
