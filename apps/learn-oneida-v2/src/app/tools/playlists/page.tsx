import React, { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import {
  Button,
  Card,
  Flex,
  Select,
  Text,
  TextArray,
} from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import {
  type AudioFriendlyData,
  getSingleWordsForModule,
} from "@/app/practice/listen/dataGetters";
import { standardizeAudioFileName } from "@/utils/misc";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Playlists",
  description: "Listen to lists of Oneida words uninterrupted.",
};

export default function ToolsPlaylist() {
  const audioClipRef = useRef<HTMLAudioElement | null>(null);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioClipTimerRef = useRef<Timer | null>(null);
  const speechSynthTimerRef = useRef<Timer | null>(null);

  const [category, setCategory] = useState("all");
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [canPause, setCanPause] = useState(false);
  const [index, setIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(index);

  const wakelock = useWakeLock();

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
  const currentDatum = data[index];

  useEffect(() => {
    // Janky attempt at ensuring the voice doesn't sound like Daft Punk
    speechSynthesis.getVoices();

    return () => {
      speechSynthTimerRef.current?.cleanup();
      audioClipTimerRef.current?.cleanup();
    };
  }, []);

  useEffect(() => {
    return () => {
      wakelock?.release();
    };
  }, [wakelock]);

  if (index !== prevIndex) {
    const audioClip = new Audio(
      standardizeAudioFileName(currentDatum.audioFile),
    );
    const speechSynth = new SpeechSynthesisUtterance(
      (currentDatum.en ?? [])
        .join(", ")
        .replaceAll("(males)", "males")
        .replaceAll("(females)", "females")
        .replaceAll("(males + females)", "males and females"),
    );
    speechSynth.lang = "en-US";

    const voices = speechSynthesis.getVoices();

    speechSynth.voice =
      voices.find((voice) => voice.name.startsWith("Samantha")) ??
      voices.find((voice) => voice.lang.startsWith("en-US")) ??
      voices[0];

    speechSynth.rate = 0.9;
    speechSynth.volume = 0.7;

    audioClip.addEventListener("ended", () => {
      audioClipTimerRef.current = new Timer(4500, () => {
        setCanPause(false);
        window.speechSynthesis.speak?.(speechSynth);
        audioClipTimerRef.current = null;
      });
      setCanPause(true);
    });

    speechSynth.addEventListener("end", () => {
      speechSynthTimerRef.current = new Timer(1000, () => {
        setIndex(index + 1);
        speechSynthTimerRef.current = null;
      });
    });

    audioClipRef.current = audioClip;
    speechSynthRef.current = speechSynth;

    setPrevIndex(index);

    audioClip.play();
  }

  return (
    <PageWrapper>
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

          <Flex justify="end" pt={4}>
            <Button
              disabled={!canPause}
              onClick={() => {
                if (isPaused) {
                  audioClipTimerRef.current?.run();
                  speechSynthTimerRef.current?.run();
                } else {
                  audioClipTimerRef.current?.pause();
                  speechSynthTimerRef.current?.pause();
                }
                setIsPaused(!isPaused);
              }}
            >
              {isPaused ? "Resume" : "Pause"}
            </Button>
          </Flex>
        </>
      ) : category ? (
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
      ) : null}
    </PageWrapper>
  );
}

function AnswerCard({
  englishText,
  oneidaText,
}: {
  englishText: string[];
  oneidaText: string;
}) {
  return (
    <Card>
      <Flex align="center" direction="column" gap={4}>
        <Text as="span" variant="bodyL">
          <strong>{oneidaText}</strong>
        </Text>
        <TextArray variant="bodyL">{englishText}</TextArray>
      </Flex>
    </Card>
  );
}

function useWakeLock() {
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  useEffect(() => {
    createWakeLock().then((w) => {
      if (w) {
        setWakeLock(w);
      }
    });
  }, []);
  return wakeLock;
}

async function createWakeLock() {
  let wakeLock = null;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    console.error(err);
  }
  return wakeLock;
}

class Timer {
  time = 0;
  remainingTime = 0;
  callback: () => void;
  timeoutObj: ReturnType<typeof setTimeout> | null = null;

  now: number = new Date().getTime();

  constructor(time: number, callback: () => void, autoRun = true) {
    this.time = time;
    this.remainingTime = time;
    this.callback = callback;

    if (autoRun) {
      this.run();
    }
  }

  reset(autoRun = true) {
    this.remainingTime = this.time;
    if (autoRun) {
      this.run();
    }
  }

  run() {
    if (this.remainingTime <= 0) {
      return;
    }

    this.now = new Date().getTime();

    this.timeoutObj = setTimeout(() => {
      this.callback();
      this.remainingTime = 0;
      this.timeoutObj = null;
    }, this.remainingTime);
  }

  pause() {
    const duration = new Date().getTime() - this.now;
    this.remainingTime = this.remainingTime - duration;
    this.cleanup();
  }

  cleanup() {
    if (this.timeoutObj) {
      clearTimeout(this.timeoutObj);
    }
  }
}
