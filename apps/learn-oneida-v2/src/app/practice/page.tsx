"use client";

import { Heading, Link } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { Flex } from "@ukwehuwehneke/ohutsya";

const meta: any = () => {
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
      href: "/characteristic-conjugation-module-8",
      label: "Characteristic Conjugation (Module 8)",
    },
    {
      href: "/characteristic-identification-module-8",
      label: "Characteristic Identification (Module 8)",
    },
    {
      href: "/counting-time",
      label: "Counting time",
    },
    {
      href: "/environment-nouns-module-10",
      label: "Environment Noun Identification (Module 10)",
    },
    {
      href: "/food-characteristics-module-9",
      label: "Food Characteristics (Module 9)",
    },
    {
      href: "/food-identification-module-9",
      label: "Food Identification (Module 9)",
    },
    {
      href: "/listen",
      label: "Listening Practice",
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
      href: "/noun-conjugation-module-7",
      label: "Noun Conjugation (Module 7)",
    },
    {
      href: "/noun-identification-module-7",
      label: "Noun Identification (Module 7)",
    },
    {
      href: "/places",
      label: "Places in the community",
    },
    {
      href: "/soundchart",
      label: "Sound chart",
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
            <Link href={`/practice${t.href}`}>{t.label}</Link>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
