"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React, { useMemo } from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, Pronoun } from "~/utils";
import { z } from "zod";
import {
  MODULE_6_VERB_TENSE_LIST,
  createModule6VerbList,
  findModule6Verb,
  getPronounsForModule6Verb,
  module6VerbTenseMap,
} from "~/data/module06/activeVerbsList";
import { TableAsForm } from "~/components/practice/TableAsForm";
import { Link } from "@ukwehuwehneke/ohutsya";

const meta: any = () => {
  return [
    { title: "Tenses Conjugation for Active Verbs" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of tenses for active verbs in the Oneida language.",
    },
  ];
};

export default function PracticeTenseConjugation() {
  const [word, setWord] = React.useState("answer");
  const [pronoun, setPronoun] = React.useState("i");
  const [hasStarted, setHasStarted] = React.useState(false);

  const verbOptions = React.useMemo(
    () =>
      createModule6VerbList().map((datum) => ({
        label: datum.en,
        value: datum.key,
      })),
    [],
  );

  const pronounOptions = React.useMemo(() => {
    return getPronounsForModule6Verb(word).map((pronoun) => ({
      label: `${PRONOUN_MAP_ONEIDA[pronoun]} (${PRONOUN_MAP_EN[pronoun]})`,
      value: pronoun,
    }));
  }, [word]);

  const rows = useMemo(() => {
    const datum = findModule6Verb(word);
    if (!datum) {
      return [];
    }

    return MODULE_6_VERB_TENSE_LIST.filter((tense) =>
      tense === "cmd" ? ["u", "u2", "yall"].includes(pronoun) : true,
    ).map((tense) => ({
      en: module6VerbTenseMap[tense],
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
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Tense Conjugation for Active Verbs
      </Heading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        active verb. These words come from{" "}
        <Link href="/learn/module06">module 6</Link>.
      </Text>

      <Flex
        align={{ sm: "end" }}
        direction={{ xs: "column", sm: "row" }}
        gap={2}
      >
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value);
            setHasStarted(false);
            const allowedPronouns = getPronounsForModule6Verb(value);
            if (!allowedPronouns.includes(pronoun as Pronoun)) {
              setPronoun(allowedPronouns[0] ?? "");
            }
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
    </Flex>
  );
}
