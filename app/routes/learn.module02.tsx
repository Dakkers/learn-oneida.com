import { Box } from "@/design/components/box";
import { Flex } from "@/design/components/flex";
import { Notice } from "@/design/components/notice";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { TableOfContents as TOC } from "~/components/TableOfContents";

import nuwehseRed from "../data/nuwehse-red";
import yʌteliRed from "../data/yʌteli-red";
import nolukhwaRed from "../data/nolukhwa-red";
import nuwehseBlue from "../data/nuwehse-blue";
import yʌteliBlue from "../data/yʌteli-blue";
import nolukhwaBlue from "../data/nolukhwa-blue";
import nuwehsePurple from "../data/nuwehse-purple";
import yʌteliPurple from "../data/yʌteli-purple";
import nolukhwaPurple from "../data/nolukhwa-purple";
import nuwehseRefl from "../data/nuwehse-refl";
import nolukhwaRefl from "../data/nolukhwa-refl";
import yʌteliRefl from "../data/yʌteli-refl";
import liwanutuseData from "../data/liwanutuse";
import hloliData from "../data/hloli";
import hloliNegatedData from "../data/hloli-negated";
import liwanutuseNegatedData from "../data/liwanutuse-negated";
import unheJson from "../data/unhe";
import iheyuJson from "../data/iheyu";
import atukohtuJson from "../data/atukohtu";
import kstʌhaJson from "../data/kstʌha";
import kʌʔni_yʌhaJson from "../data/kʌʔni_yʌha";
import ohsliyakuJson from "../data/ohsliyaku";

import { TableWrapper } from "@/design/components/tableWrapper";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PURPLES_MAP,
  pronouns,
} from "~/utils";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "~/components/TextBreakdown";
import { PronominalColor } from "~/components/Pronominal";
import { List } from "@/design/components/list";
import { Letter } from "~/components/Letter";
import _ from "lodash";
import {
  FamilyResource,
  FamilyTableOfContentItems,
} from "~/components/resources/Family";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "~/components/SectionHeading";
import { ParticlesTable } from "~/components/resources/ParticlesTable";
import { LastNamesResource } from "~/components/resources/LastNames";
import { AboutSomeoneResource } from "~/components/resources/AboutSomeone";
import { SimilarInAppearanceResource } from "~/components/resources/SimilarInAppearance";
import { BeingDifferentResource } from "~/components/resources/BeingDifferent";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { DialogueTable, DialogueTableData } from "~/components/DialogueTable";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 2" },
    { name: "description", content: "Module 2 of the Oneida curriculum" },
  ];
};

export default function LearnModule02() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 2</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>
      <Text>In this module, we&lsquo;ll cover the following:</Text>

      <TOC>
        <TOC.Item
          label={
            <>
              New verbs: <b>nuwehseʔ, yʌteli, nolukhwaʔ</b>
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

      <FamilyResource level={2} />

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

      <DialogueSection />
      <LastNamesResource level={2} />
      <AboutSomeoneResource level={2} />
      <SimilarInAppearanceResource level={2} />
      <ThingsThatAreTheSameSection />
      <BeingDifferentResource level={2} />

      <TranslationExercisesSection group="module02" />
    </Flex>
  );
}

function VerbsSection() {
  return (
    <>
      <SectionHeading id="new-verbs" level={2}>
        New verbs
      </SectionHeading>
      <Text>Below are the paradigms for three new verbs:</Text>
      <List>
        <List.Item>
          <b>nuwehseʔ</b> — to like
        </List.Item>
        <List.Item>
          <b>yʌteli</b> — to know, to be familiar with
        </List.Item>
        <List.Item>
          <b>nolukhwaʔ</b> — to love
        </List.Item>
      </List>
      <Text>
        All of these begin with a consonant so they use C-stem pronominals.
      </Text>

      <SectionHeading id="new-verbs-red" level={3}>
        Red pronominals
      </SectionHeading>
      <VerbsTable
        color="red"
        enData={PRONOUN_MAP_EN}
        headerText="... {{verb}} it"
        keys={[...pronouns]}
        knowData={yʌteliRed}
        likeData={nuwehseRed}
        loveData={nolukhwaRed}
      />
      <SectionHeading id="new-verbs-blue" level={3}>
        Blue pronominals
      </SectionHeading>
      <VerbsTable
        color="blue"
        enData={PRONOUN_MAP_EN_OBJECTIVE}
        headerText="it {{verb}} ..."
        keys={[...pronouns]}
        knowData={yʌteliBlue}
        likeData={nuwehseBlue}
        loveData={nolukhwaBlue}
      />
      <SectionHeading id="new-verbs-purple" level={3}>
        Purple pronominals
      </SectionHeading>
      <VerbsTable
        color="purple"
        enData={PURPLES_MAP}
        headerText="... {{verb}} ..."
        keys={Object.keys(PURPLES_MAP)}
        knowData={yʌteliPurple}
        likeData={nuwehsePurple}
        loveData={nolukhwaPurple}
      />
    </>
  );
}

