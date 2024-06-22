import type { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./Divider";
import { Text } from "../Text";

export default {
  title: "Components/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export const Basic: StoryFn<typeof Divider> = (args) => (
  <>
    <Text>Hello</Text>
    <Divider {...args} />
    <Text>There</Text>
  </>
);
