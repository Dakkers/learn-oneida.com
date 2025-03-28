"use client";
import React, { type ReactNode, useMemo, useState } from "react";
import {
  type Pronoun,
  SectionHeading,
  TableWrapper,
} from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { arrayify, Flex, List, Notice, Text } from "@ukwehuwehneke/ohutsya";
import { LinkWrapper } from "@/components/LinkWrapper";

import _ from "lodash";
import { Link } from "@/components/Link";
import { ParadigmTable } from "@/components/ParadigmTable";

import eatAMealHAB from "@/data/module06/eatAMeal-HAB";
import eatAMealIFUT from "@/data/module06/eatAMeal-IFUT";
import eatAMealFUT from "@/data/module06/eatAMeal-FUT";
import eatAMealDEF from "@/data/module06/eatAMeal-DEF";

import cookHAB from "@/data/module06/cook-HAB";
import cookIFUT from "@/data/module06/cook-IFUT";
import cookFUT from "@/data/module06/cook-FUT";
import cookDEF from "@/data/module06/cook-DEF";

import drinkHAB from "@/data/module06/drink-HAB";
import drinkIFUT from "@/data/module06/drink-IFUT";
import drinkFUT from "@/data/module06/drink-FUT";
import drinkDEF from "@/data/module06/drink-DEF";

