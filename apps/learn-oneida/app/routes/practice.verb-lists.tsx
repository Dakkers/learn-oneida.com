import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React, { useMemo, useState } from "react";
import { Text } from "@/design/components/text";
import { Select } from "@/design/components/select";
import { Button } from "@/design/primitives/button";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  pronouns,
  translatePhrase,
} from "~/utils";
import {
  MODULE_6_VERB_TENSE_LIST,
  Module6VerbTense,
  createModule6VerbList,
  module6VerbTenseMap,
  getPronounsForModule6Verb,
} from "~/data/module06/activeVerbsList";
import {
  MODULE_5_VERB_TENSE_LIST,
  Module5VerbTense,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import { SectionHeading } from "~/components/SectionHeading";
import {
  MODULE_4_TENSE_LIST,
  Module4VerbTense,
  createModule4Data,
} from "~/data/module04";
import { TableAsForm } from "~/components/practice/TableAsForm";
import { z } from "zod";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice Lists of Verbs" },
    {
      name: "description",
      content: "Practice your knowledge of verbs in the Oneida language.",
    },
  ];
};

const tenseMap: Record<Module5VerbTense | Module6VerbTense, string> = {
  ...module5VerbTenseMap,
  ...module6VerbTenseMap,
} as const;

export default function PracticeTenseConjugation() {
  const [selectedVerbList, setSelectedVerbList] = React.useState("m6");
  const [selectedPronoun, setSelectedPronoun] = React.useState<Pronoun>("i");
  const [selectedTense, setSelectedTense] = React.useState<
    Module5VerbTense | Module6VerbTense
  >("hab");
  const [hasStarted, setHasStarted] = useState(false);

  const tenseOptions = useMemo(() => {
    return (
      selectedVerbList === "m4"
        ? MODULE_4_TENSE_LIST
        : selectedVerbList === "m5"
          ? MODULE_5_VERB_TENSE_LIST
          : selectedVerbList === "m6"
            ? MODULE_6_VERB_TENSE_LIST
            : []
    ).map((t) => ({
      label: tenseMap[t],
      value: t,
    }));
  }, [selectedVerbList]);

  const pronounsOptions = useMemo(() => {
    let result: Pronoun[] = [];
    if (selectedVerbList === "m4") {
      result = pronouns;
    } else if (selectedVerbList === "m5") {
      result = selectedTense === "cmd" ? ["u"] : ["i"];
    } else if (selectedVerbList === "m6") {
      result = selectedTense === "cmd" ? ["u", "u2", "yall"] : pronouns;
    }
    return result.map((p) => ({
      label: `${PRONOUN_MAP_ONEIDA[p]} (${PRONOUN_MAP_EN[p]})`,
      value: p,
    }));
  }, [selectedVerbList, selectedTense]);

  const rows = useMemo(() => {
    if (selectedVerbList === "m4") {
      return createModule4Data()
        .filter((v) => v.tense === (selectedTense as Module4VerbTense))
        .map((v) => ({
          en: translatePhrase(v.data.translation, selectedPronoun),
          key: v.key,
          on: v.data.phrases.find((p) => p.pronoun === selectedPronoun)!.phrase,
        }));
    } else if (selectedVerbList === "m5") {
      return createModule5VerbsList()
        .map((v) => {
          return {
            en: translatePhrase(
              v[selectedTense as Module5VerbTense]!.translation,
              selectedPronoun,
            ),
            key: v.key,
            on: v[selectedTense as Module5VerbTense]!.phrases.find(
              (p) => p.pronoun === selectedPronoun,
            )!.phrase,
          };
        })
        .filter(Boolean);
    } else if (selectedVerbList === "m6") {
      return createModule6VerbList()
        .filter((v) =>
          getPronounsForModule6Verb(v.key).includes(selectedPronoun),
        )
        .map((v) => {
          return {
            en: translatePhrase(
              v[selectedTense as Module6VerbTense]!.translation,
              selectedPronoun,
            ),
            key: v.key,
            on: v[selectedTense as Module6VerbTense]!.phrases.find(
              (p) => p.pronoun === selectedPronoun,
            )!.phrase,
          };
        });
    }
    return [];
  }, [selectedVerbList, selectedTense, selectedPronoun]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Practice Lists of Verbs</SectionHeading>

      <Text>
        Use this page to practice writing a list of verbs from a given module.
        You can pick a specific pronominal and tense to work with too.
      </Text>

      <Flex direction="column" gap={2}>
        <Select
          label="Verb List"
          onChange={(value) => {
            setSelectedTense(
              value === "m4" ? "prs" : value === "m5" ? "prs" : "hab",
            );
            setSelectedVerbList(value);
            setHasStarted(false);
          }}
          options={[
            { label: "Module 4", value: "m4" },
            { label: "Module 5", value: "m5" },
            { label: "Module 6", value: "m6" },
          ]}
          value={selectedVerbList}
        />

        <Select
          label="Tense"
          onChange={(value) => {
            setSelectedTense(value as Module5VerbTense | Module6VerbTense);
            setHasStarted(false);
          }}
          options={tenseOptions}
          value={selectedTense}
        />

        <Select
          label="Pronoun"
          onChange={(val) => {
            setSelectedPronoun(val as Pronoun);
            setHasStarted(false);
          }}
          options={pronounsOptions}
          value={selectedPronoun}
        />

        <Flex.Item>
          <Button disabled={hasStarted} onClick={() => setHasStarted(true)}>
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
    </Flex>
  );
}
