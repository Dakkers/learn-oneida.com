"use client";

import {
  Bleed,
  Box,
  Divider,
  Link,
  List,
  Notice,
  Text,
} from "@ukwehuwehneke/ohutsya";

import Image from "next/image";
import React from "react";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";
import { SectionHeading } from "@ukwehuwehneke/language-components";

const meta: any = () => {
  return [
    { title: "Introduction" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnIntroduction() {
  return (
    <>
      <SectionHeading level={1}>Introduction</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="TODO 1" value="todo">
          <TOC.Section>
            <TOC.Item label="TODO 1.1" value="todo1-1" />
            <TOC.Item label="TODO 1.2" value="todo1-2" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="TODO 2" value="todo-2" />
      </TOC>

      <Divider />

      <Text>
        Shekolih! (Hello!) Welcome to learn-oneida.com, a free website that will
        help you learn the Oneida language. Oneida is a Haudenosaunee language,
        which is part of the Iroquian language family. Like most ukwehuwehnéke
        (native languages), it is an immensely sophisticated language. This
        website will not dive too deep into the linguistics of this language at
        this time, but it is worth knowing that words are much longer than in
        English and comprised of many distinct pieces due to the language's
        polysynthetic nature. An example is this word:
      </Text>

      <div className="text-center">
        <Text as="span">
          <b>ʌtsyakwahnaná·takoʔ</b>
        </Text>
      </div>

      <Text>Breaking down this word into its pieces results in:</Text>

      <List>
        <List.Item>
          <Letter>ʌ</Letter> - definite future tense
        </List.Item>
        <List.Item>
          <Letter>ts</Letter> - repetitive feature, indicating something is
          being done again
        </List.Item>
        <List.Item>
          <Letter>yakwa</Letter> - first-person, exclusive, plural
        </List.Item>
        <List.Item>
          <Letter>hnaná·t</Letter> - the <i>noun root</i> for "potato"
        </List.Item>
        <List.Item>
          <Letter>a</Letter> - joiner vowel
        </List.Item>
        <List.Item>
          <Letter>ko</Letter> - the <i>verb root</i> for "pick, harvest"
        </List.Item>
        <List.Item>
          <Letter>ʔ</Letter> - punctual aspect suffix
        </List.Item>
      </List>

      <Text>
        Which gives us the sentence: <i>We will pick potatoes again.</i> So much
        information packed into a single word! Most words in Oneida have one of
        two structures as seen in the images below, both of which are from
        Lounsbury 1953.
      </Text>

      <Image
        alt='The "formula" for a verb in Oneida.'
        height={300}
        src="/images/learn/formula-verb.png"
        width={600}
      />
      <Image
        alt='The "formula" for a noun in Oneida.'
        height={300}
        src="/images/learn/formula-noun.png"
        width={600}
      />

      <Text>
        (There are, of course, exceptions to these rules, such as{" "}
        <i>particles</i>, which are discussed in module 1.) While these
        "formulas" look quite complex, and they can result in lengthy words that
        contain a lot of information, this website will start you off which much
        simpler words that convey less information. Examples include "I like
        you" and "I know", which are <b>kunú·wehseʔ</b> and <b>wakanúhteʔ</b>,
        respectively.
      </Text>

      <SectionHeading level={2}>Orthography</SectionHeading>

      <Text>
        The first thing to learn is Oneida's writing system. There are 6 vowels
        and 9 consonants:
      </Text>

      <div className="text-center">
        <Text as="span">
          <b>a e i o u ʌ h k l n s t w y ʔ</b>
        </Text>
      </div>

      <Text>
        ʌ is called the "caret" (pronounced like the word "carrot") or "upside
        down V". ʔ is called the "glottal stop". Here is how each letter is
        pronounced on their own:
      </Text>

      <List>
        <List.Item>
          <Letter>a</Letter> is pronounced like "f<b className="underline">a</b>
          ther"
        </List.Item>
        <List.Item>
          <Letter>e</Letter> is pronounced like "d<b className="underline">e</b>
          bt"
        </List.Item>
        <List.Item>
          <Letter>i</Letter> is pronounced like "n
          <b className="underline">ee</b>d"
        </List.Item>
        <List.Item>
          <Letter>o</Letter> is pronounced like "t<b className="underline">o</b>
          e"
        </List.Item>
        <List.Item>
          <Letter>u</Letter> is pronounced like "l
          <b className="underline">oo</b>n"
        </List.Item>
        <List.Item>
          <Letter>ʌ</Letter> is pronounced like "h<b className="underline">u</b>
          h"
        </List.Item>
        <List.Item>
          <Letter>h</Letter> is pronounced like "<b className="underline">h</b>
          ello"
        </List.Item>
        <List.Item>
          <Letter>k</Letter> is pronounced like "<b className="underline">g</b>
          reen"
        </List.Item>
        <List.Item>
          <Letter>l</Letter> is pronounced like "<b className="underline">l</b>
          adder"
        </List.Item>
        <List.Item>
          <Letter>n</Letter> is pronounced like "<b className="underline">n</b>
          eedle"
        </List.Item>
        <List.Item>
          <Letter>s</Letter> is pronounced like "<b className="underline">z</b>
          ombie"
        </List.Item>
        <List.Item>
          <Letter>t</Letter> is pronounced like "<b className="underline">d</b>
          uck"
        </List.Item>
        <List.Item>
          <Letter>w</Letter> is pronounced like "<b className="underline">w</b>
          ind"
        </List.Item>
        <List.Item>
          <Letter>y</Letter> is pronounced like "<b className="underline">y</b>
          es"
        </List.Item>
        <List.Item>
          <Letter>ʔ</Letter> is pronounced like "uh
          <b className="underline">-</b>oh"
        </List.Item>
      </List>

      <Text>
        Consonants followed by other consonants can change the sound, too. For
        example:
      </Text>

      <List>
        <List.Item>
          <Letter>kh</Letter> is pronounced like "<b className="underline">c</b>
          ot"
        </List.Item>
        <List.Item>
          <Letter>th</Letter> is pronounced like "<b className="underline">t</b>
          ook"
        </List.Item>
      </List>

      <Text>
        There are many other sounds, all of which you can (and should!) practice
        using the <Link href="/practice/soundchart">sound chart</Link>. Being
        familiar with these sounds is the first step to learning Oneida.
      </Text>

      <SectionHeading id="terminology" level={2}>
        Terminology
      </SectionHeading>

      <Text>
        Before beginning module 1, there are some terms worth clarifying here.
      </Text>

      <Text>Almost all words in Oneida are comprised of three components:</Text>

      <List ordered>
        <List.Item>A root word</List.Item>
        <List.Item>A pronominal prefix</List.Item>
        <List.Item>An aspect suffix</List.Item>
      </List>

      <Text>Below, the first two terms will be discussed.</Text>

      <SectionHeading id="root-words" level={3}>
        Root Words
      </SectionHeading>

      <Text>
        Root words are the core part of a larger word that cannot be broken down
        any further without losing its meaning. This occurs in a very limited
        way in English: for example, the words "employ" and "employment". One
        could consider "employ" to be the root word of "employment".
      </Text>

      <Text>
        However, in Oneida, root words are not words you can use on their own in
        conversation or writing. They must have a pronominal prefix and an
        aspect suffix. As an example, consider these words:
      </Text>

      <List>
        <List.Item>
          <b>kekhu·níheʔ</b> - I am cooking
        </List.Item>
        <List.Item>
          <b>wahakhu·ní·</b> - he cooked
        </List.Item>
        <List.Item>
          <b>ʌyekhu·ní·</b> - she will cook
        </List.Item>
        <List.Item>
          <b>ahsekhu·ní·</b> - you will cook
        </List.Item>
      </List>

      <Text>
        You may have noticed that each of these words has <Letter>khuni</Letter>{" "}
        in it. <Letter>khuni</Letter> is the root word that means "cook". To
        reiterate: you can't use this root word on its own! However, to become a
        proficient speaker, you need to be able to identify root words in
        conversation and in writing, and also conjugate root words
        appropriately.
      </Text>

      <Text>TODO - Show an example for nouns (nuhs)</Text>

      <SectionHeading id="pronominals" level={3}>
        Pronominal Prefixes
      </SectionHeading>

      <Text>
        Pronominal prefixes, often referred to as simply pronominals, are the
        components of a larger word that convey who is involved. Using the word
        <Letter>khuni</Letter> again as an example:
      </Text>

      <List>
        <List.Item>
          <b>kekhu·níheʔ</b> - I am cooking
        </List.Item>
        <List.Item>
          <b>sekhu·níheʔ</b> - you are cooking
        </List.Item>
        <List.Item>
          <b>lakhu·níheʔ</b> - he is cooking
        </List.Item>
        <List.Item>
          <b>yekhu·níheʔ</b> - she is cooking
        </List.Item>
      </List>

      <Text>
        The only difference between each of these words is what occurs before
        the root word. The pronominals in these words are <Letter>ke</Letter>,{" "}
        <Letter>se</Letter>, <Letter>la</Letter>, and <Letter>ye</Letter>.
      </Text>

      <Text>
        Consider another root word, <Letter>atekhuni</Letter>, which is very
        similar to the previous root word.
      </Text>

      <List>
        <List.Item>
          <b>katekhu·níheʔ</b> - I am eating
        </List.Item>
        <List.Item>
          <b>satekhu·níheʔ</b> - you are eating
        </List.Item>
        <List.Item>
          <b>latekhu·níheʔ</b> - he is eating
        </List.Item>
        <List.Item>
          <b>yutekhu·níheʔ</b> - she is eating
        </List.Item>
      </List>

      <Text>
        Even though the root words are very similar, the prefixes differ. This
        is because these root words begin with different letters, which are
        called <b>stems</b>. There are seven stems: one for each vowel, and one
        additional one that is used for consonants (called a C-stem). Below are
        examples of each.
      </Text>

      <List>
        <List.Item>
          <b>A-stem</b>: atekhuni (eat), aluʔtat (shoot), anowʌht (lie)
        </List.Item>
        <List.Item>
          <b>E-stem</b>: ehsak (look for), elh (want, think), ehyahl (remember)
        </List.Item>
        <List.Item>
          <b>I-stem</b>: iheyu (die), itaklaʔ (fall down), itaʔ (sleep)
        </List.Item>
        <List.Item>
          <b>O-stem</b>: ohlok (insert), ohalakw (unhook), okw (take out of
          water)
        </List.Item>
        <List.Item>
          <b>U-stem</b>: uhew (sweep), unhe (live), uni (make)
        </List.Item>
        <List.Item>
          <b>Λ-stem</b>: ʌshenhu (moan), ʌtol (be difficult to please), ʌtuni
          (feel lonely)
        </List.Item>
        <List.Item>
          <b>C-stem</b>: kw (pick), nohale (wash), hninu (buy)
        </List.Item>
      </List>

      <Text>Root words apply to both nouns and verbs.</Text>
    </>
  );
}
