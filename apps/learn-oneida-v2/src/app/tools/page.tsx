import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Link } from "@/components/Link";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Tools provided by this website",
};

export const runtime = "edge";

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
    <PageWrapper>
      <SectionHeading level={1}>Tools</SectionHeading>

      <Text>Check out some tools:</Text>
      <List>
        {tools.map((t, i) => (
          <List.Item key={i}>
            <Link href={`/tools${t.href}`}>{t.label}</Link>
          </List.Item>
        ))}
      </List>
    </PageWrapper>
  );
}
