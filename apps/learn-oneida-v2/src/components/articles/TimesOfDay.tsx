"use client";
import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { arrayify } from "@ukwehuwehneke/language-components";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/data/module04";

export function TimesOfDayArticle({ level = 1 }: ArticleProps) {
  const data = createTimesOfDayData();

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
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.timePhrases}
      />

      <SectionHeading
        id="times-of-day-daytime"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Day, daytime
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.dayPhrases}
      />

      <SectionHeading
        id="times-of-day-morning"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Morning
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.morningPhrases}
      />

      <SectionHeading
        id="times-of-day-afternoon"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Afternoon
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.afternoonPhrases}
      />

      <SectionHeading
        id="times-of-day-evening"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Evening
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.eveningPhrases}
      />

      <SectionHeading
        id="times-of-day-night"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Night
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.nightPhrases}
      />

      <SectionHeading
        id="times-of-day-tomorrow"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Tomorrow
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.tomorrowPhrases}
      />

      <SectionHeading
        id="times-of-day-yesterday"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Yesterday
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.yesterdayPhrases}
      />

      <SectionHeading
        id="times-of-day-week"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Week
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.weekPhrases}
      />

      <SectionHeading
        id="times-of-day-weekend"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Weekend
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.weekendPhrases}
      />

      <SectionHeading
        id="times-of-day-month"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Months
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.monthPhrases}
      />

      <SectionHeading
        id="times-of-day-year"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Years
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.yearPhrases}
      />

      <SectionHeading
        id="times-of-day-other"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Other Phrases
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={columns}
        data={data.otherPhrases}
      />
    </Flex>
  );
}

const columns = [
  TableWrapper.columnsEnglishTranslation[0],
  {
    ...TableWrapper.columnsEnglishTranslation[1],
    cell: (
      value: string | string[],
      row: {
        en: string | string[];
      },
    ) => (
      <Flex direction="column" gap={2}>
        {arrayify(value).map((val, i) => (
          <Flex gap={4} key={i}>
            {val}

            <PlayButton
              filepath={`/audio/module04/time_phrases/${determineTimesOfDayAudioFileName(row.en, value, i)}.mp3`}
            />
          </Flex>
        ))}
      </Flex>
    ),
  },
];
