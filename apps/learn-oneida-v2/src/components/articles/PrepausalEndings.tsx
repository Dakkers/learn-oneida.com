"use client";
import { Flex, List, PlayButton } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ArticleProps } from "./utils";
import { DialogueTable } from "../DialogueTable";

export function PrepausalEndingsArticle({ level = 1 }: ArticleProps) {
  const sublevel = (level + 1) as SectionHeadingProps["level"];
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="prepausal-endings" level={level}>
        Prepausal Endings
      </SectionHeading>
      <Text>
        This is a unique feature of Oneida where most, almost all, words are
        spoken slightly differently when the word is at the end of a sentence,
        or if it is the only word in a sentence. There are three kinds of
        prepausal endings. The last syllable is either:
      </Text>

      <List ordered>
        <List.Item>
          cut off, which may affect the pronunciation of the syllable in front
        </List.Item>
        <List.Item>
          replaced by a different syllable, which affects its spelling
        </List.Item>
        <List.Item>whispered</List.Item>
      </List>

      <Text>
        All prepausal endings are indicated with an underline on the vowel of
        the last syllable, as seen below. When the word is at the end of a
        sentence, it is said to be in its "prepausal form". Otherwise, the word
        is in its "medial form".
      </Text>

      <SectionHeading id="prepausal-cut-off" level={sublevel}>
        Cut-off Endings
      </SectionHeading>

      <Text>
        This is the most common kind of prepausal ending. The last syllable will
        be cut off, which may affect the pronunciation of the preceding
        syllable. It may also affect where the stress (emphasis) occurs.
      </Text>

      <ListOfWords
        words={[
          ["tewáhsʌ̲", "tewáhsʌ"],
          ["kanaskwiyó̲", "kanaskwiyó"],
          ["wakaʔsha·láyʌ̲ʔ", "wakaʔsha·láyʌʔ"],
          ["ʌkano·lúhake̲ʔ", "ʌkano·lúhakeʔ"],
        ]}
      />

      <SectionHeading id="prepausal-replaced-syllable" level={sublevel}>
        Replaced Syllable
      </SectionHeading>

      <Text>
        This is not too common, and mostly occurs with words that end with an
        "L" sound. This affects the spelling of the word, too. Therefore, you
        will two written versions of the word, depending on where the word
        occurs in the sentence.
      </Text>

      <ListOfWords
        words={[
          ["wá·telu̲ʔ", "wá·tluʔ"],
          ["naʔteyakwátele̲ʔ", "naʔteyakwátleʔ"],
          ["waʔtyutnʌtshá·selu̲ʔ", "waʔtyutnʌtshá·sluʔ"],
          ["waté·sele̲ʔ", "waté·sleʔ"],
          ["kanutó·tse̲lʔ", "kanutó·tsliʔ"],
        ]}
      />

      <SectionHeading id="prepausal-whispered" level={sublevel}>
        Whispered Syllables
      </SectionHeading>

      <Text>
        These are commonly referred to as a "whispered ending". This is probably
        the least common kind of prepausal ending. The last syllable is still
        pronounced but it is whispered.
      </Text>

      <ListOfWords words={[["tehatilihwákhwa̲ʔ", "tehatilihwákhwaʔ"]]} />

      <SectionHeading id="prepausal-examples" level={sublevel}>
        Examples
      </SectionHeading>

      <DialogueTable
        data={[
          {
            one: "Tó· nikanutó·tslake̲",
            en: "How many boxes are there?",
          },
          {
            one: "Wá·telu̲ʔ",
            en: "9.",
          },
          {
            one: "To· nikú ʌtehsla·kó̲·",
            en: "How many will you take away?",
          },
          {
            one: "Ahsʌ̲",
            en: "3.",
          },
          {
            one: "Tó· naʔtehaohsliyá·ku̲",
            en: "How old is he?",
          },
          {
            one: "Wá·tluʔ naʔtehaohsliyá·ku̲",
            en: "He is 9 years old.",
          },
          {
            one: "Tó· naʔteyakohsliyá·ku né· saksotha̲",
            en: "How old is your grandmother?",
          },
          {
            one: "Wá·tluʔ niwáhsʌ wá·telu̲ʔ",
            en: "99.",
          },
        ]}
      />
    </Flex>
  );
}

function ListOfWords({ words }: { words: Array<[string, string]> }) {
  const filepath = `/audio/module01/prepausal_endings`;

  return (
    <List>
      {words.map((pair, i) => (
        <List.Item key={i}>
          <Flex gap={4}>
            <Flex gap={2}>
              <Text>{pair[0]}</Text>{" "}
              <PlayButton filepath={`${filepath}/.mp3`} />
            </Flex>
            <Text>vs.</Text>
            <Flex gap={2}>
              <Text>{pair[1]}</Text>{" "}
              <PlayButton filepath={`${filepath}/.mp3`} />
            </Flex>
          </Flex>
        </List.Item>
      ))}
    </List>
  );
}
