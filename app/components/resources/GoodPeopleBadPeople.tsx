import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Flex } from "@/design/components/flex";

export function GoodPeopleBadPeopleResource({ level = 1 }: { level?: 1 | 2 }) {
  const goodPeopleData = [
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
  ].map(mapper);
  const badPeopleData = [
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
  ].map(mapper);
  const goodKidsData = [
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
  ].map(mapper);
  const badKidsData = [
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
  ].map(mapper);

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={level}>Good and Bad People</SectionHeading>
      <Text>
        Here, two more conjugations are introduced. <b>iyo</b> makes the entity
        "good" and <b>aksʌ</b> other makes the "bad".
      </Text>
      <SectionHeading level={level + 1}>Good People</SectionHeading>
      <TableWrapper
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={goodPeopleData}
      />
      <SectionHeading level={level + 1}>Bad People</SectionHeading>
      <TableWrapper
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={badPeopleData}
      />
      <SectionHeading level={level + 1}>Good Kids</SectionHeading>
      <TableWrapper
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={goodKidsData}
      />
      <SectionHeading level={level + 1}>Bad Kids</SectionHeading>
      <TableWrapper
        columns={TableWrapper.createPastTenseColumns("PR")}
        data={badKidsData}
      />
    </Flex>
  );
}

const mapper = ([left, right], i) => {
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
