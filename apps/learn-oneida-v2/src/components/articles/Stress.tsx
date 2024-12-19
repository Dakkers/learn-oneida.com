"use client";
import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { List } from "@ukwehuwehneke/ohutsya";
import { ArticleProps } from "./utils";
import { ListOfWords } from "../ListOfWords";

export function StressArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="stress" level={level}>
        Stress and Accents
      </SectionHeading>
      <Text>
        Stress is the term we use to describe the way we emphasize one part of a
        word when we say it aloud. An accent is the mark we place over the
        syllable that is being stressed / emphasized. The accent mark is always
        written over the vowel in the syllable being stressed. We never write
        accent marks over consonants. There are two kinds of stress:
      </Text>

      <SectionHeading
        id="short-stress"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Short stress
      </SectionHeading>
      <Text>
        <b>Short stress</b> is indicated by an upstress mark <Letter> ́</Letter>{" "}
        over the vowel being stressed. Vowels with short stress are pronounced
        slightly louder and with a rising tone of voice. The vowel is the same
        length as other vowels in the word.
      </Text>
      <Text>Examples:</Text>
      <ListOfWords
        filepathBase="/module01/short_stress"
        offset={1}
        words={[
          "kátsheʔ",
          "kákhwa̲ʔ",
          "kítkit",
          "ohʌtú",
          "ohutsyakú",
          "olihwiyó̲",
          "ohwísta̲ʔ",
          "áhta̲ʔ",
        ]}
      />
      <SectionHeading
        id="long-stress"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Long stress
      </SectionHeading>
      <Text>
        <b>Long stress</b> is indicated by an upstress mark &nbsp;
        <Letter> ́</Letter>&nbsp; over the vowel followed by a middle dot{" "}
        <Letter>·</Letter> or a colon <Letter>:</Letter>. Vowels with a long
        stress are pronounced slightly louder and noticeably longer than other
        vowels in the same word.
      </Text>
      <Text>Examples:</Text>
      <ListOfWords
        filepathBase="/module01/long_stress"
        offset={1}
        words={[
          "owi·lá̲·",
          "onú·ta̲",
          "ola·ná̲·",
          "nahté·shuʔ",
          "keksá·",
          "niʔí·",
        ]}
      />

      <SectionHeading
        id="length"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Length
      </SectionHeading>
      <Text>
        <b>Length</b> is indicated by a middle dot <Letter>·</Letter> or a colon{" "}
        <Letter>:</Letter>. Vowels are noticeably longer than other vowels in
        the same word.
      </Text>
      <Text>
        Although people from the southern U.S. use long vowels in their speech,
        English speakers in most of the U.S. and Canada do not. They speak using
        short stress on basically all their words. This contrasts with Oneida
        which frequently uses long stress to properly say a word. This means
        that students will have to begin using long stress much more often.
        Oneida spoken with only short, stressed vowels sounds
        &quot;American.&quot;
      </Text>
      <Text>
        English speakers in this part of the country do use long stress, but
        usually for emphasis or to convey emotion. Being sarcastic they might
        say: &quot;Well, excuuuuuse me.&quot;
      </Text>
      <Text>
        Students should not stress or lengthen prefixes, roots, suffixes,
        particles, or whole words to convey emphasis or emotion because these
        are conveyed through word choice or word order. In English, speakers
        raise their inflection to change a statement into a question, as in:
        &quot;He likes her.&quot; versus &quot;He likes her?&quot;. Oneida
        speakers should not raise their inflection when asking questions, as in:{" "}
        <b>Shakonú·wehseʔ kʌ́ né· akaulhá·</b>{" "}
        <PlayButton filepath={`/audio/module01/length/1.mp3`} />
      </Text>

      <SectionHeading
        id="where-stress"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Where stress occurs
      </SectionHeading>
      <Text>
        There are two rules regarding stress:
        <List ordered>
          <List.Item>
            Every word that has more than one vowel / syllable has a stress
            (accent).
          </List.Item>
          <List.Item>
            Only one vowel / syllable in a word can be stressed.
          </List.Item>
        </List>
      </Text>
      <Text>
        The most frequent placement for stress is on the second-to-last syllable
        of a word, for example <b>niwáhsʌ</b>.{" "}
        <PlayButton filepath={`/audio/module01/length/2.mp3`} /> However, there
        are many exceptions to this!
      </Text>
    </Flex>
  );
}
