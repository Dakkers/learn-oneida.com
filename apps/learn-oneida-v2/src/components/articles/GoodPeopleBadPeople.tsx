"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { getGoodAndBadPeopleLists } from "@/data/module03";
import _ from "lodash";
import { ParadigmData } from "../ParadigmTable";

export function GoodPeopleBadPeopleArticle({ level = 1 }: { level?: 1 | 2 }) {
  const sublevel = (level + 1) as SectionHeadingProps["level"];
  const data = getGoodAndBadPeopleLists();

  const joinLol = (left: ParadigmData, right: ParadigmData) => {
    return _.zip(left.phrases, right.phrases).map(([l, r]) => ({
      pronoun: l?.pronoun,
      breakdown: l?.breakdown,
      breakdownPast: r?.breakdown,
    }));
  };

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="good-bad-people" level={level}>
        Good and Bad People
      </SectionHeading>
      <Text>
        Here, two more conjugations are introduced. <b>iyo</b> makes the entity
        &quot;good&quot; and <b>aksʌ</b> other makes the &quot;bad&quot;.
      </Text>
      <SectionHeading id="good-people" level={sublevel}>
        Good People
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={joinLol(data.goodPerson, data.goodPersonPAST)}
      />
      <SectionHeading id="bad-people" level={sublevel}>
        Bad People
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={joinLol(data.badPerson, data.badPersonPAST)}
      />
      <SectionHeading id="good-kids" level={sublevel}>
        Good Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={joinLol(data.goodKid, data.goodKidPAST)}
      />
      <SectionHeading id="bad-kids" level={sublevel}>
        Bad Kids
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.createPastTenseColumns("PR").slice(1)}
        data={joinLol(data.badKid, data.badKidPAST)}
      />
    </Flex>
  );
}
