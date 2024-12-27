"use client";
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
import {
  createModule8CharacteristicsList,
  getEnglishTranslation,
} from "@/data/module08";
import { LinkWrapper } from "@/components/LinkWrapper";

const meta: any = () => {
  return [
    { title: "Characteristic Conjugation from Module 8" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of object characteristics from module 8 in the Oneida language.",
    },
  ];
};

export default function PracticeCharacteristicConjugationModule8() {
  const [char, setChar] = React.useState(
    createModule8CharacteristicsList()[0].key,
  );
  const [hasStarted, setHasStarted] = React.useState(false);

  const characteristicOptions = useMemo(() => {
    const list = createModule8CharacteristicsList();
    return list.map((datum) => ({
      label: datum.en,
      value: datum.key,
    }));
  }, []);

  const rows = useMemo(() => {
    const list = createModule8CharacteristicsList();
    const keys = [
      "verb",
      "verbNegated",
      "withNoun",
      "haveNoun",
      "haveNounPlural",
      "verbPast",
      "withNounPast",
      "haveNounPast",
      "haveNounPastPlural",
    ] as const;
    const charDatum = list.find((obj) => obj.key === char)!;

    return keys
      .map((key) => {
        if (!charDatum[key]) {
          return null;
        }

        return {
          en: getEnglishTranslation(charDatum, key),
          key,
          // @ts-expect-error Need better typing on the module 8 list
          on: convertBreakdownToPlainText(charDatum[key]),
        };
      })
      .filter(Boolean);
  }, [char]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r!.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>
        Characteristic Conjugation for Module 8
      </SectionHeading>

      <Text>
        Use this page to practice a characteristic&lsquo;s paradigm from{" "}
        <LinkWrapper page={8}/>.
      </Text>

      <Flex align="end" gap={2}>
        <Select
          label="Characteristic"
          onChange={(value) => {
            setChar(value);
            setHasStarted(false);
          }}
          options={characteristicOptions}
          value={char}
        />

        <Button
          disabled={!char || hasStarted}
          onClick={() => setHasStarted(true)}
        >
          Start
        </Button>
      </Flex>

      {hasStarted && (
        <TableAsForm
          bleed={32}
          checkCorrectness={(key, val) =>
            // @ts-expect-error Improve type safety
            TableAsForm.defaultCheckCorrectness({ key, val, rows })
          }
          formSchema={formSchema}
          // @ts-expect-error Improve type safety
          rows={rows}
        />
      )}
    </Flex>
  );
}
