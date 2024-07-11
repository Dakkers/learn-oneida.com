"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
import redPronominalsJson from "../../data/red-pronominals.json";
import bluePronominalsJson from "../../data/blue-pronominals.json";
import purplePronominalsJson from "../../data/purple-pronominals.json";
import lightbluePronominalsJson from "../../data/lightblue-pronominals.json";
import { Text } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { Divider } from "@ukwehuwehneke/ohutsya";
import {
  PrimitiveTable,
  PrimitiveTableBody,
  PrimitiveTableCell,
  PrimitiveTableHead,
  PrimitiveTableHeader,
  PrimitiveTableRow,
} from "@ukwehuwehneke/ohutsya";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  arrayify,
  pronouns,
} from "~/utils";
import { Pronominal, PronominalColor } from "../Pronominal";
import { BreakdownArray, TextBreakdown } from "../TextBreakdown";
import { Bleed } from "@ukwehuwehneke/ohutsya";

export const DATA_SEASONS = [
  { en: "Spring", on: ["kukwi·té·", "kukwité·ne"], key: "spring" },
  { en: "Summer", on: "kwaʔkʌnhé·ke", key: "summer" },
  { en: "Autumn", on: "kanʌná·ke", key: "fall" },
  { en: "Winter", on: "kohslá·ke", key: "winter" },
];

export function PronominalsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="pronominals" level={level}>
        Pronominals
      </SectionHeading>
      <SectionHeading
        id="english-pronouns"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        English Pronouns
      </SectionHeading>
      <Text>
        English gets by with just 21 pronouns that stand alone and are separate
        words:
      </Text>
      <EnglishPronounsTable />
      <Text>
        Oneida has two kinds of pronouns: <b>standalone</b> and <b>bound</b>.
      </Text>

      <SectionHeading
        id="standalone-pronouns"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Standalone Pronouns
      </SectionHeading>
      <Text>
        Standalone pronouns are words you&lsquo;ll find that stand alone in a
        sentence. The standalone pronouns are:
      </Text>
      <FreestandingPronounsSection />
      <SectionHeading
        id="bound-pronouns"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Bound Pronouns
      </SectionHeading>
      <Text>
        Bound pronouns must be attached to a word. There are roughly 80 of
        these, which can be broken down into four groups:
      </Text>
      <List ordered>
        <List.Item>Subjective (Red)</List.Item>
        <List.Item>Objective (Blue)</List.Item>
        <List.Item>Possessive (Light Blue)</List.Item>
        <List.Item>&quot;The Purples&quot;</List.Item>
      </List>
      <Text>
        &quot;The Purples&quot; refers to a group of pronouns that do not have
        an English counterpart.
      </Text>

      <Notice>
        From here on, we will refer to pronouns as <b>pronominals</b>, which is
        an abbreviation of &quot;pronominal prefix&quot;.
      </Notice>

      <SectionHeading
        id="red-pronominals"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Subjective (Red) Pronominals
      </SectionHeading>
      <Text>
        The Primitivetable below displays the full list of subjective (red)
        pronominals. Each column represents a different &quot;stem&quot;, which
        is the first letter in a root word. For example, the root word{" "}
        <b>nuwehseʔ</b> (&quot;to like&quot;) starts with the letter
        &quot;N&quot; which is a consonant, so we use the &quot;C-stem&quot;
        column. The root word <b>attokhaʔ</b> (&quot;to be wise&quot;) starts
        with the letter &quot;A&quot;, so we use the &quot;A-stem&quot; column.
      </Text>
      <Text>
        Attaching &quot;k&quot; to the start of the root word <b>nuwehseʔ</b>{" "}
        results in <b>knú·wehseʔ</b> which means &quot;I like it&quot;.
        Attaching &quot;l&quot; to the start of the root word <b>attokhaʔ</b>{" "}
        gives us <b>lattókhaʔ</b> wich means &quot;he is wise&quot;.
      </Text>
      <Text>
        The small numbers in the Primitivetable cells represent exceptions —
        Oneida is full of them!
      </Text>
      {/* @ts-expect-error To be addressed in LO-17 */}
      <PronominalsPrimitiveTable color="red" data={redPronominalsJson} />

      <Text variant="labelL">Exception 1</Text>
      <Text>
        The vowel with a squiggly underline replaces the leading vowel of the
        root word.
      </Text>
      <Text>
        As an example, let&lsquo;s look at the A-stem column, where the root
        word is <b>attokhaʔ</b>. The translation for &quot;she is wise&quot;
        without this replacement rule would be <b>yuattokhaʔ</b>.{" "}
        <Letter>yua</Letter> is not a sound in Oneida so we instead change it to{" "}
        <Letter>yu</Letter>. Therefore the translation is <b>yuttókhaʔ</b>.
      </Text>

      <Text variant="labelL">Exception 2</Text>
      <Text>
        The <Letter>h</Letter> is not written or pronounced when nothing is
        attached in front of the pronominal. However, when anything is attached
        to the front of the pronominal, the <Letter>h</Letter> is written and
        pronounced. Example: <b>snú·wehse̲ʔ</b> and <b>yah tehsnú·wehse̲ʔ</b>.
      </Text>

      <Text variant="labelL">Exception 3</Text>
      <Text>
        The letter <Letter>e</Letter> only appears on root words that begin with
        a double consonant.
      </Text>
      <Notice intent="warning">Examples are needed for this exception.</Notice>

      <Text variant="labelL">Exception 4</Text>
      <Text>
        The <Letter>ik</Letter> prefix is attached to most (but not all) single
        syllable roots. The <Letter>i</Letter> in <Letter>ik</Letter> is used
        only occasionally. The <Letter>i</Letter> disappears when anything is
        attached in front of the prefix. Example: <b>íkyʌheʔ</b> and{" "}
        <b>yah té·kyʌheʔ</b>.
      </Text>

      <Text variant="labelL">Exception 5</Text>
      <Text>
        The prefix <code>ts</code> is attached to all roots beginning with{" "}
        <Letter>y</Letter>
        and <Letter>i</Letter>. The <Letter>t</Letter> disappears and is
        replaced by <Letter>h</Letter> when anything is attached in front of the
        prefix. Example:
        <b>tsyʌtelíˍ</b> and <b>yah tehsyʌtelíˍ</b>; <b>tsí·tlu̲ʔ</b> and{" "}
        <b>yah tehsí·tlu̲ʔ</b>.
      </Text>

      <Text variant="labelL">Exception 6</Text>
      <Text>
        The prefix <Letter>it</Letter> is attached to all roots beginning with{" "}
        <Letter>hs</Letter> and the <Letter>i</Letter>
        disappears when anything is attached in front of the prefix. Example:{" "}
        <b>íthsaʔas</b> and <b>yah tethsáʔas</b>
      </Text>

      <Divider />

      <SectionHeading
        id="blue-pronominals"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Objective (blue) Pronominals
      </SectionHeading>
      <Text>
        The Primitivetable below displays the full list of objective (blue)
        pronominals.
      </Text>
      {/* @ts-expect-error To be addressed in LO-17 */}
      <PronominalsPrimitiveTable color="blue" data={bluePronominalsJson} />

      <SectionHeading
        id="purple-pronominals"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Purple Pronominals
      </SectionHeading>
      <Text>
        The Primitivetable below displays the full list of purple pronominals.
        These do not have an English counterpart.
      </Text>
      {/* @ts-expect-error To be addressed in LO-17 */}
      <PronominalsPrimitiveTable color="purple" data={purplePronominalsJson} />

      <SectionHeading
        id="lightblue-pronominals"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Possessive (light blue) Pronominals
      </SectionHeading>
      <PronominalsPrimitiveTable
        allowedPronouns={[
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
        color="lightblue"
        // @ts-expect-error To be addressed in LO-17
        data={lightbluePronominalsJson}
      />
    </Flex>
  );
}

