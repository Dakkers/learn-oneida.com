"use client";
import { Flex, PlayButton } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import {
  getDomesticatedAnimalList,
  getDomesticatedBabyAnimalList,
} from "@/data/module03";

export function DomesticatedAnimalsArticle({ level = 1 }: { level?: 1 | 2 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="domesticated-animals" level={level}>
        Domesticated Animals
      </SectionHeading>

      <Text>
        A <b>kanáskwaʔ</b>{" "}
        <PlayButton filepath="/audio/module03/animals/animal.mp3" /> is a
        domesticated animal. The root word is <b>-naskw-</b>.
      </Text>

      <TableWrapper
        // @ts-expect-error Table generics?
        columns={TableWrapper.columnsEnglishAudio}
        data={getDomesticatedAnimalList()}
      />

      <Text>
        <b>othóskaʔ</b>{" "}
        <PlayButton filepath="/audio/module03/baby_animals/baby.mp3" /> is a
        word to indicate the animal is a baby.
      </Text>

      <TableWrapper
        // @ts-expect-error Table generics?
        columns={TableWrapper.columnsEnglishAudio}
        data={getDomesticatedBabyAnimalList()}
      />
    </Flex>
  );
}
