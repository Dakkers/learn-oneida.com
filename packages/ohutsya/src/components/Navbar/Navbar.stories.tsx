import type { Meta, StoryFn } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

const moduleNumbers = new Array(6).fill(0).map((_, i) => (i + 1))

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "Numbers",
    href: "/tools/numbers",
    description: "Translate numbers into Oneida.",
  },
  {
    title: "Paradigm",
    href: "/tools/paradigm",
    description: "Test your pronominal knowledge.",
  },
  {
    title: "Clock Time",
    href: "/tools/clock",
    description: "Translate a digital clock time into Oneida.",
  },
];

export const Basic: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args} moduleNumbers={moduleNumbers} tools={tools} />
);
