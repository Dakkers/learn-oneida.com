import { Flex } from "@/design/components/flex";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { Text } from "@/design/components/text";
import { Letter } from "../Letter";
import { List } from "@/design/components/list";
import { ResourceProps } from "./utils";

export function StressResource({ level = 1 }: ResourceProps) {
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
        <b>Short stress</b> is indicated by an upstress mark &nbsp;
        <Letter> ́</Letter>&nbsp; over the vowel being stressed. Vowels with
        short stress are pronounced slightly louder and with a rising tone of
        voice. The vowel is the same length as other vowels in the word.
      </Text>
      <Text>
        Examples: <b>kátsheʔ</b>, <b>kákhwa̲ʔ</b>, <b>kítkit</b>, <b>ohʌtú</b>,{" "}
        <b>ohutsyakú</b>, <b>olihwiyó</b>, <b>ohwístaʔ</b>, <b>áhtaʔ</b>.
      </Text>
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
      <Text>
        Examples: <b>owi·lá·</b>, <b>onú·ta</b>, <b>ola·ná·</b>,{" "}
        <b>nahté·shuʔ</b>, <b>kekhsá·</b>, <b>niʔí·</b>.
      </Text>

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
        short stress on basically all their words. This contrasts with
        Onʌyoteʔa·ká· which frequently uses long stress to properly say a word.
        This means that students will have to begin using long stress much more
        often. Onʌyoteʔa·ká· spoken with only short, stressed vowels sounds
        “American.”
      </Text>
      <Text>
        English speakers in this part of the country do use long stress, but
        usually for emphasis or to convey emotion. Being sarcastic they might
        say: “Well, excuuuuuse me.” Expressing sorrow or empathy they might say:
        “I&lsquo;m sooo sorry.”
      </Text>
      <Text>
        Students should not stress or lengthen prefixes, roots, suffixes,
        particles, or whole words to convey emphasis or emotion because these
        are conveyed through word choice or word order. In English, speakers
        raise their inflection to change a statement into a question, as in: “He
        likes her.” versus “He likes her?”. Onʌyoteʔa·ká· speakers should not
        raise their inflection when asking questions, as in:{" "}
        <b>Shakonú·wehseʔ kʌ né· akaulhá·</b>
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
        of a word, for example <b>niwáhsʌ</b>. However, there are many
        exceptions to this!
      </Text>
    </Flex>
  );
}
