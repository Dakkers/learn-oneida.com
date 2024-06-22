"use client"
import { Box } from "@ukwehuwehneke/ohutsya";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { cn } from "@ukwehuwehneke/ohutsya";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import React from "react";

interface QuizContextProps {
  answer: string;
  changeAnswer: (value: string) => void;
  hasAnswer: boolean;
  index: number;
  isFinalQuestion: boolean;
  nextQuestion: () => void;
  numberOfQuestions?: number;
  previousQuestion: () => void;
}

interface Result {
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
  selectedAnswer: string;
}

const QuizContext = React.createContext<QuizContextProps>({
  answer: "",
  changeAnswer: (value: string) => console.log(value),
  hasAnswer: false,
  isFinalQuestion: false,
  index: 0,
  nextQuestion: () => console.log("nextQuestion()"),
  previousQuestion: () => console.log("previousQuestion()"),
});

interface QuizProps {
  children: React.ReactNode;
  getResultForQuestion: (index: number, currentAnswer: string) => Result;
  numberOfQuestions?: number;
  onReset: () => void;
}

export function Quiz({
  children,
  getResultForQuestion,
  numberOfQuestions = 10,
  onReset,
}: QuizProps) {
  const [index, setIndex] = React.useState(0);
  const [currentAnswer, setCurrentAnswer] = React.useState("");
  const [results, setResults] = React.useState<Array<Result>>([]);
  const isComplete = index >= numberOfQuestions;

  return (
    <QuizContext.Provider
      value={{
        answer: currentAnswer,
        hasAnswer: !!currentAnswer,
        index,
        isFinalQuestion: index === numberOfQuestions - 1,
        nextQuestion: () => {
          const result = getResultForQuestion(index, currentAnswer);
          let newResults = [] as typeof results;
          if (index >= results.length) {
            newResults = [...results, result];
          }
          newResults[index] = result;

          setResults(newResults);
          setIndex(index + 1);
          setCurrentAnswer("");
        },
        previousQuestion: () => {
          setIndex(index - 1);
          setCurrentAnswer("");
        },
        numberOfQuestions,
        changeAnswer: setCurrentAnswer,
      }}
    >
      {isComplete ? (
        <ResultsScreen onReset={onReset} results={results} />
      ) : (
        <>{children}</>
      )}
    </QuizContext.Provider>
  );
}

Quiz.Questions = function QuizQuestions({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = useQuizContext();
  const childrenArray = React.Children.toArray(children);
  return childrenArray[context.index];
};

export function useQuizContext() {
  return React.useContext(QuizContext);
}

// -- Utilities

function ResultsScreen({
  onReset,
  results,
}: {
  onReset: () => void;
  results: Result[];
}) {
  const numCorrect = results.filter((result) => result.isCorrect).length;

  return (
    <Flex direction="column" gap={2}>
      <Text>
        You answered <b>{numCorrect}</b> out of {results.length} questions
        correctly.
      </Text>

      <TableWrapper
        columns={[
          { accessorKey: "question", header: "Question" },
          {
            accessorKey: "selectedAnswer",
            // @ts-expect-error To be addressed in LO-12
            cell: (selectedAnswer: Result["selectedAnswer"], row: Result) => (
              <Flex align="center" gap={4}>
                {row.isCorrect ? (
                  <>
                    <CheckCircle2Icon color="green" />
                    <Text as="span" intent="positive">
                      <b>{selectedAnswer}</b>
                    </Text>
                  </>
                ) : (
                  <>
                    <XCircleIcon color="red" />
                    <Flex direction="column" gap={2}>
                      <Text>
                        Correct answer: <b>{row.correctAnswer}</b>
                      </Text>
                      <Text>
                        Your answer:{" "}
                        <Text as="span" intent="negative">
                          <b>{selectedAnswer}</b>
                        </Text>
                      </Text>
                    </Flex>
                  </>
                )}
              </Flex>
            ),
            header: "Answer",
          },
        ]}
        // @ts-expect-error To be addressed in LO-12
        data={results}
      />

      <Box>
        <Button onClick={onReset}>Go back</Button>
      </Box>
    </Flex>
  );
}
