import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";

import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { TableWrapper } from "@/components/TableWrapper";
import {
  type BreakdownArray,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { GoodPeopleBadPeopleArticle } from "~/components/articles/GoodPeopleBadPeople";
import { RepetitiveFeatureArticle } from "~/components/articles/RepetitiveFeature";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { CountingPeopleArticle } from "~/components/articles/CountingPeople";
import { DomesticatedAnimalsArticle } from "~/components/articles/DomesticatedAnimals";
import { RelationshipsArticle } from "~/components/articles/Relationships";
import { ClansArticle } from "~/components/articles/Clans";
import { NationsArticle } from "~/components/articles/Nations";
import { DialogueTable } from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { Letter } from "@/components/Letter";
import { getDialogueModule03 } from "@/data/module03";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 3",
  description: "Module 3 of the Oneida curriculum",
};

export const runtime = "edge";

export default function LearnModule03() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 3</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>Note:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Past Tense" value="past-tense">
          <TocSection>
            <TocItem label="Introduction" value="past-tense-intro" />
            <TocItem label="Something used to be the case" value="used-to-be" />
            <TocItem
              label="When something was the case"
              value="past-tense-when"
            />
          </TocSection>
        </TocItem>

        <TocItem label="Repetitive feature" value="repetitive-s" />

        <TocItem label="Relationships" value="relationships">
          <TocSection>
            <TocItem label="Married" value="married" />
            <TocItem label="In a Relationship" value="in-a-relationship" />
            <TocItem label="Separated" value="separated" />
            <TocItem label="Engaged" value="engaged" />
            <TocItem label="Single" value="single" />
            <TocItem label="Old Man / Old Woman" value="old-man-old-woman" />
            <TocItem label="Spouse" value="spouse" />
            <TocItem
              label="Girlfriend / Boyfriend"
              value="girlfriend-boyfriend"
            />
          </TocSection>
        </TocItem>

        <TocItem label="Good and Bad Conjugations" value="good-bad-people">
          <TocSection>
            <TocItem label="Good People" value="good-people" />
            <TocItem label="Bad People" value="bad-people" />
            <TocItem label="Good Kids" value="good-kids" />
            <TocItem label="Bad Kids" value="bad-kids" />
          </TocSection>
        </TocItem>
        <TocItem label="Counting people" value="counting-people" />
        <TocItem label="Counting animals" value="counting-animals" />
        <TocItem label="Domesticated animals" value="domesticated-animals" />
        <TocItem
          label="Having a person or animal"
          value="having-conjugations"
        />
        <TocItem label="Clans" value="clans" />
        <TocItem label="Nations" value="nations" />
        <TocItem label="Particles" value="particles" />
        <TocItem label="Dialogue" value="dialogue" />
        <TocItem label="Translation exercises" value="translation-exercises" />
      </TOC>

      <PastTenseSection />

      <RepetitiveFeatureArticle level={2} />

      <RelationshipsArticle level={2} />

      <GoodPeopleBadPeopleArticle level={2} />

      <CountingPeopleArticle level={2} />

      <DomesticatedAnimalsArticle level={2} />

      <HavingConjugations />

      <ClansArticle level={2} />

      <NationsArticle level={2} />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module03" />

      <DialogueSection />
      <TranslationExercisesSection group="module03" />
    </PageWrapper>
  );
}

function PastTenseSection() {
  return (
    <>
      <SectionHeading id="past-tense" level={2}>
        Past Tense
      </SectionHeading>
      <Text>
        The past tense in Oneida can be communicated using either prefixes or
        suffixes on words.
      </Text>

      <PastTenseIntroduction />
      <PastTenseWhen />
    </>
  );
}

