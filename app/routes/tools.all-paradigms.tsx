import { Flex } from "@/design/components/flex";
import { List } from "@/design/components/list";
import { Select } from "@/design/components/select";
import { Text } from "@/design/components/text";
import { Button } from "@/design/primitives/button";
import type { MetaFunction } from "@remix-run/node";
import { Fragment, useState } from "react";
import { ParadigmTable } from "~/components/ParadigmTable";
import { SectionHeading } from "~/components/SectionHeading";
import { activeVerbsList } from "~/data/module06/activeVerbsList";

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
            options={[{ label: "Module 6", value: "m6" }]}
            value={module}
          />
          <Button disabled={!module} onClick={() => setHasSubmitted(true)}>
            Submit
          </Button>
        </Flex>
      </div>

      {hasSubmitted && <Module6Paradigms />}
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
