"use client";
import { Letter } from "@/components/Letter";
import { ParadigmTable } from "@/components/ParadigmTable";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import dataLikeRedJson from "~/data/nuwehse-red";

export function ParadigmsSection() {
  return (
    <>
      <SectionHeading id="paradigms" level={2}>
        Paradigms
      </SectionHeading>

      <Text>
        On this website, many root words are given with an accompanying{" "}
        <b>paradigm</b>. This term is used to refer to taking a root word and
        conjugating it with all of the appropriate pronominals. Different tenses
        will result in different paradigms.
      </Text>

      <Text>
        Consider the root word <b>nuhweʔ</b> which means "to like". In the
        present tense, one paradigm for this word is the following:
      </Text>

      <ParadigmTable
        audioFolder="module01/pronominals/red/C"
        columnVisibility={{ pronounEnglish: false, pronounOneida: false }}
        data={dataLikeRedJson}
      />

      <Text>
        Something you may have noticed: the spelling of the root word does not
        exactly line up with the spelling in the table above. Oftentimes, if a
        root word contains an <Letter>h</Letter> or a <Letter>ʔ</Letter>, those
        characters may get shifted around or replaced.
      </Text>
    </>
  );
}
