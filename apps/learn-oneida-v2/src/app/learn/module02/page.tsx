"use client";

import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { TableOfContents as TOC } from "~/components/TableOfContents";

import yʌteliRed from "~/data/yʌteli-red";
import nolukhwaRed from "~/data/nolukhwa-red";
import yʌteliBlue from "~/data/yʌteli-blue";
import nolukhwaBlue from "~/data/nolukhwa-blue";
import yʌteliPurple from "~/data/module02/know-purple";
import nolukhwaPurple from "~/data/module02/love-purple";
import nuwehseRefl from "~/data/nuwehse-refl";
import nolukhwaRefl from "~/data/nolukhwa-refl";
import yʌteliRefl from "~/data/yʌteli-refl";
import liwanutuseData from "~/data/module02/ask";
import hloliData from "~/data/module02/tell";
import hloliNegatedData from "~/data/module02/tell-negated";
import liwanutuseNegatedData from "~/data/module02/ask-negated";
import unheJson from "~/data/unhe";
import iheyuJson from "~/data/iheyu";
import atukohtuJson from "~/data/atukohtu";
import kstʌhaJson from "~/data/kstʌha";
import kʌʔni_yʌhaJson from "~/data/kʌʔni_yʌha";
import ohsliyakuJson from "~/data/ohsliyaku";
import dataLikeRecp from "~/data/module02/like-RECP";
import dataFamiliarRecp from "~/data/module02/familiar-RECP";
import dataLoveRecp from "~/data/module02/love-RECP";

import { TableWrapper } from "@/components/TableWrapper";
import { arrayify } from "@ukwehuwehneke/language-components";
import { List } from "@ukwehuwehneke/ohutsya";
import { Letter } from "~/components/Letter";
import _ from "lodash";
import {
  FamilyArticle,
  FamilyTableOfContentItems,
} from "~/components/articles/Family";
import type { ParadigmData } from "@/utils/paradigm";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { LastNamesArticle } from "~/components/articles/LastNames";
import { AboutSomeoneArticle } from "~/components/articles/AboutSomeone";
import { SimilarInAppearanceArticle } from "~/components/articles/SimilarInAppearance";
import { BeingDifferentArticle } from "~/components/articles/BeingDifferent";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { DialogueTable } from "~/components/DialogueTable";
import { LinkWrapper } from "@/components/LinkWrapper";
import { getDialogueModule02 } from "~/data/module02/dialogue";
import {
  getDeceasedRelatives,
  getThingsThatAreTheSameExamples,
} from "@/data/module02";

const meta: any = () => {
  return [
    { title: "Module 2" },
    { name: "description", content: "Module 2 of the Oneida curriculum" },
  ];
};

