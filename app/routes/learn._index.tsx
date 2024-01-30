import { Heading } from "@/design/components/heading";
import { List } from "@/design/primitives/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn" },
    { name: "description", content: "Learn using a structured curriculum" },
  ];
};

export default function Learn() {
  const modules = [1, 2, 3, 4];

  return (
    <div>
      <Heading level={1} variant="headlineL">
        Learn
      </Heading>

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
    </div>
  );
}
