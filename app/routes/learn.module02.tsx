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

import nieceJson from "../data/family/niece.json";
import grandmotherJson from "../data/family/grandmother.json";
import motherJson from "../data/family/mother.json";
import auntJson from "../data/family/aunt.json";
import daughterJson from "../data/family/daughter.json";
import granddaughterJson from "../data/family/granddaughter.json";
import youngerSisterJson from "../data/family/sister-younger.json";
import olderSisterJson from "../data/family/sister-older.json";
import greatGranddaughterJson from "../data/family/great-granddaughter.json";
import grandfatherJson from "../data/family/grandfather.json";
import fatherJson from "../data/family/father.json";
import uncleJson from "../data/family/uncle.json";
import olderBrotherJson from "../data/family/brother-older.json";
import cousinJson from "../data/family/cousin.json";
import greatGrandsonJson from "../data/family/great-grandson.json";
import friendJson from "../data/family/friend.json";
import familyJson from "../data/family/family.json";
import sonJson from "../data/family/son.json";
import grandsonJson from "../data/family/grandson.json";
import youngerBrotherJson from "../data/family/brother-younger.json";
import nephewJson from "../data/family/nephew.json";
import siblingsJson from "../data/family/siblings.json";
import relatedJson from "../data/family/related.json";
import siblingsSameSexJson from "../data/family/siblingsSameSex.json";

import { TableWrapper } from "@/design/ui/tableWrapper";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PURPLES_MAP,
  Pronoun,
  pronouns,
} from "~/utils";
import { BreakdownType, TextBreakdown } from "~/components/TextBreakdown";
import { PronominalColor } from "~/components/Pronominal";
import { List } from "@/design/ui/list";
import { Letter } from "~/components/Letter";
import _ from "lodash";

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

        <RelativesFamilySection />
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
      <Notice intent="negative">
        <strong>NOTE:</strong> The author of this website is unsure of the
        terminology of this section and will be updating it accordingly.
      </Notice>
      <Text>
        We can add an additional prefix to a root word to make the root word
        apply to oneself. For example, <i>knú·wehseʔ</i> means "I like it".
        Adding the prefix <Letter>atat</Letter> before the root word and after
        the pronominal will translate to "I like myself": <i>katatnú·wehseʔ</i>.
      </Text>
      <Text>
        The trickiness comes from the interesting behaviour that arises from
        adding <Letter>atat</Letter> to the root word. Adding this prefix
        "changes" the root word to use an A-stem.
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
      <Notice intent="negative">
        <strong>NOTE:</strong> The author of this website is unsure of the
        terminology of this section and will be updating it accordingly.
      </Notice>
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

function RelativesFamilySection() {
  return (
    <>
      <Heading id="family-members" level={2} variant="headlineS">
        Family Members
      </Heading>
      <Heading id="female-relatives-older" level={3} variant="titleM">
        Older Female Relatives
      </Heading>
      <RelativesTable
        datasets={[
          { data: motherJson, en: "mother", oneida: "nulha" },
          { data: auntJson, en: "aunt", oneida: "nulha" },
          { data: grandmotherJson, en: "grandmother", oneida: "hsotha" },
          { data: olderSisterJson, en: "older sister", oneida: "ʔkʌha" },
        ]}
      />

      <Heading id="female-relatives-younger" level={3} variant="titleM">
        Younger Female Relatives
      </Heading>
      <RelativesTable
        datasets={[
          { data: daughterJson, en: "daughter", oneida: "yʌha" },
          { data: nieceJson, en: "niece", oneida: "uhwatʌha" },
          { data: granddaughterJson, en: "granddaughter", oneida: "atleha" },
          { data: youngerSisterJson, en: "younger sister", oneida: "ʔkʌha" },
          {
            data: greatGranddaughterJson,
            en: "great-granddaughter",
            oneida: "atleʔslʌtuheʔ",
          },
        ]}
      />
      <Heading id="male-relatives-older" level={3} variant="titleM">
        Older Male Relatives
      </Heading>
      <RelativesTable
        datasets={[
          { data: fatherJson, en: "father", oneida: "ʔniha" },
          { data: uncleJson, en: "uncle", oneida: "nulha" },
          { data: grandfatherJson, en: "grandfather", oneida: "hsotha" },
          { data: olderBrotherJson, en: "older brother", oneida: "ʔkʌha" },
        ]}
      />
      <Heading id="male-relatives-younger" level={3} variant="titleM">
        Younger Male Relatives
      </Heading>
      <RelativesTable
        datasets={[
          { data: sonJson, en: "son", oneida: "yʌha" },
          { data: nephewJson, en: "nephew", oneida: "uhwatʌha" },
          { data: grandsonJson, en: "grandson", oneida: "atleha" },
          { data: youngerBrotherJson, en: "younger brother", oneida: "ʔkʌha" },
          {
            data: greatGrandsonJson,
            en: "great-grandson",
            oneida: "atleʔslʌtuheʔ",
          },
        ]}
      />

      <Heading id="cousins" level={3} variant="titleM">
        Cousins & Friends
      </Heading>
      <RelativesTable
        datasets={[
          { data: cousinJson, en: "cousin", oneida: "alaʔse" },
          { data: friendJson, en: "friend", oneida: "atʌlo" },
        ]}
        pronouns={["soni", "u2", "2m", "2f", "us", "yall"]}
      />

      <Heading id="family" level={3} variant="titleM">
        Family
      </Heading>
      <RelativesTable
        datasets={[{ data: familyJson, en: "family", oneida: "hwa·tsíleʔ" }]}
        pronouns={[
          "i",
          "u",
          "m",
          "f",
          "it",
          "uni",
          "u2",
          "us",
          "yall",
          "ms",
          "fs",
        ]}
      />

      <Heading id="family" level={3} variant="titleM">
        Siblings, Related
      </Heading>
      <RelativesTable
        datasets={[
          { data: siblingsJson, en: "siblings", oneida: "ekʌha" },
          { data: relatedJson, en: "related", oneida: "atatnuhkweʔ" },
          {
            data: siblingsSameSexJson,
            en: "siblings of the same sex",
            oneida: "te…atahnu·téleʔ",
          },
        ]}
        pronouns={[
          "uni",
          "soni",
          "u2",
          "2m",
          "2f",
          "us",
          "theyni",
          "yall",
          "ms",
          "fs",
        ]}
      />
    </>
  );
}

function RelativesTable({
  datasets,
  pronouns = ["i", "u", "m", "f", "us", "yall"],
}: {
  datasets: any[];
  pronouns?: Pronoun[];
}) {
  return (
    <TableWrapper
      columns={datasets.map((ds) => ({
        accessorKey: ds.en,
        cell: (value) => (
          <TextBreakdown
            breakdown={value}
            prefix={ds.data.prefix}
            typeFallback={ds.data.type}
          />
        ),
        header: (
          <>
            <Text>{ds.en}</Text>
            <Text>
              <strong>{ds.oneida}</strong>
            </Text>
          </>
        ),
      }))}
      data={pronouns.map((pronoun) => {
        const result = { pronoun };
        for (const ds of datasets) {
          result[ds.en] = ds.data.phrases.find(
            (p) => p.pronoun === pronoun
          ).breakdown;
        }
        return result;
      })}
    />
  );
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
