import React, { useMemo } from "react";
import {
  convertBreakdownToPlainText,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { arrayify, Text } from "@ukwehuwehneke/ohutsya";
import {
  createModule12AnimalsList,
  getAudioFileForModule12AnimalDatum,
} from "@/data/module12";
import _ from "lodash";
import {
  AudioQuiz,
  type AudioQuizProps,
} from "@/components/AudioQuiz/AudioQuiz";
import { Link } from "@/components/Link";

export const metadata: Metadata = {
  title: "Animal identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export default function PracticeAnimalIdentification() {
  const englishOptions = useMemo(() => {
    const result: AudioQuizProps["englishOptions"] = [];
    const list = createModule12AnimalsList();
    for (const datum of list) {
      const key = datum.key;
      for (const en of datum.en) {
        result.push({
          key: `${key}_singular`,
          text: en,
        });
      }
      // TODO: plural
    }
    return result;
  }, []);

  const oneidaPhrases = useMemo(() => {
    const result: AudioQuizProps["oneidaPhrases"] = [];
    const list = createModule12AnimalsList();
    for (const datum of list) {
      const key = datum.key;
      arrayify(datum.singular).forEach((element, i) => {
        const audioFile = getAudioFileForModule12AnimalDatum(
          datum,
          "singular",
          i,
        );
        result.push({
          audioFile,
          answerKey: `${key}_singular`,
          text: convertBreakdownToPlainText(
            _.isString(element) ? element : element.one,
          ),
        });
      });
    }
    return result;
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Practice identifying animals</SectionHeading>

      <Text>
        You can learn these words from the{" "}
        <Link href="/articles/mammals">mammals article</Link>,{" "}
        <Link href="/articles/birds">birds article</Link>, and the{" "}
        <Link href="/articles/insects">insects article</Link>.
      </Text>

      <AudioQuiz
        eventCategory="Animals"
        englishOptions={englishOptions}
        oneidaPhrases={oneidaPhrases}
      />
    </PageWrapper>
  );
}
