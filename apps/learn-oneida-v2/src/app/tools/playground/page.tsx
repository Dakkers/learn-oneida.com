"use client";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import { useEffect } from "react";

export default function PlaygroundPage() {
  useEffect(() => {
    fetch("/api/hello").then((res) => {
      console.log("CALLED /api/hello", res.status);
    });
    fetch("/helloworld").then((res) => {
      console.log("CALLED /helloworld", res.status);
    });
    fetch("/howdyworld").then((res) => {
      console.log("CALLED /howdyworld", res.status);
    });
    fetch("http://localhost:8788/helloworld").then((res) => {
      console.log("CALLED 8788/helloworld", res.status);
    });
    fetch("http://localhost:8788/howdyworld").then((res) => {
      console.log("CALLED 8788/howdyworld", res.status);
    });
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Playground</SectionHeading>
    </PageWrapper>
  );
}
