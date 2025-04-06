import { Heading } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Link } from "@/components/Link";
import { SectionHeading } from "@ukwehuwehneke/language-components";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles provided by this website",
};

export default function Articles() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Articles</SectionHeading>

      <SectionHeading level={2}>Animals</SectionHeading>
      <LinksList
        links={[
          ["/birds", "Birds"],
          ["/insects", "Insects"],
          ["/mammals", "Mammals"],
          ["/domesticated-animals", "Domesticated animals"],
        ]}
      />

      <SectionHeading level={2}>Environment</SectionHeading>
      <LinksList
        links={[
          ["/cardinal-directions", "Cardinal directions"],
          ["/seasons", "Seasons"],
        ]}
      />

      <SectionHeading level={2}>Household</SectionHeading>
      <LinksList
        links={[
          ["/around-the-house", "Around the house"],
          ["/at-someones-place", "At someone's place"],
        ]}
      />

      <SectionHeading level={2}>Locations</SectionHeading>
      <LinksList
        links={[
          ["/roads", "Roads"],
          ["/places-in-the-community", "Places in the community"],
          ["/cities", "Cities"],
          ["/countries", "Countries"],
        ]}
      />

      <SectionHeading level={2}>Time</SectionHeading>
      <LinksList
        links={[
          ["/clock-time", "Clock time"],
          ["/counting-time", "Counting lengths of time"],
          ["/days-of-the-week", "Days of the week"],
          ["/months", "Months of the year"],
          ["/times-of-day", "Times of day"],
        ]}
      />

      <SectionHeading level={2}>Ukwehuwehné·ke</SectionHeading>
      <LinksList
        links={[
          ["/clans", "Clans"],
          ["/nations", "Nations"],
          ["/kanuhwelatuksla", "Thanksgiving Address"],
        ]}
      />

      <SectionHeading level={2}>Linguistics</SectionHeading>
      <Text>
        Nerds rejoice: these articles cover the linguistics of the Oneida
        language.
      </Text>
      <LinksList
        links={[
          ["/glottal-stop", "Glottal Stop"],
          ["/prepausal-endings", "Prepausal Endings"],
          ["/pronominals", "Pronominals"],
          ["/repetitive-feature", "Repetitive Feature"],
          ["/stress", "Stress and Accents"],
          ["/letter-h", "The Letter H"],
          ["/whispered-endings", "Whispered Endings"],
          ["/understanding-agents", "Understanding Agents"],
        ]}
      />

      <SectionHeading level={2}>Uncategorized</SectionHeading>
      <LinksList
        links={[
          ["/english-names", "English names"],
          ["/good-people-bad-people", "Good people and bad people"],
          ["/counting-people", "Counting people"],
          ["/phone-numbers", "Phone numbers"],
          ["/relationships", "Relationships"],
        ]}
      />
    </PageWrapper>
  );
}

function LinksList({
  links: _links,
}: {
  links: Array<[string, string]>;
}) {
  const links = _links.toSorted((a, b) => a[1].localeCompare(b[1]));

  return (
    <List>
      {links.map((t, i) => {
        return (
          <List.Item key={i}>
            <Link href={`/articles${t[0]}`}>{t[1]}</Link>
          </List.Item>
        );
      })}
    </List>
  );
}
