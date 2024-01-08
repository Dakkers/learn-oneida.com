import { Text } from "@/design/ui/text";
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
      <Text as="h1" variant="headline">
        Learn
      </Text>

      <p>Start learning from the curriculum:</p>
      <ul>
        {modules.map((m) => (
          <li key={m}>
            · &nbsp;
            <a
              className="underline text-blue-600"
              href={`/learn/module${m.toString().padStart(2, "0")}`}
            >
              Module {m}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
