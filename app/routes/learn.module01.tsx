import { Flex } from "@/design/ui/flex";
import { Notice } from "@/design/ui/notice";
import { Separator } from "@/design/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/ui/table";
import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PRONOUN_MAP_ONEIDA,
  pronouns,
  singlePronouns,
} from "~/utils";
import redPronominalsJson from "../data/red-pronominals.json";
import bluePronominalsJson from "../data/blue-pronominals.json";
import purplePronominalsJson from "../data/purple-pronominals.json";
import yatsJson from "../data/yats.json";
import { TextBreakdown } from "~/components/TextBreakdown";
import { List } from "@/design/ui/list";
import { Box } from "@/design/ui/box";
import { EnglishNames } from "~/components/language/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal } from "~/components/Pronominal";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <div>
      <Text as="h1" variant="headlineL">
        Module 1sssssssssssssssssss
      </Text>

      <Box py={4}>
        <Notice intent="warning">
          <strong>NOTE:</strong> This page is still under construction!
        </Notice>
      </Box>

      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>
        <List>
          <List.Item>
            Pronouns
            <List>
              <List.Item>Free-standing</List.Item>
              <List.Item>Bound</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Pronominals
            <List>
              <List.Item>Subjective (Red)</List.Item>
              <List.Item>Objective (Blue)</List.Item>
              <List.Item>The &quot;Purples&quot;</List.Item>
              <List.Item>Possessive (Light Blue)</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Stress and Accents
            <List>
              <List.Item>Length</List.Item>
              <List.Item>Short Stress</List.Item>
              <List.Item>Long Stress</List.Item>
              <List.Item>Whispered Endings</List.Item>
            </List>
          </List.Item>
          <List.Item>Glottal Stop</List.Item>
          <List.Item>The letter H</List.Item>
          <List.Item>Someone&lsquo;s name</List.Item>
          <List.Item>To know, to be in the know</List.Item>
          <List.Item>
            People
            <List>
              <List.Item>Children</List.Item>
              <List.Item>Adults</List.Item>
              <List.Item>Older People</List.Item>
              <List.Item>Adolescents</List.Item>
            </List>
          </List.Item>
          <List.Item>English names</List.Item>
        </List>

        <Separator />

        <Text as="h2" variant="headlineS">
          Pronouns
        </Text>
        <Text>
          English gets by with just 21 pronouns that stand alone and are
          separate words:
        </Text>
        <EnglishPronounsTable />
        <Text>
          Oneida has two kinds of pronouns: <strong>standalone</strong> and{" "}
          <strong>bound</strong>.
        </Text>

        <Text as="h2" variant="headlineS">
          Standalone Pronouns
        </Text>
        <Text>
          Standalone pronouns are words you'll find that stand alone in a
          sentence. The standalone pronouns are:
        </Text>
        <FreestandingPronounsSection />
        <Text as="h2" variant="headlineS">
          Bound Pronouns
        </Text>
        <Text>
          Bound pronouns must be attached to a word. There are roughly 80 of
          these, which can be broken down into four groups:
        </Text>
        <List ordered>
          <List.Item>Subjective (Red)</List.Item>
          <List.Item>Objective (Blue)</List.Item>
          <List.Item>Possessive (Light Blue)</List.Item>
          <List.Item>&quot;The Purples&quot;</List.Item>
        </List>
        <Text>
          &quot;The Purples&quot; refers to a group of pronouns that do not have
          an English counterpart.
        </Text>
        <Notice intent="secondary">
          From here on, we will refer to pronouns as{" "}
          <strong>pronominals</strong>, which is an abbreviation of
          &quot;pronominal prefix&quot;.
        </Notice>

        <Text as="h3" variant="titleM">
          Subjective (Red) Pronominals
        </Text>
        <Text>
          The table below displays the full list of subjective (red)
          pronominals. Each column represents a different &quot;stem&quot;,
          which is the first letter in a root word. For example, the root word{" "}
          <i>nuwehseʔ</i> (&quot;to like&quot;) starts with the letter
          &quot;N&quot; which is a consonant, so we use the &quot;C-stem&quot;
          column. The root word <i>attokhaʔ</i> (&quot;to be wise&quot;) starts
          with the letter &quot;A&quot;, so we use the &quot;A-stem&quot;
          column.
        </Text>
        <Text>
          Attaching &quot;k&quot; to the start of the root word <i>nuwehseʔ</i>{" "}
          results in <i>knú·wehseʔ</i> which means &quot;I like it&quot;.
          Attaching &quot;l&quot; to the start of the root word <i>attokhaʔ</i>{" "}
          gives us <i>lattókhaʔ</i> wich means &quot;he is wise&quot;.
        </Text>
        <Text>
          The small numbers in the table cells represent exceptions – Oneida is
          full of them!
        </Text>
        <PronominalsTable color="red" data={redPronominalsJson} />

        <Text variant="labelL">Exception 1</Text>
        <Text>
          The vowel with a squiggly underline replaces the leading vowel of the
          root word. For example, the word for &quot;she is wise&quot; is{" "}
          <i>yuttókhaʔ</i>. <Letter>yu</Letter> is the pronominal and the letter
          U &quot;overpowers&quot; the letter A in the root word <i>attokhaʔ</i>
          .
        </Text>
        <Text>
          As an example, let's look at the A-stem column, where the root word is{" "}
          <i>attokhaʔ</i>. The translation for "she is wise" without this
          replacement rule would be <i>yuattokhaʔ</i>. <Letter>yua</Letter> is
          not a sound in Oneida so we instead change it to <Letter>yu</Letter>.
          Therefore the translation is <i>yuttókhaʔ</i>.
        </Text>

        <Text variant="labelL">Exception 2</Text>
        <Text>
          The <Letter>h</Letter> is not written or pronounced when nothing is
          attached in front of the pronominal. However, when anything is
          attached to the front of the pronominal, the <Letter>h</Letter> is
          written and pronounced. Example: <i>snú·wehse̲ʔ</i> and{" "}
          <i>yah tehsnú·wehse̲ʔ</i>.
        </Text>

        <Text variant="labelL">Exception 3</Text>
        <Text>
          The letter <Letter>e</Letter> only appears on root words that begin
          with a double consonant.
        </Text>
        <Notice intent="warning">
          Examples are needed for this exception.
        </Notice>

        <Text variant="labelL">Exception 4</Text>
        <Text>
          The <Letter>ik</Letter> prefix is attached to most (but not all)
          single syllable roots. The <Letter>i</Letter> in <Letter>ik</Letter>{" "}
          is used only occasionally. The <Letter>i</Letter> disappears when
          anything is attached in front of the prefix. Example: <i>íkyʌheʔ</i>{" "}
          and <i>yah té·kyʌheʔ</i>.
        </Text>

        <Text variant="labelL">Exception 5</Text>
        <Text>
          The prefix <code>ts</code> is attached to all roots beginning with{" "}
          <Letter>y</Letter>
          and <Letter>i</Letter>. The <Letter>t</Letter> disappears and is
          replaced by <Letter>h</Letter> when anything is attached in front of
          the prefix. Example:
          <i>tsyʌtelíˍ</i> and <i>yah tehsyʌtelíˍ</i>; <i>tsí·tlu̲ʔ</i> and{" "}
          <i>yah tehsí·tlu̲ʔ</i>.
        </Text>

        <Text variant="labelL">Exception 6</Text>
        <Text>
          The prefix <Letter>it</Letter> is attached to all roots beginning with{" "}
          <Letter>hs</Letter> and the <Letter>i</Letter>
          disappears when anything is attached in front of the prefix. Example:{" "}
          <i>íthsaʔas</i> and <i>yah tethsáʔas</i>
        </Text>

        <Separator />

        <Text as="h3" variant="titleM">
          Objective (blue) Pronominals
        </Text>
        <Text>
          The table below displays the full list of objective (blue)
          pronominals.
        </Text>
        <PronominalsTable color="blue" data={bluePronominalsJson} />

        <Text as="h3" variant="titleM">
          Purple Pronominals
        </Text>
        <Text>
          The table below displays the full list of purple pronominals. These do
          not have an English counterpart.
        </Text>
        <PronominalsTable color="purple" data={purplePronominalsJson} />

        <Text as="h3" variant="titleM">
          Possessive (light blue) Pronominals
        </Text>
        <Text>(Not yet available)</Text>

        <Text as="h2" variant="headlineS">
          Stress and Accents
        </Text>
        <Text>
          Stress is the term we use to describe the way we emphasize one part of
          a word when we say it aloud. An accent is the mark we place over the
          syllable that is being stressed / emphasized. The accent mark is
          always written over the vowel in the syllable being stressed. We never
          write accent marks over consonants. There are two kinds of stress:
        </Text>

        <Text as="h3" variant="titleM">
          Short stress
        </Text>
        <Text>
          <strong>Short stress</strong> is indicated by an upstress mark &nbsp;
          <Letter> ́</Letter>&nbsp; over the vowel being stressed. Vowels with
          short stress are pronounced slightly louder and with a rising tone of
          voice. The vowel is the same length as other vowels in the word.
        </Text>
        <Text>
          Examples: <i>kátsheʔ</i>, <i>kákhwaʔ</i>, <i>kítkit</i>, <i>ohʌtú</i>,{" "}
          <i>ohutsyakú</i>, <i>olihwiyó</i>, <i>ohwístaʔ</i>, <i>áhtaʔ</i>.
        </Text>
        <Text as="h3" variant="titleM">
          Long stress
        </Text>
        <Text>
          <strong>Long stress</strong> is indicated by an upstress mark &nbsp;
          <Letter> ́</Letter>&nbsp; over the vowel followed by a middle dot{" "}
          <Letter>·</Letter> or a colon <Letter>:</Letter>. Vowels with a long
          stress are pronounced slightly louder and noticeably longer than other
          vowels in the same word.
        </Text>
        <Text>
          Examples: <i>owi·lá·</i>, <i>onú·ta</i>, <i>ola·ná·</i>,{" "}
          <i>nahté·shuʔ</i>, <i>kekhsá·</i>, <i>niʔí·</i>.
        </Text>

        <Text as="h2" variant="headlineS">
          Length
        </Text>
        <Text>
          <strong>Length</strong> is indicated by a middle dot{" "}
          <Letter>·</Letter> or a colon <Letter>:</Letter>. Vowels are
          noticeably longer than other vowels in the same word.
        </Text>
        <Text>
          Although people from the southern U.S. use long vowels in their
          speech, English speakers in most of the U.S. and Canada do not. They
          speak using short stress on basically all their words. This contrasts
          with Onʌyoteʔa·ká· which frequently uses long stress to properly say a
          word. This means that students will have to begin using long stress
          much more often. Onʌyoteʔa·ká· spoken with only short, stressed vowels
          sounds “American.”
        </Text>
        <Text>
          English speakers in this part of the country do use long stress, but
          usually for emphasis or to convey emotion. Being sarcastic they might
          say: “Well, excuuuuuse me.” Expressing sorrow or empathy they might
          say: “I&lsquo;m sooo sorry.”
        </Text>
        <Text>
          Students should not stress or lengthen prefixes, roots, suffixes,
          particles, or whole words to convey emphasis or emotion because these
          are conveyed through word choice or word order. In English, speakers
          raise their inflection to change a statement into a question, as in:
          “He likes her.” versus “He likes her?”. Onʌyoteʔa·ká· speakers should
          not raise their inflection when asking questions, as in:{" "}
          <i>Shakonú·wehseʔ kʌ né· akaulhá·</i>
        </Text>

        <Text as="h2" variant="headlineS">
          Where stress occurs
        </Text>
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
          The most frequent placement for stress is on the second-to-last
          syllable of a word, for example <i>niwáhsʌ</i>. However, there are
          many exceptions to this!
        </Text>

        <Text as="h2" variant="headlineS">
          Glottal Stops
        </Text>
        <Text>
          A common feature of Onʌyoteʔa·ká· is the GLOTTAL STOP indicated in
          writing by an apostrophe (<Letter>&lsquo;</Letter>) or the symbol{" "}
          <Letter>ʔ</Letter>. A glottal stop occurs when a speaker abruptly
          “cuts” the end off a vowel by stopping air and sound coming out of
          their throat. We use glottal stops in speaking English all the time,
          but we are unaware of them and do not write them.
        </Text>
        <Text>
          Example: When saying “no,” people sometimes say “uh-unh.” (The glottal
          stop occurs after the “uh” and before the “unh.”) Many people also
          glottalize the double-t in words like kitten, so that they say
          “kiʔten.” Examples of Onʌyoteʔa·ká· words with glottal stops are:
          oʔwá·luʔ, oʔsluniʔkéha, otsiʔnowʌ́, kátsheʔ, otsí·tsyaʔ. Sometimes a
          vowel with a glottal stop is given a short or a long stress. Examples:
          wakyo·té·, ká·khaleʔ, laksá·, kanutó·tsliʔ.
        </Text>

        <Text as="h2" variant="headlineS">
          The letter H
        </Text>
        <Text>
          An important feature of Onʌyoteʔa·ká· is the letter H, which works the
          same way as it does in English, with breath coming out of a
          speaker&lsquo;s throat but no sound. English speakers are not aware of
          how many times they say an H when they speak, and they donʔt write all
          the Hs they say. For example, they say an H (a breath but no sound) in
          the words “king,” “queen,” “top”, and “tie” but they don&lsquo;t hear
          the H and they don&lsquo;t write it.
        </Text>
        <Text>
          In Onʌyoteʔa·ká· we write all the Hs that follow Ks and Ts. Example:{" "}
          <i>khenú·wehseʔ</i> and <i>thikʌ́</i>. We also write most of the Hs
          that occur after a vowel and before a consonant. Examples:{" "}
          <i>yehyatúkhwaʔ</i>, <i>onikwʌ́htalaʔ</i>, <i>kanúhsaʔ</i>. Not all of
          the Hs that are spoken in a word get written by all speakers, however.
          It seems to be a matter of personal preference.
        </Text>

        <Text as="h2" variant="headlineS">
          Whispered Endings
        </Text>
        <Text>
          This is a very unique feature of Onʌyoteʔa·ká where the last syllable
          of a word is actually whispered. This occurs only on words that are
          prepausal (but it doesn&lsquo;t always occur on prepausal words). A
          prepausal word is a word that occurs at the end of a sentence or is
          the only word in a sentence. This is written using an underline under
          the vowel that is whispered, for example <i>áhsʌ̲</i>.
        </Text>
        <Text>
          The alternative to prepausal is medial. You may see the abbreviations
          PF and MF for prepausal form and medial form, respectively.
        </Text>
        <Text>
          A word that is in prepausal form may have its stress placed on a
          different syllable than its corresponding medial form. For example:{" "}
          <i>kahyatuhslí né· thíkʌ̲</i> &nbsp; vs. &nbsp;{" "}
          <i>hʌ, kahyatúhsehli̲</i>.
        </Text>
        <Text>
          In this curriculum all words are given in medial form unless they
          appear prepausal in the dialogue examples. As with the Hs, beginning
          students must listen closely to pick up the pronunciation to know when
          to use it effectively{" "}
          <strong>as not all prepausal words have whispered endings</strong>.
          For example, <i>úska</i> is fully pronounced in prepausal form.
        </Text>

        <Text as="h2" variant="headlineS">
          Calling someone by a name
        </Text>
        <Text>
          Let's learn our first phrase!{" "}
          <strong>
            Bob ni· <Pronominal color="p">yuk</Pronominal>yáts
          </strong>{" "}
          translates to "Bob is my name". It actually more literally translates
          to "They call me Bob". Notice the purple text in the phrase,{" "}
          <Letter>yuk</Letter>. This is from our Purple Pronominals table.{" "}
          <Letter>yats</Letter> is the root word and because it begins with a
          consonant, we can look for "yuk" in the table under the C-stem column
          to find that it corresponds to "They → me".
        </Text>
        <Text>
          <Letter>yats</Letter> is an example of a word that "uses purple
          pronominals". Different root words in Oneida use different color
          pronominals. Some words, such as <i>nú·wehseʔ</i>, support different
          color pronominals. Different colors can change the meaning of a root
          word. We'll learn more about this in module 2.
        </Text>
        <Text>
          A paradigm table for <Letter>yats</Letter> looks like this:
        </Text>
        <ParadigmTable
          allowedPronouns={[...singlePronouns, "ms", "fs"]}
          data={yatsJson}
          columnVisibility={{
            pronounEnglish: false,
            pronounOneida: false,
          }}
        />

        <Text as="h2" variant="headlineS">
          People
        </Text>
        <Text as="h3" variant="titleM">
          Children
        </Text>
        <Text>(Not yet available)</Text>
        <Text as="h3" variant="titleM">
          Adults
        </Text>
        <Text>(Not yet available)</Text>
        <Text as="h3" variant="titleM">
          Older people
        </Text>
        <Text>(Not yet available)</Text>
        <Text as="h3" variant="titleM">
          Adolescents
        </Text>
        <Text>(Not yet available)</Text>

        <Text as="h2" variant="headlineS">
          English Names
        </Text>
        <EnglishNames />
      </Flex>
    </div>
  );
}

