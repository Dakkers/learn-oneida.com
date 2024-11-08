"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "@ukwehuwehneke/language-components";

const meta: any = () => {
  return [
    { title: "Learn" },
    { name: "description", content: "Learn using a structured curriculum" },
  ];
};

export default function Learn() {
  const modules = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Learn</SectionHeading>

      <p>Start learning from the curriculum:</p>
      <List>
        {modules.map((m) => (
          <List.Item key={m}>
            <a
              className="underline text-blue-600"
              href={`/learn/module${m.toString().padStart(2, "0")}`}
            >
              Module {m}
            </a>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
