import type { Meta, StoryFn } from "@storybook/react";
import { List } from "./List";

export default {
  title: "Components/List",
  component: List,
} satisfies Meta<typeof List>;

export const Basic: StoryFn<typeof List> = (args) => (
  <List {...args}>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 2</List.Item>
    <List.Item>Item 3</List.Item>
  </List>
);
