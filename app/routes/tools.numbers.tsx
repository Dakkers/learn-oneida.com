import { Button } from "@/design/ui/button";
import { Input } from "@/design/ui/input";
import { Separator } from "@/design/ui/separator";
import type { MetaFunction } from "@remix-run/node";
import React from "react";

const WHISPER_CHAR = "̲";
const WHISPER_REGEX = new RegExp(WHISPER_CHAR, 'g');

export const meta: MetaFunction = () => {
  return [
    { title: "Numbers" },
    { name: "description", content: "Translate numbers from Oneida to English and vice versa" },
  ];
};

export default function ToolsNumbers () {
  const [value, setValue] = React.useState('');
  const [translatedValue, setTranslatedValue] = React.useState('');

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Numbers</h1>

      <p>
        <strong>NOTE:</strong> This page is still under construction! Only numbers up to 9,999 are supported.
      </p>

      <Input onChange={(e) => {
        setValue(e.target.value)
        setTranslatedValue('');
      }} max='9999' min='0' type='number' value={value} />

      <Button onClick={() => setTranslatedValue(doTheTranslate(value))}>
        Translate
      </Button>

      <Separator />

      <p>Translation: <strong>{translatedValue}</strong></p>
    </div>
  );
}

function doTheTranslate (value: string) {
  if (!value) {
    return '';
  }
  const val = parseInt(value);

  const map = new Map([
    [1, 'úska'],
    [2, 'tékni'],
    [3, 'áhsʌ̲'],
    [4, 'kayé'],
    [5, 'wisk'],
    [6, 'yá·yak'],
    [7, 'tsyá·tak'],
    [8, 'tékluʔ'],
    [9, 'wá·tluʔ'],
    [10, 'oyé·li̲'],
    [20, 'tewáhsʌ'],
  ])

  const digit = val % 10;
  const digitWord = map.get(digit)

  if (val === 0) {
    return '???'
  } else if (map.has(val)) {
    return map.get(val) ?? '';
  } else if ((val >= 11) && (val <= 19)) {
    return `${unwhisperWord(digitWord)} yawʌ·lé`
  } else if ((val >= 21) && (val <= 29)) {
    return `${map.get(20)} ${digitWord}`
  } else if (val < 100) {
    const numTens = Math.floor(val / 10);
    return [
      unwhisperWord(map.get(numTens)),
      `niwáhsʌ`,
      digit === 0 ? '' : digitWord
    ].join(' ')
  } else if (val < 10000) {
    const numHundreds = Math.floor(val / 100);
    const remainder = val % 100;
    return [
      unwhisperWord(doTheTranslate(numHundreds.toString())),
      `tewʌʔnyáweluʔ`,
      remainder === 0 ? '' : doTheTranslate(remainder.toString()),
    ].join(' ').trim();
  }

  return 'TBD';
}

function whisperizeWord (word: string | undefined, shouldWhisper = true) {
  if (!word) {
    return word;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u', 'ʌ'];
  const vowelsWhispered = ['a̲', 'e̲', 'i̲', 'o̲', 'u̲', 'ʌ̲'];
  const reversedIndex = word.split('').reverse().findIndex((char) => vowels.includes(char) || char === WHISPER_CHAR);
  const index = word.length - reversedIndex - 1;
  const char = word.charAt(index);

  if (shouldWhisper) {
    if (vowelsWhispered.includes(char)) {
      return word;
    }
    const lookupIndex = vowels.indexOf(char);
    const result = word.split('');
    result[index] = vowelsWhispered[lookupIndex];
    return result.join('');
  } else {
    return word.replace(WHISPER_REGEX, '');
  }
}

function unwhisperWord (word: string | undefined) {
  return whisperizeWord(word, false);
}
