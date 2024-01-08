import { Flex } from "@/design/ui/flex";
import { Notice } from "@/design/ui/notice";
import { Separator } from "@/design/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/ui/table";
import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, pronouns } from "~/utils";
import redPronominalsJson from "../data/red-pronominals.json";
import { TextBreakdown } from "~/components/TextBreakdown";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Module 1</h1>

      <p className="mt-8 mb-4">
        <strong>NOTE:</strong> This page is still under construction!
      </p>

      <Text>In this module, we&lsquo;ll cover the following:</Text>
      <ul>
        <li>
          · Pronouns
          <ul>
            <li>· · Free-standing</li>
            <li>· · Bound</li>
          </ul>
        </li>
        <li>
          · · Pronominals
          <ul>
            <li>· · Subjective (Red)</li>
            <li>· · Objective (Blue)</li>
            <li>· · The "Purples"</li>
            <li>· · Possessive (Light Blue)</li>
          </ul>
        </li>
        <li>
          · Stress and Accents
          <ul>
            <li>· · Length</li>
            <li>· · Short Stress</li>
            <li>· · Long Stress</li>
            <li>· · Whispered Endings</li>
          </ul>
        </li>
        <li>· Glottal Stop</li>
        <li>· The letter H</li>

        <li>· Someone's name</li>
        <li>· To know, to be in the know</li>
      </ul>

      <Separator />

      <Flex direction="column" gap={4}>
        <Text as="h2" variant="title">
          Pronouns
        </Text>
        <Text>
          English gets by with just 21 pronouns that stand alone and are
          separate words:
        </Text>
        <EnglishPronounsTable />
        <Text>
          Oneida has two kinds of pronouns: <strong>standalone</strong> and{" "}
          <strong>bound</strong>.
        </Text>
        <Text as="h2" variant="title">
          Standalone Pronouns
        </Text>
        <Text>
          Standalone pronouns are words you'll find that stand alone in a
          sentence. The standalone pronouns are:
        </Text>
        <FreestandingPronounsSection />
        <Text as="h2" variant="title">
          Bound Pronouns
        </Text>
        <Text>
          Bound pronouns must be attached to a word. There are roughly 80 of
          these, which can be broken down into four groups:
        </Text>
        <ul>
          <li>· Subjective (Red)</li>
          <li>· Objective (Blue)</li>
          <li>· Possessive (Light Blue)</li>
          <li>· "The Purples"</li>
        </ul>
        <Text>
          "The Purples" refers to a group of pronouns that do not have an
          English counterpart.
        </Text>
        <Notice intent="secondary">
          From here on, we will refer to pronouns as{" "}
          <strong>pronominals</strong>, which is an abbreviation of "pronominal
          prefix".
        </Notice>
        <Text as="h3" variant="label">
          Subjective (Red) Pronominals
        </Text>
        <Text>
          The table below displays the full list of subjective (red)
          pronominals. Each column represents a different "stem", which is the
          first letter in a root word. For example, the root word{" "}
          <i>nuwehseʔ</i> ("to like") starts with the letter "N" which is a
          consonant, so we use the "C-stem" column. The root word{" "}
          <i>attokhaʔ</i> ("to be wise") starts with the letter "A", so we use
          the "A-stem" column.
        </Text>
        <Text>
          Attaching "k" to the start of the root word <i>nuwehseʔ</i> results in{" "}
          <i>knú·wehseʔ</i>
          which means "I like it". Attaching "l" to the start of the root word{" "}
          <i>attokhaʔ</i> gives us <i>lattókhaʔ</i> wich means "he is wise".
        </Text>
        <Text>
          The small numbers in the table cells represent exceptions – Oneida is
          full of them!
        </Text>
        <PronominalsTable data={redPronominalsJson} />
        <Text>
          The exceptions are:
          <ol>
            <li>
              1. The vowel with a squiggly underline "overpowers" the leading
              vowel of the root word. For example, the word for "she is wise" is{" "}
              <i>yuttókhaʔ</i>. <code>yu</code> is the pronominal and the letter
              U "overpowers" the letter A in the root word <i>attokhaʔ</i>.
            </li>
            <li>
              2. The h is not written or pronounced when nothing is attached in
              front of the pronominal. However, when anything is attached to the
              front of the pronominal, the h is written and pronounced. Example:{" "}
              <i>snú·wehseʔ</i> and <i>yah tehsnú·wehseʔ</i>.
            </li>
            <li>
              3. The letter "e" only appears on root words that begin with a
              double consonant
            </li>
            <li>
              4. The ik prefix is attached to most (but not all) single syllable
              roots. The i in ik is used only occasionally. The i disappears
              when anything is attached in front of the prefix. Example:{" "}
              <i>íkyʌheʔ</i> and <i>yah té·kyʌheʔ</i> .
            </li>
            <li>
              5. The prefix <code>ts</code> is attached to all roots beginning
              with y and i. The t disappears and is replaced by h when anything
              is attached in front of the prefix. Example:
              <i>tsyʌtelí</i> and <i>yah tehsyʌtelí</i>; <i>tsí·tluʔ</i> and{" "}
              <i>yah tehsí·tluʔ</i>.
            </li>
            <li>
              6. The prefix it is attached to all roots beginning with hs and
              the i disappears when anything is attached in front of the prefix.
              Example: <i>íthsaʔas</i> and <i>yah tethsáʔas</i>
            </li>
          </ol>
        </Text>
      </Flex>
    </div>
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subjective Set</TableHead>
          <TableHead>Objective Set</TableHead>
          <TableHead>Possessive Set</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell>{row[0]}</TableCell>
            <TableCell>{row[1]}</TableCell>
            <TableCell>{row[2]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
      <Table>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function PronominalsTable({ data = {} }) {
  const stems = ["c", "a", "i", "e", "o"];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>EN</TableHead>
          <TableHead>C-stem</TableHead>
          <TableHead>A-stem</TableHead>
          <TableHead>I-stem</TableHead>
          <TableHead>E-stem / Λ-stem</TableHead>
          <TableHead>O-stem / U-stem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pronouns.map((pronoun) => (
          <TableRow key={pronoun}>
            <TableCell>{PRONOUN_MAP_ONEIDA[pronoun]}</TableCell>
            <TableCell>{PRONOUN_MAP_EN[pronoun]}</TableCell>
            {stems.map((stem) => {
              const content = data[pronoun][stem] ?? data[pronoun].default;
              return (
                <TableCell key={stem}>
                  <Flex direction="column">
                    {content.map((prefixArr, i) => (
                      <PronominalText
                        entry={prefixArr}
                        intent="negative"
                        key={i}
                      />
                    ))}
                  </Flex>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PronominalText({ entry, intent }) {
  if (typeof entry === "string") {
    return (
      <Text contrast="mid" intent={intent}>
        {entry}
      </Text>
    );
  }
  const textContent = !entry.breakdown ? (
    <Text contrast="mid" intent={intent}>
      {entry.text}
    </Text>
  ) : (
    <TextBreakdown breakdown={entry.breakdown} typeFallback="PR" />
  );

  return (
    <Flex gap={1}>
      {textContent}
      {!!entry.excp && <Footnotes nums={entry.excp} />}
    </Flex>
  );
}

function Footnotes({ nums: _nums }) {
  const nums = (Array.isArray(_nums) ? _nums : [_nums]).map((n) => parseInt(n));
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
