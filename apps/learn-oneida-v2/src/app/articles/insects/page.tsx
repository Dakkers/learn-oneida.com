import { SectionHeading } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { createModule12InsectsList } from "@/data/module12";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { AnimalsTable } from "@/components/AnimalsTable";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Link } from "@/components/Link";

export const metadata: Metadata = {
  title: "Insects",
  description:
    "Learn how to pronounce and spell different species of insects in Oneida!",
};

export default function ArticleInsects() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Insects</SectionHeading>
      <Text>
        Quiz your knowledge <Link href="/practice/listening/animals">here</Link>
        !
      </Text>
      <AnimalsTable data={createModule12InsectsList()} />
    </PageWrapper>
  );
}
