import { Heading } from "@/design/components/heading";
import { List } from "@/design/components/list";
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
      href: "/counting-people",
      label: "Counting people",
    },
    {
      href: "/days-of-the-week",
      label: "Days of the week",
    },
    {
      href: "/domesticated-animals",
      label: "Domesticated animals",
    },
    {
      href: "/good-people-bad-people",
      label: "Good people and bad people",
    },
    {
      href: "/months",
      label: "Months of the year",
    },
    {
      href: "/relationships",
      label: "Relationships",
    },
    {
      href: "/repetitive-conjugation",
      label: "Repetitive Conjugation",
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
