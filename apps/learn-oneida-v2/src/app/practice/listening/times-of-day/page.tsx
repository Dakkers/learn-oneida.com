import React, { useMemo } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { arrayify, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import {
  AudioQuiz,
  type AudioQuizProps,
} from "@/components/AudioQuiz/AudioQuiz";
import {
  createTimesOfDayData,
  determineTimesOfDayAudioFileName,
} from "@/data/module04";
import { formatFileWithSuffix } from "@/utils/misc";

export const metadata: Metadata = {
  title: "Times of day identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeAnimalIdentification() {
  const englishOptions = useMemo(() => {
    const result: AudioQuizProps["englishOptions"] = [];
    const data = createTimesOfDayData();
    for (const key in data) {
      const list = data[key as keyof typeof data];
      for (const datum of list) {
        for (const en of datum.en) {
          result.push({
            key: `${key}_${datum.key}`,
            text: en,
          });
        }
      }
    }
    return result;
  }, []);

  const oneidaPhrases = useMemo(() => {
    const result: AudioQuizProps["oneidaPhrases"] = [];
    const data = createTimesOfDayData();

    for (const key in data) {
      const phrases = data[key as keyof typeof data];
      for (const datum of phrases) {
        const translations = arrayify(datum.translation);
        for (let i = 0; i < translations.length; i++) {
          result.push({
            audioFile: formatFileWithSuffix(
              determineTimesOfDayAudioFileName(datum.en),
              datum.translation,
              i,
            ),
            answerKey: `${key}_${datum.key}`,
            text: datum.translation[i],
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>
        Practice identifying times of day
      </SectionHeading>

      <AudioQuiz
        eventCategory="Times of day"
        englishOptions={englishOptions}
        oneidaPhrases={oneidaPhrases}
      />
    </PageWrapper>
  );
}
