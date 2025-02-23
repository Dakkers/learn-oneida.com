"use client";
import { Bleed, Flex, Text, TextArray } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Button } from "@ukwehuwehneke/ohutsya";

import { Fragment, useState } from "react";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TextBreakdown } from "@ukwehuwehneke/language-components";
import {
  type Module5VerbDatum,
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import {
  createModule6VerbList,
  MODULE_6_VERB_TENSE_LIST,
  module6VerbTenseMap,
} from "~/data/module06/activeVerbsList";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";
import { createModule7NounsList, Module7Noun } from "@/data/module07";
import { Letter } from "@/components/Letter";

// export const metadata: Metadata = {
//   title: "All Paradigms",
//   description: "All paradigms for each module",
// };

export const runtime = "edge";

export default function ToolsAllParadigms() {
  const [module, setModule] = useState("m7-legacy");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <PageWrapper>
      <div className="print:hidden">
        <SectionHeading level={1}>All Paradigms</SectionHeading>

        <Flex align="end" gap={4}>
          <Select
            label="Module"
            onChange={setModule}
            options={[
              { label: "Module 5", value: "m5" },
              { label: "Module 5 (Legacy)", value: "m5-legacy" },
              { label: "Module 6", value: "m6" },
              { label: "Module 7", value: "m7-legacy" },
            ]}
            value={module}
          />
          <Button disabled={!module} onClick={() => setHasSubmitted(true)}>
            Submit
          </Button>
        </Flex>
      </div>

      {!hasSubmitted ? null : module === "m6" ? (
        <Module6Paradigms />
      ) : module === "m5" ? (
        <Module5Paradigms />
      ) : module === "m5-legacy" ? (
        <Module5ParadigmsLegacy />
      ) : module === "m7-legacy" ? (
        <Module7NounListLegacy />
      ) : null}
    </PageWrapper>
  );
}

function Module5Paradigms() {
  const data = createModule5VerbsList();
  return (
    <>
      {data.map((v) => (
        <Fragment key={v.key}>
          <SectionHeading level={2}>{v.en}</SectionHeading>
          {MODULE_5_VERB_TENSE_LIST.map((t) => (
            <Fragment key={t}>
              <SectionHeading level={3}>
                {v.en} — {module5VerbTenseMap[t]}
              </SectionHeading>

              <div style={{ pageBreakAfter: "always" }}>
                <ParadigmTable
                  columnVisibility={{
                    pronounOneida: true,
                    pronounEnglish: false,
                    translation: true,
                  }}
                  data={v[t]}
                />
              </div>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}

function Module6Paradigms() {
  return (
    <>
      {createModule6VerbList().map((v) => (
        <Fragment key={v.key}>
          <SectionHeading level={2}>{v.en}</SectionHeading>
          {MODULE_6_VERB_TENSE_LIST.map(
            (t) =>
              v[t] && (
                <>
                  <SectionHeading level={3} key={t}>
                    {v.en} — {module6VerbTenseMap[t]}
                  </SectionHeading>

                  <div style={{ pageBreakAfter: "always" }}>
                    <ParadigmTable
                      columnVisibility={{
                        pronounOneida: false,
                        pronounEnglish: false,
                        translation: true,
                      }}
                      data={v[t]!}
                    />
                  </div>
                </>
              ),
          )}
        </Fragment>
      ))}
    </>
  );
}

function Module5ParadigmsLegacy() {
  const data = createModule5VerbsList();

  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "left",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (value, row: Module5VerbDatum) => {
            return <div>{row.en}</div>;
          },
          header: "",
        },
        {
          accessorKey: "middle",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (value, row: Module5VerbDatum) => {
            return (
              <Flex direction="column" justify="center" gap={4}>
                <TextBreakdown
                  breakdown={row.prs.phrases[0].breakdown}
                  typeFallback={row.prs.type}
                />
                <TextBreakdown
                  breakdown={row.past.phrases[0].breakdown}
                  typeFallback={row.past.type}
                />
              </Flex>
            );
          },
          header: "",
        },
        {
          accessorKey: "right",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (value, row: Module5VerbDatum) => {
            return (
              <Flex direction="column" justify="center" gap={4}>
                <TextBreakdown
                  breakdown={row.fut.phrases[0].breakdown}
                  typeFallback={row.fut.type}
                />
                <TextBreakdown
                  breakdown={row.ifut.phrases[0].breakdown}
                  typeFallback={row.ifut.type}
                />
                <TextBreakdown
                  breakdown={row.cmd.phrases[0].breakdown}
                  typeFallback={row.cmd.type}
                />
              </Flex>
            );
          },
          header: "",
        },
      ]}
      data={data}
    />
  );
}

function Module7NounListLegacy() {
  const data = createModule7NounsList();

  return (
    <Bleed
      mx={{
        xs: 0,
        md: 16,
        lg: 32,
      }}
    >
      {data.map((datum) => (
        <div
          key={datum.key}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gridColumnGap: 0,
            gridRowGap: 0,
          }}
        >
          <div className="border p-1" style={{ gridArea: "4 / 2 / 5 / 4" }}>
            <Flex gap={2} wrap>
              {[datum.count1, datum.count2, datum.count3].map((v, i) => (
                <TextBreakdown breakdown={v} key={i} />
              ))}
            </Flex>
          </div>
          <div className="border p-1" style={{ gridArea: " 1 / 1 / 5 / 2" }}>
            <Flex align="center" direction="column" gap={1} justify="center">
              {datum.en.map((txt, i) => (
                <div key={i}>{txt}</div>
              ))}
            </Flex>
          </div>
          <div className="border p-1" style={{ gridArea: " 1 / 2 / 2 / 3" }}>
            <TextArray>
              <TextBreakdown breakdown={datum.single} />
              {datum.plural && <TextBreakdown breakdown={datum.plural} />}
            </TextArray>
          </div>
          <div className="border p-1" style={{ gridArea: "1 / 3 / 2 / 4" }}>
            <Letter>{datum.root.join("/")}</Letter>
            &nbsp;&nbsp;
            <Text as="span" variant="labelS">
              {datum.dict.join(", ")}
            </Text>
          </div>
          <div className="border p-1" style={{ gridArea: " 2 / 2 / 3 / 3" }}>
            <TextArray>
              <TextBreakdown breakdown={datum.have} />
              {datum.havePlural && (
                <TextBreakdown breakdown={datum.havePlural} />
              )}
            </TextArray>
          </div>
          <div className="border p-1" style={{ gridArea: "2 / 3 / 3 / 4" }}>
            <TextArray>
              <TextBreakdown breakdown={datum.good} />
              {datum.goodPlural && (
                <TextBreakdown breakdown={datum.goodPlural} />
              )}
            </TextArray>
          </div>
          <div className="border p-1" style={{ gridArea: "3 / 2 / 4 / 3" }}>
            <TextArray>
              <TextBreakdown breakdown={datum.haveGood} />
              {datum.haveGoodPlural && (
                <TextBreakdown breakdown={datum.haveGoodPlural} />
              )}
            </TextArray>
          </div>
          <div className="border p-1" style={{ gridArea: " 3 / 3 / 4 / 4" }}>
            <TextArray>
              <TextBreakdown breakdown={datum.big} />
              {datum.bigPlural && <TextBreakdown breakdown={datum.bigPlural} />}
            </TextArray>
          </div>
        </div>
      ))}
    </Bleed>
  );
}
