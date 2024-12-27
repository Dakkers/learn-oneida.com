"use client";

import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import type { ArticleProps } from "./utils";
import { Letter } from "../Letter";
import { List } from "@ukwehuwehneke/ohutsya";
import { ListOfWords } from "../ListOfWords";

export function GlottalStopArticle({ level = 1 }: ArticleProps) {
  const list1 = [
    "oʔwá·lu̲ʔ",
    "oʔsluniʔkéha̲",
    "otsiʔnowʌ̲̲́",
    "kátsheʔ",
    "otsí·tsyaʔ",
  ];
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="glottal" level={level}>
        Glottal Stops
      </SectionHeading>
      <Text>
        A common feature of Oneida is the <strong>glottal stop</strong>{" "}
        indicated in writing by an apostrophe (<Letter>&lsquo;</Letter>) or the
        symbol <Letter>ʔ</Letter>. A glottal stop occurs when a speaker abruptly
        &quot;cuts&quot; the end off a vowel by stopping air and sound coming
        out of their throat. We use glottal stops in speaking English all the
        time, but we are unaware of them and do not write them.
      </Text>
      <Text>
        Example: In English, &quot;uh-oh.&quot; has a glottal stop. The glottal
        stop occurs after the &quot;uh&quot; and before the &quot;oh.&quot; Many
        people also glottalize the double-t in words like kitten, so that they
        say &quot;kiʔten.&quot; Examples of Oneida words with glottal stops are:
      </Text>
      <ListOfWords
        filepathBase="/module01/glottal_stops"
        offset={1}
        words={list1}
      />
      <Text>
        Sometimes a vowel with a glottal stop is given a short or a long stress.
        Examples:
      </Text>
      <ListOfWords
        filepathBase="/module01/glottal_stops"
        offset={1 + list1.length}
        words={[
          "wakyo·té̲·",
          "ká·khale̲ʔ",
          "laksá·",
          "kanutó·tse̲lʔ / kanutó·tsliʔ",
        ]}
      />
    </Flex>
  );
}