function ReflexiveSection() {
  return (
    <>
      <SectionHeading id="reflexive" level={2}>
        Reflexive
      </SectionHeading>
      <Text>
        We can add an additional prefix to a root word to make the root word
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
      <VerbsTable
        color="red"
        enData={PRONOUN_MAP_EN}
        headerText="... {{verb}} oneself"
        keys={[...pronouns]}
        knowData={yʌteliRefl}
        likeData={nuwehseRefl}
        loveData={nolukhwaRefl}
      />
    </>
  );
}

function ReciprocalSection() {
  return (
    <>
      <SectionHeading id="reciprocal" level={2}>
        Reciprocal
      </SectionHeading>
      <Text>
        We can go even further and add yet another prefix to a root word to make
        the root word apply between two subjects &quot;in each direction&quot;.
        In English, an example of this is &quot;Someone and I like each
        other&quot;. The term for this is &quot;reciprocal&quot;.
      </Text>
      <Text>
        To translate this sentence into Oneida, let&lsquo;s first take the root
        word for &quot;to like&quot;, <b>nuwehseʔ</b>, and apply the reflexive
        prefix: <b>atatnuwehseʔ</b>. This is now an A-stem word so we can look
        at the red pronominals table to find the corresponding prefix for
        &quot;Someone and I&quot;, which is <Letter>yaky</Letter>. So far we
        have <b>yakyatatnú·wehse̲ʔ</b>, but if you look in the previous section,
        this means &quot;Someone and I like ourselves&quot;. To make it
        reciprocal, we add <Letter>te</Letter> at the beginning.
      </Text>
      <Text>
        So the result is: <i>teyakyatatnú·wehse̲ʔ</i>.
      </Text>
      <VerbsTable
        color="red"
        enData={PRONOUN_MAP_EN}
        headerText="... {{verb}} oneself"
        keys={[...pronouns]}
        knowData={magicalThing(yʌteliRefl)}
        likeData={magicalThing(nuwehseRefl)}
        loveData={magicalThing(nolukhwaRefl)}
      />
    </>
  );
}

function VerbsTable({
  color,
  enData,
  headerText,
  keys,
  knowData,
  likeData,
  loveData,
}: {
  color: PronominalColor;
  enData: Record<string, string>;
  headerText: string;
  keys: string[];
  // @ts-expect-error To be addressed in LO-21
  knowData: SomeData;
  // @ts-expect-error To be addressed in LO-21
  likeData: SomeData;
  // @ts-expect-error To be addressed in LO-21
  loveData: SomeData;
}) {
  let typeFallback: BreakdownType | undefined;
  if (color === "red") {
    typeFallback = "PR";
  } else if (color === "blue") {
    typeFallback = "PB";
  } else if (color === "purple") {
    typeFallback = "PP";
  }

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "en",
        header: "",
      },
      {
        accessorKey: "like",
        cell: (value: BreakdownArray) => (
          <TextBreakdown breakdown={value} typeFallback={typeFallback} />
        ),
        header: headerText.replace(
          "{{verb}}",
          color === "blue" ? "likes" : "like"
        ),
      },
      {
        accessorKey: "know",
        cell: (value) => (
          <TextBreakdown breakdown={value} typeFallback={typeFallback} />
        ),
        header: headerText.replace(
          "{{verb}}",
          color === "blue" ? "knows" : "know"
        ),
      },
      {
        accessorKey: "love",
        cell: (value) => (
          <TextBreakdown breakdown={value} typeFallback={typeFallback} />
        ),
        header: headerText.replace(
          "{{verb}}",
          color === "blue" ? "loves" : "love"
        ),
      },
    ],
    [color, headerText, typeFallback]
  );

  const rows = React.useMemo(
    () =>
      keys.map((key) => ({
        en: enData[key],
        like: getBreakdown(likeData, key),
        love: getBreakdown(loveData, key),
        know: getBreakdown(knowData, key),
      })),
    [keys, enData, likeData, knowData, loveData]
  );

  // @ts-expect-error To be addressed in LO-12
  return <TableWrapper columns={columns} data={rows} />;
}

