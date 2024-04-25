import { Flex } from "@/design/components/flex";
import { Select } from "@/design/components/select";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Button } from "@/design/primitives/button";
import type { MetaFunction } from "@remix-run/node";
import { Fragment, useState } from "react";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "~/components/SectionHeading";
import { TextBreakdown } from "~/components/TextBreakdown";
import {
  Module5VerbDatum,
  STATIVE_VERB_TENSE_LIST,
  createModule5VerbsList,
  stativeVerbTenseMap,
} from "~/data/module05";
import {
  activeVerbsList,
  ACTIVE_VERB_TENSE_LIST,
  activeVerbTenseMap,
} from "~/data/module06/activeVerbsList";

export const meta: MetaFunction = () => {
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
          {STATIVE_VERB_TENSE_LIST.map((t) => (
            <>
              <SectionHeading level={3} key={t}>
                {v.en} — {stativeVerbTenseMap[t]}
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
      {activeVerbsList.map((v) => (
        <Fragment key={v.key}>
          <SectionHeading level={2}>{v.en}</SectionHeading>
          {ACTIVE_VERB_TENSE_LIST.map((t) => (
            <>
              <SectionHeading level={3} key={t}>
                {v.en} — {activeVerbTenseMap[t]}
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

function Module5ParadigmsAsIs() {
  const data = createModule5VerbsList();

  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "left",
          cell: (value, row: Module5VerbDatum) => {
            return <div>{row.en}</div>;
          },
          header: "",
        },
        {
          accessorKey: "middle",
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

  return (
    <>
      {activeVerbsList.map((v) => (
        <Fragment key={v.key}>
          <SectionHeading level={2}>{v.en}</SectionHeading>
          {TENSE_LIST.map((t) => (
            <>
              <SectionHeading level={3} key={t}>
                {v.en} — {tenseMap[t]}
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
