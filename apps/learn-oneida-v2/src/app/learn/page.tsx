import { List } from "@ukwehuwehneke/ohutsya";

import { SectionHeading } from "@ukwehuwehneke/language-components";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description: "Learn using a structured curriculum",
};

export const runtime = "edge";

export default function Learn() {
  const modules = ["intro", 1, 2, 3, 4, 5, 6] as const;

  return (
    <PageWrapper>
      <SectionHeading level={1}>Learn</SectionHeading>

      <p>Start learning from the curriculum:</p>
      <List>
        {modules.map((m) => (
          <List.Item key={m}>
            <LinkWrapper page={m}>
              {m === "intro" ? "Introduction" : `Module ${m}`}
            </LinkWrapper>
          </List.Item>
        ))}
      </List>
    </PageWrapper>
  );
}
