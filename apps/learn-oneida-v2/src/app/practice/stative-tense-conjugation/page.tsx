"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React, { useMemo } from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  arrayify,
  pronouns,
} from "@ukwehuwehneke/language-components";
import { z } from "zod";
import { TableAsForm } from "~/components/practice/TableAsForm";
import {
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tenses practice",
//   description:
//     "Practice your knowledge and understanding of tenses for stative verbs in the Oneida language.",
// };

export const runtime = "edge";

export default function PracticeTenseConjugation() {
  const [word, setWord] = React.useState("goodPerson");
  const [hasStarted, setHasStarted] = React.useState(false);
  const [pronoun, setPronoun] = React.useState("i");

  const verbOptions = React.useMemo(
    () =>
      createModule5VerbsList().map((datum) => ({
        label: `${arrayify(datum.root)[0]}`,
        value: datum.key,
      })),
    [],
  );

  const pronounOptions = React.useMemo(() => {
    return pronouns.map((pronoun) => ({
      label: `${PRONOUN_MAP_ONEIDA[pronoun]} (${PRONOUN_MAP_EN[pronoun]})`,
      value: pronoun,
    }));
  }, []);

  const rows = useMemo(() => {
    const datum = createModule5VerbsList().find((item) => item.key === word);
    if (!datum) {
      return [];
    }

    return MODULE_5_VERB_TENSE_LIST.filter((tense) =>
      tense === "cmd" ? ["u", "u2", "yall"].includes(pronoun) : true,
    ).map((tense) => ({
      en: module5VerbTenseMap[tense],
      key: `${datum.key}_${tense}`,
      on: datum[tense]!.phrases.find((p) => p.pronoun === pronoun)!.phrase,
    }));
  }, [pronoun, word]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <PageWrapper>
      <Heading level={1} variant="headlineL">
        Tense Conjugation
      </Heading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        verb. These words come from <LinkWrapper page={5} />.
      </Text>

      <Flex direction="column" gap={2}>
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value);
            setHasStarted(false);
          }}
          options={verbOptions}
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
            onClick={() => {
              setHasStarted(true);
            }}
          >
            Start
          </Button>
        </Flex.Item>
      </Flex>

      {hasStarted && (
        <TableAsForm
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
