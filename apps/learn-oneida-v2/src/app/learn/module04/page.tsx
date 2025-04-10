import dataIsHere from "~/data/module04/is-here";
import dataWasHere from "~/data/module04/was-here";
import dataWillBeHere from "~/data/module04/will-be-here";
import dataMightBeHere from "~/data/module04/might-be-here";
import dataIsNotHere from "~/data/module04/is-not-here";
import dataWasNotHere from "~/data/module04/was-not-here";
import dataWillNotBeHere from "~/data/module04/will-not-be-here";
import dataIsThere from "~/data/module04/is-there";
import dataWillBeThere from "~/data/module04/will-be-there";
import dataWasThere from "~/data/module04/was-there";
import dataMightBeThere from "~/data/module04/might-be-there";
import dataIsNotThere from "~/data/module04/is-not-there";
import dataWasNotThere from "~/data/module04/was-not-there";
import dataWillNotBeThere from "~/data/module04/will-not-be-there";
import dataIsAtHome from "~/data/module04/is-at-home";
import dataWasAtHome from "~/data/module04/was-at-home";
import dataWillBeAtHome from "~/data/module04/will-be-at-home";
import dataMightBeAtHome from "~/data/module04/might-be-at-home";
import dataIsNotAtHome from "~/data/module04/is-not-at-home";
import dataWasNotAtHome from "~/data/module04/was-not-at-home";
import dataWillNotBeAtHome from "~/data/module04/will-not-be-at-home";
import dataLivesThere from "~/data/module04/lives-there";
import dataUsedToLiveThere from "~/data/module04/used-to-live-there";
import dataWillLiveThere from "~/data/module04/will-live-there";
import dataMightLiveThere from "~/data/module04/might-live-there";
import dataDoesntLiveThere from "~/data/module04/doesnt-live-there";
import dataDidntUsedToLiveThere from "~/data/module04/didnt-used-to-live-there";
import dataWillNotLiveThere from "~/data/module04/will-not-live-there";
import dataWant from "~/data/module04/want";
import dataDontWant from "~/data/module04/dont-want";
import dataUsedToWant from "~/data/module04/used-to-want";
import dataDidntUsedToWant from "~/data/module04/didnt-used-to-want";
import dataThought from "~/data/module04/thought";

import { Accordion, Text } from "@ukwehuwehneke/ohutsya";
import type { ParadigmData } from "@/utils/paradigm";
import { ParadigmTable } from "~/components/ParadigmTable";
import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { Letter } from "~/components/Letter";
import { TimesOfDayArticle } from "~/components/articles/TimesOfDay";
import { DaysOfTheWeekArticle } from "~/components/articles/DaysOfTheWeek";
import { MonthsArticle } from "~/components/articles/Months";
import { CountingTimeArticle } from "~/components/articles/CountingTime";
import { RoadsArticle } from "~/components/articles/Roads";
import { CitiesArticle } from "~/components/articles/Cities";
import { CountriesArticle } from "~/components/articles/Countries";
import { AroundTheHouseArticle } from "~/components/articles/AroundTheHouse";
import { AtSomeonesPlaceArticle } from "~/components/articles/AtSomeonesPlace";
import { PlacesInTheCommunityArticle } from "~/components/articles/PlacesInTheCommunity";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { PhoneNumbersArticle } from "~/components/articles/PhoneNumbers";
import { ClockTimeArticle } from "~/components/articles/ClockTime";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 4",
  description: "Module 4 of the Oneida curriculum",
};

const columnVisibility = {
  pronounEnglish: false,
  pronounOneida: false,
};

