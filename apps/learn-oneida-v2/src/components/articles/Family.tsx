"use client";
import motherJson from "../../data/family/mother";
import grandmotherJson from "../../data/family/grandmother";
import auntJson from "../../data/family/aunt";
import olderSisterJson from "../../data/family/sister-older";

import nieceJson from "../../data/family/niece";
import daughterJson from "../../data/family/daughter";
import granddaughterJson from "../../data/family/granddaughter";
import youngerSisterJson from "../../data/family/sister-younger";
import greatGranddaughterJson from "../../data/family/great-granddaughter";

import grandfatherJson from "../../data/family/grandfather";
import fatherJson from "../../data/family/father";
import uncleJson from "../../data/family/uncle";
import olderBrotherJson from "../../data/family/brother-older";

import greatGrandsonJson from "../../data/family/great-grandson";
import sonJson from "../../data/family/son";
import grandsonJson from "../../data/family/grandson";
import youngerBrotherJson from "../../data/family/brother-younger";
import nephewJson from "../../data/family/nephew";

import familyJson from "../../data/family/family";
import friendJson from "../../data/family/friend";
import cousinJson from "../../data/family/cousin";
import relatedJson from "../../data/family/related";
import siblingSameSexJson from "../../data/family/sibling-same-sex.json";
import siblingJson from "../../data/family/sibling.json";

import parentsJson from "../../data/family/plural/parents";
import childrenJson from "../../data/family/plural/children";
import grandparentsJson from "../../data/family/plural/grandparents";
import grandchildrenJson from "../../data/family/plural/grandchildren";

import olderSiblingsJson from "../../data/family/plural/siblings-older";
import youngerSiblingsJson from "../../data/family/plural/siblings-younger";
import unclesAuntsJson from "../../data/family/plural/uncles-aunts";
import niblingsJson from "../../data/family/plural/niblings";

import siblingsJson from "../../data/family/plural/siblings.json";
import cousinsJson from "../../data/family/plural/cousins.json";
import friendsJson from "../../data/family/plural/friends.json";

import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { BreakdownArray, TextBreakdown } from "../TextBreakdown";
import { PRONOUN_MAP_EN_POSSESSIVE, type Pronoun } from "~/utils";
import { TableOfContents as TOC } from "../TableOfContents";
import { Letter } from "../Letter";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";

