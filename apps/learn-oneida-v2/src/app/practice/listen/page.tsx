"use client";

import React, {
  type RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box, Button, Card, Flex, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import { arrayify } from "@ukwehuwehneke/language-components";
import {
  getClanAnimalList,
  getDomesticatedAnimalList,
  getDomesticatedBabyAnimalList,
  getNationsList,
} from "@/data/module03";
import {
  type AudioFriendlyData,
  audioFriendlyFormatter,
  formatCountingPeopleFiles,
  formatCountingTimeAudioFiles,
  formatDaysOfWeekAudioFiles,
  formatDeceasedRelativesAudioFiles,
  formatDialogueAudioFiles,
  formatEnglishNamesAudioFiles,
  formatFamilyAudioFiles,
  formatParticleAudioFiles,
  formatParticleExampleAudioFiles,
  formatPeopleAudioFiles,
  formatTranslationExerciseAudioFiles,
  getAllAudioForModule,
  getParadigmAudioForModule,
  getSentencesForModule,
  getSingleWordsForModule,
  type ModuleNumber,
  setupModule4Data,
} from "./dataGetters";
import { createTimesOfDayData } from "@/data/module04";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to words and phrases in Oneida.",
    },
  ];
};

const MODULES_LIST: Array<{ label: string; value: ModuleNumber }> = [
  { label: "Module 1", value: "module01" },
  { label: "Module 2", value: "module02" },
  { label: "Module 3", value: "module03" },
  { label: "Module 4", value: "module04" },
  { label: "Module 5", value: "module05" },
  { label: "Module 6", value: "module06" },
];

