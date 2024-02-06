import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";
import { Box } from "@/design/components/box";
import { Heading } from "@/design/components/heading";
import { Notice } from "@/design/components/notice";
import type { MetaFunction } from "@remix-run/node";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import React from "react";
import { TableWrapper } from "@/design/components/tableWrapper";
import { TextBreakdown } from "~/components/TextBreakdown";
import { SectionHeading } from "~/components/SectionHeading";
import { List } from "@/design/components/list";
import { Letter } from "~/components/Letter";
import { GoodPeopleBadPeopleResource } from "~/components/resources/GoodPeopleBadPeople";
import { RepetitiveFeatureResource } from "~/components/resources/RepetitiveFeature";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 3" },
    { name: "description", content: "Module 3 of the Oneida curriculum" },
  ];
};

export default function LearnModule03() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Heading level={1} variant="headlineL">
        Module 3
      </Heading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>
      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>

        <TOC>
          <TOC.Item label="Past Tense" value="past-tense">
            <TOC.Section>
              <TOC.Item
                label="Introduction to Past Tense"
                value="past-tense-intro"
              />
              <TOC.Item
                label="Something used to be the case"
                value="used-to-be"
              />
              <TOC.Item label="When something was the case" value="when" />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="Repetitive feature" value="repetitive-s" />

          <TOC.Item label="Relationships" value="relationships">
            <TOC.Section>
              <TOC.Item label="Married" value="married" />
              <TOC.Item label="In a Relationship" value="in-a-relationship" />
              <TOC.Item label="Separated" value="separated" />
              <TOC.Item label="Engaged" value="engaged" />
              <TOC.Item label="Single" value="single" />
              <TOC.Item label="Old Man / Old Woman" value="old-man-old-woman" />
              <TOC.Item label="Spouse" value="spouse" />
              <TOC.Item
                label="Girlfriend / Boyfriend"
                value="girlfriend-boyfriend"
              />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="Good and Bad Conjugations" value="good-bad">
            <TOC.Section>
              <TOC.Item label="Good People" value="good-people" />
              <TOC.Item label="Bad People" value="bad-people" />
              <TOC.Item label="Good Kids" value="good-kids" />
              <TOC.Item label="Bad Kids" value="bad-kids" />
            </TOC.Section>
          </TOC.Item>
          <TOC.Item label="Counting people" value="counting-people" />
          <TOC.Item label="Counting animals" value="counting-animals" />
          <TOC.Item label="Domestic animals" value="domestic-animals" />
          <TOC.Item
            label="Having a person or animal"
            value="having-conjugations"
          />
          <TOC.Item label="Clans" value="clans" />
          <TOC.Item label="Nations" value="nations" />
          <TOC.Item label="Particles" value="particles" />
        </TOC>

        <PastTenseSection />

        <RepetitiveFeatureResource />

        <GoodPeopleBadPeopleResource />
      </Flex>
    </div>
  );
}

const pastTenseColumns = [
  TableWrapper.englishColumn,
  {
    accessorKey: "one",
    cell: (value, row) =>
      value.map((v, i) => (
        <TextBreakdown as="div" breakdown={v} key={i} typeFallback={row.type} />
      )),
    header: "Translation",
  },
];

function PastTenseSection() {
  return (
    <>
      <PastTenseIntroduction />
      <PastTenseUsedToBe />
      <PastTenseWhen />
    </>
  );
}