export function FamilyArticle({ level = 1 }: { level: 1 | 2 }) {
  return (
    <>
      <SectionHeading id="family-members" level={level}>
        Family Members
      </SectionHeading>
      <Text>
        In Oneida, pronominals are used to designate family relations. For
        example, the root word <b>ʔkʌha</b> is used for both brother and sister,
        but the pronominals give the context so a listener knows which one it
        is. Similarly, <b>nulha</b> is the root word for mother, aunt, and
        uncle, but the pronominals give context.
      </Text>
      <Text>
        Most of the time, purple pronominals are used. When the relative is
        older, you must use the pronominal that corresponds to
        &quot;relative&quot; → &quot;person&quot;. When the relative is younger,
        use the &quot;person&quot; → &quot;relative&quot; pronominal.
      </Text>
      <Text>
        As a more concrete example, if I wanted to say &quot;my uncle&quot;, I
        would start with the root word <b>nulha</b>. My uncle is a male, and is
        older than me, so I would then look up the pronominal corresponding to
        &quot;him → me&quot; which is <Letter>lak</Letter>. Thus, the
        translation is <b>laknulhá·</b>.
      </Text>
      <Text>
        Similarly, to say &quot;your niece&quot;, start with the root word
        &quot;uhwatʌha&quot;. Look up the pronominal corresponding to &quot;you
        → her&quot; (because your niece is younger than you) and attach it to
        the root word. The result is <b>sheyuhwatʌha</b>.
      </Text>
      <Text>
        <strong>Note</strong>: the term &quot;older&quot; is misleading as it
        doesn&lsquo;t exactly mean &quot;age&quot;, but it is more to do with
        &quot;seniority&quot; in the bloodline. Even if your uncle is actually
        younger than you, you would still use the pronominal for &quot;he →
        you&quot;.
      </Text>
      <SectionHeading
        id="female-relatives-older"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Older Female Relatives
      </SectionHeading>
      <RelativesTable
        datasets={[
          { data: motherJson, en: "mother", oneida: "nulha" },
          { data: auntJson, en: "aunt", oneida: "nulha" },
          { data: grandmotherJson, en: "grandmother", oneida: "hsotha" },
          { data: olderSisterJson, en: "older sister", oneida: "ʔkʌha" },
        ]}
      />

      <SectionHeading
        id="female-relatives-younger"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Younger Female Relatives
      </SectionHeading>
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
      <SectionHeading
        id="male-relatives-older"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Older Male Relatives
      </SectionHeading>
      <RelativesTable
        datasets={[
          { data: fatherJson, en: "father", oneida: "ʔniha" },
          { data: uncleJson, en: "uncle", oneida: "nulha" },
          { data: grandfatherJson, en: "grandfather", oneida: "hsotha" },
          { data: olderBrotherJson, en: "older brother", oneida: "ʔkʌha" },
        ]}
      />
      <SectionHeading
        id="male-relatives-younger"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Younger Male Relatives
      </SectionHeading>
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

      <SectionHeading
        id="cousins"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Cousins & Friends
      </SectionHeading>
      <RelativesTable
        datasets={[
          { data: cousinJson, en: "cousin", oneida: "alaʔse" },
          { data: friendJson, en: "friend", oneida: "atʌlo" },
        ]}
        pronouns={["soni", "u2", "2m", "2f", "us", "yall"]}
      />

      <SectionHeading
        id="family"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Family
      </SectionHeading>
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

      <SectionHeading
        id="siblings"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Siblings, Related
      </SectionHeading>
      <RelativesTable
        datasets={[
          { data: siblingJson, en: "siblings", oneida: "ekʌha" },
          { data: relatedJson, en: "related", oneida: "atatnuhkweʔ" },
          {
            data: siblingSameSexJson,
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

      <SectionHeading
        id="multiple-family-members"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Multiple Family Members
      </SectionHeading>
      <RelativesTable
        datasets={[
          { data: parentsJson, en: "parents", oneida: "yʌha" },
          { data: childrenJson, en: "children", oneida: "yʌʔokuha" },
          { data: grandparentsJson, en: "grandparents", oneida: "hsotha" },
          {
            data: grandchildrenJson,
            en: "grandchildren",
            oneida: "atleʔokuha",
          },
        ]}
      />
      <RelativesTable
        datasets={[
          {
            data: olderSiblingsJson,
            en: "older siblings",
            oneida: "ʔkʌʔokuha",
          },
          {
            data: youngerSiblingsJson,
            en: "younger siblings",
            oneida: "ʔkʌʔokuha",
          },
          {
            data: unclesAuntsJson,
            en: "uncles & aunts",
            oneida: "nulha·shuha",
          },
          {
            data: niblingsJson,
            en: "nephews & nieces",
            oneida: "uhwatʌʔokuha",
          },
        ]}
      />
      <RelativesTable
        datasets={[
          { data: siblingsJson, en: "siblings", oneida: "ʔkʌʔokuha" },
          { data: cousinsJson, en: "cousins", oneida: "ʔkʌʔokuha" },
          { data: friendsJson, en: "friends", oneida: "nulha·shuha" },
        ]}
        // @ts-expect-error To be addressed in LO-16
        pronouns={["i", "u", "m", "f", "she_her"]}
      />
    </>
  );
}

function RelativesTable({
  datasets,
  pronouns = ["i", "u", "m", "f", "us", "yall"],
}: {
  // @ts-expect-error To be addressed in LO-16
  datasets: Unsure[];
  pronouns?: Pronoun[];
}) {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "pronoun",
          // @ts-expect-error To be addressed in LO-12
          cell: (value: Pronoun) => (
            <Text>{PRONOUN_MAP_EN_POSSESSIVE[value]}</Text>
          ),
          header: "Pronoun (en)",
        },
        // @ts-expect-error To be addressed in LO-12
        ...datasets.map((ds) => ({
          accessorKey: ds.en,
          cell: (value: BreakdownArray) => (
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
                <b>{ds.oneida}</b>
              </Text>
            </>
          ),
        })),
      ]}
      data={pronouns.map((pronoun) => {
        const result = { pronoun };
        for (const ds of datasets) {
          // @ts-expect-error To be addressed in LO-16
          result[ds.en] = ds.data.phrases.find(
            // @ts-expect-error To be addressed in LO-16
            (p) => p.pronoun === pronoun,
          ).breakdown;
        }
        return result;
      })}
    />
  );
}

export function FamilyTableOfContentItems() {
  return (
    <>
      <TOC.Item
        label="Female relatives (older)"
        value="female-relatives-older"
      />
      <TOC.Item
        label="Female relatives (younger)"
        value="female-relatives-younger"
      />
      <TOC.Item label="Male relatives (older)" value="male-relatives-older" />
      <TOC.Item
        label="Male relatives (younger)"
        value="male-relatives-younger"
      />
      <TOC.Item label="Cousins & friends" value="cousins" />
      <TOC.Item label="Family" value="family" />
      <TOC.Item label="Siblings" value="siblings" />
      <TOC.Item
        label="Multiple family members"
        value="multiple-family-members"
      />
    </>
  );
}
