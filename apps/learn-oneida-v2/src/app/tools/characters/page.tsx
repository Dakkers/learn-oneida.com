"use client";

import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Special Characters",
//   description: "This is just a page that has special characters useful for writing text in Oneida.",
// };

export default function SpecialCharactersPage() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Special Characters</SectionHeading>

      <CharTable />
    </PageWrapper>
  );
}

function CharTable() {
  const data = [
    ["a", "e", "i", "o", "u", "ʌ"],
    ["á", "é", "í", "ó", "ú", "ʌ́"],

    ["a̲", "e̲", "i̲", "o̲", "u̲", "ʌ̲"],

    ["á̲", "é̲", "í̲", "ó̲", "ú̲", "ʌ̲́"],

    ["á·", "é·", "í·", "ó·", "ú·", "ʌ́·"],
    ["a̲·", "e̲·", "i̲·", "o̲·", "u̲·", "ʌ̲·"],
    ["á̲·", "é̲·", "í̲·", "ó̲·", "ú̲·", "ʌ̲́·"],
  ] as const;

  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "a",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
        {
          accessorKey: "e",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
        {
          accessorKey: "i",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
        {
          accessorKey: "o",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
        {
          accessorKey: "u",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
        {
          accessorKey: "v",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (val: string) => {
            return <CustomCell val={val} />;
          },
        },
      ]}
      data={data.map((arr) => ({
        a: arr[0],
        e: arr[1],
        i: arr[2],
        o: arr[3],
        u: arr[4],
        v: arr[5],
      }))}
    />
  );
}

function CustomCell({ val }: { val: string }) {
  return (
    <button
      className="border p-2 border-2"
      onClick={() => copyTextToClipboard(val)}
    >
      <Text variant="headlineM">{val}</Text>
    </button>
  );
}

function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text.trim()).then(
    function () {
      // Meh
    },
    function () {
      // Meh
    },
  );
}