export default function LearnModule02() {
  return (
    <>
      <SectionHeading level={1}>Module 2</SectionHeading>

      <Notice intent="negative">
        This page is undergoing a rewrite of sorts. There is missing content and
        other content is subject to change.
      </Notice>

      <TOC>
        <TOC.Item
          label={
            <>
              New verbs: <b>yʌteli, nolukhwaʔ</b>
            </>
          }
          value="new-verbs"
        >
          <TOC.Section>
            <TOC.Item label="Subjective pronominals" value="new-verbs-red" />
            <TOC.Item label="Objective pronominals" value="new-verbs-blue" />
            <TOC.Item
              label="Interactive pronominals"
              value="new-verbs-purple"
            />
          </TOC.Section>
        </TOC.Item>
        <TOC.Item label="Reflexive" value="reflexive" />
        <TOC.Item label="Reciprocal" value="reciprocal" />

        <TOC.Item label="Commands" value="commands">
          <TOC.Section>
            <TOC.Item label="Tell" value="commands-tell" />
            <TOC.Item label="Ask" value="commands-ask" />
          </TOC.Section>
        </TOC.Item>
        <TOC.Item label="Negated Commands" value="negated-commands">
          <TOC.Section>
            <TOC.Item label="Don't tell" value="negated-commands-tell" />
            <TOC.Item label="Don't ask" value="negated-commands-ask" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Family members" value="family-members">
          <TOC.Section>
            <FamilyTableOfContentItems />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item.Phrase
          label="(to be) alive"
          word="unheʔ"
          value="verb-alive"
        />
        <TOC.Item.Phrase label="(to be) dead" word="iheyu" value="verb-dead" />
        <TOC.Item.Phrase
          label="(to have) passed on"
          word="atukohtu"
          value="verb-passed-on"
        />

        <TOC.Item label="Deceased Family Members" value="deceased-relatives" />
        <TOC.Item label="Numbers" value="numbers" />

        <TOC.Item.Phrase label="(to be) old" word="kstʌha" value="verb-old" />
        <TOC.Item.Phrase
          label="(to be) young"
          word="kʌʔ nit...yʌha"
          value="verb-young"
        />
        <TOC.Item.Phrase
          label="(to be) an age"
          word="naʔ te...ohsliyá·ku̲"
          value="verb-age"
        />

        <TOC.Item label="Particles" value="particles" />
        <TOC.Item label="Dialogue" value="dialogue" />
        <TOC.Item label="Last Names" value="last-names" />
        <TOC.Item label="About Someone or Something" value="about-someone" />
        <TOC.Item label="Similar in Appearance" value="similar-in-appearance" />
        <TOC.Item
          label="Things That Are The Same"
          value="things-that-are-the-same"
        />
        <TOC.Item label="Being Different" value="being-different" />
        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <VerbsSection />

      <ReflexiveSection />
      <ReciprocalSection />

      <CommandsSection />
      <NegatedCommandsSection />

      <FamilyArticle level={2} />

      <AliveDeadSection />
      <PassedOnSection />
      <DeceasedRelativesSection />

      <NumbersSection />

      <YoungOldSection />
      <AgeSection />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module02" />

      <LastNamesArticle level={2} />
      <AboutSomeoneArticle level={2} />
      <SimilarInAppearanceArticle level={2} />
      <ThingsThatAreTheSameSection />
      <BeingDifferentArticle level={2} />

      <DialogueSection />
      <TranslationExercisesSection group="module02" />
    </>
  );
}

function VerbsSection() {
  const columnVisibility = { pronounEnglish: false };
  return (
    <>
      <SectionHeading id="new-verbs" level={2}>
        New verbs
      </SectionHeading>
      <Text>Below are the paradigms for two new verbs:</Text>
      <List>
        <List.Item>
          <b>-yʌteli-</b> — to know, to be familiar with
        </List.Item>
        <List.Item>
          <b>-nolukhw-</b> — to love
        </List.Item>
      </List>
      <Text>
        Both of these begin with a consonant so they use C-stem pronominals.
      </Text>

      <SectionHeading id="new-verbs-red" level={3}>
        Subjective pronominals
      </SectionHeading>
      <ParadigmTable columnVisibility={columnVisibility} data={yʌteliRed} />
      <ParadigmTable columnVisibility={columnVisibility} data={nolukhwaRed} />

      <SectionHeading id="new-verbs-blue" level={3}>
        Objective pronominals
      </SectionHeading>
      <ParadigmTable columnVisibility={columnVisibility} data={yʌteliBlue} />
      <ParadigmTable columnVisibility={columnVisibility} data={nolukhwaBlue} />

      <SectionHeading id="new-verbs-purple" level={3}>
        Interactive pronominals
      </SectionHeading>
      <ParadigmTable columnVisibility={columnVisibility} data={yʌteliPurple} />
      <ParadigmTable
        columnVisibility={columnVisibility}
        data={nolukhwaPurple}
      />
    </>
  );
}

function ReflexiveSection() {
  const columnVisibility = { pronounEnglish: false };
  return (
    <>
      <SectionHeading id="reflexive" level={2}>
        Reflexive
      </SectionHeading>
      <Text>
        You can add an additional prefix to a root word to make the root word
        apply to oneself. For example, <b>knú·wehse̲ʔ</b> means &quot;I like
        it&quot;. Adding the prefix <Letter>atat</Letter> before the root word
        and after the pronominal will translate to &quot;I like myself&quot;:{" "}
        <b>katatnú·wehse̲ʔ</b>.
      </Text>
      <Text>
        The trickiness comes from the interesting behaviour that arises from
        adding <Letter>atat</Letter> to the root word. Adding this prefix
        &quot;changes&quot; the root word to use an A-stem.
      </Text>
      <Notice>The audio below only includes the prepausal ending.</Notice>
      <ParadigmTable columnVisibility={columnVisibility} data={nuwehseRefl} />
      <ParadigmTable columnVisibility={columnVisibility} data={yʌteliRefl} />
      <ParadigmTable columnVisibility={columnVisibility} data={nolukhwaRefl} />
    </>
  );
}

