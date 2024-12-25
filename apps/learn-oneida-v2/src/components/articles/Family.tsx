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
import { Notice, Text } from "@ukwehuwehneke/ohutsya";
import {
  BreakdownArray,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import {
  PRONOUN_MAP_EN_POSSESSIVE,
  type Pronoun,
} from "@ukwehuwehneke/language-components";
import { TableOfContents as TOC } from "../TableOfContents";
import { Letter } from "../Letter";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { ParadigmTable } from "../ParadigmTable";

export function FamilyArticle({ level = 1 }: { level: 1 | 2 }) {
  const sublevel = (level + 1) as SectionHeadingProps["level"];
  const colVisibility = { pronounEnglish: false };

  return (
    <>
      <SectionHeading id="family-members" level={level}>
        Family Members
      </SectionHeading>
      <Text>
        In Oneida, pronominals are used in combination with kin terms to
        designate family relations. For example, the kin term <b>ʔkʌha</b> is
        used for both brother and sister, but the pronominals give the context
        so a listener knows which one it is. Similarly, <b>nulha</b> is the kin
        term for mother, aunt, and uncle, but the pronominals give context.
      </Text>
      <Text>
        Most of the time, purple pronominals are used. When the relative is
        older, you must use the pronominal that corresponds to
        &quot;relative&quot; → &quot;person&quot;. When the relative is younger,
        use the &quot;person&quot; → &quot;relative&quot; pronominal.
      </Text>
      <Text>
        As a more concrete example, to say &quot;my uncle&quot;, start with the
        kin term <b>nulha</b>. My uncle is a male, and is older than me, so look
        up the pronominal corresponding to &quot;him → me&quot; which is{" "}
        <Letter>lak</Letter>. Thus, the translation is <b>laknulhá·</b>.
      </Text>
      <Text>
        Similarly, to say &quot;your niece&quot;, start with the kin term
        &quot;uhwatʌha&quot;. Look up the pronominal corresponding to &quot;you
        → her&quot; (because your niece is younger than you) and attach it to
        the root word. The result is <b>sheyuhwatʌha</b>.
      </Text>

      <Notice>
        The term &quot;older&quot; is misleading as it doesn&lsquo;t exactly
        mean &quot;age&quot;, but it is more to do with &quot;seniority&quot; in
        the bloodline. Even if your uncle is actually younger than you, you
        would still use the pronominal for &quot;he → you&quot;.
      </Notice>

      <Notice intent="warning">
        For a number of the kin term pronominals, the first letter has been
        dropped.
      </Notice>

      <SectionHeading id="family-mother" level={sublevel}>
        Mother
      </SectionHeading>
      <Text>
        The kin term is <b>nulha</b> and uses mostly blue pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={motherJson} />

      <SectionHeading id="family-aunt" level={sublevel}>
        Aunt
      </SectionHeading>
      <Text>
        The kin term is <b>nulha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={auntJson} />

      <SectionHeading id="family-grandmother" level={sublevel}>
        Grandmother
      </SectionHeading>
      <Text>
        The kin term is <b>hsotha</b> and uses mostly light-blue pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={grandmotherJson} />

      <SectionHeading id="family-older-sister" level={sublevel}>
        Older sister
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={olderSisterJson} />

      <SectionHeading id="family-daughter" level={sublevel}>
        Daughter
      </SectionHeading>
      <Text>
        The kin term is <b>yʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={daughterJson} />

      <SectionHeading id="family-niece" level={sublevel}>
        Niece
      </SectionHeading>
      <Text>
        The kin term is <b>uhwatʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={nieceJson} />

      <SectionHeading id="family-granddaughter" level={sublevel}>
        Granddaughter
      </SectionHeading>
      <Text>
        The kin term is <b>atleha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={granddaughterJson}
      />

      <SectionHeading id="family-younger-sister" level={sublevel}>
        Younger sister
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={youngerSisterJson}
      />

      <SectionHeading id="family-great-granddaughter" level={sublevel}>
        Great-granddaughter
      </SectionHeading>
      <Text>
        The kin term is <b>atleʔslʌtuheʔ</b> and uses purple pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={greatGranddaughterJson}
      />

      <SectionHeading id="family-father" level={sublevel}>
        Father
      </SectionHeading>
      <Text>
        The kin term is <b>ʔniha</b> and uses mostly purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={fatherJson} />

      <SectionHeading id="family-uncle" level={sublevel}>
        Uncle
      </SectionHeading>
      <Text>
        The kin term is <b>nulha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={uncleJson} />

      <SectionHeading id="family-grandfather" level={sublevel}>
        Grandfather
      </SectionHeading>
      <Text>
        The kin term is <b>hsotha</b> and uses mostly purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={grandfatherJson} />

      <SectionHeading id="family-older-brother" level={sublevel}>
        Older brother
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={olderBrotherJson} />

      <SectionHeading id="family-son" level={sublevel}>
        Son
      </SectionHeading>
      <Text>
        The kin term is <b>yʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={sonJson} />

      <SectionHeading id="family-nephew" level={sublevel}>
        Nephew
      </SectionHeading>
      <Text>
        The kin term is <b>uhwatʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={nephewJson} />

      <SectionHeading id="family-grandson" level={sublevel}>
        Grandson
      </SectionHeading>
      <Text>
        The kin term is <b>atleha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={grandsonJson} />

      <SectionHeading id="family-younger-brother" level={sublevel}>
        Younger brother
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={youngerBrotherJson}
      />

      <SectionHeading id="family-great-grandson" level={sublevel}>
        Great-grandson
      </SectionHeading>
      <Text>
        The kin term is <b>atleʔslʌtuheʔ</b> and uses purple pronominals.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={greatGrandsonJson}
      />

      <SectionHeading id="family-cousin" level={sublevel}>
        Cousin
      </SectionHeading>
      <Text>
        The kin term is <b>alaʔse</b> and uses both light-blue and blue
        pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={cousinJson} />

      <SectionHeading id="family-friend" level={sublevel}>
        Friend
      </SectionHeading>
      <Text>
        The base is <b>atʌlo</b> and uses both light-blue and blue pronominals.
        This is technically not a kin term.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={friendJson} />

      <SectionHeading id="family-family" level={sublevel}>
        Family
      </SectionHeading>
      <Text>
        The root word is <b>hwatsil</b> and is a regular noun, so it uses
        light-blue pronominals.
      </Text>
      <ParadigmTable
        audioFolder="module02/family"
        columnVisibility={colVisibility}
        data={familyJson}
      />

      <SectionHeading id="family-related" level={sublevel}>
        Related
      </SectionHeading>
      <Text>
        The root word is <b>atatnuhkw</b> and uses red pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={relatedJson} />

      <SectionHeading id="family-parents" level={sublevel}>
        Parents
      </SectionHeading>
      <Text>
        The kin term is <b>yʌha</b> and uses purple pronominals.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={parentsJson} />

      <SectionHeading id="family-children" level={sublevel}>
        Children
      </SectionHeading>
      <Text>
        The kin term is <b>yʌha</b> and uses purple pronominals. The ending{" "}
        <Letter>ha</Letter> gets replaced by <Letter>ʔokuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={childrenJson} />

      <SectionHeading id="family-grandparents" level={sublevel}>
        Grandparents
      </SectionHeading>
      <Text>
        The kin term is <b>hsotha</b> and uses purple pronominals. The ending{" "}
        <Letter>a</Letter> gets replaced by <Letter>okuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={grandparentsJson} />

      <SectionHeading id="family-grandchildren" level={sublevel}>
        Grandchildren
      </SectionHeading>
      <Text>
        The kin term is <b>atleha</b> and uses purple pronominals. The ending{" "}
        <Letter>ha</Letter> gets replaced by <Letter>ʔokuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={grandchildrenJson}
      />

      <SectionHeading id="family-older-siblings" level={sublevel}>
        Older Siblings
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals. The ending{" "}
        <Letter>ha</Letter> gets replaced by <Letter>ʔokuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={olderSiblingsJson}
      />

      <SectionHeading id="family-younger-siblings" level={sublevel}>
        Younger Siblings
      </SectionHeading>
      <Text>
        The kin term is <b>ʔkʌha</b> and uses purple pronominals. The ending{" "}
        <Letter>ha</Letter> gets replaced by <Letter>ʔokuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable
        columnVisibility={colVisibility}
        data={youngerSiblingsJson}
      />

      <SectionHeading id="family-aunts-and-uncles" level={sublevel}>
        Aunts and Uncles
      </SectionHeading>
      <Text>
        The kin term is <b>nulha</b> and uses purple pronominals. The suffix{" "}
        <Letter>ʔshuha</Letter> is added for pluralization.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={unclesAuntsJson} />

      <SectionHeading id="family-nieces-and-nephews" level={sublevel}>
        Nieces and Nephews
      </SectionHeading>
      <Text>
        The kin term is <b>uhwatʌha</b> and uses purple pronominals. The ending{" "}
        <Letter>ha</Letter> gets replaced by <Letter>ʔokuha</Letter> for
        pluralization.
      </Text>
      <ParadigmTable columnVisibility={colVisibility} data={niblingsJson} />

      <SectionHeading id="family-cousins" level={sublevel}>
        Cousins
      </SectionHeading>
      <Text>
        The kin term is <b>alaʔse</b> and uses blue pronominals. The suffix{" "}
        <Letter>shuha</Letter> is added for pluralization. There is an uncommon
        case here that occurs when referring to a female's cousins, all of whom
        are female.
      </Text>
      <ParadigmTable
        allowedPronouns={["i", "u", "m", "f", "f_f"]}
        columnVisibility={colVisibility}
        data={cousinsJson}
        translationFn={({ pronoun }) =>
          pronoun === "f_f"
            ? {
                pronounPossessive: "Her",
                note: "(females only)",
              }
            : { note: "" }
        }
      />

      <SectionHeading id="family-friends" level={sublevel}>
        Friends
      </SectionHeading>
      <Text>
        The base is <b>atʌloʔsla</b> and uses blue pronominals. The suffix{" "}
        <Letter>ʔshuha</Letter> is added for pluralization. There is an uncommon
        case here that occurs when referring to a female's friends, all of whom
        are female.
      </Text>
      <ParadigmTable
        allowedPronouns={["i", "u", "m", "f", "f_f"]}
        columnVisibility={colVisibility}
        data={friendsJson}
        translationFn={({ pronoun }) =>
          pronoun === "f_f"
            ? {
                pronounPossessive: "Her",
                note: "(females only)",
              }
            : { note: "" }
        }
      />
    </>
  );
}

export function FamilyTableOfContentItems() {
  return [
    ["Mother"],
    ["Aunt"],
    ["Grandmother"],
    ["Older sister", "older-sister"],
    ["Daughter"],
    ["Niece"],
    ["Granddaughter"],
    ["Younger sister", "younger-sister"],
    ["Great-granddaughter"],
    ["Father"],
    ["Uncle"],
    ["Grandfather"],
    ["Older brother", "older-brother"],
    ["Son"],
    ["Nephew"],
    ["Grandson"],
    ["Great-grandson"],
    ["Cousin"],
    ["Friend"],
    ["Family"],
    ["Related"],
    ["Parents"],
    ["Children"],
    ["Grandparents"],
    ["Grandchildren"],
    ["Older siblings", "older-siblings"],
    ["Younger siblings", "younger-siblings"],
    ["Aunts and uncles", "aunts-and-uncles"],
    ["Nieces and nephews", "nieces-and-nephews"],
    ["Cousins"],
    ["Friends"],
  ].map(([label, value]) => (
    <TOC.Item label={label} value={`family-${value ?? label.toLowerCase()}`} />
  ));
  return (
    <>
      <TOC.Item label="Mother" value="family-mother" />
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
