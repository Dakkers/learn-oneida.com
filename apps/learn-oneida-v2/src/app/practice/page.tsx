import { Link } from "@/components/Link";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
  description: "Improve your Oneida skills with tools provided by this website",
};

export const runtime = "edge";

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
      href: "/animal-identification",
      label: "Animal Identification",
    },
    {
      href: "/body-part-identification",
      label: "Body Part Identification",
    },
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
    <PageWrapper>
      <SectionHeading level={1}>Practice</SectionHeading>
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
    </PageWrapper>
  );
}
