import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { List } from "@/design/primitives/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Oneida" },
    { name: "description", content: "Learn the Oneida language!" },
  ];
};

export default function Index() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Welcome to Learn-Oneida.com!
      </Heading>

      <a className="text-blue-600 underline" href="/learn">
        Start learning from the curriculum!
      </a>

      <Text>Try out one of the tools:</Text>
      <List>
        <List.Item>
          <a className="text-blue-600 underline" href="/tools/numbers">
            Number Translator
          </a>
        </List.Item>
        <List.Item>
          <a className="text-blue-600 underline" href="/tools/paradigm">
            Paradigm Tester
          </a>
        </List.Item>
        <List.Item>
          <a className="text-blue-600 underline" href="/tools/clock">
            Clock Time
          </a>
        </List.Item>
      </List>
    </Flex>
  );
}
