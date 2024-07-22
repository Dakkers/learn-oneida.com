"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export function TimesOfDayArticle({ level = 1 }: ArticleProps) {
  const dayPhrases = [
    { en: "day", translation: "awʌhnísla̲ʔ̲" },
    { en: "all day", translation: "kwʌʔtáti̲ʔ" },
    { en: "during the day", translation: "tsiʔniwʌhnísles" },
    { en: "this day", translation: "Tó· niwʌhnisla·ké͟" },
    { en: "daytime", translation: "kwaʔté·ke̲" },
    { en: "every day", translation: "yaʔtewʌhnislaké͟" },
  ];

  const eveningPhrases = [
    {
      en: ["evening", "early evening", "late afternoon"],
      on: ["yoʔkaláshʌ̲", "yoʔkaláshu̲"],
    },
    {
      en: "when it was evening",
      on: "tshiyoʔkaláshu̲",
    },
    {
      en: ["this evening", "tonight", "later this evening"],
      translation: "ʌyó·kalahweʔ",
    },
  ];

  const monthPhrases = [
    { en: "month", translation: "awʌhní·taʔ" },
    { en: "during the month", translation: "tsiʔ niwʌhní·tes" },
    { en: "last month", translation: "swʌhniʔtatkʌ́" },
    { en: "next month", translation: "yʌswʌ́hniʔtat" },
    { en: "how many months?", translation: "Tó· niwʌhní·take̲ʔ" },
  ];

  const morningPhrases = [
    { en: "(earlier) this morning", on: "sʌhaʔ astéhtsi̲ʔ" },
    { en: ["early morning", "in the morning"], on: "astéhtsi̲" },
    { en: "the other morning", on: "oyá· tshitwastéhtsi̲ʔ" },
    { en: ["morning", "morning time"], on: "astehtsiwé·ke̲" },
  ];

  const nightPhrases = [
    { en: "night", on: "né· wahsuta·té͟·" },
    { en: "night-time", on: "kwaʔshuté·ke̲" },
    { en: "all night", on: "kwaʔshutátiʔ" },
    { en: "during the night", on: "tsiʔ niwahsu·tés" },
    { en: "every night", on: "yaʔtewahsu·táke̲" },
    { en: "midnight", on: "ashú·tha" },
    { en: "(when it got dark) last night", on: "kwaʔshu·té·" },
    { en: ["this night", "tonight"], on: "kaʔi·kʌ́· wahsuta·té͟·" },
    { en: "the other night", on: "oyá· tshitkwaʔshu·té·" },
    { en: "how many nights?", on: "Tó· niwahsu·táke̲ʔ" },
    { en: "when it gets dark", on: "tshityó·kalas" },
  ];

  const timePhrases = [
    { en: "a long time", translation: "wahu·níseʔ" },
    { en: "a short time", translation: "kʌʔ nikalí·wes" },
    { en: "all the time", translation: "yaʔteka·kú·te" },
    { en: "how long of a time?", translation: ["Tó· niwahu·niʔsé̲", "Tó· nahe"] },
  ];

  const tomorrowPhrases = [
    { en: "tomorrow", on: "ʌyólhʌne̲ʔ" },
    { en: "tomorrow night", on: ["ʌyólhʌneʔ ʌyó·kalaweʔ"] },
    { en: "tomorrow evening", on: ["ʌyólhʌneʔ yoʔkala·sneʔ"] },
    { en: "the day after tomorrow", on: "oyá· yʌtsyólhʌneʔ" },
  ];

  const weekendPhrases = [
    { en: "weekend", translation: "yawʌtokta·u" },
    { en: "this (coming) weekend", translation: "ʌwʌtokta" },
    { en: "this past weekend", translation: "yautokta·u" },
  ];

  const weekPhrases = [
    { en: "all week", on: "yaʔtewʌ·tá·ke̲" },
    { en: "during the week", on: "tsiʔ niwʌ·tés" },
    { en: "every week", on: "yaʔtewʌ·táke" },
    { en: "last week", on: "swʌtatkʌ́" },
    { en: "next week", on: "yʌswʌ·tát" },
    { en: "how many weeks?", on: "Tó· niwʌ·táke̲" },
  ];

  const yearPhrases = [
    { en: "all year", on: "ohslakwekúˍ" },
    {
      en: ["during the year", "through the year"],
      translation: "tsiʔ niyóhsles",
    },
    { en: "every year", on: "nyaʔteyohsla·ké͟" },
    { en: "last year", on: "tsyohslatkʌ́" },
    { en: "next year", on: "yʌtsyohslá·te̲ʔ" },
    { en: "the other year", on: "oyá· tshikohslá·ke̲" },
    { en: "a particular year", on: "kaʔi·kʌ́· yohsla·téˍ·" },
    { en: "how many years?", on: "Tó· niyohslaké̲" },
    { en: "one year after another", on: "yohslaténi" },
  ];

  const yesterdayPhrases = [
    { en: "yesterday", on: "the·tʌ́ˍ·" },
    { en: "the day before yesterday", on: "o·yá tshithe·tʌ́ˍ" },
  ];

  const afternoonPhrases = [
    { en: "afternoon", translation: "yotukóhtu ʌt́i" },
    { en: "noon", translation: ["ʌ́ti", "ʌ́tyʌ ni·káleʔ"] },
  ];

  const otherPhrases = [
    { en: "always", translation: "tyóhtkut" },
    { en: "eclipse", translation: "utʌhniʔtáhtuʔ" },
    { en: "more often", translation: "sʌ́haʔ yotká·teʔ" },
    { en: "never", translation: "yáh newʌtú" },
    { en: ["now", "today"], translation: ["nuʔú·wa̲ʔ", "nʌʔú·wa̲ʔ"] },
    { en: "often", translation: "yotká·teʔ" },
    { en: "sometimes", translation: "swatye·lʌ́" },
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
        columns={TableWrapper.columnsEnglishTranslation}
        data={timePhrases}
      />

      <SectionHeading
        id="times-of-day-daytime"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Day, daytime
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={dayPhrases}
      />

      <SectionHeading
        id="times-of-day-morning"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Morning
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={morningPhrases}
      />

      <SectionHeading
        id="times-of-day-afternoon"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Afternoon
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={afternoonPhrases}
      />

      <SectionHeading
        id="times-of-day-evening"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Evening
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={eveningPhrases}
      />

      <SectionHeading
        id="times-of-day-night"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Night
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={nightPhrases}
      />

      <SectionHeading
        id="times-of-day-tomorrow"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Tomorrow
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={tomorrowPhrases}
      />

      <SectionHeading
        id="times-of-day-yesterday"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Yesterday
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={yesterdayPhrases}
      />

      <SectionHeading
        id="times-of-day-week"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Week
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={weekPhrases}
      />

      <SectionHeading
        id="times-of-day-weekend"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Weekend
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={weekendPhrases}
      />

      <SectionHeading
        id="times-of-day-month"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Months
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={monthPhrases}
      />

      <SectionHeading
        id="times-of-day-year"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Years
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={yearPhrases}
      />

      <SectionHeading
        id="times-of-day-other"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Other Phrases
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={otherPhrases}
      />
    </Flex>
  );
}
