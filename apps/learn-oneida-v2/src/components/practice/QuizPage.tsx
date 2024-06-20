import { RadioGroup } from "@ukwehuwehneke/ohutsya";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { Input } from "@ukwehuwehneke/ohutsya";
import { cn } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import React from "react";
import { arrayify } from "~/utils";
import { sanitizeIrregularCharacters } from "~/utils/words";

interface QuizContainerContextProps {
  answerSetting: string;
  data: Item[];
  languageSetting: string;
  questionCountSetting: string;
  setAnswerSetting: (value: string) => void;
  setLanguageSetting: (value: string) => void;
  setQuestionCountSetting: (value: string) => void;
}

interface Item {
  en: string;
  key: string;
  on: string | string[];
}

const QuizContainerContext =
  React.createContext<QuizContainerContextProps | null>(null);

export interface QuizPageProps {
  data: Item[];
}

export function QuizPage({ data }: QuizPageProps) {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [languageSetting, setLanguageSetting] = React.useState("both");
  const [answerSetting, setAnswerSetting] = React.useState("multipleChoice");
  const [questionCountSetting, setQuestionCountSetting] = React.useState("5");

  return (
    <QuizContainerContext.Provider
      value={{
        answerSetting,
        data,
        languageSetting,
        questionCountSetting,
        setAnswerSetting,
        setLanguageSetting,
        setQuestionCountSetting,
      }}
    >
      {hasStarted ? (
        <TheGameVersion2 onReset={() => setHasStarted(false)} />
      ) : (
        <Flex direction="column" gap={4}>
          <Settings />

          <Box>
            <Button onClick={() => setHasStarted(true)}>Start</Button>
          </Box>
        </Flex>
      )}
    </QuizContainerContext.Provider>
  );
}

function Settings() {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }

  return (
    <Flex align="start" gap={8}>
      <RadioGroup
        label="Translate"
        onChange={context.setLanguageSetting}
        value={context.languageSetting}
      >
        <RadioGroup.Option value="en">English to Oneida</RadioGroup.Option>
        <RadioGroup.Option value="on">Oneida to English</RadioGroup.Option>
        <RadioGroup.Option value="both">Both</RadioGroup.Option>
      </RadioGroup>

      <RadioGroup
        label="Answer with"
        onChange={context.setAnswerSetting}
        value={context.answerSetting}
      >
        <RadioGroup.Option value="multipleChoice">
          Multiple choice
        </RadioGroup.Option>
        <RadioGroup.Option value="text">Text</RadioGroup.Option>
      </RadioGroup>

      <Select
        label="Number of questions"
        onChange={context.setQuestionCountSetting}
        options={[1, 2, 5, 10]
          .map((value) => value.toString())
          .map((value) => ({ label: value, value }))}
        value={context.questionCountSetting}
      />
    </Flex>
  );
}

interface Result {
  question: string | string[];
  answer: {
    correctAnswer: string;
    isCorrect: boolean;
    selectedAnswer: string;
  };
}

function TheGameVersion2({ onReset }: { onReset: () => void }) {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }
  const [results, setResults] = React.useState<Result[]>([]);

  return results.length ? (
    <ResultsScreen results={results} onReset={onReset} />
  ) : (
    <PromptsScreen onFinish={(results) => setResults(results)} />
  );
}

