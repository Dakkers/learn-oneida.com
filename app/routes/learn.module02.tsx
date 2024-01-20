import { Box } from "@/design/ui/box";
import { Flex } from "@/design/ui/flex";
import { Heading } from "@/design/ui/heading";
import { Notice } from "@/design/ui/notice";
import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { TableOfContents as TOC } from "~/components/TableOfContents";

import nuwehseRed from "../data/nuwehse-red.json";
import yʌteliRed from "../data/yʌteli-red.json";
import nolukhwaRed from "../data/nolukhwa-red.json";
import nuwehseBlue from "../data/nuwehse-blue.json";
import yʌteliBlue from "../data/yʌteli-blue.json";
import nolukhwaBlue from "../data/nolukhwa-blue.json";
import nuwehsePurple from "../data/nuwehse-purple.json";
import yʌteliPurple from "../data/yʌteli-purple.json";
import nolukhwaPurple from "../data/nolukhwa-purple.json";
import nuwehseRefl from "../data/nuwehse-refl.json";
import nolukhwaRefl from "../data/nolukhwa-refl.json";
import yʌteliRefl from "../data/yʌteli-refl.json";
import liwanutuseData from "../data/liwanutuse.json";
import hloliData from "../data/hloli.json";
import hloliNegatedData from "../data/hloli-negated.json";
import liwanutuseNegatedData from "../data/liwanutuse-negated.json";
import unheJson from '../data/unhe.json'
import iheyuJson from '../data/iheyu.json'
import atukohtuJson from '../data/atukohtu.json'
import kstʌhaJson from '../data/kstʌha.json'
import kʌʔni_yʌhaJson from '../data/kʌʔni_yʌha.json'
import ohsliyakuJson from '../data/ohsliyaku.json'

import { TableWrapper } from "@/design/ui/tableWrapper";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PURPLES_MAP,
  pronouns,
} from "~/utils";
import { BreakdownType, TextBreakdown } from "~/components/TextBreakdown";
import { PronominalColor } from "~/components/Pronominal";
import { List } from "@/design/ui/list";
import { Letter } from "~/components/Letter";
import _ from "lodash";
import { FamilyResource } from "~/components/resources/Family";
import { ParadigmTable } from "~/components/ParadigmTable";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 2" },
    { name: "description", content: "Module 2 of the Oneida curriculum" },
  ];
};

