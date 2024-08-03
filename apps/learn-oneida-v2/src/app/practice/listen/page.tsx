"use client";

import React, {
  RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  translatePhrase,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import { Box, Button, Card, Flex, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { getParticlesForGroup } from "@/components/articles/ParticlesTable";
import { flushSync } from "react-dom";
import { getTranslationExercisesForModule } from "@/components/practice/TranslationExercises";
import WaveSurfer from "wavesurfer.js";
import WavesurferPlayer, { WavesurferProps } from "@wavesurfer/react";
import { createModule4Data } from "@/data/module04";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/components/articles/TimesOfDay";
import { arrayify } from "@/utils";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to phrases in Oneida.",
    },
  ];
};

type Data = Array<{
  audioFile: string;
  en: string;
  translation: string;
}>;

export default function PracticeListening() {
  const categories: Array<{
    getData: () => Data;
    label: string;
    sub?: { label: string; value: string }[];
    value: string;
  }> = [
    {
      getData: () => {
        return setupModule4Data(["here"]);
      },
      label: "Being somewhere",
      sub: [
        // { label: "Being at home", value: "being_at_home" },
        { label: "Being here", value: "being_here" },
        // { label: "Being there", value: "being_there" },
      ],
      value: "being_somewhere",
    },
    // {
    //   label: "Living somewhere",
    //   value: "living_somewhere",
    // },
    {
      getData: () => {
        const data = getParticlesForGroup(subcategory);
        return data.map((datum) => ({
          audioFile: `/particles/${subcategory}/${datum.key}.mp3`,
          en: datum.en,
          translation: datum.translation,
        }));
      },
      label: "Particles",
      sub: [
        // { label: "All", value: "all" },
        { label: "Module 2", value: "module02" },
        { label: "Module 3", value: "module03" },
        { label: "Module 4", value: "module04" },
      ],
      value: "particles",
    },
    {
      getData: () => {
        const result = [];
        const data = createTimesOfDayData();

        for (const key in data) {
          const phrases = data[key as keyof typeof data];
          for (const p of phrases) {
            const translations = arrayify(p.translation);
            for (let i = 0; i < translations.length; i++) {
              const t = translations[i];
              result.push({
                audioFile: `/module04/time_phrases/${determineTimesOfDayAudioFileName(
                  p.en,
                  p.translation,
                  i,
                )}.mp3`,
                en: arrayify(p.en).join("; "),
                translation: t,
              });
            }
          }
        }
        return result;
      },
      label: "Times of day",
      value: "times_of_day",
    },
    {
      getData: () => {
        const data = getTranslationExercisesForModule(subcategory);
        return data.map((datum) => ({
          audioFile: `/translation_exercises/${subcategory}/ex_${datum[0]}.mp3`,
          en: "",
          translation: datum[1],
        }));
      },
      label: "Translation exercises",
      sub: [
        // { label: "All", value: "all" },
        { label: "Module 1", value: "module01" },
        { label: "Module 6", value: "module06" },
      ],
      value: "exercises",
    },
    {
      getData: () => {
        return setupModule4Data(["thought"]);
      },
      label: "Thought",
      value: "thought",
    },
    {
      getData: () => {
        return setupModule4Data(["want"]);
      },
      label: "Wanting something to happen",
      value: "wanting",
    },
  ];

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [index, setIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferRef = useRef<{ value: WaveSurfer | null }>({ value: null });

  const selectedCategory = categories.find((c) => c.value === category);
  const subcategoryOptions = (selectedCategory?.sub ?? []).map((c) => ({
    label: c.label,
    value: c.value,
  }));

  const updateIndex = (index: number) => {
    setIndex(index);
    setIsShowingAnswer(false);
  };

  const data = useMemo(() => {
    if (!category || !selectedCategory) {
      return [];
    }
    return _.shuffle(selectedCategory.getData());
  }, [category, subcategory]);

  const currentDatum = data[index];

  return (
    <>
      <SectionHeading level={1}>Listening Practice</SectionHeading>

      <Flex direction="column" gap={6}>
        <Select
          label="Category"
          options={[
            {
              label: "(Select)",
              value: "",
            },
            ...categories.map((c) => ({
              label: c.label,
              value: c.value,
            })),
          ]}
          onChange={(newVal) => {
            setCategory(newVal);
            const newCat = categories.find((c) => c.value === newVal);
            setSubcategory(newCat?.sub?.[0].value ?? "");
            setIndex(0);
            setIsShowingAnswer(false);
          }}
          value={category}
        />
        {subcategoryOptions.length > 0 && (
          <Select
            disabled={!selectedCategory?.sub}
            label="Subcategory"
            options={subcategoryOptions}
            onChange={(val) => {
              setSubcategory(val);
              setIndex(0);
              setIsShowingAnswer(false);
            }}
            value={subcategory}
          />
        )}
      </Flex>

      {currentDatum && (
        <>
          <Box>
            <Text variant="titleS">
              Audio track {index + 1} of {data.length}
            </Text>

            <Box pt={4}>
              <Player
                audioFile={`/audio/${currentDatum.audioFile}`}
                autoplay
                onPlay={setIsPlaying}
                wavesurferRef={wavesurferRef}
              />
            </Box>
          </Box>

          <Flex justify="between">
            <Flex gap={2}>
              <Button
                emphasis="fill"
                onClick={() => wavesurferRef.current?.value?.playPause()}
              >
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <Button
                disabled={index === 0}
                onClick={() => updateIndex(index - 1)}
              >
                Prev
              </Button>
              <Button
                disabled={index === data.length - 1}
                onClick={() => updateIndex(index + 1)}
              >
                Next
              </Button>
            </Flex>

            <Button onClick={() => setIsShowingAnswer(!isShowingAnswer)}>
              {isShowingAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
          </Flex>

          {isShowingAnswer && (
            <Card>
              <b>Oneida</b>: {currentDatum.translation}
              {!!currentDatum.en && (
                <Box pt={4}>
                  <b>English</b>: {currentDatum.en}
                </Box>
              )}
            </Card>
          )}
        </>
      )}
    </>
  );
}

function Player({
  audioFile,
  autoplay = false,
  onPlay,
  wavesurferRef,
}: {
  audioFile: string;
  autoplay?: boolean;
  onPlay: (value: boolean) => void;
  wavesurferRef?: RefObject<{ value: WaveSurfer | null }>;
}) {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasFinishedPlayback, setHasFinishedPlayback] = useState(false);
  const [prevAudioFile, setPrevAudioFile] = useState(audioFile);

  if (audioFile !== prevAudioFile) {
    setCurrentTime(0);
    setPrevAudioFile(audioFile);
    setHasFinishedPlayback(false);
  }

  const onReady = useCallback(
    (ws: WaveSurfer, audioDuration: number) => {
      if (wavesurferRef?.current) {
        wavesurferRef.current.value = ws;
      }
      onPlay(false);
      setDuration(audioDuration);
    },
    [autoplay],
  );

  const durationFormatted = useMemo(() => {
    if (duration === 0) {
      return "0:01";
    }
    return formatSecondsAsTime(duration);
  }, [duration]);

  const currentTimeFormatted = useMemo(
    () => formatSecondsAsTime(currentTime),
    [currentTime],
  );

  return (
    <>
      <WavesurferPlayer
        autoplay={autoplay}
        height={100}
        onReady={onReady}
        onPlay={() => onPlay(true)}
        onPause={() => onPlay(false)}
        onFinish={() => setHasFinishedPlayback(true)}
        onTimeupdate={(ws, time) => {
          setCurrentTime(time);
          setHasFinishedPlayback(false);
        }}
        url={audioFile}
        waveColor="#F3F4F6"
      />

      <Flex justify="between">
        <Text>
          {hasFinishedPlayback ? durationFormatted : currentTimeFormatted}
        </Text>
        <Text>{durationFormatted}</Text>
      </Flex>
    </>
  );
}

function formatSecondsAsTime(value: number) {
  const seconds = Math.floor(value) % 60;
  const minutes = Math.floor(value / 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function setupModule4Data(keyGroups: string[]) {
  const mod4Data = createModule4Data();
  const isHereKeys = [
    "data-is-here",
    "data-was-here",
    "data-will-be-here",
    "data-might-be-here",
    "data-is-not-here",
    "data-was-not-here",
    "data-will-not-be-here",
  ];
  const thoughtKeys = ["data-thought"];
  const wantKeys = [
    "data-want",
    "data-dont-want",
    "data-used-to-want",
    // "data-didnt-used-to-want",
  ];

  const keysToUse: string[] = [];
  const someMap: Record<string, string[]> = {
    here: isHereKeys,
    thought: thoughtKeys,
    want: wantKeys,
  };
  for (const keyGroup of keyGroups) {
    keysToUse.push(...(someMap[keyGroup] ?? []));
  }

  const stuff = mod4Data.filter((group) => keysToUse.includes(group.key));

  const result: Data = [];
  for (const group of stuff) {
    for (const datum of group.data.phrases) {
      const folder = group.key.replace("data-", "").replaceAll("-", "_");
      result.push({
        audioFile: `/module04/${folder}/${datum.pronoun}.mp3`,
        en: translatePhrase(group.data.translation, datum.pronoun),
        translation: datum.phrase,
      });
    }
  }
  return result;
}
