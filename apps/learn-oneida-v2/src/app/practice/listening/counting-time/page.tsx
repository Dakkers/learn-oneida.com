import React, { useMemo } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import _ from "lodash";
import { AudioQuiz } from "@/components/AudioQuiz/AudioQuiz";
import { createStandardAudioQuizEnglishOptions } from "@/components/AudioQuiz/utils";
import { createCountingTimeData } from "@/data/module04";

export const metadata: Metadata = {
  title: "Nation identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeListeningCountingTime() {
  const englishOptions = useMemo(
    () => createStandardAudioQuizEnglishOptions(createCountingTimeData()),
    [],
  );

  const oneidaPhrases = useMemo(() => {
    return createCountingTimeData().map((datum) => ({
      audioFile: datum.audioFile,
      answerKey: datum.key,
      text: datum.translation,
    }));
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>
        Practice identifying counting time words
      </SectionHeading>

      <AudioQuiz
        eventCategory="Counting time"
        englishOptions={englishOptions}
        oneidaPhrases={oneidaPhrases}
      />
    </PageWrapper>
  );
}
