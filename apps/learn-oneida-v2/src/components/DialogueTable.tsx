import { arrayify } from "@ukwehuwehneke/language-components";
import {
  cn,
  Flex,
  PlayButton,
  PrimitiveTable,
  PrimitiveTableBody,
  PrimitiveTableCell,
  PrimitiveTableHeader,
  PrimitiveTableRow,
} from "@ukwehuwehneke/ohutsya";

type Row =
  | {
      hasAudio?: boolean;
      one: string[];
      en?: string[];
    }
  | {
      hasAudio?: boolean;
      one: string;
      en?: string;
    };

export type DialogueTableData = Row[];

export function DialogueTable({
  audioFolder,
  data,
}: {
  audioFolder?: string;
  data: DialogueTableData;
}) {
  return (
    <PrimitiveTable>
      <PrimitiveTableHeader>
        <PrimitiveTableRow />
      </PrimitiveTableHeader>
      <PrimitiveTableBody>
        {data.map((row, i) => {
          const isLeftside = i % 2 === 0;
          return (
            <PrimitiveTableRow
              className={isLeftside ? "bg-lime-50" : ""}
              key={i}
            >
              <PrimitiveTableCell>
                <Flex
                  align={isLeftside ? undefined : "end"}
                  direction="column"
                  gap={4}
                  py={2}
                >
                  {arrayify(row.one).map((text, j) => (
                    <div
                      className={cn("gap-2 flex", !isLeftside && "text-right")}
                      key={j}
                    >
                      {!isLeftside ? text : ""}
                      {row.hasAudio && audioFolder && (
                        <PlayButton
                          filepath={`/audio/${audioFolder}/${i + 1}-${j + 1}.mp3`}
                        />
                      )}
                      {isLeftside ? text : ""}
                    </div>
                  ))}
                </Flex>
              </PrimitiveTableCell>
            </PrimitiveTableRow>
          );
        })}
      </PrimitiveTableBody>
    </PrimitiveTable>
  );
}
