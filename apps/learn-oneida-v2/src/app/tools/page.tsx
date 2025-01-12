"use client";

import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Link } from "@/components/Link";

const meta: any = () => {
  return [
    { title: "Tools" },
    { name: "description", content: "Tools provided by this website" },
  ];
};

export default function Tools() {
  const tools = [
    {
      href: "/numbers",
      label: "Number Translator",
    },
    {
      href: "/paradigm",
      label: "Paradigm Tester",
    },
    {
      href: "/clock",
      label: "Clock Time Translator",
    },
    {
      href: "/flashcards",
      label: "Flashcards",
    },
    {
      href: "/playlists",
      label: "Playlists",
    },
  ];

  return (
    <>
      <SectionHeading level={1}>Tools</SectionHeading>

      <Text>Check out some tools:</Text>
      <List>
        {tools.map((t, i) => (
          <List.Item key={i}>
            <Link href={`/tools${t.href}`}>{t.label}</Link>
          </List.Item>
        ))}
      </List>
    </>
  );
}
