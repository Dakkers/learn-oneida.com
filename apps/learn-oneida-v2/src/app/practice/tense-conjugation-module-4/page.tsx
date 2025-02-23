"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React, { useMemo } from "react";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  type Pronoun,
  pronouns,
} from "@ukwehuwehneke/language-components";
import { z } from "zod";
import { TableAsForm } from "~/components/practice/TableAsForm";
import { createModule4Data } from "~/data/module04";
import {
  SectionHeading,
  translatePhrase,
} from "@ukwehuwehneke/language-components";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tenses Conjugation for Verbs from Module 4",
//   description:
//     "Practice your knowledge and understanding of tenses for verbs from module 4 in the Oneida language.",
// };

export const runtime = "edge";

export default function PracticeTenseConjugation() {
  const [word, setWord] = React.useState("here");
  const [pronoun, setPronoun] = React.useState("i");
  const [hasStarted, setHasStarted] = React.useState(false);

  const pronounOptions = React.useMemo(() => {
    return pronouns.map((pronoun) => ({
      label: `${PRONOUN_MAP_ONEIDA[pronoun]} (${PRONOUN_MAP_EN[pronoun]})`,
      value: pronoun,
    }));
  }, []);

  const datumKeys = useMemo(() => {
    if (word === "here") {
      return [
        "data-is-here",
        "data-was-here",
        "data-will-be-here",
        "data-might-be-here",
        "data-is-not-here",
        "data-was-not-here",
        "data-will-not-be-here",
      ];
    } else if (word === "there") {
      return [
        "data-is-there",
        "data-was-there",
        "data-will-be-there",
        "data-might-be-there",
        "data-is-not-there",
        "data-was-not-there",
        "data-will-not-be-there",
      ];
    } else if (word === "home") {
      return [
        "data-is-at-home",
        "data-was-at-home",
        "data-will-be-at-home",
        "data-might-be-at-home",
        "data-is-not-at-home",
        "data-was-not-at-home",
        "data-will-not-be-at-home",
      ];
    } else if (word === "lives") {
      return [
        "data-lives-there",
        "data-used-to-live-there",
        "data-will-live-there",
        "data-might-live-there",
        "data-doesnt-live-there",
        "data-didnt-used-to-live-there",
        "data-will-not-live-there",
      ];
    } else if (word === "want-think") {
      return [
        "data-want",
        "data-doesnt-want",
        "data-used-to-want",
        "data-didnt-used-to-want",
        "data-thought",
      ];
    }
    return [];
  }, [word]);

  const rows = useMemo(() => {
    const data = createModule4Data();
    return datumKeys.map((key) => {
      const datum = data.find((d) => d.key === key)!;
      return {
        en: translatePhrase(datum.data.translation, pronoun as Pronoun),
        key,
        on: datum.data.phrases.find((p) => p.pronoun === pronoun)!.phrase,
      };
    });
  }, [datumKeys, pronoun]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Tense Conjugation for Module 4</SectionHeading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        verb from <LinkWrapper page={4} />.
      </Text>

      <Flex direction="column" gap={2}>
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value);
            setHasStarted(false);
          }}
          options={[
            { label: "Being here", value: "here" },
            { label: "Being there", value: "there" },
            { label: "Living there", value: "lives" },
            { label: "At home", value: "home" },
            { label: "Want / Think", value: "want-think" },
          ]}
          value={word}
        />

        <Select
          label="Pronoun"
          onChange={(value) => {
            setPronoun(value);
            setHasStarted(false);
          }}
          options={pronounOptions}
          value={pronoun}
        />

        <Flex.Item>
          <Button
            disabled={!word || hasStarted}
            onClick={() => setHasStarted(true)}
          >
            Start
          </Button>
        </Flex.Item>
      </Flex>

      {hasStarted && (
        <TableAsForm
          bleed={32}
          checkCorrectness={(key, val) =>
            TableAsForm.defaultCheckCorrectness({ key, val, rows })
          }
          formSchema={formSchema}
          rows={rows}
        />
      )}
    </PageWrapper>
  );
}
