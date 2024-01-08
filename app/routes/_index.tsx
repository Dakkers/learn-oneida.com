import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Oneida" },
    { name: "description", content: "Learn the Oneida language!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Text as="h1" variant="headline">
        Welcome to Learn-Oneida.com!
      </Text>
      <p>
        <a className="text-blue-600 underline" href="/learn">
          Start learning from the curriculum!
        </a>
      </p>

      <p>Try out one of the tools:</p>
      <ul>
        <li>
          ·{" "}
          <a className="text-blue-600 underline" href="/tools/numbers">
            Number Translator
          </a>
        </li>
        <li>
          ·{" "}
          <a className="text-blue-600 underline" href="/tools/paradigm">
            Paradigm Tester
          </a>
        </li>
      </ul>
    </div>
  );
}