export default function LearnModule04() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 4</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>Note:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Being here" value="being-here">
          <TocSection>
            <TocItem label="Someone is here" value="someone-is-here" />
            <TocItem label="Someone was here" value="someone-was-here" />
            <TocItem
              label="Someone will be here"
              value="someone-will-be-here"
            />
            <TocItem
              label="Someone would/might be here"
              value="someone-might-be-here"
            />
            <TocItem label="Someone is not here" value="someone-is-not-here" />
            <TocItem
              label="Someone was not here"
              value="someone-was-not-here"
            />
            <TocItem
              label="Someone will not be here"
              value="someone-will-not-be-here"
            />
          </TocSection>
        </TocItem>

        <TocItem label="Being there (temporarily)" value="being-there-temp">
          <TocSection>
            <TocItem label="Someone is there" value="someone-is-there-temp" />
            <TocItem label="Someone was there" value="someone-was-there-temp" />
            <TocItem
              label="Someone will be there"
              value="someone-will-be-there-temp"
            />
            <TocItem
              label="Someone would/might be there"
              value="someone-might-be-there-temp"
            />
            <TocItem
              label="Someone is not there"
              value="someone-is-not-there-temp"
            />
            <TocItem
              label="Someone was not there"
              value="someone-was-not-there-temp"
            />
            <TocItem
              label="Someone will not be there"
              value="someone-will-not-be-there-temp"
            />
          </TocSection>
        </TocItem>

        {/* <TocItem label="Being there (usually)" value="being-there-usually">
          <TocSection>
            <TocItem
              label="Someone is there"
              value="someone-is-there-usually"
            />
            <TocItem
              label="Someone was there"
              value="someone-was-there-usually"
            />
            <TocItem
              label="Someone will be there"
              value="someone-will-be-there-usually"
            />
            <TocItem
              label="Someone would/might be there"
              value="someone-might-be-there-usually"
            />
            <TocItem
              label="Someone is not there"
              value="someone-is-not-there-usually"
            />
            <TocItem
              label="Someone was not there"
              value="someone-was-not-there-usually"
            />
            <TocItem
              label="Someone will not be there"
              value="someone-will-not-be-there-usually"
            />
          </TocSection>
        </TocItem> */}

        <TocItem label="Residing at an address / being home" value="being-home">
          <TocSection>
            <TocItem label="Someone is at home" value="someone-is-at-home" />
            <TocItem label="Someone was at home" value="someone-was-at-home" />
            <TocItem
              label="Someone will be at home"
              value="someone-will-be-at-home"
            />
            <TocItem
              label="Someone would/might be at home"
              value="someone-might-be-at-home"
            />
            <TocItem
              label="Someone is not at home"
              value="someone-is-not-at-home"
            />
            <TocItem
              label="Someone was not at home"
              value="someone-was-not-at-home"
            />
            <TocItem
              label="Someone will not be at home"
              value="someone-will-not-be-at-home"
            />
          </TocSection>
        </TocItem>

        <TocItem label="Living in an area" value="living-there">
          <TocSection>
            <TocItem label="Someone lives there" value="someone-lives-there" />
            <TocItem
              label="Someone used to live there"
              value="someone-used-to-live-there"
            />
            <TocItem
              label="Someone will live there"
              value="someone-will-live-there"
            />
            <TocItem
              label="Someone would/might live there"
              value="someone-might-live-there"
            />
            <TocItem
              label="Someone doesn't live there"
              value="someone-doesnt-live-there"
            />
            <TocItem
              label="Someone didn't used to live there"
              value="someone-didnt-used-to-live-there"
            />
            <TocItem
              label="Someone will not live there"
              value="someone-will-not-live-there"
            />
          </TocSection>
        </TocItem>

        <TocItem label="Want something to happen" value="want-thought">
          <TocSection>
            <TocItem label="Want" value="someone-wants" />
            <TocItem label="Doesn't want" value="someone-doesnt-want" />
            <TocItem label="Used to want" value="someone-used-to-want" />
            <TocItem
              label="Didn't used to want"
              value="someone-didnt-used-to-want"
            />
            <TocItem label="Thought" value="someone-thought" />
          </TocSection>
        </TocItem>

        <TocItem label="Times of day" value="times-of-day" />
        <TocItem label="Days of the week" value="days-of-week" />
        <TocItem label="Months of the year" value="months" />
        <TocItem label="Clock time" value="clock-time" />
        <TocItem label="Counting time" value="counting-time" />
        <TocItem label="Phone numbers" value="phone-numbers">
          <TocSection>
            <TocItem label="Someone's house" value="at-someones-house" />
            <TocItem label="Someone's place of work" value="at-someones-work" />
          </TocSection>
        </TocItem>
        <TocItem label="Roads" value="roads" />
        <TocItem label="Cities" value="cities" />
        <TocItem label="Countries" value="countries" />
        <TocItem label="Around the house" value="around-the-house" />
        <TocItem label="At someone's place" value="at-someones-place" />
        <TocItem label="Places in the community" value="places-in-community" />
        <TocItem label="Particles" value="particles" />
      </TOC>

      <SectionHeading id="being-here" level={2}>
        Someone Being Here
      </SectionHeading>
      <Text>
        Below is a number of paradigm tables for &quot;someone being here&quot;.
      </Text>
      <AccordionWrapper
        sections={[
          ["someone-is-here", "Someone is here", dataIsHere, "is_here"],
          ["someone-was-here", "Someone was here", dataWasHere, "was_here"],
          [
            "someone-will-be-here",
            "Someone will be here",
            dataWillBeHere,
            "will_be_here",
          ],
          [
            "someone-might-be-here",
            "Someone might be here",
            dataMightBeHere,
            "might_be_here",
          ],
          [
            "someone-is-not-here",
            "Someone is not here",
            dataIsNotHere,
            "is_not_here",
          ],
          [
            "someone-was-not-here",
            "Someone was not here",
            dataWasNotHere,
            "was_not_here",
          ],
          [
            "someone-will-not-be-here",
            "Someone will not be here",
            dataWillNotBeHere,
            "will_not_be_here",
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
          ["someone-wants", "Someone wants", dataWant, "want"],
          [
            "someone-doesnt-want",
            "Someone doesn't want",
            dataDontWant,
            "doesnt_want",
          ],
          [
            "someone-used-to-want",
            "Someone used to want",
            dataUsedToWant,
            "used_to_want",
          ],
          [
            "someone-didnt-used-to-want",
            "Someone didn't used to want",
            dataDidntUsedToWant,
          ],
          ["someone-thought", "Someone thought", dataThought, "thought"],
        ]}
      />

      <TimesOfDayArticle level={2} />

      <DaysOfTheWeekArticle level={2} />

      <MonthsArticle level={2} />

      <ClockTimeArticle level={2} />

      <CountingTimeArticle level={2} />

      <PhoneNumbersArticle level={2} />

      <RoadsArticle level={2} />

      <CitiesArticle level={2} />

      <CountriesArticle level={2} />

      <AroundTheHouseArticle level={2} />

      <AtSomeonesPlaceArticle level={2} />

      <PlacesInTheCommunityArticle level={2} />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module04" />
    </PageWrapper>
  );
}

function AccordionWrapper({
  sections,
}: {
  sections: Array<
    [string, string, ParadigmData] | [string, string, ParadigmData, string]
  >;
}) {
  return (
    <Bleed>
      <Accordion type="multiple">
        {sections.map(([id, title, data, audioFolder]) => (
          <Accordion.Item id={id} key={id} title={title}>
            <ParadigmTable columnVisibility={columnVisibility} data={data} />
          </Accordion.Item>
        ))}
      </Accordion>
    </Bleed>
  );
}
