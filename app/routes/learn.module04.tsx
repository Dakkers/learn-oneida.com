import type { MetaFunction } from "@remix-run/node";
import React from "react";
import dataIsHere from "../data/data-ese-is-here.json";
import dataWasHere from "../data/module04/was-here";
import dataWillBeHere from "../data/module04/will-be-here";
import dataMightBeHere from "../data/module04/might-be-here";
import dataIsNotHere from "../data/module04/is-not-here";
import dataWasNotHere from "../data/module04/was-not-here";
import dataWillNotBeHere from "../data/module04/will-not-be-here";
import dataIsThere from "../data/module04/is-there";
import dataWillBeThere from "../data/module04/will-be-there";
import dataWasThere from "../data/module04/was-there";
import dataMightBeThere from "../data/module04/might-be-there";
import dataIsNotThere from "../data/module04/is-not-there";
import dataWasNotThere from "../data/module04/was-not-there";
import dataWillNotBeThere from "../data/module04/will-not-be-there";
import dataIsAtHome from "../data/module04/is-at-home";
import dataWasAtHome from "../data/module04/was-at-home";
import dataWillBeAtHome from "../data/module04/will-be-at-home";
import dataMightBeAtHome from "../data/module04/might-be-at-home";
import dataIsNotAtHome from "../data/module04/is-not-at-home";
import dataWasNotAtHome from "../data/module04/was-not-at-home";
import dataWillNotBeAtHome from "../data/module04/will-not-be-at-home";
import dataLivesThere from "../data/module04/lives-there";
import dataUsedToLiveThere from "../data/module04/used-to-live-there";
import dataWillLiveThere from "../data/module04/will-live-there";
import dataMightLiveThere from "../data/module04/might-live-there";
import dataDoesntLiveThere from "../data/module04/doesnt-live-there";
import dataDidntUsedToLiveThere from "../data/module04/didnt-used-to-live-there";
import dataWillNotLiveThere from "../data/module04/will-not-live-there";
import dataWant from "../data/module04/want";
import dataDontWant from "../data/module04/dont-want";
import dataUsedToWant from "../data/module04/used-to-want";
import dataDidntUsedToWant from "../data/module04/didnt-used-to-want";
import dataThought from "../data/module04/thought";

import { Text } from "@/design/components/text";
import { ParadigmTable } from "~/components/ParadigmTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design/primitives/accordion";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex } from "@/design/components/flex";
import { SectionHeading } from "~/components/SectionHeading";
import { Box } from "@/design/components/box";
import { Notice } from "@/design/components/notice";
import { Letter } from "~/components/Letter";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 4" },
    { name: "description", content: "Module 4 of the Oneida curriculum" },
  ];
};

