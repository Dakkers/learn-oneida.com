"use client";

import {
  Bleed,
  Box,
  Divider,
  Link,
  Notice,
  Text,
} from "@ukwehuwehneke/ohutsya";

import React from "react";
import { singlePronouns } from "@ukwehuwehneke/language-components";
import yatsJson from "~/data/yats";
import anuhteJson from "~/data/anuhte";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal } from "~/components/Pronominal";
import { PeopleArticle } from "~/components/articles/People";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { DialogueTable, DialogueTableData } from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { PronominalsArticle } from "~/components/articles/Pronominals";
import { StressArticle } from "~/components/articles/Stress";
import { GlottalStopArticle } from "~/components/articles/GlottalStop";
import { LetterHArticle } from "~/components/articles/LetterH";
import { WhisperedEndingsArticle } from "~/components/articles/WhisperedEndings";
import { PrepausalEndingsArticle } from "@/components/articles/PrepausalEndings";

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
                value="objective"
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
        <Link href="/learn/introduction">introduction page</Link>.
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
  const part1: DialogueTableData = [
    { one: "Úhkaʔ náhteʔ niʔí·", en: "Who am I?" },
    { one: "Kwítel niʔisé̲·", en: "You are Peter." },
    { one: "Úhkaʔ náhteʔ niʔisé̲·", en: "Who are you?" },
    { one: "Wá·li niʔí·", en: "I am Mary." },
    { one: "Úhkaʔ náhteʔ neʔn laulhá·", en: "Who is he?" },
    { one: "Tá·wet neʔn laulhá·", en: "He is David." },
    { one: "Úhkaʔ náhteʔ neʔn akaulhá·", en: "Who is she?" },
    { one: "Klistí·n neʔn akaulhá·", en: "She is Christine." },
    { one: "Úhkaʔ náhteʔ nʌʔ né·", en: "Who is it?" },
    { one: "Kwítel nʌʔ né·", en: "It is Peter." },
  ];
  const part2: DialogueTableData = [
    { one: "Tshyalé kʌ́ niʔí·", en: "Am I Charlie?" },
    { one: "Λ́·, Tshyalé niʔisé̲·", en: "Yes. You are Charlie" },
    { one: "Wá·li kʌ́ niʔisé̲·", en: "Are you Mary?" },
    { one: "Λ́·, Wá·li niʔí·", en: "Yes. I am Mary." },
    { one: "Tá·wet kʌ́ neʔn laulhá·", en: "Is he David?" },
    { one: "Λ́·, Tá·wet neʔn laulhá·", en: "Yes. He is David." },
    { one: "Klistí·n kʌ́ neʔn akaulhá·", en: "Is she Christine?" },
    { one: "Λ́·, Klistí·n neʔn akaulhá·", en: "Yes. She is Christine." },
  ];
  const part3: DialogueTableData = [
    { one: "Í· kʌ́ neʔn Tshyalé", en: "Am I Charlie?" },
    { one: "Λ́·, isé· né· Tshyalé", en: "Yes, you are Charlie." },
    { one: "Isé· kʌ́ neʔn Wá·li", en: "Are you Mary?" },
    { one: "Λ́·, í· né· Wá·li", en: "Yes, I am Mary." },
    { one: "Laulhá· kʌ́ neʔn Tá·wet", en: "Is he David?" },
    { one: "Λ́·, laulhá· né· Tá·wet", en: "Yes, he is David." },
    { one: "Akaulhá· kʌ́ neʔn Ní·ki", en: "Is she Amelia?" },
    { one: "Λ́·, akaulhá· né· Ní·ki", en: "Yes, she is Amelia." },
  ];
  const part4: DialogueTableData = [
    { one: "Wá·li kʌ́ niʔí·", en: "Am I Mary?" },
    {
      one: ["Táh", "Yáh Wá·li té·kʌ nisé·", "Só·s niʔisé̲·"],
      en: "No. You're not Mary. You are Susan.",
    },
    { one: "Tshyalé kʌ́ niʔisé̲·", en: "Are you Charlie?" },
    {
      one: ["Táh", "Yáh Tshyalé té·kʌ niʔí·", "Wá·li niʔí·"],
      en: "No. I'm not Charlie. I'm Mary.",
    },
    { one: "Wílo kʌ́ neʔn laulhá·", en: "Is he William?" },
    {
      one: ["Táh", "Yáh Wílo té·kʌ neʔn laulhá·", "Tá·wet neʔn laulhá·"],
      en: "No. He's not William. He's David.",
    },
    { one: "Lá·kel kʌ́ neʔn akaulhá·", en: "Is she Rachel?" },
    {
      one: ["Táh", "Yáh Lá·kel té·kʌ neʔn akaulhá·", "Só·s neʔn akaulhá·"],
      en: "No. She's not Rachel. She's Susan.",
    },
  ];
  const part5: DialogueTableData = [
    { one: "Í· kʌ́ neʔn Wá·li", en: "Am I Mary?" },
    {
      one: ["Táh", "Yáh Wá·li té·kʌ niʔisé̲·", "Só·s ni·sé·"],
      en: "No. You're not Mary. You're Susan.",
    },
    { one: "Isé· kʌ́ neʔn Tu·wís", en: "Are you Thomas?" },
    {
      one: ["Táh", "Yáh Tu·wís té·kʌ niʔí·", "Wílo niʔí·"],
      en: "No. I'm not Thomas. I'm William.",
    },
    { one: "Laulhá· kʌ́ neʔn Tshyalé", en: "Is he Charlie?" },
    {
      one: ["Táh", "Yáh Tshyalé té·kʌ neʔn laulhá·", "Ta·wet neʔn laulhá·"],
      en: "No. He's not Charlie. He's David.",
    },
    { one: "Akaulhá· kʌ́ neʔn Ní·ki", en: "Is she Amelia?" },
    {
      one: ["Táh", "Yáh Ní·ki té·kʌ neʔn akaulhá·", "Só·s neʔn akaulhá·"],
      en: "No. She's not Amelia. She's Susan.",
    },
  ];
  const part6: DialogueTableData = [
    { one: "Sknú·wehseʔ kʌ́ niʔí·", en: "Do you like me?" },
    {
      one: [
        "Λ́·, kunú·wehseʔ niʔisé̲·",
        "Kunú·wehseʔ niʔisé· kwáh ne·n tsiʔ niyot sknú·wehseʔ niʔí·",
      ],
      en: ["Yes, I like you.", "I like you just like you like me."],
    },
    { one: "Etsnú·wehseʔ kʌ́ neʔn laulhá·", en: "Do you like him?" },
    { one: "Λ́·, linú·wehseʔ né· laulhá·", en: "Yes, I like him." },
    { one: "Etsnú·wehseʔ kʌ́ neʔn Wílo", en: "Do you like William?" },
    { one: "Λ́·, linú·wehseʔ né· Wílo", en: "Yes, I like William." },
    { one: "Shenú·wehseʔ kʌ́ neʔn akaulhá·", en: "Do you like her?" },
    { one: "Λ́·, khenú·wehseʔ né· akaulhá·", en: "Yes, I like her." },
    { one: "Shenú·wehseʔ kʌ́ neʔn Kowaklít", en: "Do you like Margaret?" },
    { one: "Λ́·, khenú·wehseʔ né· Kowaklít", en: "Yes, I like Margaret." },
    { one: "Shenú·wehseʔ kʌ́ neʔn lonulhá·", en: "Do you like them?" },
    { one: "Λ́·, khenú·wehseʔ né· lonulhá·", en: "Yes, I like them." },
    { one: "Shenú·wehseʔ kʌ́ neʔn Beatles", en: "Do you like the Beatles?" },
    { one: "Λ́·, khenú·wehseʔ né· Beatles", en: "Yes, I like the Beatles." },
  ];
  const part7: DialogueTableData = [
    { one: "I·sé· kʌ́ sknú·wehse̲ʔ", en: "Do you like me?" },
    { one: "Λ́·, í· kunú·wehse̲ʔ", en: "Yes, I like you." },
    { one: "laulhá· kʌ́ etsnú·wehse̲ʔ", en: "Do you like him?" },
    { one: "Λ́·, laulhá· linú·wehse̲ʔ", en: "Yes, I like him." },
    { one: "Kwítel kʌ́ etsnú·wehse̲ʔ", en: "Do you like Peter?" },
    { one: "Λ́·, Kwítel linú·wehse̲ʔ", en: "Yes, I like Peter." },
    { one: "Akaulhá· kʌ́ shenú·wehse̲ʔ", en: "Do you like her?" },
    { one: "Λ́·, akaulhá· khenú·wehse̲ʔ", en: "Yes, I like her." },
    { one: "Kowaklit kʌ́ shenú·wehse̲ʔ", en: "Do you like Margaret?" },
    { one: "Λ́·, Kowaklít khenú·wehse̲ʔ", en: "Yes, I like Margaret." },
    { one: "Lonulhá· kʌ́ shenú·wehse̲ʔ", en: "Do you like them?" },
    { one: "Λ́·, lonulhá· khenú·wehse̲ʔ", en: "Yes, I like them." },
    {
      one: "Rolling Stones kʌ́ shenú·wehse̲ʔ",
      en: "Do you like the Rolling Stones?",
    },
    {
      one: "Λ́·, Rolling Stones khenú·wehse̲ʔ",
      en: "Yes, I like the Rolling Stones.",
    },
  ];
  const part8: DialogueTableData = [
    { one: "Úhkaʔ náhteʔ khenú·wehseʔ", en: "Who do I like?" },
    {
      one: [
        "Í· sknú·wehse̲ʔ",
        "Kwítel etsnú·wehse̲ʔ",
        "Klistí·n shenú·wehse̲ʔ",
        "Beatles shenú·wehse̲ʔ",
      ],
      en: [
        "You like me.",
        "You like Peter.",
        "You like Kristin.",
        "You like the Beatles.",
      ],
    },

    { one: "Úhkaʔ náhteʔ shenú·wehse̲ʔ", en: "Who do you like?" },
    {
      one: [
        "Isé· kunú·wehse̲ʔ",
        "Kwítel linú·wehse̲ʔ",
        "Klistí·n khenú·wehse̲ʔ",
        "Beatles khenú·wehse̲ʔ",
        "Akwekú khenú·wehse̲ʔ",
        "Háti úhkaʔ ok náhteʔ niʔisé· shenú·wehseʔ, í· khenú·wehse̲ʔ",
      ],
      en: [
        "I like you.",
        "I like Peter.",
        "I like Kristin.",
        "I like the Beatles.",
        "I like everyone.",
        "Anyone you like, I like them too.",
      ],
    },

    { one: "Úhkaʔ oyá· shenú·wehse̲ʔ", en: "Who else do you like?" },
    {
      one: "Rolling Stones ú·niʔ khenú·wehse̲ʔ",
      en: "I also like the Rolling Stones.",
    },

    { one: "Úhkaʔ shakonú·wehseʔ né· Kwítel", en: "Who does Peter like?" },
    {
      one: ["Í· laknú·wehseʔ né· Kwítel", "I·sé· yanú·wehseʔ né· Kwítel"],
      en: ["Peter likes me.", "Peter likes you."],
    },

    {
      one: "Úhkaʔ oyá· shakonú·wehseʔ neʔn Kwítel",
      en: "Who else does Peter like?",
    },
    {
      one: "Rolling Stones oniʔ shakonú·wehseʔ neʔn Kwítel",
      en: "Peter also likes the Rolling Stones.",
    },

    {
      one: "Úhkaʔ náhteʔ yutatnú·wehseʔ neʔn Só·s",
      en: "Who does Susan like?",
    },
    {
      one: ["Í· yuknú·wehseʔ neʔn Só·s", "I·sé· yesanú·wehseʔ né· Só·s"],
      en: ["Susan likes me.", "Susan likes you."],
    },
  ];
  const part9: DialogueTableData = [
    { one: "Náhte snú·wehse̲ʔ", en: "What do you like?" },
    {
      one: [
        "Kaʔikʌ́ knú·wehse̲ʔ",
        "Thikʌ́· knú·wehse̲ʔ",
        "Akwekú knú·wehse̲ʔ",
        "Háti náhte ne·n isé· snú·wehseʔ, í· ú·ni knú·wehse̲ʔ",
      ],
      en: [
        "I like this.",
        "I like that.",
        "I like everything.",
        "Whatever you like, I also like.",
      ],
    },
  ];
  const part10: DialogueTableData = [
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ Beatles tá·thuniʔ Rolling Stones",
      en: "Who do you like more, the Beatles or the Rolling Stones?",
    },
    {
      one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
      en: "I like the Beatles more than the Rolling Stones.",
    },
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né·n Rolling Stones",
      en: "Who do you like more than the Rolling Stones?",
    },
    {
      one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
      en: "I like the Beatles more than the Rolling Stones.",
    },
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Beatles",
      en: "Who do you like more than the Beatles?",
    },
    {
      one: "Yáh úhkaʔ náhteʔ sʌ́haʔ teʔkhenú·wehseʔ tsiʔ ni·yót né· Beatles",
      en: "Thereʔs no one I like more than the Beatles.",
    },
    {
      one: "Sʌ́haʔ kʌ́ shenú·wehseʔ neʔn Beach Boys tsiʔ ni·yót neʔn Beatles",
      en: "Do you like the Beach Boys more than the Beatles?",
    },
    {
      one: "Táh. Yáh sʌ́haʔ tekhenú·wehseʔ né· Beach Boys tsiʔ ni·yót né· Beatles",
      en: "No. I don't like the Beach Boys more than the Beatles.",
    },
    {
      one: "Sʌ́haʔ kʌ́ etsnú·wehseʔ neʔn Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
      en: "Do you like Nelson Mandela more than Stephen Harper?",
    },
    {
      one: "Λ́·, kwáh ikʌ́ tsiʔ sʌ́haʔ linú·wehseʔ Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
      en: "Yes, I really like Nelson Mandela more than Stephen Harper.",
    },
    {
      one: "Úhka ó·ya sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Stephen Harper",
      en: "Who else do you like more than Stephen Harper?",
    },
    {
      one: "Tom Porter uní sʌ́haʔ linú·wehseʔ tsiʔ ni·yót né·n Stephen Harper",
      en: "I also like Tom Porter more than Stephen Harper.",
    },
    {
      one: "Lonúhteʔ kʌ́ neʔn Tshyalé oh náhte luwatí·yats neʔn Beatles",
      en: "Does Charlie know what the Beatlesʔ names are?",
    },
    {
      one: "Λ́·, lonúhteʔ neʔn Tshyalé oh náhte luwati·yáts neʔn Beatles",
      en: "Yes, Charlie knows what the Beatlesʔ names are.",
    },
    {
      one: "Lonanúhteʔ kʌ́ né· thikʌ́ latiksaʔshúha oh náhte kuwatí·yats né· thikʌ́ otikhstʌʔokúha̲",
      en: "Do those children know what those old womenʔs names are?",
    },
    {
      one: "Táh. Yáh tehonanúhteʔ né· thikʌ́ latiksaʔshúha oh náhte kuwati·yáts thikʌ́ otikhstʌʔokúha̲",
      en: "No. Those children don't know what those old womenʔs names are.",
    },
    {
      one: "Laulhá· kʌ́ lonúhteʔ náhte yesá·yats",
      en: "Does he know what your name is?",
    },
    {
      one: "Táh. Yáh tehonúhteʔ náhte ní· yúkyats",
      en: "No. He doesnʔt know what my name is.",
    },
    {
      one: "Klistí·n kʌ́ yutátyats né· thikʌ́ yakú·kwe̲",
      en: "Is that womanʔs name Christine?",
    },
    {
      one: "Λ́·, Klistí·n yutátyats né· thikʌ́ yakú·kwe̲ʔ",
      en: "Yes, that womanʔs name is Christine.",
    },
    {
      one: "Onulhá· kʌ́ yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones",
      en: "Do they know what the Rolling Stones names are?",
    },
    {
      one: "Λ́·, yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones. Mick, Keith, Charlie kháleʔ Ronnie luwati·yáts",
      en: "Yes, they know what the the Rolling Stones names are. They are called Mick, Keith, Charlie, and Ronnie.",
    },
  ];
  const part11: DialogueTableData = [
    {
      one: "Sanúhteʔ kʌ́ náhte ni yúkyats",
      en: "Do you know what my name is?",
    },
    { one: "Lá·kel kʌ́ yesa·yáts", en: "Is your name Rachel?" },
    {
      one: [
        "Táh",
        "Yáh Lá·kel teyúkyats",
        "Thikʌ́ akokstʌ́·haʔ neʔn Lá·kel yutátyats",
      ],
      en: "No. My name is not Rachel. That old woman is the one named Rachel.",
    },
    { one: "Kowáklit kʌ́ yesa·yáts", en: "Is your name Margaret?" },
    {
      one: [
        "Táh",
        "Yáh oni Kowáklit teyúkyats",
        "Thikʌ́ yeksá· neʔn Kowáklit yutátyats",
      ],
      en: "No. Margaret isnʔt my name either. That girlʔs name is Margaret.",
    },
    {
      one: "Tá·t yáh Lá·kel tathu·ní· yáh Kowáklit teyesa·yáts nahte káti yesa·yáts",
      en: "If your name is not Rachel or Margaret, then what is your name?",
    },
    { one: "Aliskwet niyúkyats", en: "My name is Elizabeth" },
    {
      one: "Onʌ wakanúhteʔ náhte yesa·yáts",
      en: "Now I know what your name is.",
    },
  ];

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
      <DialogueTable data={part1} />

      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable data={part2} />

      <SectionHeading id="dialogue-ex3" level={3}>
        Example 3
      </SectionHeading>
      <DialogueTable data={part3} />

      <SectionHeading id="dialogue-ex4" level={3}>
        Example 4
      </SectionHeading>
      <DialogueTable data={part4} />

      <SectionHeading id="dialogue-ex5" level={3}>
        Example 5
      </SectionHeading>
      <DialogueTable data={part5} />

      <SectionHeading id="dialogue-ex6" level={3}>
        Example 6
      </SectionHeading>
      <DialogueTable data={part6} />

      <SectionHeading id="dialogue-ex7" level={3}>
        Example 7
      </SectionHeading>
      <DialogueTable data={part7} />

      <SectionHeading id="dialogue-ex8" level={3}>
        Example 8
      </SectionHeading>
      <DialogueTable data={part8} />

      <SectionHeading id="dialogue-ex9" level={3}>
        Example 9
      </SectionHeading>
      <DialogueTable data={part9} />

      <SectionHeading id="dialogue-ex10" level={3}>
        Example 10
      </SectionHeading>
      <DialogueTable data={part10} />

      <SectionHeading id="dialogue-ex11" level={3}>
        Example 11
      </SectionHeading>
      <DialogueTable data={part11} />
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
        C-stem (becuase the first letter is a consonant) that uses purple
        pronominals.
      </Text>

      <ParadigmTable
        allowedPronouns={[...singlePronouns, "ms", "fs"]}
        audioFolder="module01/yats"
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
        A-stem (becuase the first letter is "A") that uses blue pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module01/anuhte"
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={anuhteJson}
        translationFn={({ pronoun }) => ({
          verb: ["it", "m", "f"].includes(pronoun) ? "knows" : "know",
        })}
      />
    </>
  );
}
