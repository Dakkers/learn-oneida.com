"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ArticleProps } from "./utils";
import { Letter } from "../Letter";
import { List } from "@ukwehuwehneke/ohutsya";
import { ListOfWords } from "../ListOfWords";

export function LetterHArticle({ level = 1 }: ArticleProps) {
  const list1 = ["khenú·wehse̲ʔ", "thikʌ̲̲́"];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="letter-h" level={level}>
        The Letter H
      </SectionHeading>
      <Text>
        An important feature of Oneida is the letter H, which works the same way
        as it does in English, with breath coming out of a speaker&lsquo;s
        throat but no sound. English speakers are not aware of how many times
        they say an H when they speak, and they don't write all the Hs they say.
        For example, they say an H (a breath but no sound) in the words “king,”
        “queen,” “top”, and “tie” but they don&lsquo;t hear the H and they
        don&lsquo;t write it.
      </Text>
      <Text>
        In Oneida we write all the Hs that follow Ks and Ts. Example:{" "}
      </Text>
      <ListOfWords filepathBase="/module01/letter_h" offset={1} words={list1} />
      <Text>
        We also write most of the Hs that occur after a vowel and before a
        consonant. Examples:
      </Text>
      <ListOfWords
        filepathBase="/module01/letter_h"
        offset={1 + list1.length}
        words={["yehyatúkhwa̲ʔ", "onikwʌ́htala̲ʔ", "kanúhsaʔ"]}
      />
      <Text>
        Not all of the Hs that are spoken in a word get written by all speakers,
        however. It seems to be a matter of personal preference.
      </Text>
    </Flex>
  );
}
