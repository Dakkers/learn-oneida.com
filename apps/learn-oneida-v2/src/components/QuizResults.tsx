import { TableWrapper } from "@ukwehuwehneke/language-components";
import { Box, Button, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

interface Result {
  audioFile?: string;
  correctAnswer: string;
  isCorrect: boolean;
  img?: string;
  selectedAnswer: string;
  question?: string;
}

export function QuizResults({
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
          {
            accessorKey: "question",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (question: Result["question"], row: Result) => (
              <Flex direction="column" gap={2}>
                {row.audioFile && (
                  <Flex.Item>
                    <Flex direction="column" align="center" gap={1}>
                      <audio controls src={row.audioFile} />
                      <Text variant="bodyS">
                        <i>{question}</i>
                      </Text>
                    </Flex>
                  </Flex.Item>
                )}

                {!row.audioFile && question}
              </Flex>
            ),
            header: "Question",
          },
          {
            accessorKey: "selectedAnswer",
            // @ts-expect-error TODO - TableWrapper/Table generics
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
        // @ts-expect-error TODO - TableWrapper/Table generics
        data={results}
      />

      <Box>
        <Button onClick={onReset}>Go back</Button>
      </Box>
    </Flex>
  );
}
