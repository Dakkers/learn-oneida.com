import { Heading } from "@/design/components/heading";
import { List } from "@/design/components/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";
import { Flex } from "@/design/components/flex";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice" },
    {
      name: "description",
      content: "Improve your Oneida skills with tools provided by this website",
    },
  ];
};

export default function Resources() {
  const items = [
    {
      href: "/being-somewhere",
      label: "Being somewhere",
    },
    {
      href: "/cardinal-directions",
      label: "Cardinal Directions",
    },
    {
      href: "/days-of-the-week",
      label: "Days of the week",
    },
    {
      href: "/months",
      label: "Months of the year",
    },
    {
      href: "/places",
      label: "Places in the community",
    },
    {
      href: "/seasons",
      label: "Seasons",
    },
    {
      href: "/tense-conjugation",
      label: "Tense Conjugation",
    },
    {
      href: "/tense-identification",
      label: "Tense Identification",
    },
  ];

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice
      </Heading>

      <Text>
        Improve your Oneida skills with features provided by this website!
      </Text>
      <List>
        {items.map((t, i) => (
          <List.Item key={i}>
            <a className="underline text-blue-600" href={`/practice${t.href}`}>
              {t.label}
            </a>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
