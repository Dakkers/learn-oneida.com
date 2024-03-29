import type { MetaFunction } from "@remix-run/node";
import dataIsHere from "../data/data-ese-is-here";
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
import { ParadigmData, ParadigmTable } from "~/components/ParadigmTable";
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
import { TimesOfDayResource } from "~/components/resources/TimesOfDay";
import { DaysOfTheWeekResource } from "~/components/resources/DaysOfTheWeek";
import { MonthsResource } from "~/components/resources/Months";
import { CountingTimeResource } from "~/components/resources/CountingTime";
import { RoadsResource } from "~/components/resources/Roads";
import { CitiesResource } from "~/components/resources/Cities";
import { CountriesResource } from "~/components/resources/Countries";
import { AroundTheHouseResource } from "~/components/resources/AroundTheHouse";
import { AtSomeonesPlaceResource } from "~/components/resources/AtSomeonesPlace";
import { PlacesInTheCommunityResource } from "~/components/resources/PlacesInTheCommunity";
import { ParticlesTable } from "~/components/resources/ParticlesTable";
import { PhoneNumbersResource } from "~/components/resources/PhoneNumbers";
import { ClockTimeResource } from "~/components/resources/ClockTime";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 4" },
    { name: "description", content: "Module 4 of the Oneida curriculum" },
  ];
};

