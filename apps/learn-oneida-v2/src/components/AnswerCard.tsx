import { Card, Flex, TextArray } from "@ukwehuwehneke/ohutsya";

export function AnswerCard({
  answerText,
  promptText,
}: {
  answerText: string | string[];
  promptText: string | string[];
}) {
  return (
    <Card>
      <Flex align="center" direction="column" gap={4}>
        <TextArray as="span" bold variant="bodyL">
          {promptText}
        </TextArray>
        <TextArray variant="bodyL">{answerText}</TextArray>
      </Flex>
    </Card>
  );
}
