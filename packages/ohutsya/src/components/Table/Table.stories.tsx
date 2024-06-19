import type { Meta, StoryFn } from "@storybook/react";
import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export const Basic: StoryFn<typeof Table> = () => (
  <Table
    columns={[
      {
        accessorKey: 'left',
        header: 'Left'
      },
      {
        accessorKey: 'right',
        header: 'Right'
      },
    ]}
    data={[
      { left: 'X=1', right: 'Y=1' },
      { left: 'X=2', right: 'Y=2' },
      { left: 'X=3', right: 'Y=3' },
    ]}
  />
);
