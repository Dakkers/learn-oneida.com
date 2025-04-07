"use client";
import React, { useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Button, Flex, Select, Text, trackEvent } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import { useWakeLock } from "@/utils/hooks/useWakeLock";
import { useSingleWordsData } from "@/utils/hooks/useSingleWordsData";
import { AnswerCard } from "@/components/AnswerCard";
import { useSuperMagicThing } from "@/utils/hooks/useMagicAudioThing";

export function PracticeRecallClient() {
  const [category, setCategory] = useState("all");
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [index, setIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(index);

  useWakeLock();

  const data = useSingleWordsData(category);

  const currentDatum = data[index];

  const { canPause, doTheThing, pauseTimers, runTimers } = useSuperMagicThing({
    audioTimerDuration: 1000,
    speechSynthTimerDuration: 4500,
    onAudioTimerEnd: () => {
      setIndex(index + 1);
    },
    onSpeechTimerEnd: ({ audioClip }) => {
      audioClip.play();
    },
  });

  if (index !== prevIndex) {
    const { speechSynth } = doTheThing(currentDatum);

    setPrevIndex(index);

    window.speechSynthesis.speak?.(speechSynth);
  }

  return (
    <PageWrapper>
      <SectionHeading level={1}>Recall</SectionHeading>

      <Text>Test your recall skills here.</Text>

      <Flex direction="column" gap={6}>
        <Select
          label="Category"
          options={[
            ["All", "all"],
            ["Module 1", "module01"],
            ["Module 2", "module02"],
            ["Module 3", "module03"],
            ["Module 4", "module04"],
            ["Module 12", "module12"],
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
            answerText={currentDatum.en}
            promptText={currentDatum.translation}
          />

          <Flex justify="end" pt={4}>
            <Button
              disabled={!canPause}
              onClick={() => {
                if (isPaused) {
                  runTimers();
                } else {
                  pauseTimers();
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
              trackEvent("Started Recall", {
                category,
              });
            }}
          >
            Start
          </Button>
        </Flex>
      ) : null}
    </PageWrapper>
  );
}
