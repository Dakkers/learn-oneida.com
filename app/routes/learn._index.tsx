import { Flex } from "@/design/components/flex";
import { List } from "@/design/components/list";
import type { MetaFunction } from "@remix-run/node";
import { SectionHeading } from "~/components/SectionHeading";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn" },
    { name: "description", content: "Learn using a structured curriculum" },
  ];
};

export default function Learn() {
  const modules = [1, 2, 3, 4, 5, 6];

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
