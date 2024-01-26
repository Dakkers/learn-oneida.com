import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";
import { Heading } from "@/design/primitives/heading";
import { TableWrapper } from "@/design/primitives/tableWrapper";

export function TimesOfDayResource({ level = 1 }) {
  const dayPhʌases = [
    { en: "day", on: "awʌhnísla̲ʔ̲" },
    { en: "all day", on: "kwʌʔtátiʔ" },
    { en: "during the day", on: "tsiʔniwʌhnísles" },
    { en: "this day", on: "Tó· niwʌhnisla·ké" },
    { en: "daytime", on: "kwaʔté·ke" },
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
    { en: "(earlier) this morning", on: "sʌhaʔ ast ́ éhtsiʔ" },
    { en: "early morning", on: "astéhtsiʔ" },
    { en: "the other morning", on: "oyá· tshitwastéhtsiʔ" },
    { en: ["morning", "morning time"], on: "astehtsiwé·ke" },
  ];

  const nightPhrases = [
    { en: "night", on: "né· wahsuta·té·" },
    { en: "night-time", on: "kwaʔshuté·ke" },
    { en: "all night", on: "kwaʔshutátiʔ" },
    { en: "during the night", on: "tsiʔ niwahsu·tés" },
    { en: "every night", on: "yaʔtewahsu·táke" },
    { en: "midnight", on: "ashú·tha" },
    { en: "(when it got dark) last night", on: "kwaʔshu·té·" },
    { en: ["this night", "tonight"], on: "kaʔikʌ́wahsuta·té·" },
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
    { en: "all year", on: "Ohslakwekú" },
    {
      en: ["during the year", "all year", "through the year"],
      on: "tsiʔ niyóhsles",
    },
    { en: "every year", on: "nyaʔteyohslaké" },
    { en: "last year", on: "tsyohslatkʌ́" },
    { en: "next year", on: "yʌtsyohsla·teʔ" },
    { en: "the other year", on: "oyá· tshikohslá·ke" },
    { en: "a particular year", on: "kaʔikʌ́yohsla·té·" },
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
    { en: "more often", on: "sʌhaʔ yotk ́ á·teʔ" },
    { en: "never", on: "yáh newʌtú" },
    { en: ["now", "today"], on: ["nuʔú·waʔ", "nʌʔú·waʔ"] },
    { en: "often", on: "yotká·teʔ" },
    { en: "sometimes", on: "swatye·lʌ́" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <Heading id="times-of-day" level={level} variant="headlineL">
        Times of day
      </Heading>
      <Text>
        Below is a bunch of phrases related to what time of day it is (not a
        specific clock time).
      </Text>

      <Heading id="times-of-day-times" level={level + 1} variant="headlineS">
        Times
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={timePhrases}
      />

      <Heading id="times-of-day-daytime" level={level + 1} variant="headlineS">
        Day, daytime
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={dayPhʌases}
      />

      <Heading id="times-of-day-morning" level={level + 1} variant="headlineS">
        Morning
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={morningPhrases}
      />

      <Heading
        id="times-of-day-afternoon"
        level={level + 1}
        variant="headlineS"
      >
        Afternoon
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={afternoonPhrases}
      />

      <Heading id="times-of-day-evening" level={level + 1} variant="headlineS">
        Evening
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={eveningPhrases}
      />

      <Heading id="times-of-day-night" level={level + 1} variant="headlineS">
        Night
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={nightPhrases}
      />

      <Heading id="times-of-day-tomorrow" level={level + 1} variant="headlineS">
        Tomorrow
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={tomorrowPhrases}
      />

      <Heading
        id="times-of-day-yesterday"
        level={level + 1}
        variant="headlineS"
      >
        Yesterday
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={yesterdayPhrases}
      />

      <Heading id="times-of-day-week" level={level + 1} variant="headlineS">
        Week
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={weekPhrases}
      />

      <Heading id="times-of-day-weekend" level={level + 1} variant="headlineS">
        Weekend
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={weekendPhrases}
      />

      <Heading id="times-of-day-month" level={level + 1} variant="headlineS">
        Months
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthPhrases}
      />

      <Heading id="times-of-day-year" level={level + 1} variant="headlineS">
        Years
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={yearPhrases}
      />

      <Heading id="times-of-day-other" level={level + 1} variant="headlineS">
        Other Phrases
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={otherPhrases}
      />
    </Flex>
  );
}
