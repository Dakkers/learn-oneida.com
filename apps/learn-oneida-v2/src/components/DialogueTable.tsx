"use client";

import { Flex, TextArray } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "~/components/TableWrapper";

type Entry = string | string[];
type Cell =
  | null
  | Entry
  | {
      one: Entry;
      en: Entry;
    };
type Row = [Cell, Cell];
export type DialogueTableData = Row[];

export function DialogueTable({ data }: { data: DialogueTableData }) {
  const columns = [
    { accessorKey: "left", cell: (value: any) => TableCell(value), header: "" },
    {
      accessorKey: "right",
      cell: (value: any) => TableCell(value),
      header: "",
    },
  ];
  return (
    <TableWrapper
      columns={columns}
      data={data.map(TableWrapper.mapLeftRight)}
    />
  );
}

function TableCell(value: Cell) {
  return (
    <Flex direction="column" gap={4}>
      <TextArray>
        {Array.isArray(value) || typeof value === "string" || value === null
          ? value
          : value.one}
      </TextArray>
    </Flex>
  );
}
