"use client";
import React, { useMemo, useState } from "react";
import {
  type Pronoun,
  SectionHeading,
  TableWrapper,
} from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { arrayify, Flex, Notice, Text } from "@ukwehuwehneke/ohutsya";
import { LinkWrapper } from "@/components/LinkWrapper";

import _ from "lodash";
import { Link } from "@/components/Link";
import { ParadigmTable } from "@/components/ParadigmTable";

import eatAMealHAB from "@/data/module06/eatAMeal-HAB";
import eatAMealIFUT from "@/data/module06/eatAMeal-IFUT";
import eatAMealFUT from "@/data/module06/eatAMeal-FUT";

import cookHAB from "@/data/module06/cook-HAB";
import cookIFUT from "@/data/module06/cook-IFUT";
import cookFUT from "@/data/module06/cook-FUT";

import { TextWithAudio } from "@/components/TextWithAudio";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/data/module04";
import { formatFileWithSuffix } from "@/utils/misc";
import { EnglishDisplay, StandardEntryDisplay } from "@/components";
import { createModule9FoodsList, type Module9FoodDatum } from "@/data/module09";
import eatAMealDEF from "@/data/module06/eatAMeal-DEF";
import cookDEF from "@/data/module06/cook-DEF";

// export const metadata: Metadata = {
//   title: "Animal identification",
//   description: "Quiz your Oneida knowledge by picking the right translation!",
// };

