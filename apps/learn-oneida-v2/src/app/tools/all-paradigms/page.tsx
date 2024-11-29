"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Select } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Button } from "@ukwehuwehneke/ohutsya";

import { Fragment, useState } from "react";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TextBreakdown } from "@ukwehuwehneke/language-components";
import {
  Module5VerbDatum,
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap,
} from "~/data/module05";
import {
  createModule6VerbList,
  MODULE_6_VERB_TENSE_LIST,
  module6VerbTenseMap,
} from "~/data/module06/activeVerbsList";

const meta: any = () => {
  return [
    { title: "All Paradigms" },
    { name: "description", content: "All paradigms for each module" },
  ];
};

export default function ToolsAllParadigms() {
  const [module, setModule] = useState("m6");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <Flex direction="column" gap={4}>
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
        <Module5ParadigmsAsIs />
      ) : null}
    </Flex>
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
            <>
              <SectionHeading level={3} key={t}>
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
            </>
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
                        pronounOneida: true,
                        pronounEnglish: false,
                        translation: true,
                      }}
                      data={v[t]}
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

function Module5ParadigmsAsIs() {
  const data = createModule5VerbsList();

  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "left",
          // @ts-expect-error TODO
          cell: (value, row: Module5VerbDatum) => {
            return <div>{row.en}</div>;
          },
          header: "",
        },
        {
          accessorKey: "middle",
          // @ts-expect-error TODO
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
          // @ts-expect-error TODO
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
