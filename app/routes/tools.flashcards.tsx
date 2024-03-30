import { Flex } from "@/design/components/flex";
import { Button } from "@/design/primitives/button";
import type { MetaFunction } from "@remix-run/node";
import _ from "lodash";
import React from "react";
import { SectionHeading } from "~/components/SectionHeading";
import {
  characterTenseData,
  mindTenseData,
  emotionTenseData,
} from "~/data/module05";
import { arrayify } from "~/utils";
import { useInterval } from "usehooks-ts";

export const meta: MetaFunction = () => {
  return [
    { title: "Flashcards" },
    {
      name: "description",
      content: "Go through Oneida terms",
    },
  ];
};

interface Item {
  en: string;
  on: string;
}

export default function ToolsFlashcards() {
  const [index, setIndex] = React.useState(-1);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [forceShow, setForceShow] = React.useState(false);

  const [data, setData] = React.useState<Item[]>(
    _.shuffle([...characterTenseData, ...mindTenseData, ...emotionTenseData])
      .map((item) => {
        const content = item.present;
        const blah =
          "items" in content
            ? content.items[0].on
            : Array.isArray(content)
            ? content
            : content.on;
        return {
          en: arrayify(item.en)[0],
          on: blah.join(""),
        };
      })
      .slice(0, 5)
  );

  const currentWord = data[index];
  const [currentTimeoutRef, setCurrentTimeoutRef] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    return () => {
      clearTimeout(currentTimeoutRef);
    };
  });

  useInterval(
    () => {
      setForceShow(false);
      const newIndex = index + 1;
      if (newIndex >= data.length) {
        setHasStarted(false);
        return;
      }

      processItem(newIndex);
    },
    hasStarted ? 10000 : null
  );

  const handleStart = () => {
    setHasStarted(true);
    processItem();
  };

  const processItem = (index = 0) => {
    setIndex(index);
    speak(data[index].en);

    const newTimeoutRef = window.setTimeout(() => {
      setForceShow(true);
    }, 8000);

    setCurrentTimeoutRef(newTimeoutRef);
  };

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Flashcards</SectionHeading>

      {hasStarted ? (
        <TheCard
          englishText={currentWord.en}
          oneidaText={currentWord.on}
          show={forceShow}
        />
      ) : (
        <div>
          <Button onClick={handleStart}>Start</Button>
        </div>
      )}
    </Flex>
  );
}

function TheCard({
  englishText,
  oneidaText,
  show = false,
}: {
  englishText: string;
  oneidaText: string;
  show?: boolean;
}) {
  const [isShowing, setIsShowing] = React.useState(show);
  if (isShowing !== show) {
    setIsShowing(show);
  }

  return (
    <>
      <div>{englishText}</div>

      <div>
        {isShowing ? (
          <span>{oneidaText}</span>
        ) : (
          <button className="bg-slate-700" onClick={() => setIsShowing(true)}>
            <span aria-hidden className="invisible">
              {oneidaText}
            </span>
            <span className="sr-only">Click to reveal</span>
          </button>
        )}
      </div>
    </>
  );
}

function speak(content: string) {
  window.speechSynthesis.speak?.(new SpeechSynthesisUtterance(content));
}