export default function NewIntroPage() {
  const defaultColVisibility = {
    pronounOneida: false,
    pronounEnglish: false,
  };
  const timesOfDayData = createTimesOfDayData();
  const allowedPronouns: Pronoun[] = ["i", "u", "m", "f"];

  return (
    <PageWrapper>
      <SectionHeading level={1}>Learning Oneida from Scratch</SectionHeading>

      <Notice emphasis="outline" intent="warning">
        <Flex direction="column" gap={4}>
          <Text>
            Shekolih! I (Dakota) have been working on the Learn Oneida website
            since January 2024, and have been learning Oneida since September
            2023 through a program at Fanshawe College. This program is based on
            the curriculum developed by{" "}
            <Link href="https://onkwawenna.info/">
              Onkwawenna Kentyohkwa (OK)
            </Link>
            . OK is an amazing program that has created a lot of Mohawk speakers
            but it is very different to how most people learn, as it is a
            full-time program that is very immersive and its instructors have
            incredibly high standards.
          </Text>
          <Text>
            While it has clearly succeeded in its goals, many folks are not able
            to commit to a program of this calibre. In building this website and
            learning Oneida, I do not think the curriculum is structured for
            those that are teaching themselves at a much slower pace, outside of
            a classroom environment, or without the same level of immersion.
            This website was developed based on this curriculum, and in my
            humble opinion it's a great resource for learning, but it doesn't
            really help you if you're just starting out.
          </Text>
          <Text>
            This page is an attempt at a new introduction to the language that
            will teach you things you can use right away. The contents are
            entirely my own decision. If you have feedback, please contact me.
          </Text>
        </Flex>
      </Notice>

      <SectionHeading id="preliminary" level={2}>
        Preliminary
      </SectionHeading>

      <Text>
        This module assumes a knowledge of the terms "pronominal", "root word",
        "stem", and "paradigm", all of which are discussed on the{" "}
        <LinkWrapper page="intro" query={{ nextPage: "new-intro" }} />.
      </Text>

      <SectionHeading id="first-verbs" level={2}>
        First Verbs
      </SectionHeading>

      <Text>
        The first verbs we'll cover are for eating, cooking, and drinking in the
        habitual tense. The habitual tense is a bit strange to get used to, but
        it is used when talking about events that occur regularly at some
        interval. This could be daily, weekly, monthly, etc.
      </Text>

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={eatAMealHAB}
      />

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={cookHAB}
      />

      <SectionHeading id="time-words" level={2}>
        Time words
      </SectionHeading>

      <Text>
        Below is a list of words related to time that we will use to construct
        basic sentences with.
      </Text>

      <TableWrapper
        // @ts-expect-error TODO
        columns={columns}
        data={[
          timesOfDayData.dayPhrases.find((obj) => obj.en.includes("every day")),
          timesOfDayData.dayPhrases.find((obj) => obj.en.includes("all day")),
          timesOfDayData.nightPhrases.find((obj) =>
            obj.en.includes("every night"),
          ),
          timesOfDayData.weekPhrases.find((obj) =>
            obj.en.includes("every week"),
          ),
          timesOfDayData.otherPhrases.find((obj) => obj.en.includes("always")),
          timesOfDayData.otherPhrases.find((obj) => obj.en.includes("often")),
          timesOfDayData.otherPhrases.find((obj) =>
            obj.en.includes("sometimes"),
          ),
          // timesOfDayData.otherPhrases.find((obj) => obj.en.includes("never")),
        ].map((obj) => ({
          ...obj,
          audioFile: arrayify(obj?.translation).map((item, i) =>
            formatFileWithSuffix(
              determineTimesOfDayAudioFileName(obj?.en || ""),
              obj,
              i,
            ),
          ),
        }))}
      />

      <SectionHeading id="foods" level={2}>
        Foods
      </SectionHeading>
      <Text>
        For a more extensive list of foods, check out <LinkWrapper page={9} />.
      </Text>
      <TableWrapper
        columns={[
          {
            accessorKey: "en",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (en: string[], row: Module9FoodDatum) => (
              <EnglishDisplay hideDictionary value={row} />
            ),
            header: "English",
          },
          {
            accessorKey: "one",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (
              val: Module9FoodDatum["singular"],
              row: Module9FoodDatum,
            ) => {
              return (
                <StandardEntryDisplay
                  // audioFile={getAudioFileBaseForModule12AnimalDatum(
                  //   row,
                  //   "singular",
                  // )}
                  // @ts-expect-error TODO
                  value={val}
                />
              );
            },
            header: "Oneida",
          },
        ]}
        data={createModule9FoodsList()
          .filter((val) =>
            [
              "Apple",
              "Banana",
              "BeanSoup",
              "Bread",
              // "Butter",
              // "Cheese",
              "ChickenMeat",
              "Coffee",
              "Corn",
              "CornSoup",
              "Egg",
              "Fish",
              "Fruit",
              "Frybread",
              "GreenVegetable",
              "Hamburger",
              "Hotdog",
              "IceCream",
              "JunkFood",
              "Macaroni",
              "MashedPotato",
              "Pizza",
              "Popcorn",
              "Potato",
              "Sandwich",
              "Sconedog",
              "Soda",
              "Soup",
              "Spaghetti",
              "Strawberry",
              "Sugar",
              "Tea",
              "Toast",
              // "Tomato",
              // "TurkeyMeat",
              "Vegetables",
              "Water",
            ].includes(val.key),
          )
          .map((val) => ({
            en: val.key === "Egg" ? "eggs" : val.en,
            one: [
              "Egg",
              "GreenVegetable",
              "Macaroni",
              "MashedPotato",
              "Popcorn",
              "Potato",
              "Spaghetti",
              "Strawberry",
              "Sugar",
              "Tea",
              "Tomato",
              "Vegetables",
            ].includes(val.key)
              ? val.plural
              : val.singular,
          }))}
      />

      <SectionHeading id="basic-sentences" level={2}>
        Basic sentences
      </SectionHeading>

      <Text>
        We'll start with basic sentences with this structure in Oneida:
      </Text>

      <Flex justify="center">
        <Text>Time + Verb + Food</Text>
      </Flex>

      <Text>
        In the table below, both the Oneida text and English text are hidden by
        default. <b>I heartily recommend</b> trying to figure out what is being
        said by only listening to the audio. Listen to the audio dozens of times
        if you need to!
      </Text>

      <TableWrapper
        columns={[
          {
            accessorKey: "sentence",
            // @ts-expect-error Table generics
            cell: (value: { one: string; en: string }) => (
              <Flex direction="column" gap={2}>
                <TextWithAudio>{value.one}</TextWithAudio>

                <Text variant="bodyS">{value.en}</Text>
              </Flex>
            ),
            header: "",
          },
        ]}
        data={[
          {
            one: "TBD",
            en: "I drink coffee every day.",
          },
          {
            one: "TBD",
            en: "I drink tea every night.",
          },
          // {
          //   one: "TBD",
          //   en: "I never eat vegetables.",
          // },
          {
            one: "TBD",
            en: "I always eat vegetables.",
          },
          {
            one: "TBD",
            en: "I often cook mashed potatoes.",
          },
          {
            one: "TBD",
            en: "I sometimes cook fish.",
          },
          {
            one: "TBD",
            en: "I often eat fish.",
          },
          {
            one: "TBD",
            en: "I eat an apple every day.",
          },
          {
            one: "TBD",
            en: "I eat bread every day.",
          },
          {
            one: "TBD",
            en: "You often drink coffee.",
          },
          {
            one: "TBD",
            en: "You always eat popcorn.",
          },
          {
            one: "TBD",
            en: "You often eat fish.",
          },
          // {
          //   one: "TBD",
          //   en: "You never cook spaghetti.",
          // },
          {
            one: "TBD",
            en: "You cook spaghetti every week.",
          },
          {
            one: "TBD",
            en: "You eat a banana every day.",
          },
          {
            one: "TBD",
            en: "You drink pop all day.",
          },
          {
            one: "TBD",
            en: "He always drinks water.",
          },
          {
            one: "TBD",
            en: "He often drinks tea.",
          },
          {
            one: "TBD",
            en: "He eats chicken every week.",
          },
          {
            one: "TBD",
            en: "He often cooks fish.",
          },
          {
            one: "TBD",
            en: "He sometimes cooks pizza.",
          },
          {
            one: "TBD",
            en: "She often cooks chicken.",
          },
          {
            one: "TBD",
            en: "She drinks coffee all day.",
          },
          {
            one: "TBD",
            en: "She sometimes cooks macaroni.",
          },
          {
            one: "TBD",
            en: "She eats corn soup every week.",
          },
          {
            one: "TBD",
            en: "She eats corn every day.",
          },
        ].map((val) => ({ sentence: val }))}
      />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>

      <Text>TODO - "and", "or"</Text>

      <SectionHeading id="basic-sentences-2" level={2}>
        More basic sentences
      </SectionHeading>

      <Text>
        The sentences below make use of the same food words and time words but
        include usage of the particles described above.
      </Text>

      <TableWrapper
        columns={[
          {
            accessorKey: "sentence",
            // @ts-expect-error Table generics
            cell: (value: { one: string; en: string }) => (
              <Flex direction="column" gap={2}>
                <TextWithAudio>{value.one}</TextWithAudio>

                <Text variant="bodyS">{value.en}</Text>
              </Flex>
            ),
            header: "",
          },
        ]}
        data={[
          {
            one: "TBD",
            en: "I often eat toast and eggs.",
          },
          // {
          //   one: "TBD",
          //   en: "I never eat junk food or ice cream.",
          // },
          {
            one: "TBD",
            en: "I always eat junk food and ice cream.",
          },
          {
            one: "TBD",
            en: "I eat a banana and an apple every day.",
          },
          {
            one: "TBD",
            en: "I cook fish and vegetables every week.",
          },
          {
            one: "TBD",
            en: "You cook fish and vegetables every week.",
          },
          {
            one: "TBD",
            en: "You often cook soup and vegetables.",
          },
          {
            one: "TBD",
            en: "He cooks a sconedog and bean soup every day.",
          },
          {
            one: "TBD",
            en: "He eats fruit and greens every day.",
          },
          {
            one: "TBD",
            en: "She often cooks macaroni and mashed potatoes.",
          },
          {
            one: "TBD",
            en: "She sometimes cooks spaghetti and ground meat.",
          },
        ].map((val) => ({ sentence: val }))}
      />

      <SectionHeading id="definite-tense" level={2}>
        The definite tense
      </SectionHeading>

      <Text>
        At the introductory level, the definite tense can be thought of as a
        past tense where the event in question occurred somewhat recently. For
        example, yesterday, last week, the other day, etc.
      </Text>

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={eatAMealDEF}
      />

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={cookDEF}
      />

      <SectionHeading id="definite-tense" level={2}>
        The future tense
      </SectionHeading>

      <Text>
        The future tense is what it sounds like: it refers to events that{" "}
        <i>will</i> occur in the future.
      </Text>

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={eatAMealFUT}
      />

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={cookFUT}
      />

      <SectionHeading id="definite-tense" level={2}>
        The indefinite future tense
      </SectionHeading>

      <Text>
        The indefinite future tense is a bit trickier. It is used when events
        might, should, could, or would occur, but may not necessarily happen.
      </Text>

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={eatAMealIFUT}
      />

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={cookIFUT}
      />

      <SectionHeading id="more-time-words" level={2}>
        More time words
      </SectionHeading>

      <TableWrapper
        // @ts-expect-error Table generics
        columns={columns}
        data={[
          timesOfDayData.tomorrowPhrases.find((obj) =>
            obj.en.includes("tomorrow"),
          ),
          timesOfDayData.tomorrowPhrases.find((obj) =>
            obj.en.includes("tomorrow evening"),
          ),
          timesOfDayData.weekendPhrases.find((obj) =>
            obj.en.includes("this past weekend"),
          ),
          timesOfDayData.weekendPhrases.find((obj) =>
            obj.en.includes("this (coming) weekend"),
          ),
          timesOfDayData.yesterdayPhrases.find((obj) =>
            obj.en.includes("yesterday"),
          ),
          timesOfDayData.weekPhrases.find((obj) =>
            obj.en.includes("next week"),
          ),
        ].map((obj) => ({
          ...obj,
          audioFile: arrayify(obj?.translation).map((item, i) =>
            formatFileWithSuffix(
              determineTimesOfDayAudioFileName(obj?.en || ""),
              obj,
              i,
            ),
          ),
        }))}
      />
    </PageWrapper>
  );
}

const columns = [
  TableWrapper.columnsEnglishTranslation[0],
  {
    ...TableWrapper.columnsEnglishTranslation[1],
    cell: (
      value: string | string[],
      row: {
        audioFile: string | string[];
      },
    ) => (
      <Flex direction="column" gap={2}>
        {arrayify(value).map((val, i) => (
          <TextWithAudio filepath={arrayify(row.audioFile)[i]} key={i}>
            {val}
          </TextWithAudio>
        ))}
      </Flex>
    ),
  },
];
