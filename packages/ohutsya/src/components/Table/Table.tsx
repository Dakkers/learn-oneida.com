import { TextArray, TextArrayProps } from "../../internal/TextArray";
import {
  PrimitiveTable,
  PrimitiveTableBody,
  PrimitiveTableCell,
  PrimitiveTableHead,
  PrimitiveTableHeader,
  PrimitiveTableRow,
} from "../../primitives/table";
import { Flex } from "../Flex";
import { Bleed, BleedProps } from "../Bleed";

type Row = Record<string, unknown>;

export interface TableProps {
  bleed?: BleedProps["mx"];
  columns: Array<{
    accessorKey: string;
    cell?: (value?: unknown, row?: Row) => React.ReactNode;
    header?: React.ReactNode | (() => React.ReactNode);
    key?: string;
  }>;
  data: Array<Row>;
}

export function Table({ bleed = 0, columns, data }: TableProps) {
  const hasHeader = !!columns.find((col) => !!col.header);

  return (
    <Bleed mx={bleed}>
      <PrimitiveTable>
        {hasHeader && (
          <PrimitiveTableHeader>
            <PrimitiveTableRow>
              {columns.map((c) => (
                <PrimitiveTableHead key={c.key ?? c.accessorKey}>
                  {typeof c.header === "function"
                    ? c.header()
                    : c.header ?? null}
                </PrimitiveTableHead>
              ))}
            </PrimitiveTableRow>
          </PrimitiveTableHeader>
        )}
        <PrimitiveTableBody>
          {data.map((row, i) => (
            <PrimitiveTableRow key={i}>
              {columns.map((c, j) => (
                <PrimitiveTableCell key={`${i}-${j}`}>
                  {c.cell
                    ? c.cell(row[c.accessorKey], row)
                    : (row[c.accessorKey] as React.ReactNode)}
                </PrimitiveTableCell>
              ))}
            </PrimitiveTableRow>
          ))}
        </PrimitiveTableBody>
      </PrimitiveTable>
    </Bleed>
  );
}

Table.textArrayCell = (value: TextArrayProps["children"]) => (
  <Flex direction="column">
    <TextArray>{value}</TextArray>
  </Flex>
);
Table.textArrayCellBold = (value: TextArrayProps["children"]) => (
  <Flex direction="column">
    <TextArray bold>{value}</TextArray>
  </Flex>
);
