"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { List } from "@ukwehuwehneke/ohutsya";

const getAudioFolder = (name: string) => `module04/clock_time/${name}.mp3`;
const mapUtil = ([en, translation, audioFile]: string[]) => ({
  en,
  translation,
  audioFile: getAudioFolder(audioFile),
});

const simpleExamples = [
  ["1:00 a.m.", "úska niyohwistá·e astéhtsi̲ʔ", "100_am"],
  ["7:00 a.m.", "tsyá·tak niyohwistá·e astéhtsi̲ʔ", "700_am"],
  ["11:00 a.m.", "úska yawʌ·lé· niyohwistá·e astéhtsi̲ʔ", "1100_am"],
  ["1:00 p.m.", "úska niyohwistá·e yotukóhtu ʌ́ti", "100_pm"],
  ["4:00 p.m.", "kayé niyohwistá·e yotukóhtu ʌ́ti", "400_pm"],
  ["5:00 p.m.", "wísk yawʌ·lé· niyohwistá·e yotukóhtu ʌ́ti", "500_pm"],
].map(mapUtil);

const minutesExamples = [
  [
    "2:05 a.m.",
    "wísk nikahí·kalake yotukóhtu tékni niyohwistá·e astéhtsi̲ʔ",
    "205_am",
  ],
  ["3:30 a.m.", "tshaʔtewahsʌnʌ́ áhsʌ niyohwistá·e astéhtsi̲ʔ", "330_am"],
  [
    "4:50 a.m.",
    "oye·lí· nikahí·kalake tyono·lúhe wísk niyohwistá·e astéhtsi̲ʔ",
    "450_am",
  ],
  [
    "2:05 p.m.",
    "wísk nikahí·kalake yotukóhtu tékni niyohwistá·e yotukóhtu ʌ́ti",
    "205_pm",
  ],
  ["3:30 p.m.", "tshaʔtewahsʌnʌ́ áhsʌ niyohwistá·e yotukóhtu ʌ́ti", "330_pm"],
  [
    "5:50 p.m.",
    "oye·lí· nikahí·kalake tyono·lúhe wísk niyohwistá·e yotukóhtu ʌ́ti",
    "550_pm",
  ],
].map(mapUtil);

const eveningExamples = [
  ["8:00 p.m.", "téklu niyohwistá·e ʌyó·kalahweʔ", "800_pm"],
  ["9:00 p.m.", "wátlu niyohwistá·e yoʔkaláshʌ", "900_pm"],
  ["10:00 p.m.", "oye·lí· niyohwistá·e kwaʔashuté·ke", "1000_pm"],
].map(mapUtil);

const lastExamples = [
  [
    "2:05 p.m.",
    "ostúha yotukóhtu tékni niyohwistá·e yotukóhtu ʌ́ti",
    "205_pm_ostuha",
  ],
  ["4:55 p.m.", "nʌ́ kiʔ thóha wísk niyohwistá·e yotukóhtu ʌ́ti", "455_pm"],
].map(mapUtil);

export function ClockTimeArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="clock-time" level={level}>
        Clock Time
      </SectionHeading>
      <Text>
        Clock time in Oneida is a bit tricky. Let&lsquo;s start with a couple
        words:
      </Text>
      <List>
        <List.Item>
          noon: <b>ʌ́tyʌ ni·kále̲ʔ</b> OR <b>ʌtí</b>
        </List.Item>
        <List.Item>
          midnight: <b>ahsútha</b>
        </List.Item>
        <List.Item>
          morning: <b>astéhtsi̲ʔ</b>
        </List.Item>
        <List.Item>
          before: <b>tyono·lúhe</b> OR <b>kalo tsiʔ niyo·lé·</b> OR{" "}
          <b>tsiʔ niyo·lé</b>
        </List.Item>
        <List.Item>
          after: <b>yotukóhtu</b>
        </List.Item>
        <List.Item>
          half-past: <b>tshaʔtewahsʌnʌ</b>
        </List.Item>
      </List>
      <Text>
        So if someone asks you what time it is, and it&lsquo;s midnight or noon,
        you can simply say <b>ahsútha</b> or <b>ʌtí</b>, respectively. Now,
        let&lsquo;s look at a couple simple examples:
      </Text>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={simpleExamples}
      />

      <Text>
        To incorporate minutes, there are a couple rules to establish...
      </Text>
      <List>
        <List.Item>
          When it&lsquo;s less than 30 minutes: &quot;X minutes after the
          hour&quot;
        </List.Item>
        <List.Item>
          When it&lsquo;s exactly 30 minutes: &quot;half-past&quot;
        </List.Item>
        <List.Item>
          When it&lsquo;s more than 30 minutes: &quot;X minutes before the next
          hour&quot;
        </List.Item>
      </List>

      <Text>If this is confusing, take a look at the examples below.</Text>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={minutesExamples}
      />

      <Text>To make things even more confusing, you may instead hear:</Text>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={eveningExamples}
      />

      <Text>The new words above are:</Text>
      <List>
        <List.Item>
          <b>yoʔkaláshʌ̲</b>: evening (right now)
        </List.Item>
        <List.Item>
          <b>ʌyó·kalahwe</b>: this evening / tonight
        </List.Item>
        <List.Item>
          <b>kwaʔashuté·ke</b>: night-time
        </List.Item>
      </List>

      <Text>
        Lastly, we can use <b>ostúha</b> (a little bit) and <b>nʌ́ kiʔ thóha</b>{" "}
        (it is almost...) for more variety:
      </Text>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={lastExamples}
      />
    </Flex>
  );
}