const columnVisibility = {
  pronounEnglish: false,
  pronounOneida: false,
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

        <TOC.Item label="Being there (temporarily)" value="being-there-temp">
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

        {/* <TOC.Item label="Being there (usually)" value="being-there-usually">
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
        </TOC.Item> */}

        <TOC.Item
          label="Residing at an address / being home"
          value="being-home"
        >
          <TOC.Section>
            <TOC.Item label="Someone is at home" value="someone-is-at-home" />
            <TOC.Item label="Someone was at home" value="someone-was-at-home" />
            <TOC.Item
              label="Someone will be at home"
              value="someone-will-be-at-home"
            />
            <TOC.Item
              label="Someone would/might be at home"
              value="someone-might-be-at-home"
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

        <TOC.Item label="Living in an area" value="living-there">
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
              value="someone-might-live-there"
            />
            <TOC.Item
              label="Someone doesn't live there"
              value="someone-doesnt-live-there"
            />
            <TOC.Item
              label="Someone didn't used to live there"
              value="someone-didnt-used-to-live-there"
            />
            <TOC.Item
              label="Someone will not live there"
              value="someone-will-not-live-there"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Want something to happen" value="want-thought">
          <TOC.Section>
            <TOC.Item label="Want" value="someone-wants" />
            <TOC.Item label="Doesn't want" value="someone-doesnt-want" />
            <TOC.Item label="Used to want" value="someone-used-to-want" />
            <TOC.Item
              label="Didn't used to want"
              value="someone-didnt-used-to-want"
            />
            <TOC.Item label="Thought" value="someone-thought" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Times of day" value="times-of-day" />
        <TOC.Item label="Days of the week" value="days-of-week" />
        <TOC.Item label="Months of the year" value="months" />
        <TOC.Item label="Clock time" value="clock-time" />
        <TOC.Item label="Counting time" value="counting-time" />
        <TOC.Item label="Phone numbers" value="phone-numbers">
          <TOC.Section>
            <TOC.Item label="Someone's house" value="at-someones-house" />
            <TOC.Item
              label="Someone's place of work"
              value="at-someones-work"
            />
          </TOC.Section>
        </TOC.Item>
        <TOC.Item label="Roads" value="roads" />
        <TOC.Item label="Cities" value="cities" />
        <TOC.Item label="Countries" value="countries" />
        <TOC.Item label="Around the house" value="around-the-house" />
        <TOC.Item label="At someone's place" value="at-someones-place" />
        <TOC.Item label="Places in the community" value="places-in-community" />
        <TOC.Item label="Particles" value="particles" />
      </TOC>

      <SectionHeading id="being-here" level={2}>
        Someone Being Here
      </SectionHeading>
      <Text>
        Below is a number of paradigm tables for &quot;someone being here&quot;.
      </Text>
      <AccordionWrapper
        sections={[
          ["someone-is-here", "Someone is here", dataIsHere],
          ["someone-was-here", "Someone was here", dataWasHere],
          ["someone-will-be-here", "Someone will be here", dataWillBeHere],
          ["someone-might-be-here", "Someone might be here", dataMightBeHere],
          ["someone-is-not-here", "Someone is not here", dataIsNotHere],
          ["someone-was-not-here", "Someone was not here", dataWasNotHere],
          [
            "someone-will-not-be-here",
            "Someone will not be here",
            dataWillNotBeHere,
          ],
        ]}
      />

      <SectionHeading id="being-there-temp" level={2}>
        Someone Being There (temporarily)
      </SectionHeading>
      <Text>
        Below is a number of paradigm tables for &quot;someone being{" "}
        <b>there</b> (temporarily)&quot;.
      </Text>
      <AccordionWrapper
        sections={[
          ["someone-is-there-temp", "Someone is there", dataIsThere],
          ["someone-was-there-temp", "Someone was there", dataWasThere],
          [
            "someone-will-be-there-temp",
            "Someone will be there",
            dataWillBeThere,
          ],
          [
            "someone-might-be-there-temp",
            "Someone might be there",
            dataMightBeThere,
          ],
          ["someone-is-not-there-temp", "Someone is not there", dataIsNotThere],
          [
            "someone-was-not-there-temp",
            "Someone was not there",
            dataWasNotThere,
          ],
          [
            "someone-will-not-be-there-temp",
            "Someone will not be there",
            dataWillNotBeThere,
          ],
        ]}
      />

      <SectionHeading id="being-home" level={2}>
        Someone Being At Home / Someone Residing There
      </SectionHeading>
      <Text>
        Below is a number of paradigm tables for &quot;someone being at
        home&quot; or &quot;someone residing there&quot;.
      </Text>
      <AccordionWrapper
        sections={[
          ["someone-is-at-home", "Someone is at home", dataIsAtHome],
          ["someone-was-at-home", "Someone was at home", dataWasAtHome],
          [
            "someone-will-be-at-home",
            "Someone will be at home",
            dataWillBeAtHome,
          ],
          [
            "someone-might-be-at-home",
            "Someone might be at home",
            dataMightBeAtHome,
          ],
          ["someone-is-not-at-home", "Someone is not at home", dataIsNotAtHome],
          [
            "someone-was-not-at-home",
            "Someone was not at home",
            dataWasNotAtHome,
          ],
          [
            "someone-will-not-be-at-home",
            "Someone will not be at home",
            dataWillNotBeAtHome,
          ],
        ]}
      />
      <Text>
        Note: in the tables above, there are two phrases that are peculiar:{" "}
        <b>yáh teʔtehsí·tluʔ</b> and <b>yáh teʔtehsiʔtlu·táhkweʔ</b>. It is
        fairly uncommon to see <Letter>te</Letter> followed by another{" "}
        <Letter>te</Letter>.
      </Text>

      <SectionHeading id="living-there" level={2}>
        Someone Living There
      </SectionHeading>
      <Text>
        Below is a number of paradigm tables for &quot;someone living in an
        area&quot;.
      </Text>
      <AccordionWrapper
        sections={[
          ["someone-lives-there", "Someone lives there", dataLivesThere],
          [
            "someone-used-to-live-there",
            "Someone used to live there",
            dataUsedToLiveThere,
          ],
          [
            "someone-will-live-there",
            "Someone will live there",
            dataWillLiveThere,
          ],
          [
            "someone-might-live-there",
            "Someone might live there",
            dataMightLiveThere,
          ],
          [
            "someone-doesnt-live-there",
            "Someone doesnt live there",
            dataDoesntLiveThere,
          ],
          [
            "someone-didnt-used-to-live-there",
            "Someone didn't used to live there",
            dataDidntUsedToLiveThere,
          ],
          [
            "someone-will-not-live-there",
            "Someone will not live there",
            dataWillNotLiveThere,
          ],
        ]}
      />

      <SectionHeading id="want-thought" level={2}>
        Wanted / Thought
      </SectionHeading>
      <AccordionWrapper
        sections={[
          ["someone-wants", "Someone wants", dataWant],
          ["someone-doesnt-want", "Someone doesn't want", dataDontWant],
          ["someone-used-to-want", "Someone used to want", dataUsedToWant],
          [
            "someone-didnt-used-to-want",
            "Someone didn't used to want",
            dataDidntUsedToWant,
          ],
          ["someone-thought", "Someone thought", dataThought],
        ]}
      />

      <TimesOfDayResource level={2} />

      <DaysOfTheWeekResource level={2} />

      <MonthsResource level={2} />

      <ClockTimeResource level={2} />

      <CountingTimeResource level={2} />

      <PhoneNumbersResource level={2} />

      <RoadsResource level={2} />

      <CitiesResource level={2} />

      <CountriesResource level={2} />

      <AroundTheHouseResource level={2} />

      <AtSomeonesPlaceResource level={2} />

      <PlacesInTheCommunityResource level={2} />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module04" />
    </Flex>
  );
}

function AccordionWrapper({
  sections,
}: {
  sections: Array<[string, string, ParadigmData]>;
}) {
  return (
    <Accordion type="multiple">
      {sections.map(([id, title, data]) => (
        <AccordionItem id={id} key={id} value={id}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <ParadigmTable columnVisibility={columnVisibility} data={data} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
