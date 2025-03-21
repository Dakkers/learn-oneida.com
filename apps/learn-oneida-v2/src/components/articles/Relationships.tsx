"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  type BreakdownArray,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { Letter } from "../Letter";
import { LinkWrapper } from "../LinkWrapper";

export function RelationshipsArticle({ level = 1 }: ArticleProps) {
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

function MarriedTable({ level = 2 }: ArticleProps) {
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
      breakdownPast: [{ text: p }, "nyaku", ["hné·", "PAST"]],
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
      <Text>
        The root word is <Letter>-nyak-</Letter>. The paradigm below is stated
        in the <b>perfective tense</b> which is discussed in{" "}
        <LinkWrapper page={6} />.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColumns("PO").slice(1)}
        data={rows}
      />
    </>
  );
}

function InARelationshipTable({ level = 2 }: ArticleProps) {
  const rows = [
    {
      pronoun: "uni",
      breakdown: ["í", ["tn"]],
    },
    {
      pronoun: "u2",
      breakdown: ["í", ["sn"]],
    },
    {
      pronoun: "soni",
      breakdown: [["yákn"]],
    },
    {
      pronoun: "2m",
      breakdown: ["í·", { text: "n" }],
    },
    {
      pronoun: "2f",
      breakdown: ["í", ["kn"]],
    },
  ].map((row) => {
    return {
      ...row,
      breakdown: [...row.breakdown, "ehse"],
      breakdownPast: [...row.breakdown, "ehs", ["kwe̲", "PAST"]],
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
      <Text>
        The root word is <Letter>-e-</Letter>. This root word literally means
        "walk, go, be somewhere" but is also used for dating or being together.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColumns("PS").slice(1)}
        data={rows}
      />
    </>
  );
}

function SeparatedTable({ level = 2 }: ArticleProps) {
  const rows = [
    ["uni", "yuky"],
    ["u2", "tsy"],
    ["soni", "yuky"],
    ["2m", "hon"],
    ["2f", "yon"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [["te", "DUAL"], { text: p }, "atekháshyu"],
      breakdownPast: [
        ["te", "DUAL"],
        { text: p },
        "atekhashyu",
        ["hné·", "PAST"],
      ],
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
      <Text>
        The root word is <Letter>te...atekhahsyu-</Letter>. This root word
        literally means "come apart, come undone, become unravelled, separate".
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColumns("PO", {
          headerNow: "Separated",
          headerPast: "Reconciled",
        }).slice(1)}
        data={rows}
      />
    </>
  );
}

function EngagedTable({ level = 2 }: ArticleProps) {
  const rows = [
    ["i", "wake"],
    ["soni", "yukni"],
    ["ms", "loti"],
  ].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{ text: p }, "nyákheʔ"],
      breakdownPast: [{ text: p }, "nkákhe", ["hkwe̲", "PAST"]],
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
      <Text>
        The root word is <Letter>-nyak-</Letter> which is the same root word as
        the word for being married. However, the aspect suffix is different.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColumns("PO").slice(1)}
        data={rows}
      />
    </>
  );
}

function SingleTable({ level = 2 }: ArticleProps) {
  const rows = [
    {
      breakdown: [["k"], "atatwʌni·yó"],
      breakdownPast: [["k"], "atatwʌniyo", ["hné·", "PAST"]],
      pronoun: "i",
    },
    {
      breakdown: [["s"], "atatwʌni·yó"],
      breakdownPast: [["s"], "atatwʌniyo", ["hné·", "PAST"]],
      pronoun: "u",
    },
    {
      breakdown: [["l"], "atatwʌni·yó"],
      breakdownPast: [["l"], "atatwʌniyo", ["hné·", "PAST"]],
      pronoun: "m",
    },
    {
      breakdown: [["yu"], "tatwʌni·yó"],
      breakdownPast: [["yu"], "tatwʌniyo", ["hné·", "PAST"]],
      pronoun: "f",
    },
  ];

  return (
    <>
      <SectionHeading
        id="single"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Single
      </SectionHeading>
      <Text>
        The root word is <Letter>-atatwʌniyo-</Letter>.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColumns("PS").slice(1)}
        data={rows}
      />
    </>
  );
}

function OldManWomanTable({ level = 2 }: ArticleProps) {
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
          TableWrapper.columnsOneidaPronouns[1],
          {
            accessorKey: "oldMan",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PI" />
            ),
            header: "Old man",
          },
          {
            accessorKey: "oldWoman",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PI" />
            ),
            header: "Old woman",
          },
        ]}
        data={rows}
      />
    </>
  );
}

function SpouseTable({ level = 2 }: ArticleProps) {
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

function BoyfriendGirlfriendTable({ level = 2 }: ArticleProps) {
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
      <Text>
        The root word for boyfriend is <Letter>-nikʌhtluʔtsl-</Letter> which you
        may recognize as being very similar to the root word for young man from{" "}
        <LinkWrapper page={1} />. The <Letter>ʔtsl</Letter> suffix is known as a{" "}
        <LinkWrapper page="nom" /> which converts a verb to a noun.
      </Text>
      <Text>
        Similarly, the root word for girlfriend is{" "}
        <Letter>-yaʔtaseʔtsl-</Letter> which is the nominalized form of the root
        word for young woman.
      </Text>
      <TableWrapper
        columns={[
          TableWrapper.columnsOneidaPronouns[1],
          {
            accessorKey: "boyfriend",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PP" />
            ),
            header: "Boyfriend",
          },
          {
            accessorKey: "girlfriend",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: BreakdownArray) => (
              <TextBreakdown breakdown={value} typeFallback="PP" />
            ),
            header: "Girlfriend",
          },
        ]}
        data={rows}
      />
    </>
  );
}
