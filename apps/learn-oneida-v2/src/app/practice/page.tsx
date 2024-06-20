import { Heading } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { Flex } from "@ukwehuwehneke/ohutsya";

export const meta: any = () => {
  return [
    { title: "Practice" },
    {
      name: "description",
      content: "Improve your Oneida skills with tools provided by this website",
    },
  ];
};

export default function Practice() {
  const items = [
    // {
    //   href: "/being-somewhere",
    //   label: "Being somewhere",
    // },
    // {
    //   href: "/cardinal-directions",
    //   label: "Cardinal Directions",
    // },
    {
      href: "/counting-time",
      label: "Counting time",
    },
    // {
    //   href: "/days-of-the-week",
    //   label: "Days of the week",
    // },
    // {
    //   href: "/months",
    //   label: "Months of the year",
    // },
    {
      href: "/places",
      label: "Places in the community",
    },
    // {
    //   href: "/seasons",
    //   label: "Seasons",
    // },
    {
      href: "/tense-conjugation-module-4",
      label: "Tense Conjugation (Module 4)",
    },
    {
      href: "/active-tense-conjugation",
      label: "Tense Conjugation (Active Verbs)",
    },
    {
      href: "/active-tense-identification",
      label: "Tense Identification (Active Verbs)",
    },
    {
      href: "/stative-tense-conjugation",
      label: "Tense Conjugation (Stative Verbs)",
    },
    {
      href: "/stative-tense-identification",
      label: "Tense Identification (Stative Verbs)",
    },
    {
      href: "/verb-lists",
      label: "Verb Lists",
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
