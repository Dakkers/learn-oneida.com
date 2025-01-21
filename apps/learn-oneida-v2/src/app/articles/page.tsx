import { Heading } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Link } from "@/components/Link";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles provided by this website",
};

export default function Articles() {
  const articlesLinguistics = [
    ["/glottal-stop", "Glottal Stop"],
    ["/prepausal-endings", "Prepausal Endings"],
    ["/repetitive-conjugation", "Repetitive Conjugation"],
    ["/stress", "Stress and Accents"],
    ["/letter-h", "The Letter H"],
    ["/whispered-endings", "Whispered Endings"],
  ];
  const articles = [
    {
      href: "/around-the-house",
      label: "Around the house",
    },
    {
      href: "/at-someones-place",
      label: "At someone's place",
    },
    {
      href: "/cardinal-directions",
      label: "Cardinal directions",
    },
    {
      href: "/cities",
      label: "Cities",
    },
    {
      href: "/clans",
      label: "Clans",
    },
    {
      href: "/clock-time",
      label: "Clock time",
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
      href: "/countries",
      label: "Countries",
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
      href: "/english-names",
      label: "English names",
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
      href: "/nations",
      label: "Nations",
    },
    {
      href: "/places-in-the-community",
      label: "Places in the community",
    },
    {
      href: "/phone-numbers",
      label: "Phone numbers",
    },
    {
      href: "/relationships",
      label: "Relationships",
    },
    {
      href: "/roads",
      label: "Roads",
    },
    {
      href: "/seasons",
      label: "Seasons",
    },
    {
      href: "/kanuhwelatuksla",
      label: "Thanksgiving Address",
    },
    {
      href: "/times-of-day",
      label: "Times of day",
    },
  ];

  return (
    <PageWrapper>
      <Heading level={1} variant="headlineL">
        Articles
      </Heading>

      <Text>Articles regarding the linguistics side of things:</Text>
      <LinksList links={articlesLinguistics} />

      <Text>Other articles:</Text>
      <LinksList links={articles} />
    </PageWrapper>
  );
}

function LinksList({
  links,
}: {
  links: Array<string[]> | Array<{ href: string; label: string }>;
}) {
  return (
    <List>
      {links.map((t, i) => {
        const href = Array.isArray(t) ? t[0] : t.href;
        const label = Array.isArray(t) ? t[1] : t.label;
        return (
          <List.Item key={i}>
            <Link href={`/articles${href}`}>{label}</Link>
          </List.Item>
        );
      })}
    </List>
  );
}
