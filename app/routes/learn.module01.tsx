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
import bluePronominalsJson from "../data/blue-pronominals.json";
import purplePronominalsJson from "../data/purple-pronominals.json";
import { TextBreakdown } from "~/components/TextBreakdown";
import { List } from "@/design/ui/list";
import { Box } from "@/design/ui/box";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <div>
      <Text as="h1" variant="title">
        Module 1
      </Text>

      <Box py={4}>
        <Notice intent="warning">
          <strong>NOTE:</strong> This page is still under construction!
        </Notice>
      </Box>

      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>
        <List>
          <List.Item>
            Pronouns
            <List>
              <List.Item>Free-standing</List.Item>
              <List.Item>Bound</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Pronominals
            <List>
              <List.Item>Subjective (Red)</List.Item>
              <List.Item>Objective (Blue)</List.Item>
              <List.Item>The &quot;Purples&quot;</List.Item>
              <List.Item>Possessive (Light Blue)</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Stress and Accents
            <List>
              <List.Item>Length</List.Item>
              <List.Item>Short Stress</List.Item>
              <List.Item>Long Stress</List.Item>
              <List.Item>Whispered Endings</List.Item>
            </List>
          </List.Item>
          <List.Item>Glottal Stop</List.Item>
          <List.Item>The letter H</List.Item>
          <List.Item>Someone&lsquo;s name</List.Item>
          <List.Item>To know, to be in the know</List.Item>
        </List>

        <Separator />

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
        <Notice intent="secondary">
          From here on, we will refer to pronouns as{" "}
          <strong>pronominals</strong>, which is an abbreviation of
          &quot;pronominal prefix&quot;.
        </Notice>

        <Text as="h3" variant="label">
          Subjective (Red) Pronominals
        </Text>
        <Text>
          The table below displays the full list of subjective (red)
          pronominals. Each column represents a different &quot;stem&quot;,
          which is the first letter in a root word. For example, the root word{" "}
          <i>nuwehseʔ</i> (&quot;to like&quot;) starts with the letter
          &quot;N&quot; which is a consonant, so we use the &quot;C-stem&quot;
          column. The root word <i>attokhaʔ</i> (&quot;to be wise&quot;) starts
          with the letter &quot;A&quot;, so we use the &quot;A-stem&quot;
          column.
        </Text>
        <Text>
          Attaching &quot;k&quot; to the start of the root word <i>nuwehseʔ</i>{" "}
          results in <i>knú·wehseʔ</i> which means &quot;I like it&quot;.
          Attaching &quot;l&quot; to the start of the root word <i>attokhaʔ</i>{" "}
          gives us <i>lattókhaʔ</i> wich means &quot;he is wise&quot;.
        </Text>
        <Text>
          The small numbers in the table cells represent exceptions – Oneida is
          full of them!
        </Text>
        <PronominalsTable color="red" data={redPronominalsJson} />

        <Text variant="label">Exception 1</Text>
        <Text>
          The vowel with a squiggly underline replaces the leading vowel of the
          root word. For example, the word for &quot;she is wise&quot; is{" "}
          <i>yuttókhaʔ</i>. <Letter>yu</Letter> is the pronominal and the letter
          U &quot;overpowers&quot; the letter A in the root word <i>attokhaʔ</i>
          .
        </Text>
        <Text>
          As an example, let's look at the A-stem column, where the root word is{" "}
          <i>attokhaʔ</i>. The translation for "she is wise" without this
          replacement rule would be <i>yuattokhaʔ</i>. <Letter>yua</Letter> is
          not a sound in Oneida so we instead change it to <Letter>yu</Letter>.
          Therefore the translation is <i>yuttókhaʔ</i>.
        </Text>

        <Text variant="label">Exception 2</Text>
        <Text>
          The <Letter>h</Letter> is not written or pronounced when nothing is
          attached in front of the pronominal. However, when anything is
          attached to the front of the pronominal, the <Letter>h</Letter> is
          written and pronounced. Example: <i>snú·wehse̲ʔ</i> and{" "}
          <i>yah tehsnú·wehse̲ʔ</i>.
        </Text>

        <Text variant="label">Exception 3</Text>
        <Text>
          The letter <Letter>e</Letter> only appears on root words that begin
          with a double consonant.
        </Text>
        <Notice intent="warning">
          Examples are needed for this exception.
        </Notice>

        <Text variant="label">Exception 4</Text>
        <Text>
          The <Letter>ik</Letter> prefix is attached to most (but not all)
          single syllable roots. The <Letter>i</Letter> in <Letter>ik</Letter>{" "}
          is used only occasionally. The <Letter>i</Letter> disappears when
          anything is attached in front of the prefix. Example: <i>íkyʌheʔ</i>{" "}
          and <i>yah té·kyʌheʔ</i>.
        </Text>

        <Text variant="label">Exception 5</Text>
        <Text>
          The prefix <code>ts</code> is attached to all roots beginning with{" "}
          <Letter>y</Letter>
          and <Letter>i</Letter>. The <Letter>t</Letter> disappears and is
          replaced by <Letter>h</Letter> when anything is attached in front of
          the prefix. Example:
          <i>tsyʌtelíˍ</i> and <i>yah tehsyʌtelíˍ</i>; <i>tsí·tlu̲ʔ</i> and{" "}
          <i>yah tehsí·tlu̲ʔ</i>.
        </Text>

        <Text variant="label">Exception 6</Text>
        <Text>
          The prefix <Letter>it</Letter> is attached to all roots beginning with{" "}
          <Letter>hs</Letter> and the <Letter>i</Letter>
          disappears when anything is attached in front of the prefix. Example:{" "}
          <i>íthsaʔas</i> and <i>yah tethsáʔas</i>
        </Text>

        <Separator />

        <Text as="h3" variant="label">
          Objective (blue) Pronominals
        </Text>
        <Text>
          The table below displays the full list of objective (blue)
          pronominals.
        </Text>
        <PronominalsTable color="blue" data={bluePronominalsJson} />

        <Text as="h3" variant="label">
          Purple Pronominals
        </Text>
        <Text>
          The table below displays the full list of purple pronominals. These do
          not have an English counterpart.
        </Text>
        <PronominalsTable color="purple" data={purplePronominalsJson} />
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

