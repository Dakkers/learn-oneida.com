import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tools" },
    { name: "description", content: "Tools provided by this website" },
  ];
};

export default function Tools() {
  const tools = [
    {
      href: '/numbers',
      label: 'Number Translator'
    },
    {
      href: '/paradigm',
      label: 'Paradigm Tester'
    },
  ];

  return (
    <div>
      <Text as="h1" variant="headline">Tools</Text>

      <p>Check out some tools:</p>
      <ul>
        {tools.map((t, i) => (
          <li key={i}>
            · &nbsp;
            <a className="underline text-blue-600" href={`/tools${t.href}`}>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
