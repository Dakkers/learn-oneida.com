"use client";
import React, { useMemo, useState } from "react";
import {
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
import eatAMealDEF from "@/data/module06/eatAMeal-HAB";

import cookHAB from "@/data/module06/cook-HAB";
import cookIFUT from "@/data/module06/cook-IFUT";
import cookFUT from "@/data/module06/cook-FUT";
import cookDEF from "@/data/module06/cook-HAB";
import { TextWithAudio } from "@/components/TextWithAudio";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/data/module04";
import { formatFileWithSuffix } from "@/utils/misc";
import {
  getAudioFileBaseForModule12AnimalDatum,
  Module12AnimalDatum,
} from "@/data/module12";
import { EnglishDisplay, StandardEntryDisplay } from "@/components";
import { createModule9FoodsList, Module9FoodDatum } from "@/data/module09";

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
        <LinkWrapper page="intro" />.
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
        allowedPronouns={["i", "u", "m", "f"]}
        columnVisibility={defaultColVisibility}
        data={eatAMealHAB}
      />

      <ParadigmTable
        allowedPronouns={["i", "u", "m", "f"]}
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
          timesOfDayData.otherPhrases.find((obj) => obj.en.includes("never")),
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
              "Butter",
              "Cheese",
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
            en: val.en,
            one: [
              "GreenVegetable",
              "Macaroni",
              "MashedPotato",
              "Popcorn",
              "Potato",
              "Spaghetti",
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
        Basic Sentences
      </SectionHeading>

      <Text>
        We'll start with basic sentences with this structure in Oneida:
      </Text>

      <Flex justify="center">
        <Text>Time + Verb + Food</Text>
      </Flex>

      <Text>
        In the table below, both the Oneida text and English text are hidden by
        default.
        <b>I heartily recommend</b> trying to figure out what is being said by
        only listening to the audio. Listen to the audio dozens of times if you
        need to!
      </Text>

      <TableWrapper
        columns={[
          {
            accessorKey: "sentence",
            cell: (value) => (
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
          {
            one: "TBD",
            en: "I never eat vegetables.",
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
            en: "You often drink coffee.",
          },
          {
            one: "TBD",
            en: "You always eat popcorn.",
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
        ].map((val) => ({ sentence: val }))}
      />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>

      <Text>TODO - "and", "or", "but"</Text>

      <SectionHeading id="basic-sentences-2" level={2}>
        More Basic Sentences
      </SectionHeading>

      <Text>
        The sentences below make use of the same food words and time words but
        include usage of the particles described above.
      </Text>

      <TableWrapper
        columns={[
          {
            accessorKey: "sentence",
            cell: (value) => (
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
          {
            one: "TBD",
            en: "I never eat junk food or ice cream.",
          },
          {
            one: "TBD",
            en: "She sometimes cooks spaghetti and ground meat.",
          },
        ].map((val) => ({ sentence: val }))}
      />

      <SectionHeading id="more-time-words" level={2}>
        More time words
      </SectionHeading>

      <TableWrapper
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
          timesOfDayData.yesterdayPhrases.find((obj) =>
            obj.en.includes("yesterday"),
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