function CommandsSection() {
  return (
    <>
      <SectionHeading id="commands" level={2}>
        Commands
      </SectionHeading>
      <Text>
        Here we introduce commands, which have different pronominals in some
        cases. The two commands are:
      </Text>
      <List>
        <List.Item>
          <b>hlo·li̲ʔ̲·</b> — to tell someone
        </List.Item>
        <List.Item>
          <b>liwanu·túse̲</b> — to ask someone
        </List.Item>
      </List>
      <SectionHeading id="commands-tell" level={3}>
        <b>hlo·li̲ʔ̲·</b> — to tell someone
      </SectionHeading>
      <CommandsTable data={hloliData} verb="tell" />
      <SectionHeading id="commands-ask" level={3}>
        <i>liwanu·túse̲</i> — to ask someone
      </SectionHeading>
      <CommandsTable data={liwanutuseData} verb="ask" />
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
        We can negate the commands learned above too. Notice that some of the
        pronominals are different.
      </Text>
      <SectionHeading id="negated-commands-tell" level={3}>
        <b>Takʌ ...hlo·li̲’̲·</b> — don&lsquo;t tell someone
      </SectionHeading>
      <CommandsTable data={hloliNegatedData} negated verb="tell" />
      <SectionHeading id="negated-commands-ask" level={3}>
        <b>Takʌ ...liwanu·túse̲</b> — don&lsquo;t ask someone
      </SectionHeading>
      <CommandsTable data={liwanutuseNegatedData} negated verb="ask" />
    </>
  );
}

function CommandsTable({
  data,
  negated = false,
  verb,
}: {
  // @ts-expect-error To be addressed in LO-21
  data: SomeOtherData;
  negated?: boolean;
  verb: string;
}) {
  const keys = ["you_me", "you_us_exclusive", "you_her", "you_him"] as const;
  const negativeText = negated ? "Don't" : "";
  const en = {
    you_me: [`${negativeText} (you) ${verb} me`],
    you_us_exclusive: [
      `${negativeText} you ${verb} all of us`,
      `${negativeText} all of you ${verb} me`,
      `${negativeText} all of you ${verb} all of us`,
    ],
    you_her: [`${negativeText} (you) ${verb} her`],
    you_him: [`${negativeText} (you) ${verb} him`],
  };
  return (
    <TableWrapper
      columns={TableWrapper.columnsParadigmPurple}
      data={keys.map((key) => ({
        // @ts-expect-error To be addressed in LO-21
        breakdown: data.phrases.find((p) => p.key === key).breakdown,
        en: en[key],
      }))}
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
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-2, LO-11, LO-21
        data={unheJson}
      />
      <SectionHeading id="verb-dead" level={2}>
        iheyu — (to be) dead / (to have) died
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>iheyu</b>. It is an I-stem root word
        and uses blue pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-2, LO-11
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
        allowedPronouns={["m", "f", "it", "ms", "fs"]}
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-2, LO-11
        data={atukohtuJson}
      />
    </>
  );
}

