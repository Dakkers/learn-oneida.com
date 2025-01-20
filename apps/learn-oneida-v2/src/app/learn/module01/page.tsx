import { Divider, Notice, Text } from "@ukwehuwehneke/ohutsya";

import React, { useMemo } from "react";
import { singlePronouns } from "@ukwehuwehneke/language-components";
import yatsJson from "~/data/yats";
import anuhteJson from "@/data/module01/know-PRS";
import dataKnowNegated from "@/data/module01/know-negated-PRS";
import dataBelonging from "@/data/module01/belonging-NOUN";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal } from "~/components/Pronominal";
import { PeopleArticle } from "~/components/articles/People";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { DialogueTable } from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { PronominalsArticle } from "~/components/articles/Pronominals";
import { StressArticle } from "~/components/articles/Stress";
import { GlottalStopArticle } from "~/components/articles/GlottalStop";
import { LetterHArticle } from "~/components/articles/LetterH";
import { PrepausalEndingsArticle } from "@/components/articles/PrepausalEndings";
import { LinkWrapper } from "@/components/LinkWrapper";
import { getDialogueModule01 } from "~/data/module01";
import { ListOfWords } from "@/components/ListOfWords";
import _ from "lodash";
import { createParadigmData } from "@/utils/paradigm";
import { Link } from "@/components/Link";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 1",
  description: "Module 1 of the Oneida curriculum",
};

export default function LearnModule01() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 1</SectionHeading>

      <TOC>
        <TocItem label="Introduction" value="intro" />
        <TocItem label="Pronominals" value="pronominals">
          <TocSection>
            <TocItem label="English Pronouns" value="english-pronouns" />
            <TocItem label="Standalone Pronouns" value="standalone-pronouns" />
            <TocItem label="Bound Pronouns" value="bound-pronouns" />
            <TocSection level={1}>
              <TocItem
                label="Subjective Pronominals (Red)"
                value="subjective"
              />
              <TocItem label="Objective Pronominals (Blue)" value="objective" />
              <TocItem
                label="Interactive Pronominals (Purple)"
                value="interactive"
              />
              <TocItem
                label="Possessive Pronominals (Light Blue)"
                value="possessive"
              />
              <TocItem label="Exceptions" value="exceptions" />
            </TocSection>
          </TocSection>
        </TocItem>

        <TocItem label="Leading Vowel Pronunciation" value="leading-vowel" />
        <TocItem label="Stress and Accents" value="stress">
          <TocSection>
            <TocItem label="Short stress" value="short-stress" />
            <TocItem label="Long stress" value="long-stress" />
            <TocItem label="Length" value="length" />
            <TocItem label="Where stress occurs" value="where-stress" />
          </TocSection>
        </TocItem>

        <TocItem label="Glottal Stops" value="glottal" />
        <TocItem label="The Letter H" value="letter-h" />
        <TocItem label="Prepausal Endings" value="prepausal-endings" />

        <TocPhrase label="to be named" word="yats" value="yats" />
        <TocPhrase label="to know" word="anuhte" value="anuhte" />
        <TocPhrase label="belonging" word="awʌ" value="belonging" />
        <TocItem label="It belongs to someone" value="belongs-to-someone" />

        <TocItem label="Negating Verbs" value="negating-verbs" />
        <TocItem label="Particles" value="particles" />

        <TocItem label="People" value="people-article">
          <TocSection>
            <TocItem label="Children" value="people-article-children" />
            <TocItem label="Adolescents" value="people-article-adolescents" />
            <TocItem label="Adults" value="people-article-adults" />
            <TocItem label="Older people" value="people-article-older" />
          </TocSection>
        </TocItem>

        <TocItem label="English names" value="english-names" />
        <TocItem label="Dialogue" value="dialogue" />
        <TocItem label="Translation exercises" value="translation-exercises" />
      </TOC>

      <Divider />

      <SectionHeading id="intro" level={2}>
        Introduction
      </SectionHeading>

      <Text>
        This module assumes a knowledge of the terms "pronominal", "root word",
        "stem", and "paradigm", all of which are discussed on the{" "}
        <LinkWrapper page="intro" />.
      </Text>

      <PronominalsArticle level={2} />

      <LeadingVowelPronunciationSection />

      <StressArticle level={2} />

      <GlottalStopArticle level={2} />

      <LetterHArticle level={2} />

      <PrepausalEndingsArticle level={2} />

      <NameSection />
      <KnowSection />
      <BelongingSection />
      <NegationSection />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <Text>
        Particles are words that can only occur in one form. They cannot be
        conjugated in any way. Particles can be tricky, as different particles
        combined together may form a new particle with a distinct meaning. For
        example, <b>náhteʔ</b> means "what", <b>ok</b> means "just", but{" "}
        <b>náhteʔ ok</b> means "something".
      </Text>
      <ParticlesTable group="module01" />

      <PeopleArticle level={2} />

      <EnglishNamesArticle level={2} />

      <DialogueSection />
      <TranslationExercisesSection group="module01" />
    </PageWrapper>
  );
}

