"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { particleList } from "./particleList";
import React from "react";
import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { arrayify } from "@ukwehuwehneke/language-components";

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
        cell: (value: string | string[], row) => (
          <Flex direction="column" gap={2}>
            {arrayify(value).map((val, i) => (
              <Flex gap={4} key={i}>
                {row.audioFile && (
                  <PlayButton
                    filepath={`/audio/particles/${group}/${row.key}${Array.isArray(value) ? `_${i + 1}` : ""}.mp3`}
                  />
                )}
                {val}
              </Flex>
            ))}
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
        cell: (
          examples: Array<{
            en: string;
            translation: string;
          }>,
          row: any,
        ) => (
          <Flex direction="column" gap={4}>
            {(examples ?? []).map((ex, i) => (
              <Flex gap={2} align="start">
                {["module01", "module02", "module03"].includes(group) && (
                  <PlayButton
                    filepath={`/audio/particle_examples/${group}/${row.key}${examples.length > 1 ? `_${i + 1}` : ""}.mp3`}
                  />
                )}
                <Flex direction="column" gap={1} key={i}>
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
    [],
  );

  const data = React.useMemo(() => {
    return getParticlesForGroup(group);
  }, [group]);

  // @ts-expect-error To be addressed in LO-12
  return (
    <TableWrapper
      bleed={{
        xs: 0,
        md: 16,
        lg: 32,
      }}
      columns={columns}
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
      "so_then",
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
      "all_of_u",
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
      "short_length_of_time",
      "how_long_of_a_time",
      "ago",
      "until",
      "sometimes",
      "in_a_while",
    ],
  };

  return mapping[group].map((key) => {
    const result = particleList.find((p) => p.key === key);
    return {
      ...result,
      audioFile: ["module01", "module02", "module03", "module04"].includes(
        group,
      )
        ? key
        : undefined,
    };
  });
}
