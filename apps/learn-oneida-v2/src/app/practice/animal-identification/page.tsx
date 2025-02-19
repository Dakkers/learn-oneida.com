import React, { useMemo } from "react";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Text } from "@ukwehuwehneke/ohutsya";
import { LinkWrapper } from "@/components/LinkWrapper";
import { createModule12AnimalsList, getAudioFiles } from "@/data/module12";
import { AudioTrackProps } from "@/components/AudioTrack";

export const metadata: Metadata = {
  title: "Animal identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeAnimalIdentification() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = useMemo(() => {
    const resultEn: Array<{
      key: string;
      audioFile: AudioTrackProps["audioFile"];
      text: string;
    }> = [];
    const resultOn: Array<{
      key: string;
      audioFile: AudioTrackProps["audioFile"];
      text: string;
    }> = [];
    const list = createModule12AnimalsList();

    for (const datum of list) {
      const key = datum.key;

      console.log(datum);
      datum.singular.forEach((entry, i) => {
        resultEn.push({
          key: `${key}_${i}`,
          audioFile: getAudioFiles(datum, "singular", i),
          text: "aaaa",
        });
      });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Practice identifying animals</SectionHeading>

      <Text>
        These words come from <LinkWrapper page={12} />.
      </Text>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        hasAudio
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
