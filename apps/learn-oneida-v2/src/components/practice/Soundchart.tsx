"use client";
import { cn, Flex, Notice, Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "../TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";

const VOWELS = ["a", "e", "i", "o", "u", "ʌ"];
const BASICS = [
  "h",
  "k",
  "kh",
  "khl",
  "khw",
  "kl",
  "kw",
  "l",
  "n",
  "s",
  "sh",
  "shl",
  "shn",
  "sk",
  "skl",
  "skw",
  "sl",
  "sn",
  "st",
  "sw",
  "t",
  "th",
  "thw",
  "tsy",
  "tw",
  "w",
  "y",
];
const Y_SOUNDS = [
  "khy",
  "ky",
  "ly",
  "ny",
  "shy",
  "sky",
  "sny",
  "sy",
  "thy",
  "tshy",
  "ty",
];

const BASIC_CLUSTERS = ["khn", "kn", "ks", "thl", "thn", "tk", "tl", "tsh"];

const MEDIUM_CLUSTERS = ["khsw", "kt", "ktsy", "tk", "tkw", "tn", "ts"];

const HARD_CLUSTERS = ["kk", "kkw", "stsy"];

const BREATHY = ["hl", "hn", "hw", "hwy", "hy"];

const EXCEPTIONS = [
  "khswo",
  "khswu",
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
  "tsyi", // TODO, see https://anowal-software.atlassian.net/browse/ONEIDA-150
  "tshyi",
  "tyi",
  "skwo",
  "skwu",
  "tkwo",
  "tkwu",
  "snyu",
];

const NO_AUDIO = [
  "khswa",
  "khswe",
  "khswi",
  "khswo",
  "khswu",
  "khswʌ",
  "kka",
  "kke",
  "kki",
  "kko",
  "kku",
  "kkʌ",
  "kkwa",
  "kkwe",
  "kkwi",
  "kkwo",
  "kkwu",
  "kkwʌ",
  "ksa",
  "kse",
  "ksi",
  "kso",
  "ksu",
  "ksʌ",
  "kta",
  "kte",
  "kti",
  "kto",
  "ktu",
  "ktʌ",
  "ktsya",
  "ktsye",
  "ktsyi",
  "ktsyo",
  "ktsyu",
  "ktsyʌ",
  "shla",
  "shle",
  "shli",
  "shlo",
  "shlu",
  "shlʌ",
  "shna",
  "shne",
  "shni",
  "shno",
  "shnu",
  "shnʌ",
  "stsya",
  "stsye",
  "stsyi",
  "stsyo",
  "stsyu",
  "stsyʌ",
  "shya",
  "shye",
  "shyi",
  "shyo",
  "shyu",
  "shyʌ",
  "tka",
  "tke",
  "tki",
  "tko",
  "tku",
  "tkʌ",
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

      <Notice intent="warning">
        This sound chart has recently been re-organized and new sounds have been
        added. Recordings for these sounds have not yet been made available.
      </Notice>

      <SectionHeading level={level}>Basics</SectionHeading>
      <Text>
        Start with these sounds, as they are the simplest sounds in Oneida.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(BASICS)}
      />

      <SectionHeading level={level}>Sounds with Y</SectionHeading>
      <Text>
        These sounds have a "yuh" sound of sorts that takes a bit of getting
        used to.
      </Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(Y_SOUNDS)}
      />

      <SectionHeading level={level}>Clusters 1</SectionHeading>
      <Text>These are a bit trickier.</Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(BASIC_CLUSTERS)}
      />

      <SectionHeading level={level}>Clusters 2</SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(MEDIUM_CLUSTERS)}
      />

      <SectionHeading level={level}>Clusters 3</SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(HARD_CLUSTERS)}
      />

      <SectionHeading level={level}>Breathy Sounds</SectionHeading>
      <Text>The "hwy" sound here is particularly tricky.</Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createCols()}
        data={createArray(BREATHY)}
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
  const disabled = NO_AUDIO.includes(text);

  return (
    <button
      aria-disabled={disabled}
      className={cn(
        "w-full border border-gray-400 rounded border-2 bg-gray-200 hover:bg-gray-300 h-[48px]",
        disabled &&
          "cursor-not-allowed border-0 bg-gray-100 hover:bg-gray-100 text-gray-400",
      )}
      onClick={
        disabled
          ? undefined
          : () => {
              const music = new Audio(`/audio/soundchart/${filename}.mp3`);
              music.play();
            }
      }
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