export default function LearnModule02() {
  return (
    <div>
      <Heading level={1} variant="headlineL">
        Module 2
      </Heading>
      <Box py={4}>
        <Notice intent="warning">
          <strong>NOTE:</strong> This page is still under construction!
        </Notice>
      </Box>
      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>

        <TOC>
          <TOC.Item
            label={
              <>
                New verbs: <i>nuwehseʔ, yʌteli, nolukhwa̲ʔ</i>
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
        </TOC>

        <VerbsSection />

        <ReflexiveSection />
        <ReciprocalSection />

        <CommandsSection />
        <NegatedCommandsSection />

        <FamilyResource />

        <AliveDeadSection />
        <PassedOnSection />
        <DeceasedRelativesSection />

        <NumbersSection />

        <YoungOldSection />
        <AgeSection />
      </Flex>
    </div>
  );
}

function VerbsSection() {
  return (
    <>
      <Heading id="new-verbs" level={2} variant="headlineS">
        New verbs
      </Heading>
      <div>
        <Text>Below are the paradigms for three new verbs:</Text>
        <List>
          <List.Item>
            <i>nuwehseʔ</i>: to like
          </List.Item>
          <List.Item>
            <i>yʌteli</i>: to know, to be familiar with
          </List.Item>
          <List.Item>
            <i>nolukhwa̲ʔ</i>: to love
          </List.Item>
        </List>
        <Text>
          All of these begin with a consonant so they use C-stem pronominals.
        </Text>
      </div>

      <Heading id="new-verbs-red" level={3} variant="titleM">
        Red pronominals
      </Heading>
      <VerbsTable
        color="red"
        enData={PRONOUN_MAP_EN}
        headerText="... {{verb}} it"
        keys={[...pronouns]}
        knowData={yʌteliRed}
        likeData={nuwehseRed}
        loveData={nolukhwaRed}
      />
      <Heading id="new-verbs-blue" level={3} variant="titleM">
        Blue pronominals
      </Heading>
      <VerbsTable
        color="blue"
        enData={PRONOUN_MAP_EN_OBJECTIVE}
        headerText="it {{verb}} ..."
        keys={[...pronouns]}
        knowData={yʌteliBlue}
        likeData={nuwehseBlue}
        loveData={nolukhwaBlue}
      />
      <Heading id="new-verbs-purple" level={3} variant="titleM">
        Purple pronominals
      </Heading>
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
      <Heading id="new-verbs" level={2} variant="headlineS">
        Reflexive
      </Heading>
      <Text>
        We can add an additional prefix to a root word to make the root word
        apply to oneself. For example, <i>knú·wehseʔ</i> means &quot;I like it&quot;.
        Adding the prefix <Letter>atat</Letter> before the root word and after
        the pronominal will translate to &quot;I like myself&quot;: <i>katatnú·wehseʔ</i>.
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
      <Heading id="new-verbs" level={2} variant="headlineS">
        Reciprocal
      </Heading>
      <Text>
        We can go even further and add yet another prefix to a root word to make
        the root word apply between two subjects &quot;in each direction&quot;.
        In English, an example of this is &quot;Someone and I like each
        other&quot;. The term for this is &quot;reciprocal&quot;.
      </Text>
      <Text>
        To translate this sentence into Oneida, let&lsquo;s first take the root
        word for &quot;to like&quot;, <i>nuwehseʔ</i>, and apply the reflexive
        prefix: <i>atatnuwehseʔ</i>. This is now an A-stem word so we can look
        at the red pronominals table to find the corresponding prefix for
        &quot;Someone and I&quot;, which is <Letter>yaky</Letter>. So far we
        have <i>yakyatatnú·wehseʔ</i>, but if you look in the previous section,
        this means &quot;Someone and I like ourselves&quot;. To make it
        reciprocal, we add <Letter>te</Letter> at the beginning.
      </Text>
      <Text>
        So the result is: <i>teyakyatatnú·wehseʔ</i>.
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
        cell: (value) => (
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

  return <TableWrapper columns={columns} data={rows} />;
}

function CommandsSection() {
  return (
    <>
      <Heading id="commands" level={2} variant="headlineS">
        Commands
      </Heading>
      <Text>
        Here we introduce commands, which have different pronominals in some
        cases. The two commands are:
      </Text>
      <List>
        <List.Item>
          <i>hlo·li̲’̲·</i>: to tell someone
        </List.Item>
        <List.Item>
          <i>liwanu·túse̲</i>: to ask someone
        </List.Item>
      </List>
      <Heading id="commands-tell" level={3} variant="titleM">
        <i>hlo·li̲’̲·</i>: to tell someone
      </Heading>
      <CommandsTable data={hloliData} verb="tell" />
      <Heading id="commands-ask" level={3} variant="titleM">
        <i>liwanu·túse̲</i>: to ask someone
      </Heading>
      <CommandsTable data={liwanutuseData} verb="ask" />
    </>
  );
}

function NegatedCommandsSection() {
  return (
    <>
      <Heading id="commands" level={2} variant="headlineS">
        Negated Commands
      </Heading>
      <Text>
        We can negate the commands learned above too. Notice that some of the
        pronominals are different.
      </Text>
      <Heading id="commands-tell-negated" level={3} variant="titleM">
        <i>Takʌ ...hlo·li̲’̲·</i>: don&lsquo;t tell someone
      </Heading>
      <CommandsTable data={hloliNegatedData} negated verb="tell" />
      <Heading id="commands-ask-negated" level={3} variant="titleM">
        <i>Takʌ ...liwanu·túse̲</i>: don&lsquo;t ask someone
      </Heading>
      <CommandsTable data={liwanutuseNegatedData} negated verb="ask" />
    </>
  );
}

function CommandsTable({ data, negated = false, verb }) {
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
        breakdown: data.phrases.find((p) => p.key === key).breakdown,
        en: en[key],
      }))}
    />
  );
}

function AliveDeadSection () {
  return (
    <>
      <Heading id="alive-dead" level={2} variant="headlineS">
        Learn: to be alive, to be dead
      </Heading>
      <List>
        <List.Item>
          <i>unhe</i>: (to be) alive
        </List.Item>
        <List.Item>
          <i>iheyu</i> / <i>ʌheyu</i>: (to be) dead, has died
        </List.Item>
      </List>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={unheJson}
      />
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={iheyuJson}
      />
    </>
  )
}

