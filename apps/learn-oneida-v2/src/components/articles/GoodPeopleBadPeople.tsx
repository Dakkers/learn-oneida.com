"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { BreakdownArray } from "../TextBreakdown";

export function GoodPeopleBadPeopleArticle({ level = 1 }: { level?: 1 | 2 }) {
  const goodPeopleData: Array<BreakdownArray[]> = [
    [
      [{ text: "k" }, "ukweʔtiyó"],
      [{ text: "k" }, "ukweʔtiyo", "hné·"],
    ],
    [
      [{ text: "s" }, "ukweʔtiyó"],
      [{ text: "s" }, "ukweʔtiyo", "hné·"],
    ],
    [
      [{ text: "h", type: "RPL" }, { text: "l" }, "ukweʔtiyó"],
      [{ text: "h", type: "RPL" }, { text: "l" }, "ukweʔtiyo", "hné·"],
    ],
    [
      [{ text: "yak" }, "ukweʔtiyó"],
      [{ text: "yak" }, "ukweʔtiyo", "hné·"],
    ],
    [
      [{ text: "lʌn" }, "ukweʔtiyóhseʔ"],
      [{ text: "lʌn" }, "ukweʔtiyóhs", "kweʔ"],
    ],
  ];
  const badPeopleData: Array<BreakdownArray[]> = [
    [
      [{ text: "k" }, "ukweʔtáksʌ"],
      [{ text: "k" }, "ukweʔtaksʌ́", "hné·"],
    ],
    [
      [{ text: "s" }, "ukweʔtáksʌ"],
      [{ text: "s" }, "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "h", type: "RPL" }, { text: "l" }, "ukweʔtáksʌ"],
      [{ text: "h", type: "RPL" }, { text: "l" }, "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "yak" }, "ukweʔtáksʌ"],
      [{ text: "yak" }, "ukweʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "lʌn" }, "ukweʔtáksʌhseʔ"],
      [{ text: "lʌn" }, "ukweʔtaksʌhs", "kweʔ"],
    ],
  ];
  const goodKidsData: Array<BreakdownArray[]> = [
    [
      [{ text: "k" }, "eksaʔtiyó"],
      [{ text: "k" }, "eksaʔtiyo", "hné·"],
    ],
    [
      [{ text: "h", type: "RPL" }, { text: "s" }, "eksaʔtiyó"],
      [{ text: "h", type: "RPL" }, { text: "s" }, "eksaʔtiyo", "hné·"],
    ],
    [
      [{ text: "la" }, "ksaʔtiyó"],
      [{ text: "la" }, "ksaʔtiyo", "hné·"],
    ],
    [
      [{ text: "ye" }, "ksaʔtiyó"],
      [{ text: "ye" }, "ksaʔtiyo", "hné·"],
    ],
    [
      [{ text: "lati" }, "ksaʔtiyóhseʔ"],
      [{ text: "lati" }, "ksaʔtiyóhs", "kweʔ"],
    ],
  ];
  const badKidsData: Array<BreakdownArray[]> = [
    [
      [{ text: "k" }, "eksaʔtáksʌ"],
      [{ text: "k" }, "eksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "s" }, "eksaʔtáksʌ"],
      [{ text: "s" }, "eksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "la" }, "ksaʔtáksʌ"],
      [{ text: "la" }, "ksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "ye" }, "ksaʔtáksʌ"],
      [{ text: "ye" }, "ksaʔtaksʌ́", "hneʔ"],
    ],
    [
      [{ text: "lati" }, "ksaʔtáksʌhseʔ"],
      [{ text: "lati" }, "ksaʔtaksʌhs", "kweʔ"],
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
        // @ts-expect-error To be addressed in LO-12
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={goodPeopleData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Bad People
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={badPeopleData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Good Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={goodKidsData.map(mapper)}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Bad Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={TableWrapper.createPastTenseColumns("PR")}
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
