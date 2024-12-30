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

import { TableWrapper } from "@/components/TableWrapper";
import { type Pronoun, arrayify } from "@ukwehuwehneke/language-components";
import {
  type BreakdownArray,
  convertBreakdownToPlainText,
  dualicPronouns,
  pluralPronouns,
} from "@ukwehuwehneke/language-components";
import { List } from "@ukwehuwehneke/ohutsya";
import { Letter } from "~/components/Letter";
import _ from "lodash";
import {
  FamilyArticle,
  FamilyTableOfContentItems,
} from "~/components/articles/Family";
import { type ParadigmData, ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { LastNamesArticle } from "~/components/articles/LastNames";
import { AboutSomeoneArticle } from "~/components/articles/AboutSomeone";
import { SimilarInAppearanceArticle } from "~/components/articles/SimilarInAppearance";
import { BeingDifferentArticle } from "~/components/articles/BeingDifferent";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import {
  DialogueTable,
  type DialogueTableData,
} from "~/components/DialogueTable";
import { LinkWrapper } from "@/components/LinkWrapper";
import { getDialogueModule02 } from "~/data/module02/dialogue";

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
            <TOC.Item label="Red pronominals" value="new-verbs-red" />
            <TOC.Item label="Blue pronominals" value="new-verbs-blue" />
            <TOC.Item label="Purple pronominals" value="new-verbs-purple" />
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

const translationFnLike = ({ pronoun }: { pronoun: Pronoun }) => ({
  verb: ["it", "m", "f"].includes(pronoun) ? "likes" : "like",
});

const translationFnKnow = ({ pronoun }: { pronoun: Pronoun }) => ({
  verb: ["it", "m", "f"].includes(pronoun) ? "knows" : "know",
});

const translationFnLove = ({ pronoun }: { pronoun: Pronoun }) => ({
  verb: ["it", "m", "f"].includes(pronoun) ? "loves" : "love",
});

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
        Red pronominals
      </SectionHeading>
      <ParadigmTable
        audioFolder="module02/familiar_red"
        columnVisibility={columnVisibility}
        data={yʌteliRed}
        translationFn={translationFnKnow}
      />
      <ParadigmTable
        audioFolder="module02/love_red"
        columnVisibility={columnVisibility}
        data={nolukhwaRed}
        translationFn={translationFnLove}
      />

      <SectionHeading id="new-verbs-blue" level={3}>
        Blue pronominals
      </SectionHeading>
      <ParadigmTable
        audioFolder="module02/familiar_blue"
        columnVisibility={columnVisibility}
        data={yʌteliBlue}
        translationFn={translationFnKnow}
      />
      <ParadigmTable
        audioFolder="module02/love_blue"
        columnVisibility={columnVisibility}
        data={nolukhwaBlue}
        translationFn={translationFnLove}
      />

      <SectionHeading id="new-verbs-purple" level={3}>
        Purple pronominals
      </SectionHeading>
      <ParadigmTable
        audioFolder="module02/familiar_purple"
        columnVisibility={columnVisibility}
        data={yʌteliPurple}
        translationFn={translationFnKnow}
      />
      <ParadigmTable
        audioFolder="module02/love_purple"
        columnVisibility={columnVisibility}
        data={nolukhwaPurple}
        translationFn={translationFnLove}
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
      <ParadigmTable
        audioFolder="module02/like_refl"
        columnVisibility={columnVisibility}
        data={nuwehseRefl}
        translationFn={translationFnLike}
      />
      <ParadigmTable
        audioFolder="module02/familiar_refl"
        columnVisibility={columnVisibility}
        data={yʌteliRefl}
        translationFn={translationFnKnow}
      />
      <ParadigmTable
        audioFolder="module02/love_refl"
        columnVisibility={columnVisibility}
        data={nolukhwaRefl}
        translationFn={translationFnLove}
      />
    </>
  );
}