export default function LearnModule04() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 4</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Repetitive feature" value="repetitive-s" />

        <TOC.Item label="Being here" value="being-here">
          <TOC.Section>
            <TOC.Item label="Someone is here" value="someone-is-here" />
            <TOC.Item label="Someone was here" value="someone-was-here" />
            <TOC.Item
              label="Someone will be here"
              value="someone-will-be-here"
            />
            <TOC.Item
              label="Someone would/might be here"
              value="someone-might-be-here"
            />
            <TOC.Item label="Someone is not here" value="someone-is-not-here" />
            <TOC.Item
              label="Someone was not here"
              value="someone-was-not-here"
            />
            <TOC.Item
              label="Someone will not be here"
              value="someone-will-not-be-here"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Being there" value="being-there">
          <TOC.Section>
            <TOC.Item label="Someone is there" value="someone-is-there" />
            <TOC.Item label="Someone was there" value="someone-was-there" />
            <TOC.Item
              label="Someone will be there"
              value="someone-will-be-there"
            />
            <TOC.Item
              label="Someone would/might be there"
              value="someone-might-be-there"
            />
            <TOC.Item
              label="Someone is not there"
              value="someone-is-not-there"
            />
            <TOC.Item
              label="Someone was not there"
              value="someone-was-not-there"
            />
            <TOC.Item
              label="Someone will not be there"
              value="someone-will-not-be-there"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item
          label="Being there (temporarily)"
          value="being-there-temporarily"
        >
          <TOC.Section>
            <TOC.Item label="Someone is there" value="someone-is-there-temp" />
            <TOC.Item
              label="Someone was there"
              value="someone-was-there-temp"
            />
            <TOC.Item
              label="Someone will be there"
              value="someone-will-be-there-temp"
            />
            <TOC.Item
              label="Someone would/might be there"
              value="someone-might-be-there-temp"
            />
            <TOC.Item
              label="Someone is not there"
              value="someone-is-not-there-temp"
            />
            <TOC.Item
              label="Someone was not there"
              value="someone-was-not-there-temp"
            />
            <TOC.Item
              label="Someone will not be there"
              value="someone-will-not-be-there-temp"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Being there (usually)" value="being-there-usually">
          <TOC.Section>
            <TOC.Item
              label="Someone is there"
              value="someone-is-there-usually"
            />
            <TOC.Item
              label="Someone was there"
              value="someone-was-there-usually"
            />
            <TOC.Item
              label="Someone will be there"
              value="someone-will-be-there-usually"
            />
            <TOC.Item
              label="Someone would/might be there"
              value="someone-might-be-there-usually"
            />
            <TOC.Item
              label="Someone is not there"
              value="someone-is-not-there-usually"
            />
            <TOC.Item
              label="Someone was not there"
              value="someone-was-not-there-usually"
            />
            <TOC.Item
              label="Someone will not be there"
              value="someone-will-not-be-there-usually"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item
          label="Residing at an address / being home"
          value="being-home"
        >
          <TOC.Section>
            <TOC.Item label="Someone is at home" value="someone-is-at-home" />
            <TOC.Item
              label="Someone used to be at home"
              value="someone-used-to-be-at-home"
            />
            <TOC.Item
              label="Someone will be at home"
              value="someone-will-be-at-home"
            />
            <TOC.Item
              label="Someone would/might be at home"
              value="someone-would-might-be-at-home"
            />
            <TOC.Item
              label="Someone is not at home"
              value="someone-is-not-at-home"
            />
            <TOC.Item
              label="Someone was not at home"
              value="someone-was-not-at-home"
            />
            <TOC.Item
              label="Someone will not be at home"
              value="someone-will-not-be-at-home"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Living in an area" value="living">
          <TOC.Section>
            <TOC.Item label="Someone lives there" value="someone-lives-there" />
            <TOC.Item
              label="Someone used to live there"
              value="someone-used-to-live-there"
            />
            <TOC.Item
              label="Someone will live there"
              value="someone-will-live-there"
            />
            <TOC.Item
              label="Someone would/might live there"
              value="someone-would-might-live-there"
            />
            <TOC.Item
              label="Someone doesn't live there"
              value="someone-does-not-live-there"
            />
            <TOC.Item
              label="Someone didn't used to live there"
              value="someone-didnt-used-to-live-there"
            />
            <TOC.Item
              label="Someone will not be live there"
              value="someone-will-not-be-live-there"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Want something to happen" value="want">
          <TOC.Section>
            <TOC.Item label="Want" value="want" />
            <TOC.Item label="Don't want" value="dont-want" />
            <TOC.Item label="Wanted" value="wanted" />
            <TOC.Item label="Didn't used to want" value="didnt-used-to-want" />
          </TOC.Section>
        </TOC.Item>
      </TOC>

      <Text>
        In this module, we&lsquo;ll cover the following:
        <ul>
          <li>Times of day</li>
          <li>Times of year</li>
          <li>Days of the week</li>
          <li>Months of the year</li>
          <li>Clock time (what time it is)</li>
          <li>Time durations</li>
          <li>Phone number</li>
          <li>Someone&lsquo;s house</li>
          <li>Someone&lsquo;s place of work</li>
          <li>Roads of Oneida Nation</li>
          <li>Cities</li>
          <li>Countries</li>
          <li>In the house</li>
          <li>At someone&lsquo;s place</li>
          <li>Places in the community</li>
          <li>Coming from a place</li>
        </ul>
      </Text>

      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Someone is here</AccordionTrigger>
          <AccordionContent>
            <ParadigmTable
              columnVisibility={{
                pronounEnglish: false,
                pronounOneida: false,
              }}
              data={dataIsHere}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      <ParadigmTable data={dataWasHere} />

      <ParadigmTable data={dataWillBeHere} />

      <ParadigmTable data={dataMightBeHere} />

      <ParadigmTable data={dataIsNotHere} />

      <ParadigmTable data={dataWasNotHere} />

      <ParadigmTable data={dataWillNotBeHere} />

      <ParadigmTable data={dataIsThere} />

      <ParadigmTable data={dataWasThere} />

      <ParadigmTable data={dataWillBeThere} />

      <ParadigmTable data={dataMightBeThere} />

      <ParadigmTable data={dataIsNotThere} />

      <ParadigmTable data={dataWasNotThere} />

      <ParadigmTable data={dataWillNotBeThere} />

      <ParadigmTable data={dataIsAtHome} />

      <ParadigmTable data={dataWasAtHome} />

      <ParadigmTable data={dataWillBeAtHome} />

      <ParadigmTable data={dataMightBeAtHome} />

      <ParadigmTable data={dataIsNotAtHome} />

      <ParadigmTable data={dataWasNotAtHome} />

      <Text>
        Note: in the above two tables, there are two phrases that are peculiar:{" "}
        <b>yáh teʔtehsí·tluʔ</b> and <b>yáh teʔtehsiʔtlu·táhkweʔ</b>. It is
        fairly uncommon to see <Letter>te</Letter> followed by another{" "}
        <Letter>te</Letter>.
      </Text>

      <ParadigmTable data={dataWillNotBeAtHome} />

      <ParadigmTable data={dataLivesThere} />
      <ParadigmTable data={dataUsedToLiveThere} />
      <ParadigmTable data={dataWillLiveThere} />
      <ParadigmTable data={dataMightLiveThere} />
      <ParadigmTable data={dataDoesntLiveThere} />
      <ParadigmTable data={dataDidntUsedToLiveThere} />
      <ParadigmTable data={dataWillNotLiveThere} />

      <ParadigmTable data={dataWant} />
      <ParadigmTable data={dataDontWant} />
      <ParadigmTable data={dataUsedToWant} />
      <ParadigmTable data={dataDidntUsedToWant} />
      <ParadigmTable data={dataThought} />
    </Flex>
  );
}