function LeadingVowelPronunciationSection() {
  return (
    <>
      <SectionHeading id="leading-vowel" level={2}>
        Leading Vowel Pronunciation
      </SectionHeading>

      <Text>
        You may have noticed after listening to the audio in the{" "}
        <Link href="#standalone-pronouns">standalone pronouns</Link> and{" "}
        <Link href="#possessive">possessive pronouns</Link> sections that when a
        word begins with a vowel, it is pronounced as though there is an{" "}
        <Letter>h</Letter> in front of the vowel. Take a listen to these words
        to get a sense of how the vowels end up sounding:
      </Text>

      <ListOfWords
        words={[
          ["aknulhá·", "/module02/mother/i.mp3"],
          ["etshnú·wehseʔ", ""],
          ["íkyʌheʔ", "/module01/exceptions/excp_5-1.mp3"],
          ["owi·lá̲·", "/module01/long_stress/1.mp3"],
          ["ukyalá·se̲ʔ", "/module02/cousin/soni.mp3"],
          ["ʌyó·kalahwe̲ʔ", "/module04/time_phrases/tomorrow.mp3"],
        ]}
      />

      <Text>
        This is more of a "light" H sound as opposed to the breath-y H sound
        discussed <Link href="#letter-h">below</Link>.
      </Text>
    </>
  );
}

function DialogueSection() {
  const data = getDialogueModule01();
  // @ts-expect-error TODO
  const mapper = (row) => ({ ...row, hasAudio: row.hasAudio ?? true });

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <Text>
        Here is some dialogue using what was covered on this page. Some parts of
        this dialogue are a bit contrived but it should help you with
        understanding what has been covered.
      </Text>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part1"
        data={data.part1.map(mapper)}
      />

      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part2"
        data={data.part2.map(mapper)}
      />

      <SectionHeading id="dialogue-ex3" level={3}>
        Example 3
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part3"
        data={data.part3.map(mapper)}
      />

      <SectionHeading id="dialogue-ex4" level={3}>
        Example 4
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part4"
        data={data.part4.map(mapper)}
      />

      <SectionHeading id="dialogue-ex5" level={3}>
        Example 5
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part5"
        data={data.part5.map(mapper)}
      />

      <SectionHeading id="dialogue-ex6" level={3}>
        Example 6
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part6"
        data={data.part6.map(mapper)}
      />

      <SectionHeading id="dialogue-ex7" level={3}>
        Example 7
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part7"
        data={data.part7.map(mapper)}
      />

      <SectionHeading id="dialogue-ex8" level={3}>
        Example 8
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part8"
        data={data.part8.map(mapper)}
      />

      <SectionHeading id="dialogue-ex9" level={3}>
        Example 9
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part9"
        data={data.part9.map(mapper)}
      />

      <SectionHeading id="dialogue-ex10" level={3}>
        Example 10
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part10"
        data={data.part10.map(mapper)}
      />

      <SectionHeading id="dialogue-ex11" level={3}>
        Example 11
      </SectionHeading>
      <DialogueTable
        audioFolder="module01/dialogue/part11"
        data={data.part11.map(mapper)}
      />
    </>
  );
}

function NameSection() {
  return (
    <>
      <SectionHeading id="yats" level={2}>
        -yat- — be named
      </SectionHeading>

      <Text>
        The root word, <Letter>-yat-</Letter>, means "to be named". It is a
        C-stem (because the first letter is a consonant) that uses interactive
        pronominals.
      </Text>

      <ParadigmTable
        allowedPronouns={[...singlePronouns, "ms", "fs"]}
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={yatsJson}
      />

      <Text>
        As a concrete example, the phrase{" "}
        <b>
          Bob ni· <Pronominal color="p">yuk</Pronominal>yáts
        </b>{" "}
        translates to &quot;Bob is my name&quot;. Using the interactive
        pronominals table above, one can see <Letter>yuk</Letter> in the C-stem
        column corresponds to the direction &quot;They → me&quot;. Thus, this
        phrase can literaly be translated as "They name me Bob". Colloquially,
        this is translated as "They call me Bob" or "My name is Bob".
      </Text>

      <Text>
        Some root words can only take certain kinds of pronominals (e.g. purple,
        red, blue), while other root words can use multiple.
      </Text>
    </>
  );
}

