import { cn, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "../TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'ʌ']
const SINGLES = ['h', 'k', 'l', 'n', 's', 't', 'w', 'y']
const TWOS = ['hl', 'hn', 'kh', 'kn', 'kw', 'ny', 'sh', 'sk', 'sl', 'sn', 'st', 'sw']
const THREES = ['hwy', 'khl', 'khw', 'skw', 'sny', 'thl', 'tsy']
const FOURS = ['tshy']

const EXCEPTIONS = [
  'swo',
  'swu',
]
const EXCEPTIONS_DOUBLE_VOWELS = [
  'ai',
  'ia',
  'io',
  'iʌ',
  'ea',
  'ei',
  'eo',
  'eu',
  'eʌ'
]

export function Soundchart ({ level }: SectionHeadingProps) {
  return (
    <>
      <Text>
        Below are interactive sound charts. Click on a button to hear how that letter combination
        sounds like.
      </Text>

      <Text>
        If a sound is missing from the table, it&lsquo;s because it is not a sound in Oneida.
      </Text>

      <SectionHeading level={level}>
        Two letters
      </SectionHeading>

      <TableWrapper
        columns={createCols()}
        data={createArray(SINGLES)}
      />

      <SectionHeading level={level}>
        Three letters
      </SectionHeading>

      <TableWrapper
        columns={createCols()}
        data={createArray(TWOS)}
      />
    </>
  )
}

function TheCell ({ text }) {
  if (!text) {
    return <div></div>
  }

  return (
    <button
      className={cn("w-full border border-gray-400 rounded border-2 bg-gray-200 hover:bg-gray-300 h-[48px] ")}
    >
      {text}
    </button>
  )
}

function createArray (stuff: string[]) {
  return stuff.map((consonant) => Object.fromEntries(VOWELS.map((vowel) => {
    const result = `${consonant}${vowel}`;
    if (EXCEPTIONS.includes(result)) {
      return [vowel, '']
    }
    return [vowel, result];
  })));
}

function createCols () {
  return VOWELS.map((char) => ({
    accessorKey: char,
    cell: (val) => <TheCell text={val} />,
    header: () => <Flex justify='center'>{char}</Flex>,
  }))
}
