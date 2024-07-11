"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
import { List } from "@ukwehuwehneke/ohutsya";

const simpleExamples = [
  ["1:00 a.m.", "úska niyohwistá·e astéhtsiʔ"],
  ["7:00 a.m.", "tsyá·tak niyohwistá·e astehtsi"],
  ["11:00 a.m.", "úska yawa·lé niyohwistá·e astehtsi"],
  ["1:00 p.m.", "úska niyohwistá·e yotukóhtu ʌ́ti"],
  ["7:00 p.m.", "tsyá·tak niyohwistá·e yotukóhtu ʌ́ti"],
  ["11:00 p.m.", "úska yawa·lé niyohwistá·e yotukóhtu ʌ́ti"],
].map(([en, translation]) => ({ en, translation }));

const minutesExamples = [
  ["2:05 a.m.", "wísk nikahí·kalake yotukóhtu tékni niyohwistá·e astéhtsiʔ"],
  ["3:30 a.m.", "tshaʔtewahsʌnʌ́ áhsʌ niyohwistá·e astéhtsiʔ"],
  ["4:50 a.m.", "oye·lí· nikahí·kalake tyono·lúhe wísk niyohwistá·e astéhtsiʔ"],
  [
    "2:05 p.m.",
    "wísk nikahí·kalake yotukóhtu tékni niyohwistá·e yotukóhtu ʌ́ti",
  ],
  ["3:30 p.m.", "tshaʔtewahsʌnʌ́ áhsʌ niyohwistá·e yotukóhtu ʌ́ti"],
  [
    "5:50 p.m.",
    "oye·lí· nikahí·kalake tyono·lúhe wísk niyohwistá·e yotukóhtu ʌ́ti",
  ],
].map(([en, translation]) => ({ en, translation }));

const eveningExamples = [
  ["8:00 p.m.", "téklu niyohwistá·e ʌyó·kalahweʔ"],
  ["9:00 p.m.", "wátlu niyohwistá·e yoʔkaláshʌ"],
  ["10:00 p.m.", "oye·lí· niyohwistá·e kwaʔashuté·ke"],
].map(([en, translation]) => ({ en, translation }));

const lastExamples = [
  ["2:05 p.m.", "ostúha yotukóhtu tékni niyohwistá·e yotukóhtu ʌ́ti"],
  ["4:55 p.m", "nʌ́ kiʔ thóha wísk niyohwistá·e yotukóhtu ʌ́ti"],
].map(([en, translation]) => ({ en, translation }));

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
          noon: <b>ʌ́tyʌ ni·kále̲ʔ̲</b> OR <b>ʌtí</b>
        </List.Item>
        <List.Item>
          midnight: <b>ahsútha</b>
        </List.Item>
        <List.Item>
          morning: <b>astéhtsiʔ</b>
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
        you can simply say
        <b>ahsútha</b> or <b>ʌtí</b>, respectively. Now, let&lsquo;s look at a
        couple simple examples:
      </Text>

      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
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
        columns={TableWrapper.columnsEnglishTranslation}
        data={minutesExamples}
      />

      <Text>To make things even more confusing, you may instead hear:</Text>

      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={eveningExamples}
      />

      <Text>The new words above are:</Text>
      <List>
        <List.Item>
          <b>yoʔkaláshʌ</b>: evening (right now)
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
        columns={TableWrapper.columnsEnglishTranslation}
        data={lastExamples}
      />
    </Flex>
  );
}