import { TextWithAudio } from "@/components/TextWithAudio";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/data/module04";
import { formatFileWithSuffix } from "@/utils/misc";
import { EnglishDisplay, StandardEntryDisplay } from "@/components";
import { createModule9FoodsList, type Module9FoodDatum } from "@/data/module09";

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

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={drinkHAB}
      />

      <Notice emphasis="outline" intent="primary">
        You probably noticed that each of these words are spoken twice but
        slightly differently. The first utterance is the "prepausal" ending and
        the second is the "medial" ending. This will be discussed in detail
        later, but to summarize the difference:
        <br />
        <br />
        <List>
          <List.Item>
            The prepausal form of a word is spoken if the word is the last word
            in a sentence, or if it's the only word in a sentence
          </List.Item>
          <List.Item>The medial form of a word is spoken otherwise</List.Item>
        </List>
        <br />
        If you only hear one utterance, that word only has a medial form.
      </Notice>

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
              "ChineseFood",
              "ChickenMeat",
              "Coffee",
              "Corn",
              "CornSoup",
              "Egg",
              "Fish",
              "Fruit",
              "BreadFried",
              "Lasagna",
              "GreenVegetable",
              "Hamburger",
              "Hotdog",
              "IceCream",
              "JunkFood",
              "Macaroni",
              "MashedPotato",
              "Pizza",
              "Pie",
              "Popcorn",
              // "Potato",
              "Sandwich",
              "Sconedog",
              "Soda",
              "Soup",
              "Spaghetti",
              "Strawberry",
              // "Sugar",
              "Tea",
              "Toast",
              // "Tomato",
              "Turkey",
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

      <TestingTable
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
        ]}
      />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>

      <Text>
        Many words we've seen so far are conjugated in some capacity. In
        linguistics, conjugation is the act of modifying a word to make it fit
        different tenses or who is speaking. In English, for example, you would
        conjugate the word "drink" to be "drank" for the past tense. As
        mentioned in the <LinkWrapper page="intro" />, Oneida is a language that
        conjugates quite a bit.
      </Text>

      <Text>
        Particles are an exception of sorts. These are words that are not
        conjugatable, that is, they only ever appear in one form. (There are
        particles that become contractions, which will be discussed separately.)
      </Text>

      <Text>
        The first particle we will learn is the word ókhaleʔ, which is very
        often spoken as simply <b>kháleʔ</b>, which means "and". We will use
        this word in new basic sentences below.
      </Text>

      <SectionHeading id="basic-sentences-2" level={2}>
        More basic sentences
      </SectionHeading>

      <Text>
        The sentences below make use of the same food words and the same time
        words, but introduce the usage of the word <b>kháleʔ</b>.
      </Text>

      <TestingTable
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
        ]}
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

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={drinkDEF}
      />

      <SectionHeading id="future-tense" level={2}>
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

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={drinkFUT}
      />

      <SectionHeading id="indefinite-tense" level={2}>
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

      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={defaultColVisibility}
        data={drinkIFUT}
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

      <SectionHeading id="asking-questions" level={2}>
        Asking questions
      </SectionHeading>

      <Text>
        In Oneida, you can ask a "yes or no" question by adding the word{" "}
        <b>kʌ́</b> to your sentence. This word almost always shows up as the
        second word in a sentence, though there are exceptions.
      </Text>

      <Text>
        This is a particle with no English equivalent. Unlike English, the tone
        of your voice should not change when asking a question.
      </Text>

      <SectionHeading id="sentences-new-tenses" level={2}>
        Sentences with new tenses
      </SectionHeading>

      <Text>
        The sentences below use the definite (past), indefinite future, and
        future tenses, as well as the new time words above. Some of them are
        questions, so listen for the word <b>kʌ́</b>!
      </Text>

      <TestingTable
        data={[
          {
            one: "TBD",
            en: "I will cook spaghetti and ground meat next week.",
          },
          {
            one: "TBD",
            en: "I will cook fish and corn soup tonight.",
          },
          {
            one: "TBD",
            en: "I will cook corn tomorrow.",
          },
          {
            one: "TBD",
            en: "I will cook macaroni this weekend.",
          },
          {
            one: "TBD",
            en: "I might cook macaroni and mashed potato next week.",
          },
          {
            one: "TBD",
            en: "I might cook sconedog and greens tonight.",
          },
          {
            one: "TBD",
            en: "I might cook frybread tomorrow.",
          },
          {
            one: "TBD",
            en: "I might cook turkey (meat) this weekend.",
          },
          {
            one: "TBD",
            en: "I cooked bean soup yesterday.",
          },
          {
            one: "TBD",
            en: "I cooked corn soup this past weekend.",
          },
          {
            one: "TBD",
            en: "I will eat junk food and ice cream tonight.",
          },
          {
            one: "TBD",
            en: "I will eat corn and fish tomorrow.",
          },
          {
            one: "TBD",
            en: "I will eat pizza this weekend.",
          },
          {
            one: "TBD",
            en: "I might eat popcorn tonight.",
          },
          {
            one: "TBD",
            en: "I might eat a sconedog tomorrow.",
          },
          {
            one: "TBD",
            en: "I might eat Chinese food this weekend.",
          },
          {
            one: "TBD",
            en: "I ate a strawberry.",
          },
          {
            one: "TBD",
            en: "I ate eggs.",
          },
          {
            one: "TBD",
            en: "I ate pizza yesterday.",
          },
          {
            one: "TBD",
            en: "I ate lasagna yesterday.",
          },
          {
            one: "TBD",
            en: "I ate pie this past weekend.",
          },
          {
            one: "TBD",
            en: "I ate an apple and a banana yesterday.",
          },
          {
            one: "TBD",
            en: "I drank coffee yesterday.",
          },
          {
            one: "TBD",
            en: "I will drink tea tonight.",
          },
          {
            one: "TBD",
            en: "Will you cook turkey (meat) next week?",
          },
          {
            one: "TBD",
            en: "You will cook bean soup tonight.",
          },
          {
            one: "TBD",
            en: "Will you cook fish tomorrow?",
          },
          {
            one: "TBD",
            en: "Will you cook a sconedog this weekend?",
          },
          {
            one: "TBD",
            en: "Would you cook frybread and greens tonight?",
          },
          {
            one: "TBD",
            en: "You might cook lasagna tomorrow.",
          },
          {
            one: "TBD",
            en: "You cooked spaghetti yesterday.",
          },
          {
            one: "TBD",
            en: "Did you cook macaroni yesterday?",
          },
          {
            one: "TBD",
            en: "You cooked fish this past weekend.",
          },
          {
            one: "TBD",
            en: "Did you cook mashed potato yesterday?",
          },
          {
            one: "TBD",
            en: "Will you eat pizza tonight?",
          },
          {
            one: "TBD",
            en: "Will you eat Chinese food this weekend?",
          },
          {
            one: "TBD",
            en: "Did you eat an apple?",
          },
          {
            one: "TBD",
            en: "Did you eat a sandwich?",
          },
          {
            one: "TBD",
            en: "Did you eat a hotdog yesterday?",
          },
          {
            one: "TBD",
            en: "Did you eat ice cream this past weekend?",
          },
          {
            one: "TBD",
            en: "Did you drink water?",
          },
          {
            one: "TBD",
            en: "He will cook lasagna next week.",
          },
          {
            one: "TBD",
            en: "Will he cook tonight?",
          },
          {
            one: "TBD",
            en: "He will cook frybread and sconedog tomorrow.",
          },
          {
            one: "TBD",
            en: "He will cook turkey this weekend.",
          },
          {
            one: "TBD",
            en: "He might cook fish next week.",
          },
          {
            one: "TBD",
            en: "Could he cook tonight?",
          },
          {
            one: "TBD",
            en: "He might cook greens tomorrow.",
          },
          {
            one: "TBD",
            en: "He might cook hamburger this weekend.",
          },
          {
            one: "TBD",
            en: "He cooked soup yesterday.",
          },
          {
            one: "TBD",
            en: "Did he cook macaroni yesterday?",
          },
          {
            one: "TBD",
            en: "He cooked spaghetti this past weekend.",
          },
          {
            one: "TBD",
            en: "Did he cook fish this past weekend?",
          },
          {
            one: "TBD",
            en: "He ate a pie.",
          },
          {
            one: "TBD",
            en: "He ate a sandwich.",
          },
          {
            one: "TBD",
            en: "He ate hamburger yesterday.",
          },
          {
            one: "TBD",
            en: "Did he eat lasagna yesterday?",
          },
          {
            one: "TBD",
            en: "He ate fish this past weekend.",
          },
          {
            one: "TBD",
            en: "Did he drink water?",
          },
          {
            one: "TBD",
            en: "He drank pop yesterday.",
          },
          {
            one: "TBD",
            en: "He will drink coffee tonight.",
          },
          {
            one: "TBD",
            en: "She will cook pizza next week.",
          },
          {
            one: "TBD",
            en: "Will she cook tonight?",
          },
          {
            one: "TBD",
            en: "She will cook fish and vegetables tomorrow.",
          },
          {
            one: "TBD",
            en: "She will cook hamburger this weekend.",
          },
          {
            one: "TBD",
            en: "She might cook spaghetti next week.",
          },
          {
            one: "TBD",
            en: "She might cook tonight.",
          },
          {
            one: "TBD",
            en: "She might cook corn and bean soup tomorrow.",
          },
          {
            one: "TBD",
            en: "She might cook frybread this weekend.",
          },
          {
            one: "TBD",
            en: "She cooked mashed potato yesterday.",
          },
          {
            one: "TBD",
            en: "Did she cook spaghetti yesterday?",
          },
          {
            one: "TBD",
            en: "She cooked macaroni this past weekend.",
          },
          {
            one: "TBD",
            en: "Did she cook soup this past weekend?",
          },
          {
            one: "TBD",
            en: "She ate a banana.",
          },
          {
            one: "TBD",
            en: "She ate a sconedog.",
          },
          {
            one: "TBD",
            en: "She ate eggs yesterday.",
          },
          {
            one: "TBD",
            en: "Did she eat lasagna yesterday?",
          },
          {
            one: "TBD",
            en: "She ate chicken this past weekend.",
          },
          {
            one: "TBD",
            en: "Did she drink pop?",
          },
          {
            one: "TBD",
            en: "She drank water yesterday.",
          },
          {
            one: "TBD",
            en: "She will drink tea tonight.",
          },
        ]}
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

