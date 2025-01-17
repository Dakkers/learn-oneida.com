"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "@ukwehuwehneke/language-components";
import { LinkWrapper } from "@/components/LinkWrapper";

const meta: any = () => {
  return [
    { title: "Learn" },
    { name: "description", content: "Learn using a structured curriculum" },
  ];
};

export default function Learn() {
  const modules = ["intro", 1, 2, 3, 4, 5, 6] as const;

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Learn</SectionHeading>

      <p>Start learning from the curriculum:</p>
      <List>
        {modules.map((m) => (
          <List.Item key={m}>
            <LinkWrapper page={m}>
              {m == "intro" ? "Introduction" : `Module ${m}`}
            </LinkWrapper>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
