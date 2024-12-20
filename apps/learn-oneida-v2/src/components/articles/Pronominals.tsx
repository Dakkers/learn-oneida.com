"use client";
import { Accordion, Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  SectionHeadingProps,
  TableWrapper,
} from "@ukwehuwehneke/language-components";
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
  type Pronoun,
  arrayify,
  pronouns,
} from "@ukwehuwehneke/language-components";
import { Pronominal, PronominalColor } from "../Pronominal";
import {
  BreakdownArray,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import dataLikeRedJson from "~/data/nuwehse-red";
import dataLikeBlueJson from "~/data/nuwehse-blue";
import dataLooking from "~/data/ehsak";
import dataWise from "~/data/attokha";
import dataAtHome from "~/data/itlu";
import dataHardToPlease from "~/data/ʌtole";
import dataPulling from "~/data/module01/pullingOut-HAB";
import dataAlive from "~/data/unhe";
import dataHealthy from "~/data/module05/healthy-PRS";
import dataSleeping from "~/data/module05/sleep-PRS";
import dataEnjoy from "~/data/module05/enjoyingDoingSomething-PRS";
import dataLikeTheTaste from "~/data/module05/likingTheTaste-PRS";
import { ParadigmData, ParadigmTable } from "../ParadigmTable";

export function PronominalsArticle({ level: _level = 1 }: ArticleProps) {
  const level = (_level + 1) as SectionHeadingProps["level"];
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="pronominals" level={_level}>
        Pronominals
      </SectionHeading>
      <SectionHeading id="english-pronouns" level={level}>
        English Pronouns
      </SectionHeading>
      <Text>
        English has 21 pronouns that standalone and are separate words:
      </Text>
      <EnglishPronounsTable />
      <Text>
        Oneida has two kinds of pronouns: <b>standalone</b> and <b>bound</b>.
      </Text>

      <SectionHeading id="standalone-pronouns" level={level}>
        Standalone Pronouns
      </SectionHeading>
      <Text>
        Standalone pronouns are words you&lsquo;ll find that stand alone in a
        sentence. The standalone pronouns are:
      </Text>
      <FreestandingPronounsSection />

      <SectionHeading id="bound-pronouns" level={level}>
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
        <List.Item>Person-to-Person (Purple)</List.Item>
      </List>
      <Text>
        The last group, Person-to-Person, refers to a group of pronouns that do
        not have an English counterpart. Each of these groups are colour-coded
        to help you identify pronouns within words.
      </Text>
      <Text>
        Below you&lsquo;ll see a paradigm chart for each stem for each of the
        groups above, as well as tables that show all pronouns for each group.
      </Text>

      <Notice intent="primary">
        From here on, we will refer to pronouns as <b>pronominals</b>, which is
        an abbreviation of &quot;pronominal prefix&quot;. This is a linguistics
        term.
      </Notice>

      <Notice intent="warning">
        While you should end up learning all of the following paradigms, it is
        best to prioritize paradigms for C-stem and A-stem words as they are the
        most common.
      </Notice>

      <SectionHeading id="subjective" level={level + 1}>
        Subjective Pronominals (Red)
      </SectionHeading>
      <AccordionWrapper
        color="red"
        items={[
          [dataLikeRedJson, "-nuhweʔ-"],
          [dataWise, "-attok-"],
          [dataLooking, "-ehsak-"],
          [dataAtHome, "-iʔtlu-"],
          [dataPulling, "-otshyu-"],
          [dataAlive, "-unhe-"],
          [dataHardToPlease, "-ʌtol-"],
        ]}
      />
      <Text>Here is the full table of the pronominals on their own.</Text>
      {/* @ts-expect-error To be addressed in LO-17 */}
      <PronominalsPrimitiveTable color="red" data={redPronominalsJson} />

      <SectionHeading id="objective" level={level + 1}>
        Objective Pronominals (Blue)
      </SectionHeading>
      <AccordionWrapper
        color="blue"
        items={[
          [dataLikeBlueJson, "-nuhweʔ-"],
          [dataHealthy, "-ataʔkalite-"],
          [dataLikeTheTaste, "-ekaʔ-"],
          [dataSleeping, "-itaʔ-"],
          [null, "-otshyu-"],
          [dataEnjoy, "-uʔweskwani-"],
          [null, "-ʌtuni-"],
        ]}
      />
      {/* @ts-expect-error To be addressed in LO-17 */}
      <PronominalsPrimitiveTable color="blue" data={bluePronominalsJson} />

      <SectionHeading id="person-to-person" level={level + 1}>
        Person-to-Person Pronominals (Purple)
      </SectionHeading>
      <AccordionWrapper
        color="purple"
        items={[
          [null, "-nuhweʔ-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
        ]}
      />
      <PronominalsPrimitiveTable color="purple" data={purplePronominalsJson} />

      <SectionHeading id="possessive" level={level + 1}>
        Possessive Pronominals (Light Blue)
      </SectionHeading>
      <AccordionWrapper
        color="light_blue"
        items={[
          [null, "-nuhs-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
          [null, "-???-"],
        ]}
      />
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

      <ExceptionsSection level={level} />
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
    <TableWrapper
      columns={[
        { header: "Subjective Set", accessorKey: "c1" },
        { header: "Objective Set", accessorKey: "c2" },
        { header: "Possessive Set", accessorKey: "c3" },
      ]}
      data={data.map(([c1, c2, c3]) => ({ c1, c2, c3 }))}
    />
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
  ];
  return (
    <TableWrapper
      columns={TableWrapper.columnsEnglishTranslation.slice().reverse()}
      data={data.map(TableWrapper.mapTranslationAndEnglish)}
    />
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
    <Bleed mx={0}>
      <PrimitiveTable>
        <PrimitiveTableHeader>
          <PrimitiveTableRow>
            <PrimitiveTableHead>EN</PrimitiveTableHead>
            <PrimitiveTableHead>C-stem</PrimitiveTableHead>
            <PrimitiveTableHead>A-stem</PrimitiveTableHead>
            <PrimitiveTableHead>I-stem</PrimitiveTableHead>
            <PrimitiveTableHead>
              E-stem <br /> Λ-stem
            </PrimitiveTableHead>
            <PrimitiveTableHead>
              O-stem <br /> U-stem
            </PrimitiveTableHead>
          </PrimitiveTableRow>
        </PrimitiveTableHeader>
        <PrimitiveTableBody>
          {rowsToUse.map((row, i) => (
            <PrimitiveTableRow key={i}>
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

function ExcpPlay({ num }: { num: string }) {
  return <PlayButton filepath={`/audio/module01/exceptions/excp_${num}.mp3`} />;
}

function AccordionWrapper({
  color,
  items,
}: {
  color: "red" | "blue" | "light_blue" | "purple";
  items: Array<[ParadigmData | null, string]>;
}) {
  const stems = ["C", "A", "E", "I", "O", "U", "Λ"];
  return (
    <Accordion type="multiple">
      {items.map(([data, root], i) => (
        <Accordion.Item id={stems[i]} title={`${stems[i]}-stem`}>
          <Text>
            The root word is <Letter>{root}</Letter>.
          </Text>
          {data ? (
            <ParadigmTable
              audioFolder={`module01/pronominals/${color}/${stems[i]}`}
              columnVisibility={{ pronounEnglish: false, pronounOneida: false }}
              data={data}
              translationFn={({ pronoun }: { pronoun: Pronoun }) => ({
                verb: ["it", "m", "f"].includes(pronoun) ? "likes" : "like",
              })}
            />
          ) : (
            <Text>
              <br />
              This paradigm table is not yet available.
            </Text>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function ExceptionsSection({ level }: { level: number }) {
  return (
    <>
      <SectionHeading id="exceptions" level={level}>
        Exceptions
      </SectionHeading>

      <SectionHeading level={level + 1}>Exception 1</SectionHeading>
      <Text>
        The vowel with a squiggly underline replaces the leading vowel of the
        root word.
      </Text>
      <Text>
        As an example, let&lsquo;s look at the A-stem column in the red
        pronominals table, and use the root word <b>attokhaʔ</b>. The
        translation for &quot;she is wise&quot; without this replacement rule
        would be <b>yuattokhaʔ</b>. <Letter>yua</Letter> is not a sound in
        Oneida so we instead change it to <Letter>yu</Letter>. Therefore the
        translation is <b>yuttókhaʔ</b>. <ExcpPlay num="1" />
      </Text>

      <SectionHeading level={level + 1}>Exception 2</SectionHeading>
      <Text>
        The <Letter>h</Letter> is not written or pronounced when nothing is
        attached in front of the pronominal. However, when anything is attached
        to the front of the pronominal, the <Letter>h</Letter> is written and
        pronounced. Example: <b>snú·wehse̲ʔ</b> <ExcpPlay num="2-1" /> and{" "}
        <b>yáh tehsnú·wehse̲ʔ</b>. <ExcpPlay num="2-2" />
      </Text>

      <SectionHeading level={level + 1}>Exception 3</SectionHeading>
      <Text>
        The letter <Letter>e</Letter> only appears on root words that begin with
        a double consonant or a glottal stop.
      </Text>
      <Notice intent="warning">Examples are needed for this exception.</Notice>

      <SectionHeading level={level + 1}>Exception 4</SectionHeading>
      <Text>
        The <Letter>ik</Letter> prefix is attached to most (but not all) single
        syllable roots. The <Letter>i</Letter> in <Letter>ik</Letter> is used
        only occasionally. The <Letter>i</Letter> disappears when anything is
        attached in front of the prefix. Example: <b>íkyʌheʔ</b>{" "}
        <ExcpPlay num="4-1" /> and <b>yáh té·kyʌheʔ</b>. <ExcpPlay num="4-2" />
      </Text>

      <SectionHeading level={level + 1}>Exception 5</SectionHeading>
      <Text>
        The prefix <code>ts</code> is attached to all roots beginning with{" "}
        <Letter>y</Letter> and <Letter>i</Letter>. The <Letter>t</Letter>{" "}
        disappears and is replaced by <Letter>h</Letter> when anything is
        attached in front of the prefix. Examples:
      </Text>
      <List>
        <List.Item>
          <b>tsyʌtelí̲</b> <ExcpPlay num="5-1" /> &nbsp; vs. &nbsp;{" "}
          <b>yáh tehsyʌtelí̲</b> <ExcpPlay num="5-2" />
        </List.Item>
        <List.Item>
          <b>tsí·tlu̲ʔ</b> <ExcpPlay num="5-3" /> &nbsp; vs. &nbsp;{" "}
          <b>yáh tehsí·tlu̲ʔ</b> <ExcpPlay num="5-4" />
        </List.Item>
      </List>

      <SectionHeading level={level + 1}>Exception 6</SectionHeading>
      <Text>
        The prefix <Letter>it</Letter> is attached to all roots beginning with{" "}
        <Letter>hs</Letter> and the <Letter>i</Letter> disappears when anything
        is attached in front of the prefix. Example: <b>ítshaʔas</b>{" "}
        <ExcpPlay num="6-1" /> and <b>yáh tetsháʔas</b>. <ExcpPlay num="6-2" />{" "}
        Additionally, the {"h"} shifts over.
      </Text>
    </>
  );
}
