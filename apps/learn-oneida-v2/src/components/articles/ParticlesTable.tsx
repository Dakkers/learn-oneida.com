import { TableWrapper } from "@/components/TableWrapper";
import { particleList } from "./particleList";
import React from "react";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

type ParticlesGroup =
  | "module01"
  | "module02"
  | "module03"
  | "module04"
  | "module05";

interface ParticlesTableProps {
  group?: ParticlesGroup;
}

export function ParticlesTable({ group }: ParticlesTableProps) {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "oneida",
        cell: TableWrapper.textArrayCellBold,
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
            oneida: string;
          }>,
        ) => (
          <Flex direction="column" gap={4}>
            {(examples ?? []).map((ex, i) => (
              <Flex direction="column" gap={0} key={i}>
                <Text>
                  <b>{ex.oneida}</b>
                </Text>
                <Text>{ex.en}</Text>
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
    if (!group) {
      return particleList;
    }
    const mapping: Record<ParticlesGroup, string[]> = {
      module01: [
        "just_like",
        "very_much",
        "everything",
        "a_lot",
        "yes",
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
        "all_of_us",
        "they_and_i",
        "all_yall",
        "them_males",
        "them_females",
        "that_2",
        "anything",
        "anyone",
        "more_than",
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
        "length_of_time",
        "short_length_of_time",
        "now",
        "never",
        "thanks_much",
        "how_is_it_going",
        "together",
        "different",
        "so",
        "until",
        "acknowledgement",
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
        "when_2",
        "when_3",
        "where_2",
        "where_3",
        "hopefully",
        "it_is_important",
        "must",
        "necessary",
        "how_many_things",
        "how_many_of_us_inclusive",
        "how_many_of_us_exclusive",
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
    return mapping[group].map((key) => particleList.find((p) => p.key === key));
  }, [group]);

  // @ts-expect-error To be addressed in LO-12
  return <TableWrapper columns={columns} data={data} />;
}