function EnglishPronounsTable() {
  const data = [
    ["I", "me", "my"],
    ["you", "you", "your"],
    ["he", "him", "his"],
    ["she", "her", "her"],
    ["it", "it", "its"],
    ["we", "us", "our"],
    ["they", "them", "their"],
  ] as const;

  return (
    <PrimitiveTable>
      <PrimitiveTableHeader>
        <PrimitiveTableRow>
          <PrimitiveTableHead>Subjective Set</PrimitiveTableHead>
          <PrimitiveTableHead>Objective Set</PrimitiveTableHead>
          <PrimitiveTableHead>Possessive Set</PrimitiveTableHead>
        </PrimitiveTableRow>
      </PrimitiveTableHeader>
      <PrimitiveTableBody>
        {data.map((row, i) => (
          <PrimitiveTableRow key={i}>
            <PrimitiveTableCell>{row[0]}</PrimitiveTableCell>
            <PrimitiveTableCell>{row[1]}</PrimitiveTableCell>
            <PrimitiveTableCell>{row[2]}</PrimitiveTableCell>
          </PrimitiveTableRow>
        ))}
      </PrimitiveTableBody>
    </PrimitiveTable>
  );
}

function FreestandingPronounsSection() {
  const data = [
    ["í·", "I / Me"],
    ["isé·", "You"],
    ["né·", "It"],
    ["laulhá·", "He / Him"],
    ["akaulhá·", "She / Her"],
    ["aulhá·", "It"],
    ["lonulhá·", "They / Them (males, mix of males and females)"],
    ["onulhá·", "They / Them (females)"],
  ] as const;

  return (
    <div>
      <PrimitiveTable>
        <PrimitiveTableBody>
          {data.map((row, i) => (
            <PrimitiveTableRow key={i}>
              <PrimitiveTableCell>{row[0]}</PrimitiveTableCell>
              <PrimitiveTableCell>{row[1]}</PrimitiveTableCell>
            </PrimitiveTableRow>
          ))}
        </PrimitiveTableBody>
      </PrimitiveTable>
    </div>
  );
}

