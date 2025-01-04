"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { type ParticleEntry, particleList } from "./particleList";
import React from "react";
import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { formatFileWithSuffix, standardizeAudioFileName } from "@/utils/misc";

type ParticlesGroup =
  | "module01"
  | "module02"
  | "module03"
  | "module04"
  | "module05";

interface ParticlesTableProps {
  group?: ParticlesGroup;
}

export function ParticlesTable({ group = "module01" }: ParticlesTableProps) {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "translation",
        cell: (value: string, row: ParticleEntry) => (
          <Flex gap={4}>
            {!["module05"].includes(group) && (
              <PlayButton filepath={formatParticleAudio(row.key, group)} />
            )}
            {value}
          </Flex>
        ),
        header: "Oneida",
      },
      {
        accessorKey: "en",
        header: "English",
      },
      {
        accessorKey: "examples",
        cell: (examples: ParticleEntry["examples"], row: ParticleEntry) => (
          <Flex direction="column" gap={4}>
            {(examples ?? []).map((ex, index) => (
              <Flex gap={2} align="start" key={index}>
                {["module01", "module02", "module03"].includes(group) && (
                  <PlayButton
                    filepath={formatParticleExampleAudio(group, row.key, index)}
                  />
                )}
                <Flex direction="column" gap={1}>
                  <Text>{ex.translation}</Text>
                  <Text variant="bodyS">
                    <i>{ex.en}</i>
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        ),
        header: "Examples",
      },
    ],
    [group],
  );

  const data = React.useMemo(() => {
    return getParticlesForGroup(group);
  }, [group]);

  return (
    <TableWrapper
      bleed={{
        xs: 0,
        md: 16,
        lg: 32,
      }}
      // @ts-expect-error TODO - TableWrapper/Table generics
      columns={columns}
      // @ts-expect-error TODO - TableWrapper/Table generics?
      data={data}
    />
  );
}

export function getParticlesForGroup(group: ParticlesGroup) {
  const mapping: Record<ParticlesGroup, Array<string>> = {
    module01: [
      "just_like",
      "very_much",
      "everything",
      "a_lot",
      "yes",
      "so_then_1",
      "so_then_2",
      "or",
      "question_indicator",
      "this",
      "what",
      "something",
      "it_is",
      "but",
      "and",
      "also",
      "other",
      "question_what_how",
      "how",
      "a_little_bit",
      "just",
      "just_a_little_bit",
      "who",
      "someone",
      "certainly",
      "something_else",
      "more",
      "more_than",
      "still",
      "another_one",
      "that",
      "i_dunno",
      "true",
      "if",
      "tsi",
      "what_it_is",
      "isnt_it",
      "no",
      "not_that_much",
      "nobody",
      "nothing",
      "not_true",
      "no_way",
    ],
    module02: [
      "everyone",
      "you_all_and_i",
      "they_and_i",
      "all_of_you",
      "all_of_them_males",
      "all_of_them_females",
      "tho",
      "anything",
      "anyone",
      "greater_than",
      "less_than",
      "just_only",
      "it_is_the_same",
      "it_is_different",
      "both",
      "almost",
      "how_many",
    ],
    module03: [
      "again",
      "and_then",
      "before",
      "because",
      "a_length_of_time",
      "a_short_length_of_time",
      "now",
      "never",
      "thanks",
      "hows_it_going",
      "together",
      "different",
      "so",
      "until",
      "yo",
      "maybe",
    ],
    module04: [
      "all_over",
      "all_over_town",
      "wherever",
      "elsewhere",
      "here",
      "nowhere",
      "somewhere",
      "there",
      "when",
      "when_prefix",
      "when_nv",
      "where_2",
      "where_3",
      "where_4",
      "where_5",
      "hopefully",
      "it_is_important",
      "must",
      "necessary",
      "how_many_things",
      "how_many_of_us",
      "how_many_of_they_and_i",
      "how_many_of_yall",
      "how_many_of_them_males",
      "how_many_of_them_females",
    ],
    module05: [
      "why",
      "because",
      "forever",
      "long_time",
      "such_a_long_time",
      "a_short_length_of_time",
      "how_long_of_a_time",
      "ago",
      "until",
      "sometimes",
      "in_a_while",
    ],
  };

  if (!mapping[group]) {
    return [];
  }

  return mapping[group].map(getParticle);
}

function getParticle(key: string) {
  const result = particleList.find((p) => p.key === key);
  if (!result) {
    throw new Error(`Could not find particle with key="${key}"`);
  }
  return result;
}

export function formatParticleAudio(key: string, module: string) {
  return standardizeAudioFileName(`particles/${module}/${key}.mp3`);
}

export function formatParticleExampleAudio(
  module: string,
  key: string,
  index = 0,
) {
  const result = getParticle(key);
  return standardizeAudioFileName(
    formatFileWithSuffix(
      `particle_examples/${module}/${key}.mp3`,
      result.examples,
      index,
    ),
  );
}
