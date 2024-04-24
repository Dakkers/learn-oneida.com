import { Flex } from "@/design/components/flex";
import { Select } from "@/design/components/select";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Button } from "@/design/primitives/button";
import type { MetaFunction } from "@remix-run/node";
import { Fragment, useState } from "react";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "~/components/SectionHeading";
import { TextBreakdown } from "~/components/TextBreakdown";
import { Module5VerbDatum, TenseDatum, module5VerbsList_BUT_BETTER } from "~/data/module05";
import { activeVerbsList } from "~/data/module06/activeVerbsList";

console.log(module5VerbsList_BUT_BETTER);

export const meta: MetaFunction = () => {
  return [
    { title: "All Paradigms" },
    { name: "description", content: "All paradigms for each module" },
  ];
};

const TENSE_LIST = ["hab", "def", "fut", "ifut", "cmd", "pfv"] as const;
const tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite",
  def: "Definite",
  pfv: "Perfective",
  hab: "Habitual",
} as const;

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
      ) : module === "m5-legacy" ? (
        <Module5ParadigmsAsIs />
      ) : null}
    </Flex>
  );
}

function Module6Paradigms() {
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

function Module5ParadigmsAsIs() {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: 'left',
          cell: (value, row: Module5VerbDatum) => {
            return (
              <div>{row.en}</div>
            )
          },
          header: ''
        },
        {
          accessorKey: 'middle',
          cell: (value, row: Module5VerbDatum) => {
            return (
              <Flex direction='column' justify="center" gap={4}>
                <TextBreakdown breakdown={row.prs.phrases[0].breakdown} typeFallback={row.prs.type} />
                <TextBreakdown breakdown={row.past.phrases[0].breakdown} typeFallback={row.past.type} />
              </Flex>
            )
          },
          header: ''
        },
        {
          accessorKey: 'right',
          cell: (value, row:Module5VerbDatum) => {
            return (
              <Flex direction='column' justify="center" gap={4}>
                <TextBreakdown breakdown={row.fut.phrases[0].breakdown} typeFallback={row.fut.type} />
                <TextBreakdown breakdown={row.ifut.phrases[0].breakdown} typeFallback={row.ifut.type} />
                <TextBreakdown breakdown={row.cmd.phrases[0].breakdown} typeFallback={row.cmd.type} />
              </Flex>
            )
          },
          header: ''
        },
      ]}
      data={module5VerbsList_BUT_BETTER}
    />
  )

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
