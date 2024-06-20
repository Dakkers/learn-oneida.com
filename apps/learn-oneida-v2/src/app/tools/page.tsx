"use client"

import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "~/components/SectionHeading";

export const meta: any = () => {
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
  ];

  return (
    <div>
      <SectionHeading level={1}>Tools</SectionHeading>

      <Text>Check out some tools:</Text>
      <List>
        {tools.map((t, i) => (
          <List.Item key={i}>
            <a className="underline text-blue-600" href={`/tools${t.href}`}>
              {t.label}
            </a>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
