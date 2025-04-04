"use client";
import { Button, Flex, Select, trackEvent } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { useMemo, useState } from "react";
import { QuizResults } from "../QuizResults";
import { QuizButton } from "../QuizButton";

export interface AudioQuizProps {
  eventCategory: string;
  englishOptions: {
    key: string;
    text: string;
  }[];
  oneidaPhrases: {
    answerKey: string;
    audioFile: string;
    text: string;
  }[];
}

export function AudioQuiz({
  eventCategory,
  englishOptions,
  oneidaPhrases,
}: AudioQuizProps) {
  const allQuizQuestions = useMemo(() => {
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
  const [questionCountSetting, setQuestionCountSetting] =
    useState<string>("10");

  const quizQuestionSubset = allQuizQuestions.slice(
    0,
    questionCountSetting === "All"
      ? allQuizQuestions.length
      : Number(questionCountSetting),
  );

  const quizResults = answers.map((t, i) => ({
    audioFile: quizQuestionSubset[i].audioFile,
    correctAnswer: quizQuestionSubset[i].answer,
    isCorrect: t === quizQuestionSubset[i].answer,
    question: quizQuestionSubset[i].oneidaText,
    selectedAnswer: t,
  }));

  if (!hasStarted) {
    return (
      <>
        <Flex>
          <Select
            label="Number of questions"
            onChange={setQuestionCountSetting}
            options={[1, 2, 5, 10, 50, "All"]
              .map((value) => value.toString())
              .map((value) => ({ label: value, value }))}
            value={questionCountSetting}
          />
        </Flex>

        <Flex>
          <Button
            onClick={() => {
              setHasStarted(true);
              trackEvent("Started Audio Quiz", {
                category: eventCategory,
                numQuestions: questionCountSetting,
              });
            }}
          >
            Start
          </Button>
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
          results={quizResults}
        />
      </>
    );
  }

  const item = quizQuestionSubset[index];
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
            if (answers.length === quizQuestionSubset.length) {
              setHasFinished(true);
              trackEvent("Finished Audio Quiz", {
                category: eventCategory,
                numCorrectAnswers: quizResults.filter((r) => r.isCorrect)
                  .length,
                numQuestions: questionCountSetting,
              });
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