function ReciprocalSection() {
  const columnVisibility = { pronounEnglish: false };

  return (
    <>
      <SectionHeading id="reciprocal" level={2}>
        Reciprocal
      </SectionHeading>
      <Text>
        You can go even further and add yet another prefix to a word to make the
        word apply between two subjects &quot;in each direction&quot;. In
        English, an example of this is &quot;Someone and I like each
        other&quot;. The term for this is &quot;reciprocal&quot;.
      </Text>
      <Text>
        To translate this sentence into Oneida, first take the root word for
        &quot;to like&quot;, <b>nuwehseʔ</b>, and apply the reflexive prefix:{" "}
        <b>atatnuwehseʔ</b>. This is now an A-stem word so we can look at the
        subjective pronominals table to find the corresponding prefix for
        &quot;Someone and I&quot;, which is <Letter>yaky</Letter>. So far we
        have <b>yakyatatnú·wehse̲ʔ</b>, but if you look in the previous section,
        this means &quot;Someone and I like ourselves&quot;. To make it
        reciprocal, add <Letter>te</Letter> at the beginning.
      </Text>
      <Text>
        So the result is: <i>teyakyatatnú·wehse̲ʔ</i>.
      </Text>
      <Notice>The audio below only includes the prepausal ending.</Notice>
      <ParadigmTable columnVisibility={columnVisibility} data={dataLikeRecp} />
      <ParadigmTable
        columnVisibility={columnVisibility}
        data={dataFamiliarRecp}
      />
      <ParadigmTable columnVisibility={columnVisibility} data={dataLoveRecp} />
    </>
  );
}

function CommandsSection() {
  return (
    <>
      <SectionHeading id="commands" level={2}>
        Commands
      </SectionHeading>
      <Text>
        Here, commands are introduced, which use interactive pronominals.
        Commands have different pronominals when you ("I") are the subject.
        These are known as "command form" pronominals.
      </Text>
      <Notice intent="primary">
        Commands are only ever stated in the prepausal form as they are always
        used in cases where they appear by themselves.
      </Notice>
      <SectionHeading id="commands-tell" level={3}>
        <b>-hloli- / -hloly-</b> — tell someone
      </SectionHeading>
      <CommandsTable data={hloliData} />
      <SectionHeading id="commands-ask" level={3}>
        <b>-liʔwanut- / -liʔwanutu-</b> — ask someone
      </SectionHeading>
      <CommandsTable data={liwanutuseData} />
    </>
  );
}

function NegatedCommandsSection() {
  return (
    <>
      <SectionHeading id="negated-commands" level={2}>
        Negated Commands
      </SectionHeading>
      <Text>
        Commands can be negated, too. The regular interactive pronominals are
        used, as opposed to the command form pronominals. When negating a
        command, the future tense of the verb must be used, which is indicated
        with the prefix <Letter>ʌ</Letter>. This will be discussed more in{" "}
        <LinkWrapper page={4} />.
      </Text>
      <SectionHeading id="negated-commands-tell" level={3}>
        <b>Takʌ ʌ...hlo·li̲ʔ</b> — don&lsquo;t tell someone
      </SectionHeading>
      <CommandsTable data={hloliNegatedData} />
      <SectionHeading id="negated-commands-ask" level={3}>
        <b>Takʌ ʌ...liwanu·túse̲</b> — don&lsquo;t ask someone
      </SectionHeading>
      <CommandsTable data={liwanutuseNegatedData} />
    </>
  );
}

