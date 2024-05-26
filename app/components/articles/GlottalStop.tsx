import { Flex } from "@/design/components/flex";
import { SectionHeading } from "../SectionHeading";
import { Text } from "@/design/components/text";
import { ArticleProps } from "./utils";
import { Letter } from "../Letter";
import { List } from "@/design/components/list";

export function GlottalStopArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="glottal" level={level}>
        Glottal Stops
      </SectionHeading>
      <Text>
        A common feature of Onʌyoteʔa·ká· is the GLOTTAL STOP indicated in
        writing by an apostrophe (<Letter>&lsquo;</Letter>) or the symbol{" "}
        <Letter>ʔ</Letter>. A glottal stop occurs when a speaker abruptly “cuts”
        the end off a vowel by stopping air and sound coming out of their
        throat. We use glottal stops in speaking English all the time, but we
        are unaware of them and do not write them.
      </Text>
      <Text>
        Example: When saying “no,” people sometimes say “uh-unh.” (The glottal
        stop occurs after the “uh” and before the “unh.”) Many people also
        glottalize the double-t in words like kitten, so that they say “kiʔten.”
        Examples of Onʌyoteʔa·ká· words with glottal stops are:
      </Text>
      <List>
        <List.Item>oʔwá·luʔ</List.Item>
        <List.Item>oʔsluniʔkéha</List.Item>
        <List.Item>otsiʔnowʌ́</List.Item>
        <List.Item>kátsheʔ</List.Item>
        <List.Item>otsí·tsyaʔ</List.Item>
      </List>
      <Text>
        Sometimes a vowel with a glottal stop is given a short or a long stress.
        Examples:
      </Text>
      <List>
        <List.Item>wakyo·té·</List.Item>
        <List.Item>ká·khaleʔ</List.Item>
        <List.Item>laksá·</List.Item>
        <List.Item>kanutó·tsliʔ</List.Item>
      </List>
    </Flex>
  );
}