function TestingTable({
  data,
}: {
  data: Array<{ one: string; en: string }>;
}) {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "sentence",
          // @ts-expect-error Table generics
          cell: (value: { one: string; en: string }) => (
            <TestingCell value={value} />
          ),
          header: "",
        },
      ]}
      data={_.shuffle(data.map((val) => ({ sentence: val })))}
    />
  );
}

function TestingCell({
  value,
}: {
  value: { one: string; en: string };
}) {
  const [isEnglishShowing, setIsEnglishShowing] = useState(false);
  const [isOneidaShowing, setIsOneidaShowing] = useState(false);

  return (
    <Flex direction="column" gap={2}>
      <TextWithAudio>
        <HideableText
          hiddenStyle="blur"
          isShowing={isOneidaShowing}
          onClick={setIsOneidaShowing}
        >
          {value.one}
        </HideableText>
      </TextWithAudio>

      <HideableText isShowing={isEnglishShowing} onClick={setIsEnglishShowing}>
        <Text variant="bodyS">{value.en}</Text>
      </HideableText>
    </Flex>
  );
}

function HideableText({
  children,
  hiddenStyle,
  isShowing = false,
  onClick,
}: {
  children: ReactNode;
  hiddenStyle?: "blur" | "blackedout";
  isShowing?: boolean;
  onClick: (value: boolean) => void;
}) {
  return (
    <div>
      {isShowing ? (
        children
      ) : (
        <button
          className={hiddenStyle === "blur" ? "" : "bg-slate-900"}
          onClick={() => onClick(true)}
          style={
            hiddenStyle === "blur"
              ? {
                  // color: 'transparent',
                  // textShadow: '0 0 5px rgba(0,0,0,0.5)'
                  filter: "blur(4px)",
                }
              : {}
          }
          type="button"
        >
          <span
            aria-hidden
            className={hiddenStyle === "blackedout" ? "invisible" : ""}
          >
            {children}
          </span>
          <span className="sr-only">Click to reveal</span>
        </button>
      )}
    </div>
  );
}
