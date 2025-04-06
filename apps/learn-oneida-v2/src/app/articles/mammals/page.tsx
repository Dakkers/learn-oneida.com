import { SectionHeading } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import {
  createModule12BirdsList,
  createModule12MammalsList,
} from "@/data/module12";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { AnimalsTable } from "@/components/AnimalsTable";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Link } from "@/components/Link";

export const metadata: Metadata = {
  title: "Mammals",
  description:
    "Learn how to pronounce and spell different species of mammals in Oneida!",
};

export default function ArticleMammals() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Mammals</SectionHeading>
      <Text>
        Quiz your knowledge <Link href="/practice/listening/animals">here</Link>
        !
      </Text>
      <AnimalsTable data={createModule12MammalsList()} />
    </PageWrapper>
  );
}