function PronominalsTable({ color, data = {} }) {
  const stems = ["c", "a", "i", "e", "o"];
  const isPurple = color === "purple";
  const rowsToUse = isPurple ? data : pronouns;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {!isPurple && <TableHead></TableHead>}
          <TableHead>EN</TableHead>
          <TableHead>C-stem</TableHead>
          <TableHead>A-stem</TableHead>
          <TableHead>I-stem</TableHead>
          <TableHead>E-stem / Λ-stem</TableHead>
          <TableHead>O-stem / U-stem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowsToUse.map((row, i) => (
          <TableRow key={i}>
            {!isPurple && <TableCell>{PRONOUN_MAP_ONEIDA[row]}</TableCell>}
            <TableCell>
              {!isPurple ? (
                PRONOUN_MAP_EN[row]
              ) : Array.isArray(row.label) ? (
                <>
                  {row.label.map((label, j) => (
                    <div key={j}>{label}</div>
                  ))}
                </>
              ) : (
                row.label
              )}
            </TableCell>

            {stems.map((stem) => {
              const datum = isPurple ? row : data[row];
              const content = datum[stem] ?? datum.default;
              return (
                <TableCell key={stem}>
                  <Flex direction="column">
                    {content.map((prefixArr, i) => (
                      <PronominalText entry={prefixArr} color={color} key={i} />
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

function PronominalText({ entry, color }) {
  const intent =
    color === "red"
      ? "negative"
      : color === "blue"
      ? "primary"
      : color === "purple"
      ? "magic"
      : "secondary";

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
    <TextBreakdown
      breakdown={entry.breakdown}
      typeFallback={
        color === "red"
          ? "PR"
          : color === "blue"
          ? "PB"
          : color === "purple"
          ? "PP"
          : color === "lightblue"
          ? "PLB"
          : undefined
      }
    />
  );

  return (
    <Flex gap={1}>
      {textContent}
      {!!entry.excp && <Footnotes nums={entry.excp} />}
    </Flex>
  );
}

function Footnotes({ nums: _nums }: { nums: string[] | string }) {
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

function Letter({ children }) {
  return (
    <code>
      <strong>{children}</strong>
    </code>
  );
}
