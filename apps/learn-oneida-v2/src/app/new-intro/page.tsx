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
        habitual tense. The habitual tense can be used for both the present tense (right now)
        and also for something that occurs regularly (daily, weekly, etc).
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
          // timesOfDayData.dayPhrases.find((obj) => obj.en.includes("every day")),
          // timesOfDayData.dayPhrases.find((obj) => obj.en.includes("all day")),
          // timesOfDayData.nightPhrases.find((obj) =>
          //   obj.en.includes("every night"),
          // ),
          // timesOfDayData.weekPhrases.find((obj) =>
          //   obj.en.includes("every week"),
          // ),
          timesOfDayData.otherPhrases.find((obj) => obj.en.includes("always")),
          // timesOfDayData.otherPhrases.find((obj) => obj.en.includes("often")),
          // timesOfDayData.otherPhrases.find((obj) =>
          //   obj.en.includes("sometimes"),
          // ),
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
              "Chicken",
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
              "TurkeyMeat",
              "Vegetables",
              "Water",
            ].includes(val.key),
          )
          .map((val) => ({
            en: val.key === "Egg" ? "eggs" : val.key === "Strawberry" ? "strawberries" : val.en,
            one: [
              // "Chicken",
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
        <Text>(Time +) Verb + Food</Text>
      </Flex>

      <Text>
        In the table below, both the Oneida text and English text are hidden by
        default. <b>I heartily recommend</b> trying to figure out what is being
        said by only listening to the audio. Listen to the audio dozens of times
        if you need to!
      </Text>

      <TestingTable
        data={[
          // {
          //   one: "Yaʔtewʌhnislaké khnekílhaʔ ohsaheʔtákeli̲",
          //   en: "I drink coffee every day.",
          // },
          {
            one: "Tyóhtkut khnekílhaʔ ohsaheʔtákeli̲",
            en: "I always drink coffee.",
          },
          // {
          //   one: "Yaʔtewahsu·táke khnekílhaʔ tekantlahtalihtu",
          //   en: "I drink tea every night.",
          // },
          {
            one: "Khnekílhaʔ tekantlahtalihtu",
            en: "I am drinking tea.",
          },
          // {
          //   one: "TBD",
          //   en: "I never eat vegetables.",
          // },
          {
            one: "Tyóhtkut katekhu·níheʔ ohʌtaseʔshúha̲",
            en: "I always eat vegetables.",
          },
          // {
          //   one: "Yotká·teʔ kekhu·níheʔ tekahnanatahlihtáni",
          //   en: "I often cook mashed potato.",
          // },
          // {
          //   one: "Swatye·lʌ́ kekhu·níheʔ kʌ́tsiʔ",
          //   en: "I sometimes cook fish.",
          // },
          // {
          //   one: "Yotká·teʔ katekhu·níheʔ tekalakwistá·sleʔ",
          //   en: "I often eat lasagna.",
          // },
          {
            one: "Katekhu·níheʔ tekalakwistá·sleʔ",
            en: "I am eating lasagna.",
          },
          // {
          //   one: "Yaʔtewʌhnislaké katekhu·níheʔ swahyo·wáne",
          //   en: "I eat an apple every day.",
          // },
          // {
          //   one: "Yaʔtewʌhnislaké katekhu·níheʔ kaná·talok",
          //   en: "I eat bread every day.",
          // },
          // {
          //   one: "Yotká·teʔ shnekílhaʔ ohsaheʔtákeli̲ʔ",
          //   en: "You often drink coffee.",
          // },
          {
            one: "Tyóhtkut shnekílhaʔ tekantlahtalihtu",
            en: "You always drink tea.",
          },
          {
            one: "Tyóhtkut satekhu·níheʔ watnʌhstatákwas",
            en: "You always eat popcorn.",
          },
          // {
          //   one: "Yotká·teʔ satekhu·níheʔ ola·ná̲·",
          //   en: "You often eat corn soup.",
          // },
          // {
          //   one: "TBD",
          //   en: "You never cook spaghetti.",
          // },
          // {
          //   one: "Yaʔtewʌ·táke sekhu·níheʔ aʔahsliyetaʔshúha̲ʔ",
          //   en: "You cook spaghetti every week.",
          // },
          {
            one: "Tyóhtkut sekhu·níheʔ aʔahsliyetaʔshúha̲ʔ",
            en: "You always cook spaghetti.",
          },
          // {
          //   one: "Yaʔtewʌhnislaké satekhu·níheʔ teyotahyá·ktu",
          //   en: "You eat a banana every day.",
          // },
          // {
          //   one: "Kwʌʔtátiʔ shnekílhaʔ kahnekákuʔ",
          //   en: "You drink pop all day.",
          // },
          {
            one: "Tyóhtkut lahnekílhaʔ ohne·kánus",
            en: "He always drinks water.",
          },
          // {
          //   one: "Yotká·teʔ lahnekílhaʔ tí",
          //   en: "He often drinks tea.",
          // },
          {
            one: "Lahnekílhaʔ tí",
            en: "He is drinking tea.",
          },
          // {
          //   one: "Yaʔtewʌ·táke latekhuníheʔ kitkit oʔwálu̲ʔ",
          //   en: "He eats chicken (meat) every week.",
          // },
          // {
          //   one: "Yotká·teʔ lakhu·níheʔ kʌ́tsiʔ",
          //   en: "He often cooks fish.",
          // },
          // {
          //   one: "Swatye·lʌ́ lakhu·níheʔ tekanaʔtalakwʌhtu",
          //   en: "He sometimes cooks pizza.",
          // },
          // {
          //   one: "Yotká·teʔ yekhu·níheʔ kitkit oʔwálu̲ʔ",
          //   en: "She often cooks chicken (meat).",
          // },
          // {
          //   one: "Kwʌʔtátiʔ yehnekílhaʔ ohsaheʔtákeli̲ʔ",
          //   en: "She drinks coffee all day.",
          // },
          {
            one: "Tyóhtkut yehnekílhaʔ ohsaheʔtákeli̲ʔ",
            en: "She always drinks coffee.",
          },
          // {
          //   one: "Swatye·lʌ́ yekhu·níheʔ oholoʔtaʔshúha̲",
          //   en: "She sometimes cooks macaroni.",
          // },
          // {
          //   one: "Yaʔtewʌ·táke yutekhuníheʔ ola·ná̲·",
          //   en: "She eats corn soup every week.",
          // },
          {
            one: "Yutekhuníheʔ ola·ná̲·",
            en: "She is eating corn soup.",
          },
          // {
          //   one: "Yaʔtewahsu·táke yutekhuníheʔ o·nʌ́hste̲ʔ",
          //   en: "She eats corn every night.",
          // },
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
            one: "Yotká·teʔ katekhu·níheʔ watnaʔtalathsaʔáhtu kháleʔ oʔnhúhsaʔshúha̲",
            en: "I often eat toast and eggs.",
          },
          // {
          //   one: "TBD",
          //   en: "I never eat junk food or ice cream.",
          // },
          {
            one: "Tyóhtkut katekhu·níheʔ kakhwáksʌ kháleʔ yosheʔlhawísto̲",
            en: "I always eat junk food and ice cream.",
          },
          {
            one: "Yaʔtewʌhnislaké katekhu·níheʔ teyotahyá·ktu kháleʔ swahyo·wáne",
            en: "I eat a banana and an apple every day.",
          },
          {
            one: "Yaʔtewʌ·táke kekhu·níheʔ kʌ́tsiʔ kháleʔ ohʌtaseʔshúha̲",
            en: "I cook fish and vegetables every week.",
          },
          {
            one: "Yaʔtewʌ·táke sekhu·níheʔ tekaʔwahlahlíhtu kháleʔ tekahnanatahlihtáni",
            en: "You cook hamburger and mashed potato every week.",
          },
          {
            one: "Yotká·teʔ sekhu·níheʔ ohnekákliʔ kháleʔ ohʌtaseʔshúha̲",
            en: "You often cook soup and vegetables.",
          },
          {
            one: "Yaʔtewʌhnislaké lakhu·níheʔ kahetsholu kháleʔ osahé·taʔ ohnekákliʔ",
            en: "He cooks a sconedog and bean soup every day.",
          },
          {
            one: "Yaʔtewʌhnislaké latekhu·níheʔ kháleʔ ohu·tá·shúha̲",
            en: "He eats fruit and greens every day.",
          },
          {
            one: "Yotká·teʔ yekhu·níheʔ oholoʔtaʔshúha̲ kháleʔ tekahnanatahlihtáni",
            en: "She often cooks macaroni and mashed potato.",
          },
          // {
          //   one: "Swatye·lʌ́ yutekhu·níheʔ aʔahsliyetaʔshúha̲ʔ kháleʔ tekaʔwahlahlíhtu",
          //   en: "She sometimes cooks spaghetti and ground meat.",
          // },
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
          timesOfDayData.eveningPhrases.find((obj) =>
            obj.en.includes("this evening"),
          ),
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
        <TextWithAudio filepath="particles/module01/question_indicator.mp3" inline><b>kʌ́</b></TextWithAudio> to your sentence. This word almost always shows up as the
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
            one: "Yʌswʌ·tát ʌkekhu·ní· aʔahsliyetaʔshúhaʔ kháleʔ tekaʔwahlahlíhtu",
            en: "I will cook spaghetti and ground meat next week.",
          },
          {
            one: "Ʌyó·kalahweʔ ʌkekhu·ní· kʌ́tsiʔ kháleʔ ola·ná̲·",
            en: "I will cook fish and corn soup tonight.",
          },
          {
            one: "Ʌyólhʌneʔ ʌkekhu·ní· o·nʌ́hste̲ʔ",
            en: "I will cook corn tomorrow.",
          },
          {
            one: "Ʌwʌtokta ʌkekhu·ní· oholoʔtaʔshúha̲",
            en: "I will cook macaroni this weekend.",
          },
          {
            one: "Yʌswʌ·tát akekhu·ní· oholoʔtaʔshúha kháleʔ tekahnanatahlihtáni",
            en: "I might cook macaroni and mashed potato next week.",
          },
          {
            one: "Ʌyó·kalahweʔ akekhu·ní· kahetsholu kháleʔ ohu·tá·shúha̲",
            en: "I might cook sconedog and greens tonight.",
          },
          {
            one: "Ʌyólhʌneʔ akekhu·ní· kʌyé·ke watnaʔtalu·tákwe̲ʔ",
            en: "I might cook frybread tomorrow.",
          },
          {
            one: "Ʌwʌtokta akekhu·ní· skawilo·wáneʔ oʔwálu̲ʔ",
            en: "I might cook turkey (meat) this weekend.",
          },
          {
            one: "The·tʌ́· waʔkekhu·ní· osahé·taʔ ohnekákliʔ",
            en: "I cooked bean soup yesterday.",
          },
          {
            one: "Yautokta·u waʔkekhu·ní· ola·ná̲·",
            en: "I cooked corn soup this past weekend.",
          },
          // {
          //   one: "Ʌyó·kalahweʔ ʌkatekhu·ní· kakhwáksʌ kháleʔ yosheʔlhawísto̲",
          //   en: "I will eat junk food and ice cream tonight.",
          // },
          {
            one: "Ʌyólhʌneʔ ʌkatekhu·ní· o·nʌ́hsteʔ kháleʔ kʌ́tsiʔ",
            en: "I will eat corn and fish tomorrow.",
          },
          {
            one: "Ʌwʌtokta ʌkatekhu·ní· tekanaʔtalakwʌhtu",
            en: "I will eat pizza this weekend.",
          },
          // {
          //   one: "Ʌyó·kalahweʔ akatekhu·ní· watnʌhstatákwas",
          //   en: "I might eat popcorn tonight.",
          // },
          // {
          //   one: "Ʌyólhʌneʔ akatekhu·ní· kahetsholu",
          //   en: "I might eat a sconedog tomorrow.",
          // },
          {
            one: "Ʌwʌtokta akatekhu·ní· tehatikahlati·lúteʔ laotíkhwaʔ",
            en: "I might eat Chinese food this weekend.",
          },
          // {
          //   one: "Waʔkatekhu·ní· awʌhihthokúha̲",
          //   en: "I ate strawberries.",
          // },
          {
            one: "Waʔkatekhu·ní· oʔnhúhsaʔshúha̲",
            en: "I ate eggs.",
          },
          {
            one: "The·tʌ́· waʔkatekhu·ní· tekanaʔtalakwʌhtu",
            en: "I ate pizza yesterday.",
          },
          {
            one: "The·tʌ́· waʔkatekhu·ní· tekalakwistá·sleʔ",
            en: "I ate lasagna yesterday.",
          },
          {
            one: "Yautokta·u waʔkatekhu·ní· wá·yat",
            en: "I ate pie this past weekend.",
          },
          // {
          //   one: "The·tʌ́· waʔkatekhu·ní· swahyo·wáne kháleʔ teyotahyá·ktu",
          //   en: "I ate an apple and a banana yesterday.",
          // },
          {
            one: "The·tʌ́· waʔkhnekí·laʔ ohsaheʔtákliʔ",
            en: "I drank coffee yesterday.",
          },
          {
            one: "Ʌyó·kalahweʔ ʌkhnekí·laʔ tí",
            en: "I will drink tea tonight.",
          },
          {
            one: "Yʌswʌ·tát kʌ́ ʌhsekhu·ní· skawilo·wáneʔ oʔwálu̲ʔ",
            en: "Will you cook turkey (meat) next week?",
          },
          {
            one: "Ʌyó·kalahweʔ ʌhsekhu·ní· osahé·taʔ ohnekákliʔ",
            en: "You will cook bean soup tonight.",
          },
          {
            one: "Ʌyólhʌneʔ kʌ́ ʌhsekhu·ní· kʌ́tsiʔ",
            en: "Will you cook fish tomorrow?",
          },
          {
            one: "Ʌwʌtokta kʌ́ ʌhsekhu·ní· kahetsholu",
            en: "Will you cook a sconedog this weekend?",
          },
          {
            one: "Ʌyó·kalahweʔ kʌ́ ʌhsekhu·ní· kʌyé·ke watnaʔtalu·tákweʔ kháleʔ ohu·tá·shúha̲",
            en: "Will you cook frybread and greens tonight?",
          },
          // {
          //   one: "Ʌyólhʌneʔ TBD",
          //   en: "You might cook lasagna tomorrow.",
          // },
          {
            one: "The·tʌ́· wahsekhu·ní· aʔahsliyetaʔshúha̲ʔ",
            en: "You cooked spaghetti yesterday.",
          },
          {
            one: "The·tʌ́· kʌ́ wahsekhu·ní· oholoʔtaʔshúha̲",
            en: "Did you cook macaroni yesterday?",
          },
          {
            one: "Yautokta·u wahsekhu·ní· kʌ́tsiʔ",
            en: "You cooked fish this past weekend.",
          },
          {
            one: "The·tʌ́· kʌ́ wahsekhu·ní· tekahnanatahlihtáni",
            en: "Did you cook mashed potato yesterday?",
          },
          {
            one: "Ʌyó·kalahweʔ kʌ́ ʌhsatekhu·ní· tekanaʔtalakwʌhtu",
            en: "Will you eat pizza tonight?",
          },
          {
            one: "Ʌwʌtokta kʌ́ ʌhsatekhu·ní· tehatikahlati·lúteʔ laotíkhwaʔ",
            en: "Will you eat Chinese food this weekend?",
          },
          {
            one: "Wahsatekhu·ní· kʌ́ swahyo·wáne",
            en: "Did you eat an apple?",
          },
          {
            one: "Wahsatekhu·ní· kʌ́ tekanaʔtalá·sleʔ",
            en: "Did you eat a sandwich?",
          },
          {
            one: "The·tʌ́· kʌ́ wahsatekhu·ní· awʌhétsha̲ʔ",
            en: "Did you eat a hotdog yesterday?",
          },
          {
            one: "Yautokta·u kʌ́ wahsatekhu·ní· yosheʔlhawísto̲",
            en: "Did you eat ice cream this past weekend?",
          },
          {
            one: "Wahsatekhu·ní· kʌ́ ohne·kánus",
            en: "Did you drink water?",
          },
          {
            one: "Yʌswʌ·tát ʌhakhu·ní· tekalakwistá·sleʔ",
            en: "He will cook lasagna next week.",
          },
          {
            one: "Ʌyó·kalahweʔ kʌ́ ʌhakhu·ní·",
            en: "Will he cook tonight?",
          },
          {
            one: "Ʌyólhʌneʔ ʌhakhu·ní· kʌyé·ke watnaʔtalu·tákweʔ kháleʔ kahetsholu",
            en: "He will cook frybread and sconedog tomorrow.",
          },
          {
            one: "Ʌwʌtokta ʌhakhu·ní· skawilo·wáne̲ʔ",
            en: "He will cook a turkey this weekend.",
          },
          {
            one: "Yʌswʌ·tát ahakhu·ní· kʌ́tsiʔ",
            en: "He might cook fish next week.",
          },
          {
            one: "Ʌyó·kalahweʔ ahakhu·ní·",
            en: "He might cook tonight.",
          },
          {
            one: "Ʌyólhʌneʔ ahakhu·ní· ohu·tá·shúha̲",
            en: "He might cook greens tomorrow.",
          },
          {
            one: "Ʌwʌtokta ahakhu·ní· tekaʔwahlahlíhtu",
            en: "He might cook hamburger this weekend.",
          },
          {
            one: "The·tʌ́· wahakhu·ní· ohnekákeli̲ʔ",
            en: "He cooked soup yesterday.",
          },
          {
            one: "The·tʌ́· kʌ́ wahakhu·ní· oholoʔtaʔshúha̲",
            en: "Did he cook macaroni yesterday?",
          },
          {
            one: "Yautokta·u wahakhu·ní· aʔahsliyetaʔshúha̲ʔ",
            en: "He cooked spaghetti this past weekend.",
          },
          {
            one: "Yautokta·u kʌ́ wahakhu·ní· kʌ́tsiʔ",
            en: "Did he cook fish this past weekend?",
          },
          {
            one: "Wahatekhu·ní· wá·yat",
            en: "He ate pie.",
          },
          {
            one: "Wahatekhu·ní· tekanaʔtalá·sleʔ",
            en: "He ate a sandwich.",
          },
          {
            one: "The·tʌ́· wahatekhu·ní· tekaʔwahlahlíhtu ",
            en: "He ate hamburger yesterday.",
          },
          {
            one: "The·tʌ́· kʌ́ wahatekhu·ní· tekalakwistá·sleʔ",
            en: "Did he eat lasagna yesterday?",
          },
          {
            one: "Yautokta·u wahatekhu·ní· kʌ́tsiʔ",
            en: "He ate fish this past weekend.",
          },
          {
            one: "Wahahnekí·laʔ kʌ́ ohne·kánus",
            en: "Did he drink water?",
          },
          {
            one: "The·tʌ́· Wahahnekí·laʔ kahnekákuʔ",
            en: "He drank pop yesterday.",
          },
          {
            one: "Ʌyó·kalahweʔ ʌhahnekí·laʔ ohsaheʔtákliʔ",
            en: "He will drink coffee tonight.",
          },
          {
            one: "Yʌswʌ·tát ʌyekhu·ní· tekanaʔtalakwʌhtu",
            en: "She will cook pizza next week.",
          },
          {
            one: "Ʌyólhʌneʔ kʌ́ yoʔkala·sneʔ ʌyekhu·ní·",
            en: "Will she cook tomorrow evening?",
          },
          {
            one: "Ʌyólhʌneʔ ʌyekhu·ní· kʌ́tsiʔ kháleʔ ohʌtaseʔshúha̲",
            en: "She will cook fish and vegetables tomorrow.",
          },
          {
            one: "Ʌwʌtokta ʌyekhu·ní· tekaʔwahlahlíhtu",
            en: "She will cook hamburger this weekend.",
          },
          {
            one: "Yʌswʌ·tát ayekhu·ní· aʔahsliyetaʔshúha̲ʔ",
            en: "She might cook spaghetti next week.",
          },
          {
            one: "Ʌyó·kalahweʔ ayekhu·ní·",
            en: "She might cook tonight.",
          },
          {
            one: "Ʌyólhʌneʔ ayekhu·ní· kháleʔ osahé·taʔ ohnekákliʔ",
            en: "She might cook corn and bean soup tomorrow.",
          },
          {
            one: "Ʌwʌtokta ayekhu·ní· kʌyé·ke watnaʔtalu·tákwe̲ʔ",
            en: "She might cook frybread this weekend.",
          },
          {
            one: "The·tʌ́· waʔekhu·ní· tekahnanatahlihtáni",
            en: "She cooked mashed potato yesterday.",
          },
          {
            one: "The·tʌ́· kʌ́ waʔekhu·ní· aʔahsliyetaʔshúha̲ʔ",
            en: "Did she cook spaghetti yesterday?",
          },
          {
            one: "Yautokta·u waʔekhu·ní· oholoʔtaʔshúha̲",
            en: "She cooked macaroni this past weekend.",
          },
          {
            one: "Yautokta·u kʌ́ waʔekhu·ní· ohnekákeli̲ʔ",
            en: "Did she cook soup this past weekend?",
          },
          {
            one: "Waʔutekhu·ní· teyotahyá·ktu",
            en: "She ate a banana.",
          },
          {
            one: "Waʔutekhu·ní· kahetsholu",
            en: "She ate a sconedog.",
          },
          {
            one: "The·tʌ́· waʔutekhu·ní· oʔnhúhsaʔshúha̲",
            en: "She ate eggs yesterday.",
          },
          {
            one: "The·tʌ́· kʌ́ waʔutekhu·ní· tekalakwistá·sleʔ",
            en: "Did she eat lasagna yesterday?",
          },
          {
            one: "Yautokta·u waʔutekhu·ní· kitkit oʔwálu̲ʔ",
            en: "She ate chicken (meat) this past weekend.",
          },
          {
            one: "Waʔehnekí·laʔ kʌ́ kahnekákuʔ",
            en: "Did she drink pop?",
          },
          {
            one: "The·tʌ́· waʔehnekí·laʔ ohne·kánus",
            en: "She drank water yesterday.",
          },
          {
            one: "Ʌyó·kalahweʔ ʌyehnekí·laʔ tekantlahtalihtu",
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
      {true ? (
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