function PronominalsPrimitiveTable({
  allowedPronouns,
  color,
  data = [],
}: {
  allowedPronouns?: Pronoun[];
  color: PronominalColor;
  data:
    | Pronoun[]
    | Array<{
        label: string;
      }>;
}) {
  const stems = ["c", "a", "i", "e", "o"];
  const isPurple = color === "purple";
  const rowsToUse = isPurple ? data : allowedPronouns ?? pronouns;

  return (
    <Bleed mx={32}>
      <PrimitiveTable>
        <PrimitiveTableHeader>
          <PrimitiveTableRow>
            {!isPurple && <PrimitiveTableHead></PrimitiveTableHead>}
            <PrimitiveTableHead>EN</PrimitiveTableHead>
            <PrimitiveTableHead>C-stem</PrimitiveTableHead>
            <PrimitiveTableHead>A-stem</PrimitiveTableHead>
            <PrimitiveTableHead>I-stem</PrimitiveTableHead>
            <PrimitiveTableHead>E-stem / Λ-stem</PrimitiveTableHead>
            <PrimitiveTableHead>O-stem / U-stem</PrimitiveTableHead>
          </PrimitiveTableRow>
        </PrimitiveTableHeader>
        <PrimitiveTableBody>
          {rowsToUse.map((row, i) => (
            <PrimitiveTableRow key={i}>
              {/* @ts-expect-error To be addressed in LO-17 */}
              {!isPurple && (
                <PrimitiveTableCell>
                  {PRONOUN_MAP_ONEIDA[row]}
                </PrimitiveTableCell>
              )}
              <PrimitiveTableCell>
                {!isPurple
                  ? // @ts-expect-error To be addressed in LO-17
                    PRONOUN_MAP_EN[row]
                  : // @ts-expect-error To be addressed in LO-17
                    arrayify(row.label).map((label, j) => (
                      <div key={j}>{label}</div>
                    ))}
              </PrimitiveTableCell>
              {stems.map((stem) => {
                // @ts-expect-error To be addressed in LO-17
                const datum = isPurple ? row : data[row];
                const content = datum[stem] ?? datum.default;
                return (
                  <PrimitiveTableCell key={stem}>
                    <Flex direction="column">
                      {/* @ts-expect-error To be addressed in LO-17 */}
                      {content.map((prefixArr: PrefixArray, i: number) => (
                        <PronominalPrimitiveTableText
                          color={color}
                          entry={prefixArr}
                          key={i}
                        />
                      ))}
                    </Flex>
                  </PrimitiveTableCell>
                );
              })}
            </PrimitiveTableRow>
          ))}
        </PrimitiveTableBody>
      </PrimitiveTable>
    </Bleed>
  );
}

function PronominalPrimitiveTableText({
  entry,
  color,
}: {
  entry:
    | string
    | {
        breakdown?: BreakdownArray;
        excp?: FootnoteNumbers;
        text: string;
      };
  color: PronominalColor;
}) {
  if (typeof entry === "string") {
    return <Pronominal color={color}>{entry}</Pronominal>;
  }

  const typeFallback =
    color === "red"
      ? "PR"
      : color === "blue"
        ? "PB"
        : color === "purple"
          ? "PP"
          : color === "lightblue"
            ? "PLB"
            : undefined;

  const textContent = !entry.breakdown ? (
    <Pronominal color={color}>{entry.text}</Pronominal>
  ) : (
    <TextBreakdown
      // @ts-expect-error To be addressed in LO-17
      breakdown={entry.breakdown.map((b) => {
        if (typeof b === "string") {
          return {
            text: b,
            type: typeFallback,
          };
        }
        // @ts-expect-error To be addressed in LO-17
        const type = arrayify(b.type ?? []);
        return {
          ...b,
          type: type.includes("RPL") ? type : [...type, typeFallback],
        };
      })}
      typeFallback={typeFallback}
    />
  );

  return (
    <Flex gap={1}>
      {textContent}
      {!!entry.excp && <Footnotes nums={entry.excp} />}
    </Flex>
  );
}

type FootnoteNumbers = string[] | string;

function Footnotes({ nums: _nums }: { nums: FootnoteNumbers }) {
  const nums = arrayify(_nums).map((n) => parseInt(n));
  nums.sort();

  return (
    <Flex gap={1}>
      {nums.map((num) => (
        <sup key={num}>
          <Text contrast="mid" intent="secondary" variant="footnote">
            {num}
          </Text>
        </sup>
      ))}
    </Flex>
  );
}
