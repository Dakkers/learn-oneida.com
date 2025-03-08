import { SectionHeading } from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import { generateWordsearch } from "../../../utils/wordsearch";

export default function PlaygroundPage() {
  const result = generateWordsearch(
    ["cat", "mouse", "moose", "snake", "cobra"],
    {
      characterSet: [
        "a",
        "e",
        "i",
        "o",
        "u",
        "ʌ",
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ʌ́",
        "h",
        "k",
        "l",
        "n",
        "s",
        "t",
        "w",
        "y",
        "ʔ",
      ],
    },
  );

  console.log(result.grid);
  const lol = _.chunk(result.grid, 10);
  console.log(lol);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Playground</SectionHeading>

      <div className="grid grid-cols-10 gap-2 font-mono text-3xl text-5xl text-4xl">
        {result.grid.map((char, j) => (
          <span key={j}>{char}</span>
        ))}
      </div>

      <div className="grid font-mono text-3xl text-5xl text-4xl">
        {lol.map((row, i) => (
          <div key={i}>
            {row.map((char, j) => (
              <span key={j}>{char}</span>
            ))}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