function KnowSection() {
  return (
    <>
      <SectionHeading id="anuhte" level={2}>
        -anuhte- — to know
      </SectionHeading>
      <Text>
        The root word, <Letter>-anuht(e)-</Letter>, means "to know". It is an
        A-stem (because the first letter is "A") that uses objective
        pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={anuhteJson}
      />
    </>
  );
}

function BelongingSection() {
  const dataBelongsToSomeone = useMemo(() => {
    return createParadigmData(
      {
        translation: "It belongs to {{pronounObjective}}",
        phrases: [
          { breakdown: ["í· ", ["akw"], "awʌ́"] },
          { breakdown: ["isé· ", ["s"], "awʌ́"] },
          { breakdown: ["laulhá· ", ["lao"], "wʌ́"] },
          { breakdown: ["akaulhá· ", ["ako"], "wʌ́"] },
          { breakdown: ["aulhá· ", ["ao"], "wʌ́"] },
          { breakdown: ["í· ", ["uky"], "awʌ́"] },
          { breakdown: ["isé· ", ["tsy"], "awʌ́"] },
          { breakdown: ["í· ", ["ukw"], "awʌ́"] },
          { breakdown: ["isé· ", ["sw"], "awʌ́"] },
          { breakdown: ["lonulhá· ", ["laon"], "awʌ́"] },
          { breakdown: ["onulhá· ", ["aon"], "awʌ́"] },
        ],
        type: "PP",
      },
      [...singlePronouns, "uni", "u2", "us", "yall", "ms", "fs"],
    );
  }, []);

  return (
    <>
      <SectionHeading id="belonging" level={2}>
        -awʌ- — belonging
      </SectionHeading>
      <Text>
        The root word, <Letter>-awʌ-</Letter>, means "belonging". It is an
        A-stem noun (because the first letter is "A") that uses possessive
        pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={dataBelonging}
      />

      <SectionHeading id="belongs-to-someone" level={2}>
        It belongs to someone
      </SectionHeading>
      <Text>
        The following table combines the{" "}
        <Link href="#standalone-pronouns">standalone pronouns</Link> with the
        table above.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={dataBelongsToSomeone}
      />
    </>
  );
}

function NegationSection() {
  const dataDoesntBelong = useMemo(() => {
    return createParadigmData(
      {
        translation: "It doesn't belong to {{pronounObjective}}",
        phrases: [
          { breakdown: ["yáh ne teʔ", ["wak"], "awʌ́"] },
          { breakdown: ["yáh ne teʔ", ["s"], "awʌ́"] },
          { breakdown: ["yáh ne te", ["ho"], "wʌ́"] },
          { breakdown: ["yáh ne teʔ", ["yako"], "wʌ́"] },
          { breakdown: ["yáh ne te", ["hon"], "awʌ́"] },
        ],
        type: "PO",
      },
      ["i", "u", "m", "f", "ms"],
    );
  }, []);

  return (
    <>
      <SectionHeading id="negating-verbs" level={2}>
        Negating Verbs
      </SectionHeading>
      <Text>
        To negate a simple verb, take the stated form of the verb and add{" "}
        <Letter>yáh</Letter> <Letter>teʔ</Letter> to the beginning. The{" "}
        <Letter>te</Letter> is attached directly to the word that is being
        negated. (The glottal is dropped if attached to a word starting with{" "}
        <Letter>H</Letter>.)
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={dataKnowNegated}
      />
      <Text>
        This works for verbs that do not have a <LinkWrapper page="prep" />.
        Negation for verbs that have a pre-pronominal prefix is discussed in{" "}
        <LinkWrapper page={2} />.
      </Text>
      <Text>
        Below is another example of negating a verb, though for some reason,{" "}
        <Letter>ne</Letter> is a required word in the phrase.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={dataDoesntBelong}
      />
    </>
  );
}
