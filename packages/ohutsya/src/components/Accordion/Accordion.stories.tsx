import type { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export const Basic: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item id='1' title='Item 1'>
      Content for item 1.
    </Accordion.Item>
    <Accordion.Item id='2' title='Item 2'>
      Content for item 2.
    </Accordion.Item>
    <Accordion.Item id='3' title='Item 3'>
      Content for item 3.
    </Accordion.Item>
  </Accordion>
);
