import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React, { useMemo } from "react";
import { Heading } from "@/design/components/heading";
import { Text } from "@/design/components/text";
import { Select } from "@/design/components/select";
import { Button } from "@/design/primitives/button";
import { arrayify } from "~/utils";
import { z } from "zod";
import { TableAsForm } from "~/components/practice/TableAsForm";
import {
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import { Link } from "@/design/primitives/link";

export const meta: MetaFunction = () => {
  return [
    { title: "Tenses practice" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of tenses for stative verbs in the Oneida language.",
    },
  ];
};

export default function PracticeTenseConjugation() {
  const options = React.useMemo(
    () =>
      createModule5VerbsList().map((datum) => ({
        label: `${arrayify(datum.root)[0]} (${datum.en})`,
        value: datum.key,
      })),
    [],
  );

  const [word, setWord] = React.useState("goodPerson");
  const [hasStarted, setHasStarted] = React.useState(false);

  const rows = useMemo(() => {
    const datum = createModule5VerbsList().find((item) => item.key === word);
    if (!datum) {
      return [];
    }

    return MODULE_5_VERB_TENSE_LIST.map((tense) => {
      const val = datum[tense];
      return {
        en: module5VerbTenseMap[tense],
        key: `${datum.key}_${tense}`,
        // on:
      };
    });
  }, [word]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Tense Conjugation
      </Heading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        verb. These words come from <Link href="/learn/module05">module 5</Link>
        .
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
          }}
          options={options}
          value={word}
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
