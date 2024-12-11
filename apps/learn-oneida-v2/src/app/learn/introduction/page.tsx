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
          <Letter>hnaná·t</Letter> - the <i>noun root</i> for potato
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
        ʌ is called the "caret" (pronounced like the vegetable) or "upside down
        V". ʔ is called the "glottal stop". Here is how each letter is
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
    </>
  );
}
