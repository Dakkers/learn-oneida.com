import { Button } from "@/design/primitives/button";
import { useQuizContext } from "./Quiz";
import { cn } from "@/lib/utils";
import React from "react";

interface QuizContainerContextProps {
  answerSetting: string;
  languageSetting: string;
  questionCountSetting: string;
  setAnswerSetting: (value: string) => void;
  setLanguageSetting: (value: string) => void;
  setQuestionCountSetting: (value: string) => void;
}

export const QuizContainerContext =
  React.createContext<QuizContainerContextProps | null>(null);



// function QuestionLol({
//   question,
// }) {
//   const context = useQuizContext();
//   const id = React.useId();

//   return (
//     <Flex direction="column" gap={4}>
//       <Text id={id}>
//         What is the tense in this word: <b>{question}</b>
//       </Text>
//       <RadioGroup
//         aria-labelledby={id}
//         onChange={context.changeAnswer}
//       >
//         {TENSE_LIST.map((t) => (
//           <RadioGroup.Option key={t} value={t}>{tenseMap[t]}</RadioGroup.Option>
//         ))}
//       </RadioGroup>
//     </Flex>
//   )
// }

export function MultipleChoiceButtons({
  questionKey,
  isCorrect,
  options,
}: {
    questionKey: string;
    isCorrect: boolean;
    options: { key: string; text: string }[]
}) {
  const quizContext = useQuizContext();
  const hasSelected = !!quizContext.hasAnswer;

  return (
    <div className="grid gap-2 grid-cols-2">
      {options.map((option) => (
        <button
          className={cn(
            "rounded border border-solid border-slate-500 p-2",

            option.key === questionKey &&
            !isCorrect &&
            hasSelected &&
            "bg-green-400 text-white",

            option.key === quizContext.answer &&
            isCorrect &&
            "bg-green-700 text-white",

            option.key === quizContext.answer &&
            !isCorrect &&
            "bg-red-700 text-white"
          )}
          disabled={hasSelected}
          key={option.key}
          onClick={() => quizContext.changeAnswer?.(option.key)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export function NextBtn() {
  const context = useQuizContext();
  return (
    <Button
      onClick={() => {
        context.nextQuestion?.();
      }}
    >
      {context.isFinalQuestion ? "Finish" : "Next"}
    </Button>
  );
}