function CommandsTable({ data }: { data: ParadigmData }) {
  return (
    <ParadigmTable
      columnVisibility={{ pronounEnglish: false, pronounOneida: false }}
      data={data}
    />
  );
}

function AliveDeadSection() {
  return (
    <>
      <SectionHeading id="verb-alive" level={2}>
        -unheʔ- — (to be) alive
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>-unheʔ-</b>. It is a U-stem root word
        and uses subjective pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={unheJson}
      />
      <SectionHeading id="verb-dead" level={2}>
        -iheyu- / -ʌheyu- — (to be) dead / (to have) died
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>-iheyu-</b> / <b>-ʌheyu-</b>. It is
        an irregular root word where its stem depends on the pronominal. It can
        be thought of as a Λ-stem root word for all pronominals except the "me"
        pronominal, where it is an I-stem root word. In both cases, it uses
        objective pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={iheyuJson}
      />
    </>
  );
}

function PassedOnSection() {
  return (
    <>
      <SectionHeading id="verb-passed-on" level={2}>
        -atukohtu- — to have passed on
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>-atukohtu-</b>. It is an A-stem root
        word and uses objective pronominals.
      </Text>
      <ParadigmTable
        allowedPronouns={["m", "f", "it", "ms", "fs"]}
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={atukohtuJson}
      />
    </>
  );
}

function DeceasedRelativesSection() {
  const data = getDeceasedRelatives();

  return (
    <>
      <SectionHeading id="deceased-relatives" level={2}>
        Deceased Family Members
      </SectionHeading>
      <Text>
        In Oneida, talking about those who have passed on requires care. An
        additional suffix is either added on to the end of a word or replaces
        the last syllable of a word. The rules are:
      </Text>
      <List>
        <List.Item>
          <b>nulhá·</b> becomes <b>nulhaʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>níha</b> becomes <b>nikʌ́</b>
        </List.Item>
        <List.Item>
          <b>sótha</b> becomes <b>sotkʌ́</b>
        </List.Item>
        <List.Item>
          <b>kʌ́ha</b> becomes <b>kʌhaʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>yʌ́ha</b> becomes <b>yʌhaʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>uhwatʌ́ha</b> becomes <b>uhwatʌʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>atléha</b> becomes <b>atlehaʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>alaʔséha</b> becomes <b>alaʔsehaʔkʌ́</b>
        </List.Item>
        <List.Item>
          <b>atʌ·ló·</b> becomes <b>atʌloʔkʌ́</b>
        </List.Item>
      </List>
      <Text>
        Notice that, in many cases, accents, stresses, and lengths move places.
      </Text>
      {/* @ts-expect-error Table generics */}
      <TableWrapper columns={TableWrapper.columnsEnglishAudio} data={data} />
    </>
  );
}

function YoungOldSection() {
  return (
    <>
      <SectionHeading id="verb-old" level={2}>
        kstʌha — (to be) old
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>kstʌha</b>. It is a C-stem root word
        and uses objective pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={kstʌhaJson}
      />

      <SectionHeading id="verb-young" level={2}>
        kʌʔ nit...yʌha — (to be) young
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>kʌʔ nit...yʌha</b>. It is a C-stem
        root word and uses objective pronominals. It makes use of the{" "}
        <LinkWrapper page="dim" />.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={kʌʔni_yʌhaJson}
      />
      <Notice intent="warning">
        Take note of the letter &quot;i&quot; in between the &quot;nit&quot; and
        the pronominal for the phrases &quot;You are young&quot;, &quot;You two
        are young&quot;, and &quot;All of you are young&quot;.
      </Notice>
    </>
  );
}