function EnglishPronounsTable() {
  const data = [
    ["I", "me", "my"],
    ["you", "you", "your"],
    ["he", "him", "his"],
    ["she", "her", "her"],
    ["it", "it", "its"],
    ["we", "us", "our"],
    ["they", "them", "their"],
  ] as const;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subjective Set</TableHead>
          <TableHead>Objective Set</TableHead>
          <TableHead>Possessive Set</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell>{row[0]}</TableCell>
            <TableCell>{row[1]}</TableCell>
            <TableCell>{row[2]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function FreestandingPronounsSection() {
  const data = [
    ["í·", "I / Me"],
    ["isé·", "You"],
    ["né·", "It"],
    ["laulhá·", "He / Him"],
    ["akaulhá·", "She / Her"],
    ["aulhá·", "It"],
    ["lonulhá·", "They / Them (males, mix of males and females)"],
    ["onulhá·", "They / Them (females)"],
  ] as const;

  return (
    <div>
      <Table>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function PronominalsTable({ color, data = {} }) {
  const stems = ["c", "a", "i", "e", "o"];
  const isPurple = color === "purple";
  const rowsToUse = isPurple ? data : pronouns;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {!isPurple && <TableHead></TableHead>}
          <TableHead>EN</TableHead>
          <TableHead>C-stem</TableHead>
          <TableHead>A-stem</TableHead>
          <TableHead>I-stem</TableHead>
          <TableHead>E-stem / Λ-stem</TableHead>
          <TableHead>O-stem / U-stem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowsToUse.map((row, i) => (
          <TableRow key={i}>
            {!isPurple && <TableCell>{PRONOUN_MAP_ONEIDA[row]}</TableCell>}
            <TableCell>
              {!isPurple ? (
                PRONOUN_MAP_EN[row]
              ) : Array.isArray(row.label) ? (
                <>
                  {row.label.map((label, j) => (
                    <div key={j}>{label}</div>
                  ))}
                </>
              ) : (
                row.label
              )}
            </TableCell>

            {stems.map((stem) => {
              const datum = isPurple ? row : data[row];
              const content = datum[stem] ?? datum.default;
              return (
                <TableCell key={stem}>
                  <Flex direction="column">
                    {content.map((prefixArr, i) => (
                      <PronominalTableText
                        entry={prefixArr}
                        color={color}
                        key={i}
                      />
                    ))}
                  </Flex>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PronominalTableText({ entry, color }) {
  if (typeof entry === "string") {
    return <Pronominal color={color}>{entry}</Pronominal>;
  }
  const textContent = !entry.breakdown ? (
    <Pronominal color={color}>{entry.text}</Pronominal>
  ) : (
    <TextBreakdown
      breakdown={entry.breakdown}
      typeFallback={
        color === "red"
          ? "PR"
          : color === "blue"
          ? "PB"
          : color === "purple"
          ? "PP"
          : color === "lightblue"
          ? "PLB"
          : undefined
      }
    />
  );

  return (
    <Flex gap={1}>
      {textContent}
      {!!entry.excp && <Footnotes nums={entry.excp} />}
    </Flex>
  );
}

function Footnotes({ nums: _nums }: { nums: string[] | string }) {
  const nums = (Array.isArray(_nums) ? _nums : [_nums]).map((n) => parseInt(n));
  nums.sort();

  return (
    <Flex gap={1}>
      {nums.map((num) => (
        <sup key={num}>
          <Text contrast="mid" intent="secondary" variant="footnote">
            {num}
          </Text>
        </sup>
      ))}
    </Flex>
  );
}

function Letter({ children }) {
  return (
    <code>
      <strong>{children}</strong>
    </code>
  );
}
