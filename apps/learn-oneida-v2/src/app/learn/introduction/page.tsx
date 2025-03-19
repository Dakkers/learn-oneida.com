import {
  Box,
  Divider,
  List,
  ListItem,
  Notice,
  Text,
} from "@ukwehuwehneke/ohutsya";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
} from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Link } from "@/components/Link";
import { LinkWrapper } from "@/components/LinkWrapper";
import { GoToNextPageSection, ParadigmsSection } from "./client";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Introduction to the Oneida curriculum. This page will teach you about the Oneida orthography, root words, pronominal prefixes, and stems.",
};

export default function LearnIntroduction() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Introduction</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>Note:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Orthography" value="orthography" />
        <TocItem label="Terminology" value="terminology">
          <TocSection>
            <TocItem label="Root Words" value="root-words" />
            <TocItem label="Pronominal Prefixes" value="pronominals" />
          </TocSection>
        </TocItem>

        <TocItem label="Paradigms" value="paradigms" />
        <TocItem label="What's Next?" value="whats-next" />
      </TOC>

      <Divider />

      <Text>
        Shekolih! (Hello!) Welcome to learn-oneida.com, a free website that will
        help you learn the Oneida language. Oneida is a Haudenosaunee language,
        which is part of the Iroquian language family. Like most Ukwehuwé
        (native) languages, it is an immensely sophisticated language. This
        website will not dive too deep into the linguistics of Oneida at this
        time, but it is worth knowing that words are much longer than in English
        and comprised of many distinct pieces due to Oneida's polysynthetic
        nature. An example is this word:
      </Text>

      <div className="text-center">
        <Text as="span">
          <b>ʌtsyakwahnaná·takoʔ</b>
        </Text>
      </div>

      <Text>Breaking down this word into its pieces results in:</Text>

      <List>
        <ListItem>
          <Letter>ʌ</Letter> - definite future tense
        </ListItem>
        <ListItem>
          <Letter>ts</Letter> - repetitive feature, indicating something is
          being done again
        </ListItem>
        <ListItem>
          <Letter>yakwa</Letter> - first-person, exclusive, plural
        </ListItem>
        <ListItem>
          <Letter>hnaná·t</Letter> - the <i>noun root</i> for "potato"
        </ListItem>
        <ListItem>
          <Letter>a</Letter> - joiner vowel
        </ListItem>
        <ListItem>
          <Letter>ko</Letter> - the <i>verb root</i> for "pick, harvest"
        </ListItem>
        <ListItem>
          <Letter>ʔ</Letter> - punctual aspect suffix
        </ListItem>
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

      <OrthographySection />

      <SectionHeading id="terminology" level={2}>
        Terminology
      </SectionHeading>

      <Text>
        Before beginning module 1, there are some terms worth clarifying here.
        Almost all words in Oneida are comprised of three components:
      </Text>

      <List ordered>
        <ListItem>A root word</ListItem>
        <ListItem>A pronominal prefix</ListItem>
        <ListItem>An aspect suffix</ListItem>
      </List>

      <Text>Below, the first two terms will be discussed.</Text>

      <RootWordsSection />
      <PronominalsSection />

      <ParadigmsSection />

      <SectionHeading id="whats-next" level={2}>
        What's Next?
      </SectionHeading>

      <Text>
        To recap, before beginning module one, it is imperative you understand
        the following:
      </Text>

      <List>
        <ListItem>The orthography (writing system) of Oneida</ListItem>
        <ListItem>How letters are pronounced</ListItem>
        <ListItem>
          The terms "root word", "pronominal", "paradigm", "stem"
        </ListItem>
        <ListItem>How to identify the stem of a root word</ListItem>
      </List>

      <GoToNextPageSection />
    </PageWrapper>
  );
}

function OrthographySection() {
  return (
    <>
      <SectionHeading id="orthography" level={2}>
        Orthography
      </SectionHeading>

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
        <ListItem>
          <Letter>a</Letter> is pronounced like "f<b className="underline">a</b>
          ther"
        </ListItem>
        <ListItem>
          <Letter>e</Letter> is pronounced like "d<b className="underline">e</b>
          bt"
        </ListItem>
        <ListItem>
          <Letter>i</Letter> is pronounced like "n
          <b className="underline">ee</b>d"
        </ListItem>
        <ListItem>
          <Letter>o</Letter> is pronounced like "t<b className="underline">o</b>
          e"
        </ListItem>
        <ListItem>
          <Letter>u</Letter> is pronounced like "l
          <b className="underline">oo</b>n"
        </ListItem>
        <ListItem>
          <Letter>ʌ</Letter> is pronounced like "h<b className="underline">u</b>
          h"
        </ListItem>
        <ListItem>
          <Letter>h</Letter> is pronounced like "<b className="underline">h</b>
          ello"
        </ListItem>
        <ListItem>
          <Letter>k</Letter> is pronounced like "<b className="underline">g</b>
          reen"
        </ListItem>
        <ListItem>
          <Letter>l</Letter> is pronounced like "<b className="underline">l</b>
          adder"
        </ListItem>
        <ListItem>
          <Letter>n</Letter> is pronounced like "<b className="underline">n</b>
          eedle"
        </ListItem>
        <ListItem>
          <Letter>s</Letter> is pronounced like "<b className="underline">z</b>
          ombie"
        </ListItem>
        <ListItem>
          <Letter>t</Letter> is pronounced like "<b className="underline">d</b>
          uck"
        </ListItem>
        <ListItem>
          <Letter>w</Letter> is pronounced like "<b className="underline">w</b>
          ind"
        </ListItem>
        <ListItem>
          <Letter>y</Letter> is pronounced like "<b className="underline">y</b>
          es"
        </ListItem>
        <ListItem>
          <Letter>ʔ</Letter> is pronounced like "uh
          <b className="underline">-</b>oh"
        </ListItem>
      </List>

      <Text>
        Consonants followed by other consonants can change the sound, too. For
        example:
      </Text>

      <List>
        <ListItem>
          <Letter>kh</Letter> is pronounced like "<b className="underline">c</b>
          ot"
        </ListItem>
        <ListItem>
          <Letter>th</Letter> is pronounced like "<b className="underline">t</b>
          ook"
        </ListItem>
      </List>

      <Text>
        There are many other sounds, all of which you can (and should!) practice
        using the <LinkWrapper page="soundchart" />. Being familiar with these
        sounds is the first step to learning Oneida.
      </Text>
    </>
  );
}

