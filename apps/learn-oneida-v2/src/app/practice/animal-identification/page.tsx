"use client";
import React, { useMemo, useState } from "react";
import {
  convertBreakdownToPlainText,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Button, cn, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { LinkWrapper } from "@/components/LinkWrapper";
import {
  createModule12AnimalsList,
  getAudioFilesForModule12AnimalDatum,
} from "@/data/module12";
import _ from "lodash";
import { QuizButton } from "@/components/QuizButton";
import { QuizResults } from "@/components/QuizResults";

// export const metadata: Metadata = {
//   title: "Animal identification",
//   description: "Quiz your Oneida knowledge by picking the right translation!",
// };

export default function PracticeAnimalIdentification() {
  const englishOptions = useMemo(() => {
    const result = [];
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
    const result = [];
    const list = createModule12AnimalsList();
    for (const datum of list) {
      const key = datum.key;
      datum.singular.forEach((element, i) => {
        const audioFiles = getAudioFilesForModule12AnimalDatum(
          datum,
          "singular",
          i,
        );
        for (const audioFile of audioFiles) {
          result.push({
            audioFile,
            answerKey: `${key}_singular`,
            text: convertBreakdownToPlainText(element.one),
          });
        }
      });
    }
    return result;
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Practice identifying animals</SectionHeading>

      <Text>
        These words come from <LinkWrapper page={12} />.
      </Text>

      <AudioQuiz
        englishOptions={englishOptions}
        oneidaPhrases={oneidaPhrases}
      />
    </PageWrapper>
  );
}

function AudioQuiz({
  englishOptions,
  oneidaPhrases,
}: {
  englishOptions: {
    key: string;
    text: string;
  }[];
  oneidaPhrases: {
    answerKey: string;
    audioFile: string;
    text: string;
  }[];
}) {
  const theList = useMemo(() => {
    const result = [];
    for (const p of oneidaPhrases) {
      const potentialAnswers = englishOptions.filter(
        (o) => o.key === p.answerKey,
      );
      if (potentialAnswers.length === 0) {
        throw new Error(`Could not find potential answers for ${p.answerKey}`);
      }
      const incorrectAnswers = englishOptions.filter(
        (o) => o.key !== p.answerKey,
      );
      if (incorrectAnswers.length === 0) {
        throw new Error(
          `Could not find any possible incorrect answers for ${p.answerKey}`,
        );
      }

      const answer = _.sample(potentialAnswers);

      result.push({
        answer: answer?.text || "",
        audioFile: p.audioFile,
        oneidaText: p.text,
        options: _.shuffle([
          answer?.text || "",
          ..._.sampleSize(incorrectAnswers, 3).map((o) => o.text),
        ]),
      });
    }
    return _.shuffle(result);
  }, [englishOptions, oneidaPhrases]);

  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  if (!hasStarted) {
    return (
      <>
        <Flex>
          <Button onClick={() => setHasStarted(true)}>Start</Button>
        </Flex>
      </>
    );
  } else if (hasFinished) {
    return (
      <>
        <QuizResults
          onReset={() => {
            setAnswers([]);
            setIndex(0);
            setHasStarted(false);
            setHasFinished(false);
          }}
          results={answers.map((t, i) => ({
            audioFile: theList[i].audioFile,
            correctAnswer: theList[i].answer,
            isCorrect: t === theList[i].answer,
            question: theList[i].oneidaText,
            selectedAnswer: t,
          }))}
        />
      </>
    );
  }

  const item = theList[index];
  const hasAnswered = answers.length === index + 1;

  return (
    <div>
      <audio autoPlay controls src={item.audioFile} />

      <Flex direction="column" py={8}>
        {item.options.map((t, i) => {
          const pickedThisOne = hasAnswered && answers[index] === t;
          const isTheAnswer = t === item.answer;
          return (
            <QuizButton
              disabled={hasAnswered}
              key={`${index}_${i}`}
              isSelected={pickedThisOne}
              isTheAnswer={isTheAnswer}
              onClick={() => {
                setAnswers([...answers, t]);
              }}
            >
              {t}
            </QuizButton>
          );
        })}
      </Flex>

      <Flex>
        <Button
          disabled={!hasAnswered}
          onClick={() => {
            if (answers.length === theList.length) {
              setHasFinished(true);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
}