function NumbersSection() {
  const audioExceptions = [
    "160",
    "170",
    "180",
    "190",
    "600",
    "700",
    "800",
    "900",
  ];
  const data = [
    { en: "1", translation: "úska" },
    { en: "2", translation: ["tékeni̲", "tékni"] },
    { en: "3", translation: "áhsʌ̲" },
    { en: "4", translation: "kayé" },
    { en: "5", translation: "wisk" },
    { en: "6", translation: "yá·yak" },
    { en: "7", translation: "tsyá·tak" },
    { en: "8", translation: ["tékelu̲ʔ", "tékluʔ"] },
    { en: "9", translation: ["wá·telu̲ʔ", "wá·tluʔ"] },
    { en: "10", translation: "oyé·li̲" },
    { en: "11", translation: "úska yawʌ·lé̲·" },
    { en: "12", translation: "tékni yawʌ·lé̲·" },
    { en: "13", translation: "áhsʌ yawʌ·lé̲·" },
    { en: "14", translation: "kayé yawʌ·lé̲·" },
    { en: "15", translation: "wisk yawʌ·lé̲·" },
    { en: "16", translation: "yá·yak yawʌ·lé̲·" },
    { en: "17", translation: "tsyá·tak yawʌ·lé̲·" },
    { en: "18", translation: "tékluʔ yawʌ·lé̲·" },
    { en: "19", translation: "wá·tluʔ yawʌ·lé̲·" },
    { en: "20", translation: "tewáhsʌ̲" },
    { en: "21", translation: "tewáhsʌ úska" },
    { en: "22", translation: ["tewáhsʌ tékeni̲", "tewáhsʌ tékni"] },
    { en: "30", translation: "áhsʌ niwáhsʌ̲" },
    { en: "40", translation: "kayé niwáhsʌ̲" },
    { en: "50", translation: "wisk niwáhsʌ̲" },
    { en: "60", translation: "yá·yak niwáhsʌ̲" },
    { en: "70", translation: "tsyá·tak niwáhsʌ̲" },
    { en: "80", translation: "tékluʔ niwáhsʌ̲" },
    { en: "90", translation: "wá·tluʔ niwáhsʌ̲" },
    {
      en: "99",
      translation: ["wá·tluʔ niwáhsʌ wá·telu̲ʔ", "wá·tluʔ niwáhsʌ wá·tluʔ"],
    },
    { en: "100", translation: "úska tewʌʔnyáwelu̲ʔ" },
    { en: "101", translation: "úska tewʌʔnyáweluʔ úska" },
    { en: "110", translation: "úska tewʌʔnyáweluʔ oyé·li̲" },
    { en: "111", translation: "úska tewʌʔnyáweluʔ úska yawʌ·lé̲·" },
    { en: "120", translation: "úska tewʌʔnyáweluʔ tewáhsʌ̲" },
    { en: "130", translation: "úska tewʌʔnyáweluʔ áhsʌ niwáhsʌ̲" },
    { en: "140", translation: "úska tewʌʔnyáweluʔ kayé niwáhsʌ̲" },
    { en: "150", translation: "úska tewʌʔnyáweluʔ wisk niwáhsʌ̲" },
    { en: "160", translation: "úska tewʌʔnyáweluʔ yá·yak niwáhsʌ̲" },
    { en: "170", translation: "úska tewʌʔnyáweluʔ tsyá·tak niwáhsʌ̲" },
    { en: "180", translation: "úska tewʌʔnyáweluʔ tékluʔ niwáhsʌ̲" },
    { en: "190", translation: "úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ̲" },
    {
      en: "199",
      translation: [
        "úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·telu̲ʔ",
        "úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ",
      ],
    },
    { en: "200", translation: "tékni tewʌʔnyáwelu̲ʔ" },
    { en: "201", translation: "tékni tewʌʔnyáweluʔ úska" },
    { en: "300", translation: "áhsʌ tewʌʔnyáwelu̲ʔ" },
    { en: "400", translation: "kayé tewʌʔnyáwelu̲ʔ" },
    { en: "500", translation: "wisk tewʌʔnyáwelu̲ʔ" },
    { en: "600", translation: "yá·yak tewʌʔnyáwelu̲ʔ" },
    { en: "700", translation: "tsya·ták tewʌʔnyáwelu̲ʔ" },
    { en: "800", translation: "tékluʔ tewʌʔnyáwelu̲ʔ" },
    { en: "900", translation: "wá·tluʔ tewʌʔnyáwelu̲ʔ" },
    {
      en: "999",
      translation: [
        "wá·tluʔ tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·telu̲ʔ",
        "wá·tluʔ tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ",
      ],
    },
    { en: "1000", translation: "oyé·li tewʌʔnyáwelu̲ʔ" },
    { en: "1001", translation: "oyé·li tewʌʔnyáweluʔ úska" },
    { en: "1111", translation: "úska yawʌ·lé· tewʌʔnyáweluʔ úska yawʌ·lé̲·" },
    { en: "1200", translation: "tékni yawʌ·lé· tewʌʔnyáwelu̲ʔ" },
    { en: "1300", translation: "áhsʌ yawʌ·lé· tewʌʔnyáwelu̲ʔ" },
    {
      en: "1999",
      translation: [
        "wá·tluʔ yawʌ·lé tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·telu̲ʔ",
        "wá·tluʔ yawʌ·lé tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ",
      ],
    },
    { en: "2000", translation: "tewáhsʌ tewʌʔnyáwelu̲ʔ" },
  ];

  const getSuffix = (val: string | string[], i: number) =>
    !Array.isArray(val) ? "" : i === 0 ? "_pp" : "";

  return (
    <>
      <SectionHeading id="numbers" level={2}>
        Numbers
      </SectionHeading>
      <Text>
        Counting in Oneida can be tricky. It is essential to first learn the
        numbers from 1 to 10. Then you can use the following rules:
      </Text>
      <List>
        <List.Item>
          11 - 19: the second digit comes first, followed by <b>yawa·lé̲·</b>
        </List.Item>
        <List.Item>
          20 - 29: <b>tewáhsʌ</b> then the second digit
        </List.Item>
        <List.Item>
          30 - 99: the first digit, <b>niwáhsʌ̲</b>, then the second digit
        </List.Item>
        <List.Item>
          100 - 9999: the number of 100s, <b>tewʌʔnyáwelu̲ʔ</b>, then follow the
          rule above for the last 2 digits
        </List.Item>
      </List>
      <TableWrapper
        columns={[
          TableWrapper.columnsEnglishTranslation[0],
          {
            accessorKey: "translation",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: string | string[], row: any) => (
              <Flex direction="column" gap={2}>
                {arrayify(value).map((val, i) => (
                  <Flex gap={2} key={i}>
                    <b>{val}</b>
                    {!audioExceptions.includes(row.en) && (
                      <PlayButton
                        filepath={`/audio/module02/numbers/${row.en}${getSuffix(value, i)}.mp3`}
                      />
                    )}
                  </Flex>
                ))}
              </Flex>
            ),
            header: "Translation",
          },
        ]}
        data={data}
      />
    </>
  );
}

