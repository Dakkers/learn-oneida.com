import { Flex } from "@/design/components/flex";
import { Notice } from "@/design/components/notice";
import { Separator } from "@/design/primitives/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/primitives/table";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  arrayify,
  pronouns,
  singlePronouns,
} from "~/utils";
import redPronominalsJson from "../data/red-pronominals.json";
import bluePronominalsJson from "../data/blue-pronominals.json";
import purplePronominalsJson from "../data/purple-pronominals.json";
import lightbluePronominalsJson from "../data/lightblue-pronominals.json";
import yatsJson from "../data/yats.json";
import anuhteJson from "../data/anuhte.json";
import { TextBreakdown } from "~/components/TextBreakdown";
import { List } from "@/design/components/list";
import { Box } from "@/design/components/box";
import { EnglishNames } from "~/components/resources/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal, PronominalColor } from "~/components/Pronominal";
import { PeopleResource } from "~/components/resources/People";
import { Heading } from "@/design/components/heading";
import { ParticlesTable } from "~/components/resources/ParticlesTable";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <div>
      <Heading level={1} variant="headlineL">
        Module 1
      </Heading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>
      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>

        <TOC>
          <TOC.Item label="Pronouns" value="pronouns">
            <TOC.Section>
              <TOC.Item label="Free-standing" value="standalone-pronouns" />
              <TOC.Item label="Bound" value="bound-pronouns" />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="Pronominals" value="pronominals">
            <TOC.Section>
              <TOC.Item label="Subjective (Red)" value="red-pronominals" />
              <TOC.Item label="Objective (Blue)" value="blue-pronominals" />
              <TOC.Item label='"The Purples"' value="purple-pronominals" />
              <TOC.Item
                label="Possessive (Light Blue)"
                value="lightblue-pronominals"
              />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="Stress and Accents" value="stress">
            <TOC.Section>
              <TOC.Item label="Short stress" value="short-stress" />
              <TOC.Item label="Long stress" value="long-stress" />
              <TOC.Item label="Length" value="length" />
              <TOC.Item label="Where stress occurs" value="where-stress" />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="Glottal stops" value="glottal" />
          <TOC.Item label="The letter H" value="letter-h" />
          <TOC.Item.Phrase
            label="to call someone by a name"
            word="yats"
            value="yats"
          />
          <TOC.Item.Phrase
            label="to know, to be in the know"
            word="anúhteʔ"
            value="anúhte"
          />

          <TOC.Item label="Particles" value="particles" />

          <TOC.Item label="People" value="people-resource">
            <TOC.Section>
              <TOC.Item label="Children" value="people-resource-children" />
              <TOC.Item
                label="Adolescents"
                value="people-resource-adolescents"
              />
              <TOC.Item label="Adults" value="people-resource-adults" />
              <TOC.Item label="Older people" value="people-resource-older" />
            </TOC.Section>
          </TOC.Item>

          <TOC.Item label="English names" value="english-names" />
        </TOC>

        <Separator />

        <Heading id="pronouns" level={2} variant="headlineS">
          Pronouns
        </Heading>
        <Text>
          English gets by with just 21 pronouns that stand alone and are
          separate words:
        </Text>
        <EnglishPronounsTable />
        <Text>
          Oneida has two kinds of pronouns: <b>standalone</b> and <b>bound</b>.
        </Text>

        <Heading id="standalone-pronouns" level={3} variant="titleM">
          Standalone Pronouns
        </Heading>
        <Text>
          Standalone pronouns are words you&lsquo;ll find that stand alone in a
          sentence. The standalone pronouns are:
        </Text>
        <FreestandingPronounsSection />
        <Heading id="bound-pronouns" level={3} variant="titleM">
          Bound Pronouns
        </Heading>
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

        <Heading id="pronominals" level={2} variant="headlineS">
          Pronominals
        </Heading>
        <Notice>
          From here on, we will refer to pronouns as <b>pronominals</b>, which
          is an abbreviation of &quot;pronominal prefix&quot;.
        </Notice>

        <Heading id="red-pronominals" level={3} variant="titleM">
          Subjective (Red) Pronominals
        </Heading>
        <Text>
          The table below displays the full list of subjective (red)
          pronominals. Each column represents a different &quot;stem&quot;,
          which is the first letter in a root word. For example, the root word{" "}
          <b>nuwehseʔ</b> (&quot;to like&quot;) starts with the letter
          &quot;N&quot; which is a consonant, so we use the &quot;C-stem&quot;
          column. The root word <b>attokhaʔ</b> (&quot;to be wise&quot;) starts
          with the letter &quot;A&quot;, so we use the &quot;A-stem&quot;
          column.
        </Text>
        <Text>
          Attaching &quot;k&quot; to the start of the root word <b>nuwehseʔ</b>{" "}
          results in <b>knú·wehseʔ</b> which means &quot;I like it&quot;.
          Attaching &quot;l&quot; to the start of the root word <b>attokhaʔ</b>{" "}
          gives us <b>lattókhaʔ</b> wich means &quot;he is wise&quot;.
        </Text>
        <Text>
          The small numbers in the table cells represent exceptions – Oneida is
          full of them!
        </Text>
        <PronominalsTable color="red" data={redPronominalsJson} />

        <Text variant="labelL">Exception 1</Text>
        <Text>
          The vowel with a squiggly underline replaces the leading vowel of the
          root word.
        </Text>
        <Text>
          As an example, let&lsquo;s look at the A-stem column, where the root
          word is <b>attokhaʔ</b>. The translation for &quot;she is wise&quot;
          without this replacement rule would be <b>yuattokhaʔ</b>.{" "}
          <Letter>yua</Letter> is not a sound in Oneida so we instead change it
          to <Letter>yu</Letter>. Therefore the translation is <b>yuttókhaʔ</b>.
        </Text>

        <Text variant="labelL">Exception 2</Text>
        <Text>
          The <Letter>h</Letter> is not written or pronounced when nothing is
          attached in front of the pronominal. However, when anything is
          attached to the front of the pronominal, the <Letter>h</Letter> is
          written and pronounced. Example: <b>snú·wehse̲ʔ</b> and{" "}
          <b>yah tehsnú·wehse̲ʔ</b>.
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
          anything is attached in front of the prefix. Example: <b>íkyʌheʔ</b>{" "}
          and <b>yah té·kyʌheʔ</b>.
        </Text>

        <Text variant="labelL">Exception 5</Text>
        <Text>
          The prefix <code>ts</code> is attached to all roots beginning with{" "}
          <Letter>y</Letter>
          and <Letter>i</Letter>. The <Letter>t</Letter> disappears and is
          replaced by <Letter>h</Letter> when anything is attached in front of
          the prefix. Example:
          <b>tsyʌtelíˍ</b> and <b>yah tehsyʌtelíˍ</b>; <b>tsí·tlu̲ʔ</b> and{" "}
          <b>yah tehsí·tlu̲ʔ</b>.
        </Text>

        <Text variant="labelL">Exception 6</Text>
        <Text>
          The prefix <Letter>it</Letter> is attached to all roots beginning with{" "}
          <Letter>hs</Letter> and the <Letter>i</Letter>
          disappears when anything is attached in front of the prefix. Example:{" "}
          <b>íthsaʔas</b> and <b>yah tethsáʔas</b>
        </Text>

        <Separator />

        <Heading id="blue-pronominals" level={3} variant="titleM">
          Objective (blue) Pronominals
        </Heading>
        <Text>
          The table below displays the full list of objective (blue)
          pronominals.
        </Text>
        <PronominalsTable color="blue" data={bluePronominalsJson} />

        <Heading id="purple-pronominals" level={3} variant="titleM">
          Purple Pronominals
        </Heading>
        <Text>
          The table below displays the full list of purple pronominals. These do
          not have an English counterpart.
        </Text>
        <PronominalsTable color="purple" data={purplePronominalsJson} />

        <Heading id="lightblue-pronominals" level={3} variant="titleM">
          Possessive (light blue) Pronominals
        </Heading>
        <PronominalsTable
          allowedPronouns={[
            "i",
            "u",
            "m",
            "f",
            "it",
            "uni",
            "u2",
            "us",
            "yall",
            "ms",
            "fs",
          ]}
          color="lightblue"
          data={lightbluePronominalsJson}
        />

        <Heading id="stress" level={2} variant="headlineS">
          Stress and Accents
        </Heading>
        <Text>
          Stress is the term we use to describe the way we emphasize one part of
          a word when we say it aloud. An accent is the mark we place over the
          syllable that is being stressed / emphasized. The accent mark is
          always written over the vowel in the syllable being stressed. We never
          write accent marks over consonants. There are two kinds of stress:
        </Text>

        <Heading id="short-stress" level={3} variant="titleM">
          Short stress
        </Heading>
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
        <Heading id="long-stress" level={3} variant="titleM">
          Long stress
        </Heading>
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

        <Heading id="length" level={3} variant="titleM">
          Length
        </Heading>
        <Text>
          <b>Length</b> is indicated by a middle dot <Letter>·</Letter> or a
          colon <Letter>:</Letter>. Vowels are noticeably longer than other
          vowels in the same word.
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
          <b>Shakonú·wehseʔ kʌ né· akaulhá·</b>
        </Text>

        <Heading id="where-stress" level={3} variant="titleM">
          Where stress occurs
        </Heading>
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
          syllable of a word, for example <b>niwáhsʌ</b>. However, there are
          many exceptions to this!
        </Text>

        <Heading id="glottal" level={2} variant="headlineS">
          Glottal Stops
        </Heading>
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

        <Heading id="letter-h" level={2} variant="headlineS">
          The letter H
        </Heading>
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
          <b>khenú·wehseʔ</b> and <b>thikʌ́</b>. We also write most of the Hs
          that occur after a vowel and before a consonant. Examples:{" "}
          <b>yehyatúkhwa̲ʔ</b>, <b>onikwʌ́htalaʔ</b>, <b>kanúhsaʔ</b>. Not all of
          the Hs that are spoken in a word get written by all speakers, however.
          It seems to be a matter of personal preference.
        </Text>

        <Heading id="whispered" level={2} variant="headlineS">
          Whispered Endings
        </Heading>
        <Text>
          This is a very unique feature of Onʌyoteʔa·ká where the last syllable
          of a word is actually whispered. This occurs only on words that are
          prepausal (but it doesn&lsquo;t always occur on prepausal words). A
          prepausal word is a word that occurs at the end of a sentence or is
          the only word in a sentence. This is written using an underline under
          the vowel that is whispered, for example <b>áhsʌ̲</b>.
        </Text>
        <Text>
          The alternative to prepausal is medial. You may see the abbreviations
          PF and MF for prepausal form and medial form, respectively.
        </Text>
        <Text>
          A word that is in prepausal form may have its stress placed on a
          different syllable than its corresponding medial form. For example:{" "}
          <b>kahyatuhslí né· thíkʌ̲</b> &nbsp; vs. &nbsp;{" "}
          <b>hʌ, kahyatúhsehli̲</b>.
        </Text>
        <Text>
          In this curriculum all words are given in medial form unless they
          appear prepausal in the dialogue examples. As with the Hs, beginning
          students must listen closely to pick up the pronunciation to know when
          to use it effectively{" "}
          <b>as not all prepausal words have whispered endings</b>. For example,{" "}
          <b>úska</b> is fully pronounced in prepausal form.
        </Text>

        <Heading id="yats" level={2} variant="headlineS">
          yats — my name is...
        </Heading>
        <Text>
          Let&lsquo;s learn our first phrase!{" "}
          <b>
            Bob ni· <Pronominal color="p">yuk</Pronominal>yáts
          </b>{" "}
          translates to &quot;Bob is my name&quot;. It actually more literally
          translates to &quot;They call me Bob&quot;. Notice the purple text in
          the phrase, <Letter>yuk</Letter>. This is from our Purple Pronominals
          table. <Letter>yats</Letter> is the root word and because it begins
          with a consonant, we can look for &quot;yuk&quot; in the table under
          the C-stem column to find that it corresponds to &quot;They →
          me&quot;.
        </Text>
        <Text>
          <Letter>yats</Letter> is an example of a word that &quot;uses purple
          pronominals&quot;. Different root words in Oneida use different color
          pronominals. Some words, such as <b>nú·wehseʔ</b>, can use multiple
          different color pronominals. Different colors can change the meaning
          of a root word. We&lsquo;ll learn more about this in module 2.
        </Text>
        <Text>
          A paradigm table for <Letter>yats</Letter> looks like this:
        </Text>
        <ParadigmTable
          allowedPronouns={[...singlePronouns, "ms", "fs"]}
          columnVisibility={{
            pronounEnglish: false,
            pronounOneida: false,
          }}
          data={yatsJson}
        />
        <Notice intent="primary">
          In this curriculum, the word &quot;paradigm&quot; refers to a list of
          conjugations for a given root word. When you get a grasp of the
          different pronominals, you will be able to recall paradigms much more
          easily.
        </Notice>

        <Heading id="anuhte" level={2} variant="headlineS">
          anuhte — to know, to be in the know
        </Heading>
        <Text>
          Let&lsquo;s learn another phrase! The root word is{" "}
          <Letter>anuhteʔ</Letter> and it uses blue pronominals. It means
          &quot;to know something&quot;. Here&lsquo;s the paradigm table:
        </Text>
        <ParadigmTable
          columnVisibility={{
            pronounEnglish: false,
            pronounOneida: false,
          }}
          data={anuhteJson}
          translationFn={({ pronoun }) => ({
            verb: ["it", "m", "f"].includes(pronoun) ? "knows" : "know",
          })}
        />

        <Heading id="particles" level={2} variant="headlineS">
          Particles
        </Heading>
        <Text>
          In this curriculum, particles refer to words that are common in
          dialogue.
        </Text>
        <ParticlesTable group="module01" />

        <PeopleResource />

        <Heading id="english-names" level={2} variant="headlineS">
          English Names
        </Heading>
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

