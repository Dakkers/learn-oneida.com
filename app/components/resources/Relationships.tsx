import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { TextBreakdown } from "../TextBreakdown";
import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";

const HNE = { text: "hné·", type: "PAST" };

export function RelationshipsResource({ level = 1 }) {
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

function MarriedTable({ level }) {
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
      <SectionHeading id="married" level={level + 1}>
        Married
      </SectionHeading>
      <TableWrapper
        columns={createColumns("PB", { suffix: "hne" })}
        data={rows}
      />
    </>
  );
}

function InARelationshipTable({ level }) {
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
      <SectionHeading id="in-a-relationship" level={level + 1}>
        In a relationship
      </SectionHeading>
      <TableWrapper
        columns={createColumns("PR", { suffix: "kwe" })}
        data={rows}
      />
    </>
  );
}

function SeparatedTable({ level }) {
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
      <SectionHeading id="separated" level={level + 1}>
        Separated and Reconciled
      </SectionHeading>
      <TableWrapper
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

function EngagedTable({ level }) {
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
      <SectionHeading id="engaged" level={level + 1}>
        Engaged
      </SectionHeading>
      <TableWrapper
        columns={createColumns("PB", { suffix: "hkwe" })}
        data={rows}
      />
    </>
  );
}

function SingleTable({ level }) {
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
      <SectionHeading id="single" level={level + 1}>
        Single
      </SectionHeading>
      <TableWrapper
        columns={createColumns("PR", { suffix: "hne" })}
        data={rows}
      />
    </>
  );
}

function OldManWomanTable({ level }) {
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
      <SectionHeading id="oldman-oldwoman" level={level + 1}>
        Old Man / Old Woman
      </SectionHeading>
      <Text>
        This is a colloquial term similar to its English translation, e.g. "my
        old lady is a real battleaxe!"
      </Text>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsPronouns,
          {
            accessorKey: "oldMan",
            cell: (value) => (
              <TextBreakdown breakdown={value} typeFallback="PP" />
            ),
            header: "Old man",
          },
          {
            accessorKey: "oldWoman",
            cell: (value) => (
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

function SpouseTable({ level }) {
  const rows = [
    ["Tshyalé lo·né·", "Charlie's spouse"],
    ["Só·s lo·né·", "Susan's spouse"],
    ["ukyalá·séʔ lo·né·", "My cousin's spouse"],
    ["tsyatʌ·ló· lo·né·", "Your friend's spouse"],
  ].map(([one, en]) => ({ one, en }));

  return (
    <>
      <SectionHeading id="spouse" level={level + 1}>
        Spouse
      </SectionHeading>
      <Text>
        <b>lo·né·</b> is used to describe someone else's spouse, it is not used
        for "my spouse" or "your spouse".
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

function BoyfriendGirlfriendTable({ level }) {
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
      <SectionHeading id="boyfriend-girlfriend" level={level + 1}>
        Boyfriend / Girlfriend
      </SectionHeading>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsPronouns,
          {
            accessorKey: "oldMan",
            cell: (value) => (
              <TextBreakdown breakdown={value} typeFallback="PLB" />
            ),
            header: "Old man",
          },
          {
            accessorKey: "oldWoman",
            cell: (value) => (
              <TextBreakdown breakdown={value} typeFallback="PLB" />
            ),
            header: "Old woman",
          },
        ]}
        data={rows}
      />
    </>
  );
}
