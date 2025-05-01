import React from "react";
import type { Metadata } from "next";
import { PracticeRecallClient } from "./client";

export const metadata: Metadata = {
  title: "Recall",
  description: "Practice your Oneida recall skills.",
};

export default function PracticeRecall() {
  return <PracticeRecallClient />;
}
