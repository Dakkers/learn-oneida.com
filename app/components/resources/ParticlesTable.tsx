import {
  TableWrapper,
  TableWrapperProps,
} from "@/design/components/tableWrapper";
import { particleList } from "./particleList";
import React from "react";
import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";

type ParticlesGroup = "module01" | "module03";

interface ParticlesTableProps {
  group?: ParticlesGroup;
}

export function ParticlesTable({ group }: ParticlesTableProps) {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "oneida",
        header: "Oneida",
      },
      {
        accessorKey: "en",
        header: "English",
      },
      {
        accessorKey: "examples",
        cell: (examples) => (
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
    []
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
    };
    return particleList.filter((p) => mapping[group].includes(p.key));
  }, [group]);

  return <TableWrapper columns={columns} data={data} />;
}
