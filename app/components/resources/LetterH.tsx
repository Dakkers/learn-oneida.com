import { Flex } from "@/design/components/flex";
import { SectionHeading } from "../SectionHeading";
import { Text } from "@/design/components/text";
import { ResourceProps } from "./utils";
import { Letter } from "../Letter";

export function LetterHResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="letter-h" level={level}>
        The Letter H
      </SectionHeading>
      <Text>
        An important feature of Onʌyoteʔa·ká· is the letter H, which works the
        same way as it does in English, with breath coming out of a
        speaker&lsquo;s throat but no sound. English speakers are not aware of
        how many times they say an H when they speak, and they donʔt write all
        the Hs they say. For example, they say an H (a breath but no sound) in
        the words “king,” “queen,” “top”, and “tie” but they don&lsquo;t hear
        the H and they don&lsquo;t write it.
      </Text>
      <Text>
        In Onʌyoteʔa·ká· we write all the Hs that follow Ks and Ts. Example:{" "}
        <b>khenú·wehseʔ</b> and <b>thikʌ́</b>. We also write most of the Hs that
        occur after a vowel and before a consonant. Examples:{" "}
        <b>yehyatúkhwa̲ʔ</b>, <b>onikwʌ́htalaʔ</b>, <b>kanúhsaʔ</b>. Not all of
        the Hs that are spoken in a word get written by all speakers, however.
        It seems to be a matter of personal preference.
      </Text>
    </Flex>
  );
}
