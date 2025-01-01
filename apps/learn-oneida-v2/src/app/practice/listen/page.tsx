"use client";

import React, {
  type RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  translatePhrase,
  SectionHeading,
  convertBreakdownToPlainText,
} from "@ukwehuwehneke/language-components";
import { Box, Button, Card, Flex, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { getParticlesForGroup } from "@/components/articles/ParticlesTable";
import { getTranslationExercisesForModule } from "@/components/practice/TranslationExercises";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import { createModule4Data } from "@/data/module04";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/components/articles/TimesOfDay";
import { arrayify } from "@ukwehuwehneke/language-components";
import { getDialogueModule02 } from "~/data/module02/dialogue";
import type { DialogueTableData } from "@/components/DialogueTable";
import {
  getDialogueModule01,
  getAudioFileForEnglishName,
  getEnglishNames,
  getAllModule01Paradigms,
  getPeopleTerms,
} from "~/data/module01";
import {
  getAudioFilenameForPronoun,
  ParadigmData,
} from "@/components/ParadigmTable";
import {
  getAboutSomeoneExamples,
  getAllModule02Paradigms,
  getDeceasedRelatives,
  getFamilyParadigms,
  getLastNameExamples,
  getThingsThatAreTheSameExamples,
} from "@/data/module02";
import { formatAudioFileWithSuffix } from "@/utils/misc";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to words and phrases in Oneida.",
    },
  ];
};

type Data = Array<{
  audioFile: string;
  en: string;
  translation: string;
}>;

