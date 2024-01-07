import type { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 3" },
    { name: "description", content: "Module 3 of the Oneida curriculum" },
  ];
};

export default function LearnModule03() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Module 3</h1>

      <p>This content is not available yet! Check back soon.</p>
    </div>
  );
}
