"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { getPeopleTerms } from "@/data/module01";
import { LinkWrapper } from "../LinkWrapper";

export function PeopleArticle({ level = 1 }: ArticleProps) {
  const data = getPeopleTerms();
  const sublevel = (level + 1) as SectionHeadingProps["level"];
  return (
    <>
      <SectionHeading id="people-article" level={level}>
        People
      </SectionHeading>
      <Text>
        It is important to understand that the translations for two or more
        people are not literal. <b>tehniská·</b> is not the literal translation
        for &quot;2 boys&quot; — that is <b>tehniyáhse tehniská·</b>. You can
        learn more about this in the &quot;Counting&quot; article which is part
        of <LinkWrapper page={3} />.
      </Text>

      <SectionHeading id="people-article-children" level={sublevel}>
        Children
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        // @ts-expect-error Table generics may solve this?
        data={data.children}
      />

      <SectionHeading id="people-article-adolescents" level={sublevel}>
        Adolescents
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        // @ts-expect-error Table generics may solve this?
        data={data.adolescents}
      />

      <SectionHeading id="people-article-adults" level={sublevel}>
        Adults
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        // @ts-expect-error Table generics may solve this?
        data={data.adults}
      />

      <SectionHeading id="people-article-older" level={sublevel}>
        Older people
      </SectionHeading>
      <Text>
        <b>Note</b>: These words do not mean &quot;old people&quot;,
        &quot;seniors&quot;, &quot;elders&quot;, etc. They mean people that are
        older than the speaker. Thus,{" "}
        <b>these words are not commonly used in this context (as nouns)</b>.
        Instead, they are used as verbs. You can learn more about this in the
        &quot;Age&quot; article which is part of <LinkWrapper page={2} />.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsParadigmBlue}
        // @ts-expect-error Table generics may solve this?
        data={data.olderPeople}
      />
    </>
  );
}