function PronominalsTable({
  allowedPronouns,
  color,
  data = {},
}: {
  allowedPronouns?: Pronoun[];
  color: PronominalColor;
}) {
  const stems = ["c", "a", "i", "e", "o"];
  const isPurple = color === "purple";
  const rowsToUse = isPurple ? data : allowedPronouns ?? pronouns;

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
              {!isPurple
                ? PRONOUN_MAP_EN[row]
                : arrayify(row.label).map((label, j) => (
                    <div key={j}>{label}</div>
                  ))}
            </TableCell>

            {stems.map((stem) => {
              const datum = isPurple ? row : data[row];
              const content = datum[stem] ?? datum.default;
              return (
                <TableCell key={stem}>
                  <Flex direction="column">
                    {content.map((prefixArr, i) => (
                      <PronominalTableText
                        color={color}
                        entry={prefixArr}
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

  const typeFallback =
    color === "red"
      ? "PR"
      : color === "blue"
      ? "PB"
      : color === "purple"
      ? "PP"
      : color === "lightblue"
      ? "PLB"
      : undefined;

  const textContent = !entry.breakdown ? (
    <Pronominal color={color}>{entry.text}</Pronominal>
  ) : (
    <TextBreakdown
      breakdown={entry.breakdown.map((b) => {
        if (typeof b === "string") {
          return {
            text: b,
            type: typeFallback,
          };
        }
        const type = arrayify(b.type ?? []);
        return {
          ...b,
          type: type.includes("RPL") ? type : [...type, typeFallback],
        };
      })}
      typeFallback={typeFallback}
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
  const nums = arrayify(_nums).map((n) => parseInt(n));
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
