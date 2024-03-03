import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { BreakdownArray, TextBreakdown } from "../TextBreakdown";
import { Text } from "@/design/components/text";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ResourceProps } from "./utils";

export function RelationshipsResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="relationships" level={level}>
        Relationships
      </SectionHeading>
      <MarriedTable level={level} />
      <InARelationshipTable level={level} />
      <SeparatedTable level={level} />
      <EngagedTable level={level} />
      <SingleTable level={level} />
      <OldManWomanTable level={level} />
      <SpouseTable level={level} />
      <BoyfriendGirlfriendTable level={level} />
    </Flex>
  );
}

const createColumns = TableWrapper.createPastTenseColumns;

function MarriedTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["i", "wake"],
    ["u", "sa"],
    ["m", "lo"],
    ["f", "yako"],
    ["uni", "yukni"],
    ["u2", "sni"],
    ["soni", "yukni"],
    ["2m", "loti"],
    ["2f", "yoti"],
    ["us", "yukwa"],
    ["theyni", "yukwa"],
    ["yall", "swa"],
    ["ms", "loti"],
    ["fs", "yoti"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{ text: p }, "nyákuʔ"],
      breakdownPast: [{ text: p }, "nyaku"],
    };
  });

  return (
    <>
      <SectionHeading
        id="married"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Married
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColumns("PB", { suffix: "hne" })}
        data={rows}
      />
    </>
  );
}

function InARelationshipTable({ level = 2 }: ResourceProps) {
  const rows = [
    {
      pronoun: "uni",
      breakdown: ["í", { text: "tn" }],
    },
    {
      pronoun: "u2",
      breakdown: ["í", { text: "sn" }],
    },
    {
      pronoun: "soni",
      breakdown: [{ text: "yákn" }],
    },
    {
      pronoun: "2m",
      breakdown: ["í·", { text: "n" }],
    },
    {
      pronoun: "2f",
      breakdown: ["í", { text: "kn" }],
    },
  ].map((row) => {
    return {
      ...row,
      breakdown: [...row.breakdown, "ehse"],
      breakdownPast: [...row.breakdown, "ehs"],
    };
  });

  return (
    <>
      <SectionHeading
        id="in-a-relationship"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        In a relationship
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColumns("PR", { suffix: "kwe" })}
        data={rows}
      />
    </>
  );
}

function SeparatedTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["uni", "yuky"],
    ["u2", "tsy"],
    ["soni", "yuky"],
    ["2m", "hon"],
    ["2f", "yon"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: ["te", { text: p }, "atekháshyu"],
      breakdownPast: ["te", { text: p }, "atekhashyu"],
    };
  });

  return (
    <>
      <SectionHeading
        id="separated"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Separated and Reconciled
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColumns("PB", {
          headerNow: "Separated",
          headerPast: "Reconciled",
          suffix: "hne",
        })}
        data={rows}
      />
    </>
  );
}

function EngagedTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["i", "wake"],
    ["soni", "yukni"],
    ["ms", "loti"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{ text: p }, "nyákheʔ"],
      breakdownPast: [{ text: p }, "nkákhe"],
    };
  });

  return (
    <>
      <SectionHeading
        id="engaged"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Engaged
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColumns("PB", { suffix: "hkwe" })}
        data={rows}
      />
    </>
  );
}

function SingleTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["i", "k"],
    ["u", "s"],
    ["m", "l"],
    ["f", "yu"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{ text: p }, "atatwʌni·yó"],
      breakdownPast: [{ text: p }, "atatwʌniyo"],
    };
  });

  return (
    <>
      <SectionHeading
        id="single"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Single
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColumns("PR", { suffix: "hne" })}
        data={rows}
      />
    </>
  );
}

function OldManWomanTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["i", "li", "khe"],
    ["u", "etshe", "she"],
    ["m", "lo", "shako"],
    ["f", "luwa", "yutate"],
  ].map(([pronoun, m, f]) => {
    return {
      oldMan: [{ text: m }, "khstʌ́ha̲"],
      oldWoman: [{ text: f }, "khstʌ́ha̲"],
      pronoun,
    };
  });

  return (
    <>
      <SectionHeading
        id="old-man-old-woman"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Old Man / Old Woman
      </SectionHeading>
      <Text>
        This is a colloquial term similar to its English translation, e.g.
        &quot;my old lady is a real battleaxe!&quot;
      </Text>
      <TableWrapper
        columns={[
          // @ts-expect-error To be addressed in LO-12
          ...TableWrapper.columnsPronouns,
          {
            accessorKey: "oldMan",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PP" />
            ),
            header: "Old man",
          },
          {
            accessorKey: "oldWoman",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PP" />
            ),
            header: "Old woman",
          },
        ]}
        data={rows}
      />
    </>
  );
}

function SpouseTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["Tshyalé lo·né·", "Charlie's spouse"],
    ["Só·s lo·né·", "Susan's spouse"],
    ["ukyalá·séʔ lo·né·", "My cousin's spouse"],
    ["tsyatʌ·ló· lo·né·", "Your friend's spouse"],
  ].map(([one, en]) => ({ one, en }));

  return (
    <>
      <SectionHeading
        id="spouse"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Spouse
      </SectionHeading>
      <Text>
        <b>lo·né·</b> is used to describe someone else&lsquo;s spouse, it is not
        used for &quot;my spouse&quot; or &quot;your spouse&quot;.
      </Text>
      <TableWrapper
        columns={[
          {
            accessorKey: "en",
            cell: TableWrapper.textArrayCell,
            header: "English",
          },
          {
            accessorKey: "one",
            cell: TableWrapper.textArrayCellBold,
            header: "Oneida",
          },
        ]}
        data={rows}
      />
    </>
  );
}

function BoyfriendGirlfriendTable({ level = 2 }: ResourceProps) {
  const rows = [
    ["i", "ak"],
    ["u", "sa"],
    ["m", "lao"],
    ["f", "ako"],
  ].map(([pronoun, p]) => {
    return {
      boyfriend: [{ text: p }, "nikʌhtlú·tsliʔ"],
      girlfriend: [{ text: p }, "yaʔtasé·tsliʔ"],
      pronoun,
    };
  });

  return (
    <>
      <SectionHeading
        id="girlfriend-boyfriend"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Girlfriend / Boyfriend
      </SectionHeading>
      <TableWrapper
        columns={[
          // @ts-expect-error To be addressed in LO-12
          ...TableWrapper.columnsPronouns,
          {
            accessorKey: "boyfriend",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PLB" />
            ),
            header: "Boyfriend",
          },
          {
            accessorKey: "girlfriend",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PLB" />
            ),
            header: "Girlfriend",
          },
        ]}
        data={rows}
      />
    </>
  );
}
