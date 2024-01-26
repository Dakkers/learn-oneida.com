import { Heading } from "@/design/primitives/heading";
import { List } from "@/design/primitives/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";
import { Flex } from "@/design/components/flex";

export const meta: MetaFunction = () => {
  return [
    { title: "Resources" },
    { name: "description", content: "Resources provided by this website" },
  ];
};

export default function Resources() {
  const resources = [
    {
      href: "/cardinal-directions",
      label: "Cardinal Directions",
    },
    {
      href: "/counting-time",
      label: "Counting lengths of time",
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
      href: "/seasons",
      label: "Seasons",
    },
    {
      href: "/times-of-day",
      label: "Times of day",
    },
  ];

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Resources
      </Heading>

      <Text>Check out some resources:</Text>
      <List>
        {resources.map((t, i) => (
          <List.Item key={i}>
            <a className="underline text-blue-600" href={`/resources${t.href}`}>
              {t.label}
            </a>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