function ReciprocalSection() {
  const pronounSubset = [...dualicPronouns, ...pluralPronouns];
  const columnVisibility = { pronounEnglish: false };

  const knowData: BreakdownArray[] = [
    [["te", "REFL"], ["ty"], ["atat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["yakya"], ["tat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["tsy"], ["atat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["hy"], ["atat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["ky"], ["atat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["twa"], ["tat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["yakwa"], ["tat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["swa"], ["tat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["hu"], ["tat", "REFL"], "yʌtelí̲"],
    [["te", "REFL"], ["ku"], ["tat", "REFL"], "yʌtelí̲"],
  ];

  const likeData: BreakdownArray[] = [
    [["te", "REFL"], ["ty"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["yaky"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["tsy"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["hy"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["ky"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["twa"], ["tat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["yakw"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["swa"], ["tat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["hu"], ["tat", "REFL"], "nú·wehse̲ʔ"],
    [["te", "REFL"], ["ku"], ["tat", "REFL"], "nú·wehse̲ʔ"],
  ];

  const loveData: BreakdownArray[] = [
    [["te", "REFL"], ["ty"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["yaky"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["tsy"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["hy"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["ky"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["twa"], ["tat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["yakw"], ["atat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["swa"], ["tat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["hu"], ["tat", "REFL"], "nolúkhwa̲ʔ"],
    [["te", "REFL"], ["ku"], ["tat", "REFL"], "nolúkhwa̲ʔ"],
  ];

  const formatBreakdownsToPhrases = (verb: string, data: BreakdownArray[]) => ({
    phrases: data.map((breakdown, i) => ({
      breakdown,
      phrase: convertBreakdownToPlainText(breakdown),
      pronoun: pronounSubset[i],
    })),
    translation: `{{pronoun}} ${verb} each other`,
    type: "PR" as const,
  });

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
        red pronominals table to find the corresponding prefix for &quot;Someone
        and I&quot;, which is <Letter>yaky</Letter>. So far we have{" "}
        <b>yakyatatnú·wehse̲ʔ</b>, but if you look in the previous section, this
        means &quot;Someone and I like ourselves&quot;. To make it reciprocal,
        add <Letter>te</Letter> at the beginning.
      </Text>
      <Text>
        So the result is: <i>teyakyatatnú·wehse̲ʔ</i>.
      </Text>
      <Notice>The audio below only includes the prepausal ending.</Notice>
      <ParadigmTable
        audioFolder="module02/like_recp"
        columnVisibility={columnVisibility}
        data={formatBreakdownsToPhrases("like", likeData)}
        translationFn={translationFnLike}
      />
      <ParadigmTable
        audioFolder="module02/familiar_recp"
        columnVisibility={columnVisibility}
        data={formatBreakdownsToPhrases("know", knowData)}
        translationFn={translationFnKnow}
      />
      <ParadigmTable
        audioFolder="module02/love_recp"
        columnVisibility={columnVisibility}
        data={formatBreakdownsToPhrases("love", loveData)}
        translationFn={translationFnLove}
      />
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
        Here, commands are introduced, which use purple pronominals. Commands
        have different pronominals when you ("I") are the subject. These are
        known as "command form" pronominals.
      </Text>
      <Notice intent="primary">
        Commands are only ever stated in the prepausal form as they are always
        used in cases where they appear by themselves.
      </Notice>
      <SectionHeading id="commands-tell" level={3}>
        <b>-hloli- / -hloly-</b> — tell someone
      </SectionHeading>
      <CommandsTable audioFolder="tell" data={hloliData} />
      <SectionHeading id="commands-ask" level={3}>
        <b>-liʔwanut- / -liʔwanutu-</b> — ask someone
      </SectionHeading>
      <CommandsTable audioFolder="ask" data={liwanutuseData} />
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
        Commands can be negated, too. The regular purple pronominals are used,
        as opposed to the command form pronominals. When negating a command, the
        future tense of the verb must be used, which is indicated with the
        prefix <Letter>ʌ</Letter>. This will be discussed more in{" "}
        <LinkWrapper page={4} />.
      </Text>
      <SectionHeading id="negated-commands-tell" level={3}>
        <b>Takʌ ʌ...hlo·li̲ʔ</b> — don&lsquo;t tell someone
      </SectionHeading>
      <CommandsTable audioFolder="tell_negated" data={hloliNegatedData} />
      <SectionHeading id="negated-commands-ask" level={3}>
        <b>Takʌ ʌ...liwanu·túse̲</b> — don&lsquo;t ask someone
      </SectionHeading>
      <CommandsTable audioFolder="ask_negated" data={liwanutuseNegatedData} />
    </>
  );
}

function CommandsTable({
  audioFolder,
  data,
}: { audioFolder?: string; data: ParadigmData }) {
  return (
    <ParadigmTable
      audioFolder={audioFolder ? `module02/${audioFolder}` : undefined}
      columnVisibility={{ pronounEnglish: false, pronounOneida: false }}
      data={data}
    />
  );
}

function AliveDeadSection() {
  return (
    <>
      <SectionHeading id="verb-alive" level={2}>
        unheʔ — (to be) alive
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>unheʔ</b>. It is a U-stem root word
        and uses red pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module02/alive"
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={unheJson}
      />
      <SectionHeading id="verb-dead" level={2}>
        iheyu / ʌheyu — (to be) dead / (to have) died
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>iheyu</b>. It is an irregular root
        word where its stem depends on the pronominal. It can be thought of as a
        Λ-stem root word for all pronominals except the "me" pronominal, where
        it is an I-stem root word. In both cases, it uses blue pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module02/dead"
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
        atukohtu — to have passed on
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>atukohtu</b>. It is an A-stem root
        word and uses blue pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module02/passed_on"
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
  const data = [
    {
      translation: "aknulhaʔkʌ́",
      en: "my late mother",
      audioFile: "module02/deceased/mother.mp3",
    },
    {
      translation: "lakeʔnikʌ́",
      en: "my late father",
      audioFile: "module02/deceased/father.mp3",
    },
    {
      translation: "aksotkʌ́",
      en: "my late grandmother",
      audioFile: "module02/deceased/grandmother.mp3",
    },
    {
      translation: "laksotkʌ́",
      en: "my late grandfather",
      audioFile: "module02/deceased/grandfather.mp3",
    },
    {
      translation: "yuknulhaʔkʌ́",
      en: "my late aunt",
      audioFile: "module02/deceased/aunt.mp3",
    },
    {
      translation: "laknulhaʔkʌ́",
      en: "my late uncle",
      audioFile: "module02/deceased/uncle.mp3",
    },
    {
      translation: "yukeʔkʌ́haʔkʌ́",
      en: "my late older sister",
      audioFile: "module02/deceased/older_sister.mp3",
    },
    {
      translation: "lakeʔkʌhaʔkʌ́",
      en: "my late older brother",
      audioFile: "module02/deceased/older_brother.mp3",
    },
    {
      translation: "kheʔkʌhaʔkʌ́",
      en: "my late younger sister(s)",
      audioFile: "module02/deceased/younger_sister.mp3",
    },
    {
      translation: "liʔkʌhaʔkʌ́",
      en: "my late younger brother",
      audioFile: "module02/deceased/younger_brother.mp3",
    },
    {
      translation: "kheyuhwatʌʔkʌ́",
      en: "my late niece(s) & nephew(s)",
      audioFile: "module02/deceased/niece.mp3",
    },
    {
      translation: "liyuhwatʌʔkʌ́",
      en: "my late nephew",
      audioFile: "module02/deceased/nephew.mp3",
    },
    {
      translation: "kheyʌhaʔkʌ́",
      en: "my late daughter",
      audioFile: "module02/deceased/daughter.mp3",
    },
    {
      translation: "liyʌhaʔkʌ́",
      en: "my late son",
      audioFile: "module02/deceased/son.mp3",
    },
    {
      translation: "kheyatlehaʔkʌ́",
      en: "my late granddaughter(s) / grandchildren",
      audioFile: "module02/deceased/granddaughter.mp3",
    },
    {
      translation: "liyatlehaʔkʌ́",
      en: "my late grandson",
      audioFile: "module02/deceased/grandson.mp3",
    },
    {
      translation: "ukyalaʔsehaʔkʌ́",
      en: "my late cousin",
      audioFile: "module02/deceased/cousin.mp3",
    },
    {
      translation: "ukyatʌloʔkʌ́",
      en: "my late friend",
      audioFile: "module02/deceased/friend.mp3",
    },
  ];

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
        and uses blue pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module02/old"
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
        root word and uses blue pronominals. It makes use of the{" "}
        <LinkWrapper page="dim" />.
      </Text>
      <ParadigmTable
        audioFolder="module02/young"
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
          21 - 29: <b>tewáhsʌ̲</b> then the second digit
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
        audioFolder="module02/age"
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
  const data = [
    ["They are the same", "Né· tshá·kat"],
    ["Are they the same?", "Né· kʌ́ tshá·kat"],
    ["They are not the same", "yáh né· tshá·kat té·kʌ"],
    ["Someone and I are the same age", "tshaʔteyuknohsliyá·ku̲"],
    ["You two are the same age", "tshaʔtesnohsliyá·ku̲"],
    ["We are all the same age", "tshaʔteyukyohsliyá·ku̲"],
    ["You all are the same age", "tshaʔtetsyohsliyá·ku̲"],
    ["They Ms are the same age", "tshaʔtehonohsliyá·ku̲"],
    ["They Fs are the same age", "tshaʔteyonohsliyá·ku̲"],
    ["You and I have the same last name", "tshaʔteyót tsiʔ tetnihsʌná·se·le̲ʔ"],
    [
      "Someone and I have the same last name",
      "tshaʔteyót tsiʔ teʔyaknihsʌná·se·le̲ʔ",
    ],
    ["You two have the same last name", "tshaʔteyót tsiʔ tehsnihsʌná·se·le̲ʔ"],
    ["Two males have the same last name", "tshaʔteyót tsiʔ tehnihsʌná·se·le̲ʔ"],
    [
      "Two females have the same last name",
      "tshaʔteyót tsiʔ teknihsʌná·se·le̲ʔ",
    ],
    ["We all have the same last name", "tshaʔteyót tsiʔ tetwahsʌná·se·le̲ʔ"],
    [
      "They and l have the same last name",
      "tshaʔteyót tsiʔ teyakwahsʌná·se·le̲ʔ",
    ],
    ["You all have the same last name", "tshaʔteyót tsiʔ tehswahsʌná·se·le̲ʔ"],
    ["They Ms have the same last name", "tshaʔteyót tsiʔ tehatihsʌná·se·le̲ʔ"],
    ["They Fs have the same last name", "tshaʔteyót tsiʔ tekutihsʌná·se·le̲ʔ"],
  ];
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
        data={data.map(TableWrapper.mapEnglishAndTranslation).map((row, i) => ({
          ...row,
          audioFile: `module02/things_that_are_the_same/${i + 1}.mp3`,
        }))}
      />
    </>
  );
}