function AgeSection() {
  return (
    <>
      <SectionHeading id="age" level={2}>
        naʔ te...ohsliyá·ku̲ — (to be) an age
      </SectionHeading>
      <Text>
        In Oneida, the more literal translation to say &quot;I am ... years
        old&quot; is &quot;I have crossed X winters&quot;.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={ohsliyakuJson}
      />
      <Text>
        As a more concerete example, the Oneida translation for &quot;I am 35
        years old&quot; is <b>35 naʔ tewakohsliyá·ku̲</b>.
      </Text>
    </>
  );
}

function DialogueSection() {
  const data = getDialogueModule02();

  // @ts-expect-error TODO
  const mapper = (row) => ({ ...row, hasAudio: row.hasAudio ?? true });

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <Text>Here is some dialogue using terminology from module 1 and 2.</Text>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <DialogueTable
        audioFolder="module02/dialogue/part1"
        data={data.part1.map(mapper)}
      />
      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable
        audioFolder="module02/dialogue/part2"
        data={data.part2.map(mapper)}
      />
      <SectionHeading id="dialogue-ex3" level={3}>
        Example 3
      </SectionHeading>
      <DialogueTable
        audioFolder="module02/dialogue/part3"
        data={data.part3.map(mapper)}
      />
    </>
  );
}

function ThingsThatAreTheSameSection() {
  return (
    <>
      <SectionHeading id="things-that-are-the-same" level={2}>
        Things that are the same
      </SectionHeading>
      <Text>
        To say two things are the same, the <LinkWrapper page="coin" />,{" "}
        <Letter>tshaʔ</Letter>, is used.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={getThingsThatAreTheSameExamples()}
      />
    </>
  );
}
