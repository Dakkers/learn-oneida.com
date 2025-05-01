import React from "react";
import type { Metadata } from "next";
import { PracticeComprehensionClient } from "./client";

export const metadata: Metadata = {
  title: "Comprehension",
  description: "Practice your Oneida comprehension and listening skills.",
};

export default function PracticeComprehension() {
  return <PracticeComprehensionClient />;
}