function PastTenseIntroduction() {
  const data = [
    {
      en: "I like it",
      breakdown: [["k", "PS"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like it",
      breakdown: [["k", "PS"], "nú·wehs", ["kwe̲ʔ", "PAST"]],
    },
    {
      en: "It likes me",
      breakdown: [["wak", "PO"], "nú·wehse̲ʔ"],
    },
    {
      en: "It used to like me",
      breakdown: [["wak", "PO"], "nú·wehs", ["kwe̲ʔ", "PAST"]],
    },
    {
      en: "I like you",
      breakdown: [["ku", "PI"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like you",
      breakdown: [["ku", "PI"], "nú·wehs", ["kwe̲ʔ", "PAST"]],
    },
    {
      en: "I love it",
      breakdown: [["k", "PS"], "nolúkhwa̲"],
    },
    {
      en: "I used to love it",
      breakdown: [["k", "PS"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "It loves me",
      breakdown: [["wak", "PO"], "nolúkhwa̲"],
    },
    {
      en: "It used to love me",
      breakdown: [["wak", "PO"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I love you",
      breakdown: [["ku", "PI"], "nolúkhwa̲"],
    },
    {
      en: "I used to love you",
      breakdown: [["ku", "PI"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I know it",
      breakdown: [["k", "PS"], "yʌtelí̲"],
    },
    {
      en: "I used to know it",
      breakdown: [["k", "PS"], "yʌteli", ["hné·", "PAST"]],
    },
    {
      en: "It knows me",
      breakdown: [["wak", "PO"], "yʌtelí̲"],
    },
    {
      en: "It used to know me",
      breakdown: [["wak", "PO"], "yʌteli", ["hné·", "PAST"]],
    },
    {
      en: "I know you",
      breakdown: [["ku", "PI"], "yʌtelí̲"],
    },
    {
      en: "I used to know you",
      breakdown: [["ku", "PI"], "yʌteli", ["hné·", "PAST"]],
    },

    {
      en: "I like myself",
      breakdown: [["k", "PS"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like myself",
      breakdown: [["k", "PS"], ["atat", "REFL"], "nú·wehs", ["kwe̲ʔ", "PAST"]],
    },

    {
      en: "You and I like each other",
      breakdown: [["te", "DUAL"], ["ty", "PS"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    },
    {
      en: "You and I used to like each other",
      breakdown: [
        ["te", "DUAL"],
        ["ty", "PS"],
        ["atat", "REFL"],
        "nú·wehs",
        ["kwe̲ʔ", "PAST"],
      ],
    },

    {
      en: "I know",
      breakdown: [["wak", "PO"], "anúhte̲ʔ"],
    },
    {
      en: "I used to know",
      breakdown: [["wak", "PO"], "anúhte", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I am a child",
      breakdown: [["ke", "PS"], "ksá·"],
    },
    {
      en: "I used to be a child",
      breakdown: [["ke", "PS"], "ksa", ["hné·", "PAST"]],
    },
    {
      en: "I am a young man",
      breakdown: [["k", "PS"], "nikʌ́htluʔ"],
    },
    {
      en: "I used to be a young man",
      breakdown: [["k", "PS"], "nikʌhtlu", ["hné·", "PAST"]],
    },
    {
      en: "I am a young woman",
      breakdown: [["k", "PS"], "yaʔtaséha"],
    },
    {
      en: "I used to be a young woman",
      breakdown: [["k", "PS"], "yaʔtase", ["hné·", "PAST"]],
    },
    {
      en: "I am free / single",
      breakdown: [["k", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "I used to be free / single",
      breakdown: [["k", "PS"], "atatwʌni·yo", ["hné·", "PAST"]],
    },
    {
      en: "I didn't used to be free / single (but I am now)",
      breakdown: ["yáh teʔ", ["k", "PS"], "atatwʌni·yo", ["hné·", "PAST"]],
    },
    {
      en: "I am engaged (to someone)",
      breakdown: [["yukni", "PO"], "nyákheʔ"],
    },
    {
      en: "I used to be engaged (to someone)",
      breakdown: [["yukni", "PO"], "nyákhe", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I am in a relationship (with someone)",
      breakdown: [["yákn", "PS"], "ehse̲"],
    },
    {
      en: "I used to be in a relationship (with someone)",
      breakdown: [["yákn", "PS"], "eh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PO"], "nyákuʔ"],
    },
    {
      en: "I used to be married",
      breakdown: [["wake", "PO"], "nyaku", ["hné·", "PAST"]],
    },
    {
      en: "I didn't used to be married (but I am now)",
      breakdown: ["yáh teʔ", ["wake", "PO"], "nyaku", ["hné·", "PAST"]],
    },
    {
      en: "I am separated (from someone)",
      breakdown: ["te", ["yuky", "PO"], "atekháshyuʔ"],
    },
    {
      en: "I used to be separated (from someone)",
      breakdown: ["te", ["yuky", "PO"], "atekhashyu", ["hné·", "PAST"]],
    },
    {
      en: "My name is ...",
      breakdown: ["... ní·", ["yúk", "PI"], "yats"],
    },
    {
      en: "My name used to be ...",
      breakdown: ["... ní·", ["yúk", "PI"], "yat", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I like her / them",
      breakdown: [["khe", "PI"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like her / them",
      breakdown: [["khe", "PI"], "nú·weh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to like her / them (but I do now)",
      breakdown: ["yáh teʔ", ["khe", "PI"], "nú·weh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I love her / them",
      breakdown: [["khe", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I used to love her / them",
      breakdown: [["khe", "PI"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to love her / them (but I do now)",
      breakdown: ["yáh te", ["khe", "PI"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I am 20 years old",
      breakdown: ["tewáhsʌ naʔte", ["wak", "PO"], "ohsliyá·ku̲"],
    },
    {
      en: "I used to be 20 years old",
      breakdown: [
        "tewáhsʌ naʔte",
        ["wak", "PO"],
        "ohsliyaʔku",
        ["hné·", "PAST"],
      ],
    },
    {
      en: "I know",
      breakdown: [["wak", "PO"], "anúhte̲ʔ"],
    },
    {
      en: "I used to know (but not now)",
      breakdown: [["wak", "PO"], "anúhte", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to know (but I do now)",
      breakdown: ["yáh teʔ", ["wak", "PO"], "anúhte", ["hkwe̲ʔ", "PAST"]],
    },
  ];

  return (
    <>
      <SectionHeading id="past-tense-intro" level={3}>
        Introduction
      </SectionHeading>
      <Text>
        We&lsquo;ll start with common suffixes <Letter>hne</Letter> and{" "}
        <Letter>kweʔ</Letter>. Note that sometimes the suffix replaces the last
        syllable, whereas in other cases it is a new syllable added to the end.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </>
  );
}

function PastTenseWhen() {
  const data = [
    {
      en: "I am a child",
      breakdown: [["k", "PS"], "ekhsá·"],
    },
    {
      en: "When I used to be a child",
      breakdown: ["tshi", ["k", "PS"], "ekhsá·"],
    },
    {
      en: "I am a young man",
      breakdown: [["k", "PS"], "nikʌ́htluʔ"],
    },
    {
      en: "When I used to be a young man",
      breakdown: ["tshi", ["k", "PS"], "nikʌh́tluʔ"],
    },
    {
      en: "I am a young woman",
      breakdown: [["k", "PS"], "yá·taseha̲"],
    },
    {
      en: "When I used to be a young woman",
      breakdown: ["tshi", ["k", "PS"], "yá·taséha̲"],
    },
    {
      en: "I am free / single",
      breakdown: [["k", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "When I was free / single",
      breakdown: ["tshi", ["k", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "I am engaged (to someone)",
      breakdown: [["yukni", "PO"], "nyákheʔ"],
    },
    {
      en: "When I was engaged (to someone)",
      breakdown: ["tshi", ["yukni", "PO"], "nyákheʔ"],
    },
    {
      en: "I am in a relationship (with someone)",
      breakdown: [["yákn", "PS"], "ehse̲"],
    },
    {
      en: "When I was in a relationship (with someone)",
      breakdown: ["tshi", ["yákn", "PS"], "ehse̲"],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PO"], "nyákuʔ"],
    },
    {
      en: "When I was married",
      breakdown: ["tshi", ["wake", "PO"], "nyákuʔ"],
    },
    {
      en: "I am married (to someone)",
      breakdown: [["yukni", "PO"], "nyákuʔ"],
    },
    {
      en: "When I was married (to someone)",
      breakdown: ["tshi", ["yukni", "PO"], "nyá·kuʔ"],
    },
    {
      en: "I am separated (from someone)",
      breakdown: ["te", ["yukya", "PO"], "tekháshyuʔ"],
    },
    {
      en: "When I was separated (from someone)",
      breakdown: ["tshaʔ", "te", ["yukya", "PO"], "tekháshyuʔ"],
    },
    {
      en: "I love her / them",
      breakdown: [["khe", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "When I loved her / them",
      breakdown: ["tshi", ["khe", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I am 20 years old",
      breakdown: ["tewáhsʌ naʔte", ["wak", "PO"], "ohsliyá·ku̲"],
    },
    {
      en: "When I used to be 20 years old",
      breakdown: [
        "tewáhsʌ ",
        ["tshaʔ", "PAST"],
        "te",
        ["wak", "PO"],
        "ohsliyá·ku̲",
      ],
    },
  ];

  return (
    <>
      <SectionHeading id="past-tense-when" level={3}>
        When something was the case
      </SectionHeading>
      <Text>
        Now, here are examples of when something was the case. This is
        communicated using a pre-pronominal prefix called the{" "}
        <LinkWrapper page="coin" />.
      </Text>

      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </>
  );
}

interface WeirdRow {
  col0: BreakdownArray;
  col1: BreakdownArray;
  col2: BreakdownArray;
  col3: BreakdownArray;
  col4: BreakdownArray;
  col5: BreakdownArray;
}

function HavingConjugations() {
  return (
    <>
      <SectionHeading id="having-conjugations" level={2}>
        &quot;Having&quot; Conjugations
      </SectionHeading>
      <Text>Below is an introduction into more conjugations in Oneida.</Text>
      <SectionHeading level={3}>
        &quot;Having&quot; a person or animal
      </SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol([
          "pronominal",
          "noun root",
          "joiner",
          "verb root",
        ])}
        data={[
          {
            col0: [["wake", "PO"]],
            col1: [["ksaʔt", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["ksá·t", "NOUN"],
                    ...row.col2,
                    ...row.col3,
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have a child)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PO"]],
            col1: [["wil", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat(["yʌ́·"])}
                />
                <Text variant="bodyS">
                  <i>(I have a baby)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PO"]],
            col1: [["naskw", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["náskw", "NOUN"],
                    ...row.col2,
                    "yʌʔ",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have an animal)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PO"]],
            col1: [["nikʌhtluʔtsl", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat(["yʌ́·"])}
                />
                <Text variant="bodyS">
                  <i>(I have a boyfriend)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PO"]],
            col1: [["yaʔtaseʔtsl", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["yaʔtase·tsl", "NOUN"],
                    ...row.col2,
                    "·",
                    "yʌ́·",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have a girlfriend)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; a person or animal in the past
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol([
          "pronominal",
          "noun root",
          "joiner",
          "verb root",
          "joiner",
          "past tense",
        ])}
        data={[
          {
            col0: [["wake", "PO"]],
            col1: [["naskw", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌʔt"],
            col4: [["a", "JOIN"]],
            col5: [["hkweʔ", "PAST"]],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    ...row.col3,
                    ...row.col4,
                    ...row.col5,
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have an animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; a good animal
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol(["pronominal", "noun root", "verb root"])}
        data={[
          {
            col0: [["wak", "PO"]],
            col1: [["naskw", "NOUN"]],
            col2: ["iyo"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[...row.col0, ...row.col1, ["i·yó"]]}
                />
                <Text variant="bodyS">
                  <i>(I have a good animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; an animal in the past
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol([
          "pronominal",
          "noun root",
          "verb root",
          "past tense",
        ])}
        data={[
          {
            col0: [["wak", "PO"]],
            col1: [["naskw", "NOUN"]],
            col2: ["iyo"],
            col3: [["hne", "PAST"]],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                    "hné·",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have a good animal)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PO"]],
            col1: [["naskw", "NOUN"]],
            col2: ["aksʌ"],
            col3: [["hne", "PAST"]],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                    "hné·",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have a bad animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}

const createColsLol = (cols: string[]) => {
  const result = [];
  for (let i = 0; i < cols.length; i++) {
    result.push({
      accessorKey: `col${i}`,
      cell: (value: BreakdownArray) => <TextBreakdown breakdown={value} />,
      header: cols[i],
    });
    if (i !== cols.length - 1) {
      result.push({
        accessorKey: `plus-${i}`,
        cell: () => "+",
        header: "+",
      });
    } else {
      result.push({
        accessorKey: "equals",
        cell: () => "=",
        header: "=",
      });
    }
  }
  result.push({
    accessorKey: "result",
    cell: (renderer: (row: WeirdRow) => React.ReactNode, row: WeirdRow) => (
      <Flex gap={2}>{renderer(row)}</Flex>
    ),
    header: "Result",
  });

  return result;
};

function DialogueSection() {
  const data = getDialogueModule03();

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <DialogueTable audioFolder="module03/dialogue/part1" data={data.part1} />
      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable audioFolder="module03/dialogue/part2" data={data.part2} />
    </>
  );
}
