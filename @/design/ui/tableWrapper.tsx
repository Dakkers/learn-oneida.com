import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

type Row = Record<string, unknown>

export interface TableWrapperProps {
  columns: Array<{
    accessorKey: string;
    cell?: (
      value?: unknown,
      row?: Row
    ) => React.ReactNode;
    header: React.ReactNode;
  }>;
  data: Array<Row>;
}

export function TableWrapper ({
  columns,
  data
}: TableWrapperProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableHead key={c.accessorKey}>
              {c.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((c) => (
              <TableCell>
                {c.cell ? c.cell(row[c.accessorKey], row) : row[c.accessorKey] as React.ReactNode}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