function PassedOnSection () {
  return (
    <>
      <Heading id="passed-on" level={2} variant="headlineS">
        Learn: to have passed on
      </Heading>
      <Text><i>atukohtu</i>: (to have) passed on</Text>
      <ParadigmTable
        allowedPronouns={['m', 'f', 'it', 'ms', 'fs']}
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={atukohtuJson}
      />
    </>
  )
}

function DeceasedRelativesSection () {
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
  ]

  return (
    <>
      <Heading id="alive-dead" level={2} variant="headlineS">
        Deceased Family Members
      </Heading>
      <Text>
        In Oneida, talking about those who have passed on requires care.
        An additional suffix is either added on to the end of a word or
        replaces the last syllable of a word. The rules are:
      </Text>
      <List>
        <List.Item><i>nulhá·</i> becomes <i>nulhaʔkʌ́</i></List.Item>
        <List.Item><i>níha</i> becomes <i>nikʌ́</i></List.Item>
        <List.Item><i>sótha</i> becomes <i>sotkʌ́</i></List.Item>
        <List.Item><i>kʌ́ha</i> becomes <i>kʌhaʔkʌ́</i></List.Item>
        <List.Item><i>yʌ́ha</i> becomes <i>yʌhaʔkʌ́</i></List.Item>
        <List.Item><i>uhwatʌ́ha</i> becomes <i>uhwatʌʔkʌ́</i></List.Item>
        <List.Item><i>atléha</i> becomes <i>atlehaʔkʌ́</i></List.Item>
        <List.Item><i>alaʔséha</i> becomes <i>alaʔsehaʔkʌ́</i></List.Item>
        <List.Item><i>atʌ·ló·</i> becomes <i>atʌloʔkʌ́</i></List.Item>
      </List>
      <Text>
        Notice that, in many cases, accents, stresses, and lengths move places.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={data}
      />
    </>
  )
}

function YoungOldSection () {
  return (
    <>
      <Heading id="young-old" level={2} variant="headlineS">
        Learn: to be old, to be young
      </Heading>
      <List>
        <List.Item>
          <strong>kstʌha</strong>: (to be) old
        </List.Item>
        <List.Item>
          <strong>kʌʔ nit...yʌha</strong>: (to be) young
        </List.Item>
      </List>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={kstʌhaJson}
      />
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={kʌʔni_yʌhaJson}
      />
      <Notice intent='warning'>
        Take note of the letter &quot;i&quot; in between the &quot;nit&quot; and the pronominal for the
        phrases &quot;You are young&quot;, &quot;You two are young&quot;, and &quot;All of you are young&quot;.
      </Notice>
    </>
  )
}

