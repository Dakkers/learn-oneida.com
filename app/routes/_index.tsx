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
      <h1>Welcome to Learn-Oneida.com!</h1>
      <p>Try out one of the tools:</p>
      <ul>
        <li>
          <a
            href="/tools/numbers"
            rel="noreferrer"
          >
            Number Translator
          </a>
        </li>
      </ul>
    </div>
  );
}
