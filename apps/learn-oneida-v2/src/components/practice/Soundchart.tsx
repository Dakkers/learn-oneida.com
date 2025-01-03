import { cn, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "../TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";

const VOWELS = ["a", "e", "i", "o", "u", "ʌ"];
const SINGLES = ["h", "k", "l", "n", "s", "t", "w", "y"];
const TWOS = [
  "hl",
  "hn",
  "hw",
  "hy",
  "kh",
  "kl",
  "kn",
  "kw",
  "ky",
  "ly",
  "ny",
  "sh",
  "sk",
  "sl",
  "sn",
  "st",
  "sw",
  "sy",
  "th",
  "tk",
  "tl",
  "tn",
  "ts",
  "tw",
  "ty",
];
const THREES = [
  "hwy",
  "khl",
  "khn",
  "khw",
  "khy",
  "skl",
  "skw",
  "sky",
  "sny",
  "thl",
  "thn",
  "thw",
  "thy",
  "tkw",
  "tsh",
  "tsy",
];
const FOURS = ["tshy"];

const EXCEPTIONS = [
  "wo",
  "wu",
  "yi",
  "kyi",
  "lyi",
  "kwo",
  "kwu",
  "swo",
  "swu",
  "syi",
  "two",
  "twu",
  "tyi",
  "skwo",
  "skwu",
  "tkwo",
  "tkwu",
  "snyu",
];

export function Soundchart({ level }: SectionHeadingProps) {
  return (
    <>
      <Text>
        Below are interactive sound charts. Click on a button to hear how that
        letter combination sounds like.
      </Text>

      <Text>
        If a sound is missing from the table, it&lsquo;s because it is not a
        sound in Oneida.
      </Text>

      <SectionHeading level={level}>Two letters</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(SINGLES)}
      />

      <SectionHeading level={level}>Three letters</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(TWOS)}
      />

      <SectionHeading level={level}>Four letters</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(THREES)}
      />

      <SectionHeading level={level}>Five letters</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(FOURS)}
      />

      <SectionHeading level={level}>Double vowels</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={[createCols()[1]].concat(createCols().slice(3, 5))}
        data={[
          { e: "hae", o: "hao", u: "hau" },
          { e: "", o: "kao", u: "kau" },
          { e: "", o: "", u: "kʌu" },
          { e: "", o: "lao", u: "lau" },
          { e: "tae", o: "", u: "tau" },
          { e: "", o: "", u: "tʌu" },
          { e: "", o: "", u: "wʌu" },
        ]}
      />

      <SectionHeading level={level}>Other sounds</SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={new Array(4).fill(0).map((val, index) => ({
          accessorKey: `col${index}`,
          cell: (val: string) => <TheCell text={val} />,
        }))}
        data={[
          { col0: "ya·a", col1: "tu·u" },
          { col0: "akka", col1: "ʌkkwi", col2: "ikko", col3: "ukko" },
          { col0: "kew", col1: "tew" },
        ]}
      />
    </>
  );
}

function TheCell({ text }: { text?: string }) {
  if (!text) {
    return <div />;
  }

  const filename = text.replaceAll("ʌ", "v");

  return (
    <button
      className={cn(
        "w-full border border-gray-400 rounded border-2 bg-gray-200 hover:bg-gray-300 h-[48px]",
      )}
      onClick={() => {
        const music = new Audio(`/audio/soundchart/${filename}.mp3`);
        music.play();
      }}
      type="button"
    >
      {text}
    </button>
  );
}

function createArray(letters: string[]) {
  return letters.map((letter) =>
    Object.fromEntries(
      VOWELS.map((vowel) => {
        const result = `${letter}${vowel}`;
        if (EXCEPTIONS.includes(result)) {
          return [vowel, ""];
        }
        return [vowel, result];
      }),
    ),
  );
}

function createCols() {
  return VOWELS.map((char) => ({
    accessorKey: char,
    cell: (val: string) => <TheCell text={val} />,
    header: () => <Flex justify="center">{char}</Flex>,
  }));
}
