"use client";

import React, { useMemo, useRef, useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Button, Card, Flex, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import {
  type AudioFriendlyData,
  getSingleWordsForModule,
} from "@/app/practice/listen/dataGetters";
import { standardizeAudioFileName } from "@/utils/misc";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to words and phrases in Oneida.",
    },
  ];
};

export default function ToolsPlaylist() {
  const [category, setCategory] = useState("");

  const data = useMemo(() => {
    if (!category) {
      return [];
    }
    const mapping: Record<string, () => AudioFriendlyData> = {
      module01: () => getSingleWordsForModule("module01"),
      module02: () => getSingleWordsForModule("module02"),
      module03: () => getSingleWordsForModule("module03"),
      module04: () => getSingleWordsForModule("module04"),
    };

    const fn =
      category === "all"
        ? () => {
            return _.flattenDeep(Object.values(mapping).map((f) => f()));
          }
        : mapping[category];

    if (!fn) {
      return [];
    }
    return _.shuffle(fn().filter((d) => !!d.en));
  }, [category]);

  const [hasStarted, setHasStarted] = useState(false);
  const [index, setIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(index);
  const currentDatum = data[index];

  const audioClipRef = useRef<HTMLAudioElement | null>(null);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  if (index !== prevIndex) {
    const audioClip = new Audio(
      standardizeAudioFileName(currentDatum.audioFile),
    );
    const speechSynth = new SpeechSynthesisUtterance(currentDatum.en);
    speechSynth.lang = "en-US";

    const voices = speechSynthesis.getVoices();

    speechSynth.voice =
      voices.find((voice) => voice.name.startsWith("Samantha")) ??
      voices.find((voice) => voice.lang.startsWith("en-US")) ??
      voices[0];

    speechSynth.rate = 0.9;
    speechSynth.volume = 0.7;

    audioClip.addEventListener("ended", () => {
      setTimeout(() => {
        window.speechSynthesis.speak?.(speechSynth);
      }, 4500);
    });

    speechSynth.addEventListener("end", () => {
      setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
    });

    audioClipRef.current = audioClip;
    speechSynthRef.current = speechSynth;

    setPrevIndex(index);

    audioClip.play();
  }

  return (
    <>
      <SectionHeading level={1}>Playlists</SectionHeading>

      <Text>
        This page is meant to be used to listen to groups of audio files
        uninterrupted. This is handy if you want to try listening while
        preoccupied with something else!
      </Text>

      <Flex direction="column" gap={6}>
        <Select
          label="Category"
          options={[
            ["(Select)", ""],
            ["All", "all"],
            ["Module 1", "module01"],
            ["Module 2", "module02"],
            ["Module 3", "module03"],
            ["Module 4", "module04"],
          ].map(([label, value]) => ({ label, value }))}
          onChange={(newVal) => {
            setCategory(newVal);
            setHasStarted(false);
          }}
          value={category}
        />
      </Flex>

      {hasStarted ? (
        <>
          <AnswerCard
            englishText={currentDatum.en}
            oneidaText={currentDatum.translation}
          />
        </>
      ) : category ? (
        <>
          <Flex justify="end">
            <Button
              emphasis="fill"
              onClick={() => {
                setHasStarted(true);
                setIndex(0);
              }}
            >
              Start
            </Button>
          </Flex>
        </>
      ) : null}
    </>
  );
}

function AnswerCard({
  englishText,
  oneidaText,
}: {
  englishText: string;
  oneidaText: string;
}) {
  return (
    <Card>
      <Flex align="center" direction="column" gap={4}>
        <Text as="span" variant="bodyL">
          <strong>{oneidaText}</strong>
        </Text>
        <Text variant="bodyL">{englishText}</Text>
      </Flex>
    </Card>
  );
}
