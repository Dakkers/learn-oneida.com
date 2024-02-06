import { Heading } from "@/design/components/heading";
import { List } from "@/design/components/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
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
      <Heading level={1} variant="headlineL">
        Tools
      </Heading>

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