function NumbersSection () {
  const data = [
    { en: '1', on: 'úska' },
    { en: '2', on: ['tékni','tékeni̲'] },
    { en: '3', on: 'áhsʌ̲' },
    { en: '4', on: 'kayé' },
    { en: '5', on: 'wisk' },
    { en: '6', on: 'yá·yak' },
    { en: '7', on: 'tsyá·tak' },
    { en: '8', on: 'tékluʔ' },
    { en: '9', on: 'wá·tluʔ' },
    { en: '10', on: 'oyé·li̲' },
    { en: '11', on: 'úska yawʌ·lé' },
    { en: '12', on: 'tékni yawʌ·lé' },
    { en: '13', on: 'áhsʌ yawʌ·lé' },
    { en: '14', on: 'kayé yawʌ·lé' },
    { en: '15', on: 'wisk yawʌ·lé' },
    { en: '16', on: 'yá·yak yawʌ·lé' },
    { en: '17', on: 'tsyá·tak yawʌ·lé' },
    { en: '18', on: 'tékluʔ yawʌ·lé' },
    { en: '19', on: 'wá·tluʔ yawʌ·lé' },
    { en: '20', on: 'tewáhsʌ' },
    { en: '21', on: 'tewáhsʌ úska' },
    { en: '22', on: 'tewáhsʌ tékni' },
    { en: '30', on: 'áhsʌ niwáhsʌ' },
    { en: '40', on: 'kayé niwáhsʌ' },
    { en: '50', on: 'wisk niwáhsʌ' },
    { en: '60', on: 'yá·yak niwáhsʌ' },
    { en: '70', on: 'tsyá·tak niwáhsʌ' },
    { en: '80', on: 'tékluʔ niwáhsʌ' },
    { en: '90', on: 'wá·tluʔ niwáhsʌ' },
    { en: '99', on: 'wá·tluʔ niwáhsʌ wá·tluʔ' },
    { en: '100', on: 'úska tewʌʔnyáweluʔ' },
    { en: '101', on: 'úska tewʌʔnyáweluʔ úska' },
    { en: '110', on: 'úska tewʌʔnyáweluʔ oyé·li' },
    { en: '111', on: 'úska tewʌʔnyáweluʔ úska yawʌ·lé' },
    { en: '120', on: 'úska tewʌʔnyáweluʔ tewáhsʌ' },
    { en: '130', on: 'úska tewʌʔnyáweluʔ áhsʌ niwáhsʌ' },
    { en: '140', on: 'úska tewʌʔnyáweluʔ kayé niwáhsʌ' },
    { en: '150', on: 'úska tewʌʔnyáweluʔ wisk niwáhsʌ' },
    { en: '160', on: 'úska tewʌʔnyáweluʔ yá·yak niwáhsʌ' },
    { en: '170', on: 'úska tewʌʔnyáweluʔ tsyá·tak niwáhsʌ' },
    { en: '180', on: 'úska tewʌʔnyáweluʔ tékluʔ niwáhsʌ' },
    { en: '190', on: 'úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ' },
    { en: '199', on: 'úska tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ' },
    { en: '200', on: 'tékni tewʌʔnyáweluʔ' },
    { en: '201', on: 'tékni tewʌʔnyáweluʔ úska' },
    { en: '300', on: 'áhsʌ tewʌʔnyáweluʔ' },
    { en: '400', on: 'kayé tewʌʔnyáweluʔ' },
    { en: '500', on: 'wisk tewʌʔnyáweluʔ' },
    { en: '600', on: 'yá·yak tewʌʔnyáweluʔ' },
    { en: '700', on: 'tsya·ták tewʌʔnyáweluʔ' },
    { en: '800', on: 'tékluʔ tewʌʔnyáweluʔ' },
    { en: '900', on: 'wá·tluʔ tewʌʔnyáweluʔ' },
    { en: '999', on: 'wá·tluʔ tewʌʔnyáweluʔ wá·tluʔ niwáhsʌ wá·tluʔ' },
    { en: '1000', on: 'oyé·li tewʌʔnyáweluʔ' },
    { en: '1001', on: 'oyé·li tewʌʔnyáweluʔ úska' },
    { en: '1111', on: 'úska yawʌ·lé tewʌʔnyáweluʔ úska yawʌ·lé' },
    { en: '1200', on: 'tékni yawʌ·lé tewʌʔnyáweluʔ' },
    { en: '1300', on: 'áhsʌ yawʌ·lé tewʌʔnyáweluʔ' },
    { en: '1999', on: 'wá·tlu yawʌ·lé tewʌʔnyáweluʔ wá·tlu  niwáhsʌ wá·tlu' },
    { en: '2000', on: 'tewáhsʌ tewʌʔnyáweluʔ' },
  ]

  return (
    <>
      <Heading id="numbers" level={2} variant="headlineS">
        Numbers
      </Heading>
      <Text>
        Counting in Oneida can be tricky. It is essential to first learn the numbers from 1 to 10.
        Then you can use the following rules:
      </Text>
      <List>
        <List.Item>11 - 19: the second digit comes first, followed by <i>yawa·lé·</i></List.Item>
        <List.Item>21 - 29: <i>tewahsʌ</i> then the second digit</List.Item>
        <List.Item>30 - 99: the first digit, <i>niwáhsʌ</i>, then the second digit</List.Item>
        <List.Item>100 - 9999: the number of 100s, <i>tewʌʔnyáweluʔ</i>, then follow the rule above for the last 2 digits</List.Item>
      </List>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={data}
      />
    </>
  )
}

function AgeSection () {
  return (
    <>
      <Heading id="age" level={2} variant="headlineS">
        Learn: (to be) an age
      </Heading>
      <Text>
        In Oneida, the more literal translation to say &quot;I am X years old&quot; is
        &quot;I have crossed X winters&quot;.
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={ohsliyakuJson}
      />
      <Text>
        As a more concerete example, the Oneida translation for &quot;I am 35 years old&quot; is
        &quot;35 naʔ tewakohsliyá·ku̲&quot;.
      </Text>
    </>
  )
}

const getBreakdown = (data, key) =>
  data.phrases.find((p) => p.key === key || p.pronoun === key)?.breakdown;

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
