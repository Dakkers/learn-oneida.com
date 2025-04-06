import {
  getAudioFileBaseForModule12AnimalDatum,
  type Module12AnimalDatum,
} from "@/data/module12";
import { TableWrapper } from "@ukwehuwehneke/language-components";
import { EnglishDisplay } from "./EnglishDisplay";
import { StandardEntryDisplay } from "./StandardEntryDisplay";

export function AnimalsTable({ data }: { data: Module12AnimalDatum[] }) {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "en",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (en: string[], row: Module12AnimalDatum) => (
            <EnglishDisplay value={row} />
          ),
          header: "English",
        },
        {
          accessorKey: "singular",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (
            singular: Module12AnimalDatum["singular"],
            row: Module12AnimalDatum,
          ) => {
            return (
              <StandardEntryDisplay
                audioFile={getAudioFileBaseForModule12AnimalDatum(
                  row,
                  "singular",
                )}
                value={singular}
              />
            );
          },
          header: "Single",
        },
        // {
        //   accessorKey: "plural",
        //   // @ts-expect-error TODO - TableWrapper/Table generics
        //   cell: (plural: Module12AnimalDatum["plural"]) => {
        //     return <CustomCell value={plural} />;
        //   },
        //   header: "Plural",
        // },
      ]}
      // @ts-expect-error TODO - TableWrapper/Table generics
      data={data}
    />
  );
}
