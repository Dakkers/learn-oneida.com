import type { MetaFunction } from "@remix-run/node";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex } from "@/design/components/flex";
import { SectionHeading } from "~/components/SectionHeading";
import { Box } from "@/design/components/box";
import { Notice } from "@/design/components/notice";
import { TableWrapper } from "@/design/components/tableWrapper";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "~/components/TextBreakdown";
import { activeVerbsList } from "~/data/module06/activeVerbsList";
import _ from "lodash";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design/primitives/accordion";

const TENSE_LIST = ["cmd", "hab", "pfv", "def", "ifut", "fut"] as const;

const tenseMap = {
  cmd: "Command",
  def: "Definite",
  fut: "Future",
  hab: "Habitual",
  ifut: "Indefinite",
  pfv: "Perfective",
} as const;

export const meta: MetaFunction = () => {
  return [
    { title: "Module 6" },
    { name: "description", content: "Module 6 of the Oneida curriculum" },
  ];
};

export default function LearnModule06() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 6</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Daily Activities" value="daily-activities">
          <TOC.Section>
            {activeVerbsList.map((v) => (
              <TOC.Item key={v.key} label={v.en} value={_.kebabCase(v.key)} />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <DailyActivitiesSection />

      {/* <TranslationExercisesSection group="module06" /> */}
    </Flex>
  );
}

function DailyActivitiesSection() {
  return (
    <>
      <SectionHeading id="daily-activities" level={2}>
        Daily Activities
      </SectionHeading>

      <Accordion type="multiple">
        {activeVerbsList.map((v) => (
          <AccordionItem id={_.kebabCase(v.key)} key={v.key} value={v.key}>
            <AccordionTrigger>{v.en}</AccordionTrigger>
            <AccordionContent>
              <TableWrapper
                columns={[
                  {
                    accessorKey: "tense",
                    // @ts-expect-error To be fixed in LO-12
                    cell: (value: keyof typeof tenseMap) => tenseMap[value],
                    header: "Tense",
                  },
                  {
                    accessorKey: "text",
                    // @ts-expect-error To be fixed in LO-12
                    cell: (
                      value: BreakdownArray,
                      row: { colour: BreakdownType }
                    ) => (
                      <TextBreakdown
                        breakdown={value}
                        typeFallback={row.colour}
                      />
                    ),
                    header: "",
                  },
                ]}
                data={TENSE_LIST.map((tense) => ({
                  colour: v[tense].type,
                  tense,
                  text: v[tense].phrases.find(
                    (p) => p.pronoun === (tense === "cmd" ? "u" : "i")
                  )?.breakdown,
                }))}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
