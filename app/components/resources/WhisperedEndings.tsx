import { Flex } from "@/design/components/flex";
import { SectionHeading } from "../SectionHeading";
import { Text } from "@/design/components/text";
import { ResourceProps } from "./utils";
import { Letter } from "../Letter";

export function WhisperedEndingsResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="whispered-endings" level={level}>
        Whispered Endings
      </SectionHeading>
      <Text>
        This is a very unique feature of Onʌyoteʔa·ká where the last syllable of
        a word is actually whispered. This occurs only on words that are
        prepausal (but it doesn&lsquo;t always occur on prepausal words). A
        prepausal word is a word that occurs at the end of a sentence or is the
        only word in a sentence. This is written using an underline under the
        vowel that is whispered, for example <b>áhsʌ̲</b>.
      </Text>
      <Text>
        The alternative to prepausal is medial. You may see the abbreviations PF
        and MF for prepausal form and medial form, respectively.
      </Text>
      <Text>
        A word that is in prepausal form may have its stress placed on a
        different syllable than its corresponding medial form. For example:{" "}
        <b>kahyatuhslí né· thíkʌ̲</b> &nbsp; vs. &nbsp; <b>hʌ, kahyatúhsehli̲</b>.
      </Text>
      <Text>
        In this curriculum all words are given in medial form unless they appear
        prepausal in the dialogue examples. As with the Hs, beginning students
        must listen closely to pick up the pronunciation to know when to use it
        effectively <b>as not all prepausal words have whispered endings</b>.
        For example, <b>úska</b> is fully pronounced in prepausal form.
      </Text>
    </Flex>
  );
}
