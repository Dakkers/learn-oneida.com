"use client";

import { Divider, Notice, Text } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { singlePronouns } from "@ukwehuwehneke/language-components";
import yatsJson from "~/data/yats";
import anuhteJson from "@/data/module01/know-PRS";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal } from "~/components/Pronominal";
import { PeopleArticle } from "~/components/articles/People";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { TableOfContents as TOC } from "~/components/TableOfContents";
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

const meta: any = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <>
      <SectionHeading level={1}>Module 1</SectionHeading>

      <Notice intent="negative">
        This page is undergoing a rewrite of sorts. There is missing content and
        other content is subject to change.
      </Notice>

      <TOC>
        <TOC.Item label="Introduction" value="intro" />
        <TOC.Item label="Pronominals" value="pronominals">
          <TOC.Section>
            <TOC.Item label="English Pronouns" value="english-pronouns" />
            <TOC.Item label="Standalone Pronouns" value="standalone-pronouns" />
            <TOC.Item label="Bound Pronouns" value="bound-pronouns" />
            <TOC.Section>
              <TOC.Item
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subjective Pronominals (Red)"
                value="subjective"
              />
              <TOC.Item
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objective Pronominals (Blue)"
                value="objective"
              />
              <TOC.Item
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Person-to-Person Pronominals (Purple)"
                value="person-to-person"
              />
              <TOC.Item
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Possessive Pronominals (Light Blue)"
                value="possessive"
              />
            </TOC.Section>
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

        <TOC.Item label="Glottal Stops" value="glottal" />
        <TOC.Item label="The Letter H" value="letter-h" />
        <TOC.Item label="Prepausal Endings" value="prepausal-endings" />
        <TOC.Item.Phrase
          label="to call someone by a name"
          word="yats"
          value="yats"
        />
        <TOC.Item.Phrase label="to know" word="anuhte" value="anuhte" />

        <TOC.Item label="Particles" value="particles" />

        <TOC.Item label="People" value="people-article">
          <TOC.Section>
            <TOC.Item label="Children" value="people-article-children" />
            <TOC.Item label="Adolescents" value="people-article-adolescents" />
            <TOC.Item label="Adults" value="people-article-adults" />
            <TOC.Item label="Older people" value="people-article-older" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="English names" value="english-names" />
        <TOC.Item label="Dialogue" value="dialogue" />
        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <Divider />

      <SectionHeading id="intro" level={2}>
        Introduction
      </SectionHeading>

      <Text>
        This module assumes a knowledge of the terms "pronominal", "root word",
        "stem", and "paradigm", all of which are discussed on the{" "}
        <LinkWrapper page="intro" />
      </Text>

      <PronominalsArticle level={2} />

      <StressArticle level={2} />

      <GlottalStopArticle level={2} />

      <LetterHArticle level={2} />

      <PrepausalEndingsArticle level={2} />

      <NameSection />
      <KnowSection />

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
        yat — be named
      </SectionHeading>

      <Text>
        The root word, <Letter>-yat-</Letter>, means "to be named". It is a
        C-stem (because the first letter is a consonant) that uses purple
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
        translates to &quot;Bob is my name&quot;. Using the purple pronominals
        table above, one can see <Letter>yuk</Letter> in the C-stem column
        corresponds to the direction &quot;They → me&quot;. Thus, this phrase
        can literaly be translated as "They name me Bob". Colloquially we
        translate this as "They call me Bob".
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
        anuhte — to know
      </SectionHeading>
      <Text>
        The root word, <Letter>-anuht(e)-</Letter>, means "to know". It is an
        A-stem (because the first letter is "A") that uses blue pronominals.
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