type ModuleNumber =
  | "module01"
  | "module02"
  | "module03"
  | "module04"
  | "module05"
  | "module06";

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
    stuff: Record<string, (m: ModuleNumber) => Data>,
  ) => {
    return (subcategory: string) => {
      const funcs = {
        ...commonDataGetters,
        ...stuff,
      };
      if (subcategory in funcs) {
        return funcs[subcategory](m);
      }
      return () => [];
    };
  };

  const categories: Array<{
    getData: () => Data;
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
        family: () =>
          _.flattenDeep(
            getFamilyParadigms().map((d) => formatParadigmDataAsAudioFiles(d)),
          ),
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
        particles: (m: ModuleNumber) => formatParticleAudioFiles(m),
        particleExamples: (m: ModuleNumber) =>
          formatParticleExampleAudioFiles(m),
      }),
      label: "Module 3",
      sub: [
        // ...commonThings,
        { label: "Particles", value: "particles" },
        { label: "Particle examples", value: "particleExamples" },
      ],
      value: "module03",
    },
    {
      getData: getDataWrapper("module04", {
        beingHere: () => setupModule4Data(["here"]),
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
                  audioFile: `/module04/time_phrases/${determineTimesOfDayAudioFileName(p.en, p.translation, i)}.mp3`,
                  en: arrayify(p.en).join("; "),
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
        // ...commonThings,
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

function formatParadigmDataAsAudioFiles(data: ParadigmData) {
  return data.phrases.map((val) => ({
    audioFile: `/${data.audioFolder}/${getAudioFilenameForPronoun(val.pronoun, data.type)}.mp3`,
    en: translatePhrase(data.translation, val.pronoun),
    translation: convertBreakdownToPlainText(val.breakdown),
  }));
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
    "data-doesnt-want",
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

function formatDeceasedRelativesAudioFiles(): Data {
  return getDeceasedRelatives();
}

function formatPeopleAudioFiles(): Data {
  return _.flattenDeep(
    Object.entries(getPeopleTerms()).map(([key, val]) => val),
  ).map((ppl) => ({
    ...ppl,
    en: arrayify(ppl.en).join("\n"),
    translation: convertBreakdownToPlainText(ppl.breakdown),
  }));
}

function formatEnglishNamesAudioFiles(): Data {
  const names = getEnglishNames();
  return _.flattenDeep(
    names.map((datum) =>
      arrayify(datum.translation).map((txt, i) => ({
        audioFile: formatAudioFileWithSuffix(datum, i),
        en: arrayify(datum.en)[0],
        translation: txt,
      })),
    ),
  );
}

function formatTranslationExerciseAudioFiles(module: ModuleNumber): Data {
  if (["module03", "module04", "module05"].includes(module)) {
    return [];
  }
  // @ts-expect-error TODO: module number shenanigans
  return getTranslationExercisesForModule(module).map((datum) => ({
    audioFile: `/translation_exercises/${module}/ex_${datum[0]}.mp3`,
    en: "",
    translation: datum[1],
  }));
}

function formatParticleAudioFiles(module: ModuleNumber): Data {
  // @ts-expect-error TODO: module number shenanigans
  return getParticlesForGroup(module).map((datum) => ({
    // @ts-expect-error TODO: Why is `datum` weird?
    audioFile: `/particles/${module}/${datum.key}.mp3`,
    // @ts-expect-error TODO: Why is `datum` weird?
    en: datum.en,
    // @ts-expect-error TODO: Why is `datum` weird?
    translation: datum.translation,
  }));
}

function formatParticleExampleAudioFiles(module: ModuleNumber) {
  if (["module04", "module05", "module06"].includes(module)) {
    return [];
  }
  // @ts-expect-error TODO: module number shenanigans
  const data = getParticlesForGroup(module);
  const result = [];
  for (const datum of data) {
    // @ts-expect-error TODO: Why is `datum` weird?
    const examples = datum.examples ?? [];
    for (let i = 0; i < examples.length; i++) {
      // @ts-expect-error TODO: Why is `datum` weird?
      const filepath = `/particle_examples/${module}/${datum.key}${examples.length > 1 ? `_${i + 1}` : ""}.mp3`;
      result.push({
        audioFile: filepath,
        en: examples[i].en,
        translation: examples[i].translation,
      });
    }
  }
  return result;
}

function formatDialogueAudioFiles(module: ModuleNumber) {
  if (["module03", "module04", "module05", "module06"].includes(module)) {
    return [];
  }
  const data =
    module === "module01"
      ? getDialogueModule01()
      : module === "module02"
        ? getDialogueModule02()
        : null;
  const result = [];
  for (const key in data) {
    const arr = data[key] as DialogueTableData;
    arr.forEach((item, i) => {
      if (!(item.hasAudio ?? true)) {
        return;
      }
      const sentences = arrayify(item.one);
      sentences.forEach((s, j) => {
        result.push({
          audioFile: `/${module}/dialogue/${key}/${i + 1}-${j + 1}.mp3`,
          en: item.en,
          translation: item.one,
        });
      });
    });
  }
  return result;
}

function getParadigmAudioForModule(module: ModuleNumber): Data {
  const fn =
    module === "module01"
      ? getAllModule01Paradigms
      : module === "module02"
        ? getAllModule02Paradigms
        : null;
  if (!fn) {
    return [];
  }
  return _.flatten(
    fn()
      .filter((d) => d.audioFolder)
      .map((d) => formatParadigmDataAsAudioFiles(d)),
  );
}

function getSentencesForModule(module: ModuleNumber): Data {
  const result = [
    ...formatParticleExampleAudioFiles(module),
    ...formatTranslationExerciseAudioFiles(module),
    ...formatDialogueAudioFiles(module),
  ];
  if (module === "module01") {
  } else if (module === "module02") {
    result.push(...getAboutSomeoneExamples());
    result.push(...getLastNameExamples());
    result.push(...getThingsThatAreTheSameExamples());
  }
  return result;
}

function getSingleWordsForModule(module: ModuleNumber): Data {
  const result = [
    ...formatParticleAudioFiles(module),
    ...getParadigmAudioForModule(module),
  ];
  if (module === "module01") {
    result.push(...formatEnglishNamesAudioFiles());
    result.push(...formatPeopleAudioFiles());
  } else if (module === "module02") {
    result.push(...getDeceasedRelatives());
  }
  return result;
}

function getAllAudioForModule(module: ModuleNumber): Data {
  const result = [
    ...getSingleWordsForModule(module),
    ...getSentencesForModule(module),
  ];
  return result;
}