function DeceasedRelativesSection() {
  const data = [
    { on: "aknulhaʔkʌ́", en: "my late mother" },
    { on: "lakeʔnikʌ́", en: "my late father" },
    { on: "aksotkʌ́", en: "my late grandmother" },
    { on: "laksotkʌ́", en: "my late grandfather" },
    { on: "yuknulhaʔkʌ́", en: "my late aunt" },
    { on: "laknulhaʔkʌ́", en: "my late uncle" },
    { on: "yukeʔkʌ́haʔkʌ́", en: "my late older sister" },
    { on: "lakeʔkʌhaʔkʌ́", en: "my late older brother" },
    { on: "kheʔkʌhaʔkʌ́", en: "my late younger sister(s)" },
    { on: "liʔkʌhaʔkʌ́", en: "my late younger brother" },
    { on: "kheyuhwatʌʔkʌ́", en: "my late niece(s) & nephew(s)" },
    { on: "liyuhwatʌʔkʌ́", en: "my late nephew" },
    { on: "kheyʌhaʔkʌ́", en: "my late daughter" },
    { on: "liyʌhaʔkʌ́", en: "my late son" },
    { on: "kheyatlehaʔkʌ́", en: "my late granddaughter(s) / grandchildren" },
    { on: "liyatlehaʔkʌ́", en: "my late grandson" },
    { on: "ukyalaʔsehaʔkʌ́", en: "my late cousin" },
    { on: "ukyatʌloʔkʌ́", en: "my late friend" },
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
      <TableWrapper columns={TableWrapper.columnsEnglishOneida} data={data} />
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
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-21
        data={kstʌhaJson}
      />

      <SectionHeading id="verb-young" level={2}>
        kʌʔ nit...yʌha — (to be) young
      </SectionHeading>
      <Text>
        Below is the paradigm table for <b>kʌʔ nit...yʌha</b>. It is a C-stem
        root word and uses blue pronominals.
      </Text>
      <Text>
        This one is different from the words discussed so far. The author is
        unsure of why there the <Letter>nit</Letter> occurs before the
        pronominal.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-21
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
  const data = [
    { en: "1", on: "úska" },
    { en: "2", on: ["tékni", "tékeni̲"] },
    { en: "3", on: "áhsʌ̲" },
    { en: "4", on: "kayé" },
    { en: "5", on: "wisk" },
    { en: "6", on: "yá·yak" },
    { en: "7", on: "tsyá·tak" },
    { en: "8", on: "tékluʔ" },
    { en: "9", on: "wá·tluʔ" },
    { en: "10", on: "oyé·li̲" },
    { en: "11", on: "úska yawʌ·lé·" },
    { en: "12", on: "tékni yawʌ·lé·" },
    { en: "13", on: "áhsʌ yawʌ·lé·" },
    { en: "14", on: "kayé yawʌ·lé·" },
    { en: "15", on: "wisk yawʌ·lé·" },
    { en: "16", on: "yá·yak yawʌ·lé·" },
    { en: "17", on: "tsyá·tak yawʌ·lé·" },
    { en: "18", on: "tékluʔ yawʌ·lé·" },
    { en: "19", on: "wá·tluʔ yawʌ·lé·" },
    { en: "20", on: "tewáhsʌ" },
    { en: "21", on: "tewáhsʌ úska" },
    { en: "22", on: "tewáhsʌ tékni" },
    { en: "30", on: "áhsʌ niwáhsʌ" },
    { en: "40", on: "kayé niwáhsʌ" },
    { en: "50", on: "wisk niwáhsʌ" },
    { en: "60", on: "yá·yak niwáhsʌ" },
    { en: "70", on: "tsyá·tak niwáhsʌ" },
    { en: "80", on: "tékluʔ niwáhsʌ" },
    { en: "90", on: "wá·tluʔ niwáhsʌ" },
    { en: "99", on: "wá·tluʔ niwáhsʌ wá·tluʔ" },
    { en: "100", on: "úska tewʌʔnyáweluʔ" },
    { en: "101", on: "úska tewʌʔnyáweluʔ úska" },
    { en: "110", on: "úska tewʌʔnyáweluʔ oyé·li" },
    { en: "111", on: "úska tewʌʔnyáweluʔ úska yawʌ·lé" },
    { en: "120", on: "úska tewʌʔnyáweluʔ tewáhsʌ" },
    { en: "130", on: "úska tewʌʔnyáweluʔ áhsʌ niwáhsʌ" },
    { en: "140", on: "úska tewʌʔnyáweluʔ kayé niwáhsʌ" },
    { en: "150", on: "úska tewʌʔnyáweluʔ wisk niwáhsʌ" },
    { en: "160", on: "úska tewʌʔnyáweluʔ yá·yak niwáhsʌ" },
    { en: "170", on: "úska tewʌʔnyáweluʔ tsyá·tak niwáhsʌ" },
    { en: "180", on: "úska tewʌʔnyáweluʔ tékluʔ niwáhsʌ" },
    { en: "190", on: "úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ" },
    { en: "199", on: "úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ" },
    { en: "200", on: "tékni tewʌʔnyáweluʔ" },
    { en: "201", on: "tékni tewʌʔnyáweluʔ úska" },
    { en: "300", on: "áhsʌ tewʌʔnyáweluʔ" },
    { en: "400", on: "kayé tewʌʔnyáweluʔ" },
    { en: "500", on: "wisk tewʌʔnyáweluʔ" },
    { en: "600", on: "yá·yak tewʌʔnyáweluʔ" },
    { en: "700", on: "tsya·ták tewʌʔnyáweluʔ" },
    { en: "800", on: "tékluʔ tewʌʔnyáweluʔ" },
    { en: "900", on: "wá·tluʔ tewʌʔnyáweluʔ" },
    { en: "999", on: "wá·tluʔ tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ" },
    { en: "1000", on: "oyé·li tewʌʔnyáweluʔ" },
    { en: "1001", on: "oyé·li tewʌʔnyáweluʔ úska" },
    { en: "1111", on: "úska yawʌ·lé tewʌʔnyáweluʔ úska yawʌ·lé" },
    { en: "1200", on: "tékni yawʌ·lé tewʌʔnyáweluʔ" },
    { en: "1300", on: "áhsʌ yawʌ·lé tewʌʔnyáweluʔ" },
    { en: "1999", on: "wá·tlu yawʌ·lé tewʌʔnyáweluʔ wá·tlu  niwáhsʌ wá·tlu" },
    { en: "2000", on: "tewáhsʌ tewʌʔnyáweluʔ" },
  ];

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
          11 - 19: the second digit comes first, followed by <b>yawa·lé·</b>
        </List.Item>
        <List.Item>
          21 - 29: <b>tewahsʌ</b> then the second digit
        </List.Item>
        <List.Item>
          30 - 99: the first digit, <b>niwáhsʌ</b>, then the second digit
        </List.Item>
        <List.Item>
          100 - 9999: the number of 100s, <b>tewʌʔnyáweluʔ</b>, then follow the
          rule above for the last 2 digits
        </List.Item>
      </List>
      <TableWrapper columns={TableWrapper.columnsEnglishOneida} data={data} />
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
        In Oneida, the more literal translation to say &quot;I am X years
        old&quot; is &quot;I have crossed X winters&quot;. The root word is has
        an O-stem and uses blue pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        // @ts-expect-error To be addressed in LO-21
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
  const part1: DialogueTableData = [
    [
      "Tó· naʔtehaohsliyá·ku neʔn yaʔníha̲",
      "Thó ha wisk niwáhsʌ naʔtehaohsliyá·ku lakeʔníha̲",
    ],
    ["To·kʌ́skeʔ kʌ́ tho naʔtehaohsliyá·ku̲", "ʌ́·, tho naʔtehaohsliyá·ku̲"],
    [
      "Úhkaʔ náhteʔ sheyʌtelí né·n sʌ́haʔ kʌʔnityako·yʌ́·",
      [
        "Sʌ́haʔ kʌʔnitho·yʌ́· loʔniha̲",
        "Íhsi nú· né· téklu niwáhsʌ naʔtehaohsliyá·ku̲",
      ],
    ],
    [
      "Tetsitsyatyelʌ́ kʌ́ neʔn yahsó tha",
      [
        "Tah. Yah thaʔtetsyakyatyelʌ́ˍ",
        "Íhsi né· wisk niwáhsʌ niyohslaké sʌ́haʔ lokstʌ́haʔ tsiʔ ni·yó t niʔí·",
      ],
    ],
    [
      "Shakoyʌtelí kʌ́ akhwa·tsíle̲",
      "Táh, né· ok laulhá laohwa·tsíleʔ shakoyʌtelíˍ",
    ],
  ];
  const part2: DialogueTableData = [
    [
      [
        "Úhkaʔ náhteʔ sʌ́haʔ kʌʔnityakoyʌhaʔné· yesayʌʔokuha̲",
        "Yaʔníha kʌ́ katʌ sanulhá·",
      ],
      "Lakeʔníha sʌ́haʔ lokstʌ́haʔ tsiʔ ni·yót neʔn aknulhá·",
    ],
    ["Tó· nikú sʌ́haʔ lokstʌ́ha̲ʔ", "Tewáhsʌ niyohslaké sʌ́haʔ lokstʌ́ha̲ʔ"],
    ["E·só· sʌ́haʔ lokstʌ́ha̲, wáhi̲", "ʌ́·"],
  ];
  const part3: DialogueTableData = [
    [
      "Sʌ́haʔ kʌ́ akokstʌ́haʔ né· ukyalaséha Kowáklit tsiʔ ni·yó t neʔn tsyalá·séʔ Tu·wís",
      "Tah. Ukyalá·seʔ Tu·wís sʌ́haʔ lokstʌ́haʔ tsiʔ ni·yó ht né· tsyalá·seʔ Kowáklit",
    ],
    [
      "Kayé kʌ́ niwáhsʌ naʔtehaohsliyá·ku̲",
      ["Tah. Yah tho tehokstʌ́ha̲ʔ", "Áhsʌ ok niwáhsʌ wá·tlu naʔtehaohsliyá·ku̲"],
    ],
    [
      "Sanú hteʔ kʌ́ tó· naʔteyakaohsliyá·ku né· ukyalasé Kowáklit",
      "Tah. Yah tewakánuhteʔ, uhkaʔ náhteʔ né· akonulhá·",
    ],
    [
      "Yukeʔkʌ́ha Ní·ki neʔn akonulhá·",
      "Tó· sʌ́haʔ akokstʌ́haʔ Ní·ki tsiʔ ni·yót niʔiséˍ·",
    ],
    [
      "Thohaʔ oyé·li niyohslaké sʌ́haʔ akokstʌ́haʔ tsiʔ ni·yó t niʔí·",
      "Yah yeksá· té·kʌ, wáhi̲",
    ],
    ["To·kʌ́skeʔ kʌ́", "ʌ́·"],
  ];

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <Text>Here is some dialogue using terminology from module 1 and 2.</Text>
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
    </>
  );
}

