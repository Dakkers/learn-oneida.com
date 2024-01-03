import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tools" },
    { name: "description", content: "Tools provided by this website" },
  ];
};

export default function Tools() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Tools</h1>
    </div>
  );
}