export default function PracticeListening() {
  const commonThings = [
    { label: "All audio", value: "all_audio" },
    { label: "All individual words", value: "all_words" },
    { label: "All sentences", value: "all_sentences" },
    { label: "Dialogue", value: "dialogue" },
    { label: "Paradigms", value: "paradigms" },
    { label: "Translation exercises", value: "translationExercises" },
  ] as const;

  const commonDataGetters = {
    all_audio: (m: ModuleNumber) => getAllAudioForModule(m),
    all_words: (m: ModuleNumber) => getSingleWordsForModule(m),
    all_sentences: (m: ModuleNumber) => getSentencesForModule(m),
    dialogue: (m: ModuleNumber) => formatDialogueAudioFiles(m),
    paradigms: (m: ModuleNumber) => getParadigmAudioForModule(m),
    translationExercises: (m: ModuleNumber) =>
      formatTranslationExerciseAudioFiles(m),
  } as const;

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [index, setIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferRef = useRef<{ value: WaveSurfer | null }>({ value: null });

  const getDataWrapper = (
    m: ModuleNumber,
    stuff: Record<string, (m: ModuleNumber) => AudioFriendlyData>,
  ) => {
    return (subcategory: string) => {
      const funcs = {
        ...commonDataGetters,
        ...stuff,
      };
      if (subcategory in funcs) {
        // @ts-expect-error I'll be impressed if I figure this out
        return funcs[subcategory](m);
      }
      return () => [];
    };
  };

  const categories: Array<{
    getData: (subcategory: string) => AudioFriendlyData;
    label: string;
    sub?: { label: string; value: string }[];
    value: string;
  }> = [
    {
      getData: () =>
        _.flattenDeep(
          MODULES_LIST.map(({ value }) => getAllAudioForModule(value)),
        ),
      label: "All audio",
      value: "allAudio",
    },
    {
      getData: () =>
        _.flattenDeep(
          MODULES_LIST.map(({ value }) => getSingleWordsForModule(value)),
        ),
      label: "All individual words",
      value: "allIndividualWords",
    },
    {
      getData: () =>
        _.flattenDeep(
          MODULES_LIST.map(({ value }) => getSentencesForModule(value)),
        ),
      label: "All sentences",
      value: "allSentences",
    },
    {
      getData: getDataWrapper("module01", {
        englishNames: () => formatEnglishNamesAudioFiles(),
        people: () => formatPeopleAudioFiles(),
        particles: (m: ModuleNumber) => formatParticleAudioFiles(m),
        particleExamples: (m: ModuleNumber) =>
          formatParticleExampleAudioFiles(m),
      }),
      label: "Module 1",
      sub: [
        ...commonThings,
        { label: "English names", value: "englishNames" },
        { label: "People", value: "people" },
        { label: "Particles", value: "particles" },
        { label: "Particle examples", value: "particleExamples" },
      ],
      value: "module01",
    },
    {
      getData: getDataWrapper("module02", {
        deceased: () => formatDeceasedRelativesAudioFiles(),
        family: () => formatFamilyAudioFiles(),
        particles: (m: ModuleNumber) => formatParticleAudioFiles(m),
        particleExamples: (m: ModuleNumber) =>
          formatParticleExampleAudioFiles(m),
      }),
      label: "Module 2",
      sub: [
        ...commonThings,
        { label: "Deceased relatives", value: "deceased" },
        { label: "Family terms", value: "family" },
        { label: "Particles", value: "particles" },
        { label: "Particle examples", value: "particleExamples" },
      ],
      value: "module02",
    },
    {
      getData: getDataWrapper("module03", {
        animals: () => [
          ...getClanAnimalList().map(audioFriendlyFormatter),
          ...getDomesticatedAnimalList().map(audioFriendlyFormatter),
          ...getDomesticatedBabyAnimalList().map(audioFriendlyFormatter),
        ],
        countingPeople: () => formatCountingPeopleFiles(),
        nations: () => getNationsList().map(audioFriendlyFormatter),
        particles: (m: ModuleNumber) => formatParticleAudioFiles(m),
        particleExamples: (m: ModuleNumber) =>
          formatParticleExampleAudioFiles(m),
      }),
      label: "Module 3",
      sub: [
        ...commonThings,
        { label: "Animals", value: "animals" },
        { label: "Counting people", value: "countingPeople" },
        { label: "Nations", value: "nations" },
        { label: "Particles", value: "particles" },
        { label: "Particle examples", value: "particleExamples" },
      ],
      value: "module03",
    },
    {
      getData: getDataWrapper("module04", {
        beingHere: () => setupModule4Data(["here"]),
        countingTime: () => formatCountingTimeAudioFiles(),
        daysOfWeek: () => formatDaysOfWeekAudioFiles(),
        particles: (m: ModuleNumber) => formatParticleAudioFiles(m),
        // particleExamples: (m: ModuleNumber) => formatParticleExampleAudioFiles(m),
        thought: () => setupModule4Data(["thought"]),
        timesOfDay: () => {
          const result = [];
          const data = createTimesOfDayData();

          for (const key in data) {
            const phrases = data[key as keyof typeof data];
            for (const p of phrases) {
              const translations = arrayify(p.translation);
              for (let i = 0; i < translations.length; i++) {
                const t = translations[i];
                result.push({
                  audioFile: p.audioFile,
                  en: arrayify(p.en),
                  translation: t,
                });
              }
            }
          }
          return result;
        },
        want: () => setupModule4Data(["want"]),
      }),
      label: "Module 4",
      sub: [
        // { label: "All audio", value: "all_audio" },
        { label: "All individual words", value: "all_words" },
        // { label: "All sentences", value: "all_sentences" },
        // { label: "Dialogue", value: "dialogue" },
        { label: "Paradigms", value: "paradigms" },
        // { label: "Translation exercises", value: "translationExercises" },

        { label: "Days of week", value: "daysOfWeek" },
        { label: "Counting time", value: "countingTime" },
        { label: "Times of day", value: "timesOfDay" },
        { label: "Being here", value: "beingHere" },
        { label: "Thought", value: "thought" },
        { label: "Want", value: "want" },
        { label: "Particles", value: "particles" },
        // { label: 'Particle examples', value: 'particleExamples' },
      ],
      value: "module04",
    },
    {
      getData: getDataWrapper("module06", {
        translationExercises: (m: ModuleNumber) =>
          formatTranslationExerciseAudioFiles(m),
      }),
      label: "Module 6",
      sub: [
        // ...commonThings,
        { label: "Translation exercises", value: "translationExercises" },
      ],
      value: "module06",
    },
  ];

  const selectedCategory = categories.find((c) => c.value === category);
  const subcategoryOptions = (selectedCategory?.sub ?? [])
    .map((c) => ({
      label: c.label,
      value: c.value,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const updateIndex = (index: number) => {
    setIndex(index);
    setIsShowingAnswer(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: bad code
  const data = useMemo(() => {
    if (!category || !selectedCategory) {
      return [];
    }
    return _.shuffle(selectedCategory.getData(subcategory));
  }, [category, subcategory]);

  const currentDatum = data[index];

  const audioFileFormatted = `/audio/${currentDatum?.audioFile?.replace("/audio", "").replace(/^\//, "")}`;

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
                audioFile={audioFileFormatted}
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: not sure if this is easy to fix
  const onReady = useCallback(
    (ws: WaveSurfer, audioDuration: number) => {
      if (wavesurferRef?.current) {
        wavesurferRef.current.value = ws;
      }
      onPlay(false);
      setDuration(audioDuration);
      if (autoplay) {
        ws.playPause();
      }
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
