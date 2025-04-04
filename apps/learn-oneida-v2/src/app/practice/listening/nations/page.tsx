import React, { useMemo } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import _ from "lodash";
import { AudioQuiz } from "@/components/AudioQuiz/AudioQuiz";
import { getNationsList } from "@/data/module03";
import { createStandardAudioQuizEnglishOptions } from "@/components/AudioQuiz/utils";

export const metadata: Metadata = {
  title: "Nation identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeNationsListening() {
  const englishOptions = useMemo(
    () => createStandardAudioQuizEnglishOptions(getNationsList()),
    [],
  );

  const oneidaPhrases = useMemo(() => {
    return getNationsList().map((datum) => ({
      audioFile: datum.audioFile,
      answerKey: datum.key,
      text: datum.translation,
    }));
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Practice identifying nations</SectionHeading>

      <AudioQuiz
        eventCategory="Nations"
        englishOptions={englishOptions}
        oneidaPhrases={oneidaPhrases}
      />
    </PageWrapper>
  );
}