function PastTenseIntroduction() {
  const data = [
    {
      en: "I like it",
      breakdown: [{ text: "k", type: "PR" }, "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like it",
      breakdown: [{ text: "k", type: "PR" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "it likes me",
      breakdown: [{ text: "wak", type: "PB" }, "nú·wehse̲ʔ"],
    },
    {
      en: "it used to like me",
      breakdown: [{ text: "wak", type: "PB" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "I like you",
      breakdown: [{ text: "ku", type: "PP" }, "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like you",
      breakdown: [{ text: "ku", type: "PP" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "I love it",
      breakdown: [{ text: "k", type: "PR" }, "nolúkhwa̲"],
    },
    {
      en: "I used to love it",
      breakdown: [{ text: "k", type: "PR" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "it losé me",
      breakdown: [{ text: "wak", type: "PB" }, "nolúkhwa̲"],
    },
    {
      en: "it used to love me",
      breakdown: [{ text: "wak", type: "PB" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "I love you",
      breakdown: [{ text: "ku", type: "PP" }, "nolúkhwa̲"],
    },
    {
      en: "I used to love you",
      breakdown: [{ text: "ku", type: "PP" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "I know it",
      breakdown: [{ text: "k", type: "PR" }, "yʌtelíˍ"],
    },
    {
      en: "I used to know it",
      breakdown: [{ text: "k", type: "PR" }, "yʌteli", "hné·"],
    },
    {
      en: "it knows me",
      breakdown: [{ text: "wak", type: "PB" }, "yʌtelíˍ"],
    },
    {
      en: "it used to know me",
      breakdown: [{ text: "wak", type: "PB" }, "yʌteli", "hné·"],
    },
    {
      en: "I know you",
      breakdown: [{ text: "ku", type: "PP" }, "yʌtelíˍ"],
    },
    {
      en: "I used to know you",
      breakdown: [{ text: "ku", type: "PP" }, "yʌteli", "hné·"],
    },

    {
      en: "I like myself",
      breakdown: [
        { text: "k", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehse̲ʔ",
      ],
    },
    {
      en: "I used to like myself",
      breakdown: [
        { text: "k", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehs",
        "kweʔ",
      ],
    },

    {
      en: "You and I like each other",
      breakdown: [
        { text: "te", type: "RECP" },
        { text: "ty", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehse̲ʔ",
      ],
    },
    {
      en: "You and I used to like each other",
      breakdown: [
        { text: "te", type: "RECP" },
        { text: "ty", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehs",
        "kweʔ",
      ],
    },

    {
      en: "I know",
      breakdown: [{ text: "wak", type: "PR" }, "anúhteʔ"],
    },
    {
      en: "I used to know",
      breakdown: [{ text: "wak", type: "PR" }, "anúhte", "hkweʔ"],
    },
  ];

  return (
    <TableWrapper columns={TableWrapper.columnsEnglishBreakdown} data={data} />
  );
}

function PastTenseUsedToBe() {
  const data = [
    {
      en: ["I am a child", "I was / used to be a child"],
      one: [
        [{ text: "ke" }, "khsá·"],
        [{ text: "ke" }, "khsahné·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young man", "I was / used to be a young man"],
      one: [
        [{ text: "k" }, "nikʌ́htluʔ"],
        [{ text: "k" }, "nikʌhtlu", "hné·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young woman", "I was / used to be a young woman"],
      one: [
        [{ text: "k" }, "yaʔtaséha"],
        [{ text: "k" }, "yaʔtase", "hné·"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am free / single",
        "I was / used to be free / single",
        "I didn't used to be free / single (but I am now)",
      ],
      one: [
        [{ text: "k" }, "atatwʌni·yó̲·"],
        [{ text: "k" }, "atatwʌni·yo", "hné·"],
        ["yah teʔ", { text: "k" }, "atatwʌni·yo", "hné·"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am engaged (to someone)",
        "I was / used to be engaged (to someone)",
      ],
      one: [
        [{ text: "yukni" }, "nyákheʔ"],
        [{ text: "yukni" }, "nyákhe", "hkweʔ"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am in a relationship (with someone)",
        "I was / used to be in a relationship (with someone)",
      ],
      one: [
        [{ text: "yákn" }, "ehse̲"],
        [{ text: "yákn" }, "eh", "skweʔ"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am married",
        "I was / used to be married",
        "I didn't used to be married (but I am now)",
      ],
      one: [
        [{ text: "wake" }, "nyákuʔ"],
        [{ text: "wake" }, "nyaku", "hné·"],
        ["yáh teʔ", { text: "wake" }, "nyaku", "hné·"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am separated (from someone)",
        "I was / used to be separated (from someone)",
      ],
      one: [
        ["te", { text: "yuky" }, "atekháshyuʔ"],
        ["te", { text: "yuky" }, "atekhashyu", "hné·"],
      ],
      type: "PB",
    },
    {
      en: ["my name is ...", "my name was / used to be ..."],
      one: [
        ["... ní·", { text: "yúk" }, "yats"],
        ["... ní·", { text: "yúk" }, "yat", "skweʔ"],
      ],
      type: "PP",
    },
    {
      en: [
        "I like her / them",
        "I used to like her / them",
        "I didn't used to like her / them (but I do now)",
      ],
      one: [
        [{ text: "khe" }, "nú·wehse̲ʔ"],
        [{ text: "khe" }, "nú·weh", "skweʔ"],
        ["yáh teʔ", { text: "khe" }, "nú·weh", "skweʔ"],
      ],
      type: "PP",
    },
    {
      en: [
        "I love her / them",
        "I used to love her / them",
        "I didn't used to love her / them (but I do now)",
      ],
      one: [
        [{ text: "khe" }, "nolúkhwa̲ʔ"],
        [{ text: "khe" }, "nolúkhwa", "hkweʔ"],
        ["yáh te", { text: "khe" }, "nolúkhwa", "hkweʔ"],
      ],
      type: "PP",
    },
    {
      en: ["I am 20 years old", "I was / used to be 20 years old"],
      one: [
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyá·ku̲"],
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyaʔku", "hné·"],
      ],
      type: "PB",
    },
    {
      en: [
        "I know / am aware",
        "I used to know / be aware (but not now)",
        "I didn't used to know / be aware (but I do now)",
      ],
      one: [
        [{ text: "wak" }, "anúhte̲ʔ"],
        [{ text: "wak" }, "anúhte", "hkweʔ"],
        ["yáh teʔ", { text: "wak" }, "anúhte", "hkweʔ"],
      ],
      type: "PB",
    },
  ];

  return <TableWrapper columns={pastTenseColumns} data={data} />;
}

function PastTenseWhen() {
  const data = [
    {
      en: ["I am a child", "when I was / used to be a child"],
      one: [
        [{ text: "k" }, "ekhsá·"],
        ["tshi", { text: "k" }, "ekhsá·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young man", "when I was / used to be a young man"],
      one: [
        [{ text: "k" }, "nikʌ́htluʔ"],
        ["tshi", { text: "k" }, "nikʌh́tluʔ"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young woman", "when I was / used to be a young woman"],
      one: [
        [{ text: "k" }, "yá·taseha̲"],
        ["tshi", { text: "k" }, "yá·taséha̲"],
      ],
      type: "PR",
    },
    {
      en: ["I am free / single", "when I was free / single"],
      one: [
        [{ text: "k" }, "atatwʌni·yó̲·"],
        ["tshi", { text: "k" }, "atatwʌni·yó̲·"],
      ],
      type: "PR",
    },
    {
      en: ["I am engaged (to someone)", "when I was engaged (to someone)"],
      one: [
        [{ text: "yukni" }, "nyákheʔ"],
        ["tshi", { text: "yukni" }, "nyákheʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am in a relationship (with someone)",
        "when I was in a relationship (with someone)",
      ],
      one: [
        [{ text: "yákn" }, "ehse̲"],
        ["tshi", { text: "yákn" }, "ehse̲"],
      ],
      type: "PR",
    },
    {
      en: ["I am married", "when I was married"],
      one: [
        [{ text: "wake" }, "nyákuʔ"],
        ["tshi", { text: "wake" }, "nyákuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["I am married (to someone)", "when I was married (to someone)"],
      one: [
        [{ text: "yukni" }, "nyákuʔ"],
        ["tshi", { text: "yukni" }, "nyá·kuʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am separated (from someone)",
        "when I was separated (from someone)",
      ],
      one: [
        ["te", { text: "yukya" }, "tekháshyuʔ"],
        ["tshaʔ", " te", { text: "yukya" }, "tekháshyuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["I love her / them", "when I loved her / them"],
      one: [
        ["khe", "nolúkhwa̲ʔ"],
        ["tshi", { text: "khe" }, "nolúkhwa̲ʔ"],
      ],
      type: "PB",
    },
    {
      en: ["I am 20 years old", "when I was / used to be 20 years old"],
      one: [
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyá·ku̲"],
        [
          "tewáhsʌ ",
          { text: "tshaʔ", type: "PAST" },
          "te",
          { text: "wak" },
          "ohsliyá·ku̲",
        ],
      ],
      type: "PB",
    },
  ];

  return <TableWrapper columns={pastTenseColumns} data={data} />;
}
