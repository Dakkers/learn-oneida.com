"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ArticleProps } from "./utils";

export function TimesOfDayArticle({ level = 1 }: ArticleProps) {
  const dayPhʌases = [
    { en: "day", on: "awʌhnísla̲ʔ̲" },
    { en: "all day", on: "kwʌʔtáti̲ʔ" },
    { en: "during the day", on: "tsiʔniwʌhnísles" },
    { en: "this day", on: "Tó· niwʌhnisla·ké͟" },
    { en: "daytime", on: "kwaʔté·ke̲" },
    { en: "every day", on: "yaʔtewʌhnislaké͟" },
  ];

  const eveningPhrases = [
    {
      en: ["evening", "early evening", "late afternoon"],
      on: ["yoʔkaláshʌ", "yoʔkaláshu"],
    },
    {
      en: "when it was evening",
      on: "tshiyoʔkaláshu",
    },
    {
      en: ["this evening", "tonight", "later this evening"],
      on: "ʌyó·kalahweʔ",
    },
  ];

  const monthPhrases = [
    { en: "month", on: "awʌhní·taʔ" },
    { en: "during the month", on: "tsiʔ niwʌhní·tes" },
    { en: "last month", on: "swʌhniʔtatkʌ́" },
    { en: "next month", on: "yʌswʌ́hniʔtat" },
    { en: "how many months?", on: "Tó· niwʌhní·take̲ʔ" },
  ];

  const morningPhrases = [
    { en: "(earlier) this morning", on: "sʌhaʔ astéhtsi̲ʔ" },
    { en: ["early morning", "in the morning"], on: "astéhtsii̲" },
    { en: "the other morning", on: "oyá· tshitwastéhtsi̲ʔ" },
    { en: ["morning", "morning time"], on: "astehtsiwé·ke̲" },
  ];

  const nightPhrases = [
    { en: "night", on: "né· wahsuta·té͟·" },
    { en: "night-time", on: "kwaʔshuté·ke̲" },
    { en: "all night", on: "kwaʔshutátiʔ" },
    { en: "during the night", on: "tsiʔ niwahsu·tés" },
    { en: "every night", on: "yaʔtewahsu·táke" },
    { en: "midnight", on: "ashú·tha" },
    { en: "(when it got dark) last night", on: "kwaʔshu·té·" },
    { en: ["this night", "tonight"], on: "kaʔi·kʌ́· wahsuta·té͟·" },
    { en: "the other night", on: "oyá· tshitkwaʔshu·té·" },
    { en: "how many nights?", on: "Tó· niwahsu·táke̲ʔ" },
    { en: "when it gets dark", on: "tshityó·kalas" },
  ];

  const timePhrases = [
    { en: "a long time", on: "wahu·níseʔ" },
    { en: "a short time", on: "kʌʔ nikalí·wes" },
    { en: "all the time", on: "yaʔteka·kú·te" },
    { en: "how long of a time?", on: ["Tó· niwahu·niʔsé̲", "Tó· nahe"] },
  ];

  const tomorrowPhrases = [
    { en: "tomorrow", on: "ʌyólhʌne̲ʔ" },
    { en: "tomorrow night", on: ["ʌyólhʌneʔ", "ʌyó·kalaweʔ"] },
    { en: "tomorrow evening", on: ["ʌyólhʌneʔ", "yoʔkala·sneʔ"] },
    { en: "the day after tomorrow", on: "oyá· yʌtsyólhʌneʔ" },
  ];

  const weekendPhrases = [
    { en: "weekend", on: "yawʌtokta·u" },
    { en: "this (coming) weekend", on: "ʌwʌtokta" },
    { en: "this past weekend", on: "yautokta·u" },
  ];

  const weekPhrases = [
    { en: "all week", on: "yaʔtewʌ·tá·ke" },
    { en: "during the week", on: "tsiʔ niwʌ·tés" },
    { en: "every week", on: "yaʔtewʌ·táke" },
    { en: "last week", on: "swʌtatkʌ́" },
    { en: "next week", on: "yʌswʌ·tát" },
    { en: "how many weeks?", on: "Tó· niwʌ·táke̲" },
  ];

  const yearPhrases = [
    { en: "all year", on: "ohslakwekú" },
    {
      en: ["during the year", "through the year"],
      on: "tsiʔ niyóhsles",
    },
    { en: "every year", on: "nyaʔteyohsla·ké͟" },
    { en: "last year", on: "tsyohslatkʌ́" },
    { en: "next year", on: "yʌtsyohslá·teʔ" },
    { en: "the other year", on: "oyá· tshikohslá·ke̲" },
    { en: "a particular year", on: "kaʔi·kʌ́· yohsla·té·" },
    { en: "how many years?", on: "niyohslaké̲" },
    { en: "one year after another", on: "yohslaténi" },
  ];

  const yesterdayPhrases = [
    { en: "yesterday", on: "the·tʌ́·" },
    { en: "the day before yesterday", on: "o·yá tshithe·tʌ́" },
  ];

  const afternoonPhrases = [
    { en: "afternoon", on: "yotukóhtu ʌt́i" },
    { en: "noon", on: ["ʌ́ti", "ʌ́tyʌ ni·káleʔ"] },
  ];

  const otherPhrases = [
    { en: "always", on: "tyóhtkut" },
    { en: "eclipse", on: "utʌhniʔtáhtuʔ" },
    { en: "more often", on: "sʌ́haʔ yotká·teʔ" },
    { en: "never", on: "yáh newʌtú" },
    { en: ["now", "today"], on: ["nuʔú·wa̲ʔ", "nʌʔú·wa̲ʔ"] },
    { en: "often", on: "yotká·teʔ" },
    { en: "sometimes", on: "swatye·lʌ́" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="times-of-day" level={level}>
        Times of day
      </SectionHeading>
      <Text>
        Below is a bunch of phrases related to what time of day it is (not a
        specific clock time).
      </Text>

      <SectionHeading
        id="times-of-day-times"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Times
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={timePhrases}
      />

      <SectionHeading
        id="times-of-day-daytime"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Day, daytime
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={dayPhʌases}
      />

      <SectionHeading
        id="times-of-day-morning"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Morning
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={morningPhrases}
      />

      <SectionHeading
        id="times-of-day-afternoon"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Afternoon
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={afternoonPhrases}
      />

      <SectionHeading
        id="times-of-day-evening"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Evening
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={eveningPhrases}
      />

      <SectionHeading
        id="times-of-day-night"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Night
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={nightPhrases}
      />

      <SectionHeading
        id="times-of-day-tomorrow"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Tomorrow
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={tomorrowPhrases}
      />

      <SectionHeading
        id="times-of-day-yesterday"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Yesterday
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={yesterdayPhrases}
      />

      <SectionHeading
        id="times-of-day-week"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Week
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={weekPhrases}
      />

      <SectionHeading
        id="times-of-day-weekend"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Weekend
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={weekendPhrases}
      />

      <SectionHeading
        id="times-of-day-month"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Months
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthPhrases}
      />

      <SectionHeading
        id="times-of-day-year"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Years
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={yearPhrases}
      />

      <SectionHeading
        id="times-of-day-other"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Other Phrases
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={otherPhrases}
      />
    </Flex>
  );
}