function RootWordsSection() {
  return (
    <>
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
        <ListItem>
          <b>kekhu·níheʔ</b> - I am cooking
        </ListItem>
        <ListItem>
          <b>wahakhu·ní·</b> - he cooked
        </ListItem>
        <ListItem>
          <b>ʌyekhu·ní·</b> - she will cook
        </ListItem>
        <ListItem>
          <b>ahsekhu·ní·</b> - you will cook
        </ListItem>
      </List>

      <Text>
        You may have noticed that each of these words has <Letter>khuni</Letter>{" "}
        in it. <Letter>khuni</Letter> is the root word that means "cook". To
        reiterate: you can't use this root word on its own! However, to become a
        proficient speaker, you need to be able to identify root words in
        conversation and in writing, and also conjugate root words
        appropriately. Below is another example:
      </Text>

      <List>
        <ListItem>
          <b>aknúhsaʔ</b> - my house
        </ListItem>
        <ListItem>
          <b>sanúhsaʔ</b> - your house
        </ListItem>
        <ListItem>
          <b>laonúhsaʔ</b> - his house
        </ListItem>
        <ListItem>
          <b>akonúhsaʔ</b> - her house
        </ListItem>
      </List>

      <Text>
        In this case, the root is <Letter>nuhs</Letter> which means "house".
      </Text>

      <Text>
        Learning the language using root words is known as the "root word
        method". More information can be found about that{" "}
        <Link href="https://onkwawenna.info/programs/root-word-method-2/">
          here
        </Link>
        .
      </Text>
    </>
  );
}

function PronominalsSection() {
  return (
    <>
      <SectionHeading id="pronominals" level={3}>
        Pronominal Prefixes
      </SectionHeading>

      <Text>
        Pronominal prefixes, often referred to as simply pronominals, are the
        components of a larger word that convey who is involved. Using the word{" "}
        <Letter>khuni</Letter> again as an example:
      </Text>

      <List>
        <ListItem>
          <b>kekhu·níheʔ</b> - I am cooking
        </ListItem>
        <ListItem>
          <b>sekhu·níheʔ</b> - you are cooking
        </ListItem>
        <ListItem>
          <b>lakhu·níheʔ</b> - he is cooking
        </ListItem>
        <ListItem>
          <b>yekhu·níheʔ</b> - she is cooking
        </ListItem>
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
        <ListItem>
          <b>katekhu·níheʔ</b> - I am eating
        </ListItem>
        <ListItem>
          <b>satekhu·níheʔ</b> - you are eating
        </ListItem>
        <ListItem>
          <b>latekhu·níheʔ</b> - he is eating
        </ListItem>
        <ListItem>
          <b>yutekhu·níheʔ</b> - she is eating
        </ListItem>
      </List>

      <Text>
        Even though the root words are very similar, the prefixes differ. This
        is because these root words begin with different letters, which are
        called <b>stems</b>. There are seven stems: one for each vowel, and one
        additional stem that is used for consonants (called the C-stem). Below
        are examples of each.
      </Text>

      <List>
        <ListItem>
          <b>A-stem</b>: atekhuni (eat), aluʔtat (shoot), anowʌht (lie)
        </ListItem>
        <ListItem>
          <b>E-stem</b>: ehsak (look for), elh (want, think), ehyahl (remember)
        </ListItem>
        <ListItem>
          <b>I-stem</b>: iheyu (die), itaklaʔ (fall down), itaʔ (sleep)
        </ListItem>
        <ListItem>
          <b>O-stem</b>: ohlok (insert), ohalakw (unhook), okw (take out of
          water)
        </ListItem>
        <ListItem>
          <b>U-stem</b>: uhew (sweep), unhe (live), uni (make)
        </ListItem>
        <ListItem>
          <b>Λ-stem</b>: ʌshenhu (moan), ʌtol (be difficult to please), ʌtuni
          (feel lonely)
        </ListItem>
        <ListItem>
          <b>C-stem</b>: kw (pick), nohale (wash), hninu (buy)
        </ListItem>
      </List>

      <Text>Root words apply to both nouns and verbs.</Text>
    </>
  );
}
