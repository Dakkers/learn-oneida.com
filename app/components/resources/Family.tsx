

import motherJson from "../../data/family/mother.json";
import grandmotherJson from "../../data/family/grandmother.json";
import auntJson from "../../data/family/aunt.json";
import olderSisterJson from "../../data/family/sister-older.json";

import nieceJson from "../../data/family/niece.json";
import daughterJson from "../../data/family/daughter.json";
import granddaughterJson from "../../data/family/granddaughter.json";
import youngerSisterJson from "../../data/family/sister-younger.json";
import greatGranddaughterJson from "../../data/family/great-granddaughter.json";

import grandfatherJson from "../../data/family/grandfather.json";
import fatherJson from "../../data/family/father.json";
import uncleJson from "../../data/family/uncle.json";
import olderBrotherJson from "../../data/family/brother-older.json";

import greatGrandsonJson from "../../data/family/great-grandson.json";
import sonJson from "../../data/family/son.json";
import grandsonJson from "../../data/family/grandson.json";
import youngerBrotherJson from "../../data/family/brother-younger.json";
import nephewJson from "../../data/family/nephew.json";

import familyJson from "../../data/family/family.json";
import friendJson from "../../data/family/friend.json";
import cousinJson from "../../data/family/cousin.json";
import relatedJson from "../../data/family/related.json";
import siblingSameSexJson from "../../data/family/sibling-same-sex.json";
import siblingJson from "../../data/family/sibling.json";

import parentsJson from "../../data/family/plural/parents.json";
import childrenJson from "../../data/family/plural/children.json";
import grandparentsJson from "../../data/family/plural/grandparents.json";
import grandchildrenJson from "../../data/family/plural/grandchildren.json";

import olderSiblingsJson from '../../data/family/plural/siblings-older.json'
import youngerSiblingsJson from '../../data/family/plural/siblings-younger.json'
import unclesAuntsJson from '../../data/family/plural/uncles-aunts.json'
import niblingsJson from '../../data/family/plural/niblings.json'

import siblingsJson from '../../data/family/plural/siblings.json'
import cousinsJson from '../../data/family/plural/cousins.json'
import friendsJson from '../../data/family/plural/friends.json'

import { Heading } from "@/design/ui/heading";
import { TableWrapper } from "@/design/ui/tableWrapper";
import { Text } from "@/design/ui/text";
import { TextBreakdown } from "../TextBreakdown";
import { Pronoun } from "~/utils";

export function FamilyResource () {
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

      <Heading id="multiple-family-members" level={3} variant="titleM">
        Multiple Family Members
      </Heading>
      <RelativesTable
        datasets={[
          { data: parentsJson, en: "parents", oneida: "yʌha" },
          { data: childrenJson, en: "children", oneida: "yʌʔokhua" },
          { data: grandparentsJson, en: "grandparents", oneida: "hsotha" },
          { data: grandchildrenJson, en: "grandchildren", oneida: "atleʔokuha" },
        ]}
      />
      <RelativesTable
        datasets={[
          { data: olderSiblingsJson, en: "older siblings", oneida: "ʔkʌʔokuha" },
          { data: youngerSiblingsJson, en: "younger siblings", oneida: "ʔkʌʔokuha" },
          { data: unclesAuntsJson, en: "uncles & aunts", oneida: "nulha·shuha" },
          { data: niblingsJson, en: "nephews & nieces", oneida: "uhwatʌʔokuha" },
        ]}
      />
      <RelativesTable
        datasets={[
          { data: siblingsJson, en: "siblings", oneida: "ʔkʌʔokuha" },
          { data: cousinsJson, en: "cousins", oneida: "ʔkʌʔokuha" },
          { data: friendsJson, en: "friends", oneida: "nulha·shuha" },
        ]}
        pronouns = {["i", "u", "m", "f", "she_her"]}
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
