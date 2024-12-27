"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";
import type { BreakdownArray } from "@ukwehuwehneke/language-components";

export function GoodPeopleBadPeopleArticle({ level = 1 }: { level?: 1 | 2 }) {
  const goodPeopleData: Array<BreakdownArray[]> = [
    [
      [["k"], "ukweʔtiyó"],
      [["k"], "ukweʔtiyo", "hné·"],
    ],
    [
      [["s"], "ukweʔtiyó"],
      [["s"], "ukweʔtiyo", "hné·"],
    ],
    [
      [["h", "RPL"], ["l"], "ukweʔtiyó"],
      [["h", "RPL"], ["l"], "ukweʔtiyo", "hné·"],
    ],
    [
      [["yak"], "ukweʔtiyó"],
      [["yak"], "ukweʔtiyo", "hné·"],
    ],
    [
      [["lʌn"], "ukweʔtiyóhseʔ"],
      [["lʌn"], "ukweʔtiyóhs", "kweʔ"],
    ],
  ];
  const badPeopleData: Array<BreakdownArray[]> = [
    [
      [["k"], "ukweʔtáksʌ"],
      [["k"], "ukweʔtaksʌ́", "hné·"],
    ],
    [
      [["s"], "ukweʔtáksʌ"],
      [["s"], "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [["h", "RPL"], ["l"], "ukweʔtáksʌ"],
      [["h", "RPL"], ["l"], "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [["yak"], "ukweʔtáksʌ"],
      [["yak"], "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [["lʌn"], "ukweʔtáksʌhseʔ"],
      [["lʌn"], "ukweʔtaksʌhs", "kweʔ"],
    ],
  ];
  const goodKidsData: Array<BreakdownArray[]> = [
    [
      [["k"], "eksaʔtiyó"],
      [["k"], "eksaʔtiyo", "hné·"],
    ],
    [
      [["h", "RPL"], ["s"], "eksaʔtiyó"],
      [["h", "RPL"], ["s"], "eksaʔtiyo", "hné·"],
    ],
    [
      [["la"], "ksaʔtiyó"],
      [["la"], "ksaʔtiyo", "hné·"],
    ],
    [
      [["ye"], "ksaʔtiyó"],
      [["ye"], "ksaʔtiyo", "hné·"],
    ],
    [
      [["lati"], "ksaʔtiyóhseʔ"],
      [["lati"], "ksaʔtiyóhs", "kweʔ"],
    ],
  ];
  const badKidsData: Array<BreakdownArray[]> = [
    [
      [["k"], "eksaʔtáksʌ"],
      [["k"], "eksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [["s"], "eksaʔtáksʌ"],
      [["s"], "eksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [["la"], "ksaʔtáksʌ"],
      [["la"], "ksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [["ye"], "ksaʔtáksʌ"],
      [["ye"], "ksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [["lati"], "ksaʔtáksʌhseʔ"],
      [["lati"], "ksaʔtaksʌhs", "kweʔ"],
    ],
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={level}>Good and Bad People</SectionHeading>
      <Text>
        Here, two more conjugations are introduced. <b>iyo</b> makes the entity
        &quot;good&quot; and <b>aksʌ</b> other makes the &quot;bad&quot;.
      </Text>
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Good People
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={goodPeopleData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Bad People
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={badPeopleData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Good Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={goodKidsData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Bad Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={badKidsData.map(mapper)}
      />
    </Flex>
  );
}

const mapper = ([left, right]: BreakdownArray[], i: number) => {
  const pronoun =
    i === 0
      ? "i"
      : i === 1
        ? "u"
        : i === 2
          ? "m"
          : i === 3
            ? "f"
            : i === 4
              ? "ms"
              : undefined;
  return {
    breakdown: left,
    breakdownPast: right,
    pronoun,
  };
};