function ResultsScreen({
  onReset,
  results,
}: {
  onReset: () => void;
  results: Result[];
}) {
  const numCorrect = results.filter((result) => result.answer.isCorrect).length;

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
            accessorKey: "answer",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: Result["answer"]) => (
              <Flex align="center" gap={4}>
                {value.isCorrect ? (
                  <>
                    <CheckCircle2Icon color="green" />
                    <Text as="span" intent="positive">
                      <b>{value.selectedAnswer}</b>
                    </Text>
                  </>
                ) : (
                  <>
                    <XCircleIcon color="red" />
                    <Flex direction="column" gap={2}>
                      <Text>
                        Correct answer: <b>{value.correctAnswer}</b>
                      </Text>
                      <Text>
                        Your answer:{" "}
                        <Text as="span" intent="negative">
                          <b>{value.selectedAnswer}</b>
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

function PromptsScreen({
  onFinish,
}: {
  onFinish: (results: Result[]) => void;
}) {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }
  const numItems = Number(context.questionCountSetting);
  const items = React.useMemo(
    () => _.shuffle(context.data).slice(0, numItems),
    [context.data, numItems],
  );
  const [index, setIndex] = React.useState(0);
  const [results, setResults] = React.useState<Result[]>([]);
  const [langKeyToUse, setLangKeyToUse] = React.useState(
    determineLangKey(context.languageSetting),
  );
  const currentItem = items[index];
  const isFinalItem = index === numItems - 1;

  const clickNextMultipleChoice = (answerKey: string) => {
    const selectedAnswer = context.data.find((item) => item.key === answerKey);
    const newResults = [
      ...results,
      {
        question: getFirstElement(currentItem[langKeyToUse]),
        answer: {
          correctAnswer: getFirstElement(
            currentItem[getOppositeLangKey(langKeyToUse)],
          ),
          isCorrect: currentItem.key === answerKey,
          selectedAnswer: getFirstElement(
            selectedAnswer?.[getOppositeLangKey(langKeyToUse)],
          ),
        },
      },
    ];
    setResults(newResults);
    clickNext(newResults);
  };

  const clickNextTextAnswer = (answer: string, isCorrect: boolean) => {
    const newResults = [
      ...results,
      {
        question: currentItem[langKeyToUse],
        answer: {
          correctAnswer: getFirstElement(
            currentItem[getOppositeLangKey(langKeyToUse)],
          ),
          isCorrect: isCorrect,
          selectedAnswer: answer,
        },
      },
    ];
    setResults(newResults);
    clickNext(newResults);
  };

  const clickNext = (newResults: Result[]) => {
    if (isFinalItem) {
      onFinish(newResults);
    } else {
      setLangKeyToUse(determineLangKey(context.languageSetting));
      setIndex(index + 1);
    }
  };

  return (
    <Flex align="center" direction="column" gap={8}>
      <Text variant="headlineS">
        {getFirstElement(currentItem[langKeyToUse])}
      </Text>

      <div className="w-[600px]">
        <Flex align="center" direction="column" gap={4}>
          {context?.answerSetting === "multipleChoice" ? (
            <MultipleChoiceOptions
              currentItem={currentItem}
              isFinalItem={isFinalItem}
              langKey={langKeyToUse}
              onNext={clickNextMultipleChoice}
            />
          ) : (
            <TextAnswer
              currentItem={currentItem}
              isFinalItem={isFinalItem}
              langKey={langKeyToUse}
              onNext={clickNextTextAnswer}
            />
          )}
        </Flex>
      </div>
    </Flex>
  );
}

function MultipleChoiceOptions({
  currentItem,
  isFinalItem,
  langKey,
  onNext,
}: {
  currentItem: Item;
  isFinalItem: boolean;
  langKey: "on" | "en";
  onNext: (key: string) => void;
}) {
  const context = React.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }
  const [selectedItemKey, setSelectedItemKey] = React.useState<string>("");
  const hasSelected = !!selectedItemKey;
  const isCorrect = selectedItemKey === currentItem.key;

  const thingsToShow = React.useMemo(() => {
    const result = [];
    const currentItemDatum = context.data.find(
      (d) => d.key === currentItem.key,
    );
    if (currentItemDatum) {
      result.push(currentItemDatum);
    }
    for (const item of _.shuffle(context.data)) {
      if (item.key !== currentItem.key) {
        result.push(item);
      }
      if (result.length >= 4) {
        break;
      }
    }
    return _.shuffle(result);
  }, [context.data, currentItem]);

  const oppositeLangKey = getOppositeLangKey(langKey);

  const onClick = (key: string) => {
    setSelectedItemKey(key);
  };

  return (
    <>
      <div className="grid gap-2 grid-cols-2">
        {thingsToShow.map((item) => (
          <button
            className={cn(
              "rounded border border-solid border-slate-500 p-2",
              item.key === currentItem.key &&
                !isCorrect &&
                hasSelected &&
                "bg-green-400 text-white",
              item.key === selectedItemKey &&
                isCorrect &&
                "bg-green-700 text-white",
              item.key === selectedItemKey &&
                !isCorrect &&
                "bg-red-700 text-white",
            )}
            disabled={hasSelected}
            key={item.key}
            onClick={() => onClick(item.key)}
          >
            {getFirstElement(item[oppositeLangKey])}
          </button>
        ))}
      </div>

      {hasSelected && (
        <Button
          onClick={() => {
            onNext(selectedItemKey);
            setSelectedItemKey("");
          }}
        >
          {isFinalItem ? "Finish" : "Next"}
        </Button>
      )}
    </>
  );
}

function TextAnswer({
  currentItem,
  langKey,
  onNext,
}: {
  currentItem: Item;
  isFinalItem: boolean;
  langKey: "on" | "en";
  onNext: (value: string, isCorrect: boolean) => void;
}) {
  const [value, setValue] = React.useState("");
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  return (
    <>
      <Flex gap={2}>
        <Flex.Item grow={1}>
          <Input
            disabled={hasSubmitted}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Flex.Item>
        <Flex.Item>
          <Button
            disabled={hasSubmitted}
            onClick={() => {
              const answer = getFirstElement(
                currentItem[getOppositeLangKey(langKey)],
              );
              const isCorrect =
                sanitizeIrregularCharacters(answer) ===
                sanitizeIrregularCharacters(value);
              onNext(value, isCorrect);
              setValue("");
              setHasSubmitted(false);
            }}
          >
            Submit
          </Button>
        </Flex.Item>
      </Flex>
    </>
  );
}

function determineLangKey(languageSetting: string): "en" | "on" {
  if (languageSetting === "en" || languageSetting === "on") {
    return languageSetting;
  }
  return Math.random() < 0.5 ? "en" : "on";
}

function getOppositeLangKey(value: string): "en" | "on" {
  return value === "en" ? "on" : "en";
}

function getFirstElement(value: undefined | string | string[]) {
  return arrayify(value)[0];
}
