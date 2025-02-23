import { SectionHeading } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";

export const runtime = "edge";

export default function PlaygroundPage() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Playground</SectionHeading>
    </PageWrapper>
  );
}
