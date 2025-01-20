import { Flex } from "@ukwehuwehneke/ohutsya";

import React, { useMemo } from "react";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { z } from "zod";
import { TableAsForm } from "~/components/practice/TableAsForm";
import {
  convertBreakdownToPlainText,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import { createModule7NounsList, getEnglishTranslation } from "@/data/module07";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noun Conjugation from Module 7",
  description:
    "Practice your knowledge and understanding of noun conjugation from module 7 in the Oneida language.",
};

export default function PracticeCharacteristicConjugationModule8() {
  const [noun, setNoun] = React.useState(createModule7NounsList()[0].key);
  const [hasStarted, setHasStarted] = React.useState(false);

  const nounOpts = useMemo(() => {
    const list = createModule7NounsList();
    return list.map((datum) => ({
      label: datum.en,
      value: datum.key,
    }));
  }, []);

  const rows = useMemo(() => {
    const list = createModule7NounsList();
    const keys = [
      "single",
      "plural",
      "have",
      "havePlural",
      "good",
      "goodPlural",
      "haveGood",
      "haveGoodPlural",
      "big",
      "bigPlural",
      "count1",
      "count2",
      "count3",
    ] as const;
    const charDatum = list.find((obj) => obj.key === noun)!;

    return keys
      .map((key) => {
        if (!charDatum[key]) {
          return null;
        }

        return {
          en: getEnglishTranslation(charDatum, key),
          key,
          // @ts-expect-error Need better typing on the module 7 list
          on: convertBreakdownToPlainText(charDatum[key]),
        };
      })
      .filter(Boolean);
  }, [noun]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r!.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Noun Conjugation for Module 7</SectionHeading>

      <Text>
        Use this page to practice a noun&lsquo;s paradigm from{" "}
        <LinkWrapper page={7} />.
      </Text>

      <Flex align="end" gap={2}>
        <Select
          label="Noun"
          onChange={(value) => {
            setNoun(value);
            setHasStarted(false);
          }}
          options={nounOpts}
          value={noun}
        />

        <Button
          disabled={!noun || hasStarted}
          onClick={() => setHasStarted(true)}
        >
          Start
        </Button>
      </Flex>

      {hasStarted && (
        <TableAsForm
          bleed={32}
          checkCorrectness={(key, val) =>
            // @ts-expect-error Need better typing on the module 7 list
            TableAsForm.defaultCheckCorrectness({ key, val, rows })
          }
          formSchema={formSchema}
          // @ts-expect-error Need better typing on the module 7 list
          rows={rows}
        />
      )}
    </PageWrapper>
  );
}