function ThingsThatAreTheSameSection() {
  const data = [
    ["They are the same", "Né· tshá·kat"],
    ["Are they the same?", "Né· kʌ tshá·kat"],
    ["They are not the same", "yah né· tshá·kat té·kʌ"],
    ["Someone and I are the same age", "tshaʔteyuknohsliyá·ku"],
    ["You two are the same age", "tshaʔ tesnohsliyá·ku"],
    ["We are all the same age", "tshaʔ teyukyohsliyá·ku"],
    ["You all are the same age", "tshaʔ tetsyohsliyá·ku"],
    ["They Ms are the same age", "tshaʔ tehonohsliyá·ku"],
    ["They Fs are the same age", "tshaʔ teyonohsliyá·ku"],
    ["You and I have the same last name", "tshaʔ teyót tsiʔ tetnihsʌná·se·leʔ"],
    [
      "Someone and I have the same last name",
      "tshaʔ teyót tsiʔ teʔyaknihsʌná·se·leʔ",
    ],
    ["You two have the same last name", "tshaʔ teyót tsiʔ tehsnihsʌná·se·leʔ"],
    ["Two males have the same last name", "tshaʔteyót tsiʔ tehnihsʌná·se·leʔ"],
    [
      "Two females have the same last name",
      "tshaʔ teyót tsiʔ teknihsʌná·se·leʔ",
    ],
    ["We all have the same last name", "tshaʔ teyót tsiʔ tetwahsʌná·se·leʔ"],
    [
      "They and l have the same last name",
      "tshaʔ teyót tsiʔ teyakwahsʌná·se·leʔ",
    ],
    ["You all have the same last name", "tshaʔ teyót tsiʔ tehswahsʌná·se·leʔ"],
    ["They Ms have the same last name", "tshaʔ teyót tsiʔ tehatihsʌná·se·leʔ"],
    ["They Fs have the same last name", "tshaʔ teyót tsiʔ tekutihsʌná·se·leʔ"],
  ];
  return (
    <>
      <SectionHeading id="things-that-are-the-same" level={2}>
        Things that are the same
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={data.map(TableWrapper.mapEnglishOneida)}
      />
    </>
  );
}

// @ts-expect-error To be addressed in LO-21
const getBreakdown = (data, key) =>
  data.phrases.find(
    // @ts-expect-error To be addressed in LO-21
    (p: SomethingElseEntirely) => p.key === key || p.pronoun === key
  )?.breakdown;

// @ts-expect-error To be addressed in LO-21
function magicalThing(data) {
  const result = _.cloneDeep(data);
  for (const phrase of result.phrases) {
    const breakdown = phrase.breakdown;
    if (breakdown[0].type === "RPL") {
      breakdown.splice(0, 1);
    }
    breakdown.unshift({ text: "te", type: "RECP" });
  }
  return result;
}
