import { Flex } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { createModule5VerbsList } from "~/data/module05";
import { useInterval } from "usehooks-ts";
import { Select } from "@ukwehuwehneke/ohutsya";
import { RadioGroup } from "@ukwehuwehneke/ohutsya";
import { Card } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { createModule6VerbList } from "~/data/module06/activeVerbsList";
import { PageWrapper } from "@/components/PageWrapper";

interface Item {
  en: string;
  on: string;
}

export default function ToolsFlashcards() {
  const [index, setIndex] = useState(-1);
  const [data, setData] = useState<Item[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedModule, setSelectedModule] = useState("m6");
  const [autoAdvanceSetting, setAutoAdvanceSetting] = useState("off");
  const [audioSetting, setAudioSetting] = useState("off");
  const [currentTimeoutRef, setCurrentTimeoutRef] = useState<number | null>(
    null,
  );
  const [isShowing, setIsShowing] = useState(false);

  const shouldAutoAdvance = autoAdvanceSetting === "on";

  const createData = () => {
    if (selectedModule === "m5") {
      return _.shuffle(
        createModule5VerbsList().map((datum) => ({
          en: datum.en,
          on: datum.root.join(" / "),
        })),
      );
    } else if (selectedModule === "m6") {
      return _.shuffle(
        createModule6VerbList().map((datum) => ({
          en: datum.en,
          on: datum.root,
        })),
      );
    } else {
      return [];
    }
  };

  const currentWord = data[index];

  const goNext = () => {
    setIsShowing(false);
    const newIndex = index + 1;
    if (newIndex >= data.length) {
      setHasStarted(false);
      return;
    }

    processItem(newIndex, data);
  };

  const handleStart = () => {
    const data = createData();
    setData(data);
    setHasStarted(true);
    processItem(0, data);
  };

  const processItem = useCallback(
    (index = 0, data: Item[] = []) => {
      setIndex(index);
      if (audioSetting === "on") {
        speak(data[index].en);
      }

      if (shouldAutoAdvance) {
        const newTimeoutRef = window.setTimeout(() => {
          setIsShowing(true);
        }, 8000);

        setCurrentTimeoutRef(newTimeoutRef);
      }
    },
    [shouldAutoAdvance, audioSetting],
  );

  useEffect(() => {
    return () => {
      clearTimeout(currentTimeoutRef);
    };
  });

  useInterval(
    () => {
      goNext();
    },
    hasStarted && shouldAutoAdvance ? 10000 : null,
  );

  return (
    <PageWrapper>
      <SectionHeading level={1}>Flashcards</SectionHeading>

      {hasStarted ? (
        <Flex direction="column" gap={4}>
          <TheCard
            englishText={currentWord.en}
            isShowing={isShowing}
            onClickAnswer={() => setIsShowing(true)}
            oneidaText={currentWord.on}
          />

          <Flex justify="between">
            <Button
              onClick={() => {
                setHasStarted(false);
                setIndex(-1);
              }}
            >
              Stop
            </Button>

            <Button onClick={goNext}>Next</Button>
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column" gap={4}>
          <Flex direction={{ xs: "column", sm: "row" }} gap={4}>
            <RadioGroup
              label="Auto-advance"
              onChange={setAutoAdvanceSetting}
              value={autoAdvanceSetting}
            >
              <RadioGroup.Option value="on">On</RadioGroup.Option>
              <RadioGroup.Option value="off">Off</RadioGroup.Option>
            </RadioGroup>

            <RadioGroup
              label="Audio (English)"
              onChange={setAudioSetting}
              value={audioSetting}
            >
              <RadioGroup.Option value="on">On</RadioGroup.Option>
              <RadioGroup.Option value="off">Off</RadioGroup.Option>
            </RadioGroup>

            <Select
              label="Module"
              onChange={setSelectedModule}
              options={[
                { label: "Module 5", value: "m5" },
                { label: "Module 6", value: "m6" },
              ]}
              value={selectedModule}
            />
          </Flex>

          <Flex.Item>
            <Button onClick={handleStart}>Start</Button>
          </Flex.Item>
        </Flex>
      )}
    </PageWrapper>
  );
}

function TheCard({
  englishText,
  isShowing = false,
  onClickAnswer,
  oneidaText,
}: {
  englishText: string;
  oneidaText: string;
  onClickAnswer: () => void;
  isShowing?: boolean;
}) {
  const oneidaTextEl = (
    <Text as="span" variant="bodyL">
      <strong>{oneidaText}</strong>
    </Text>
  );

  return (
    <Card>
      <Flex align="center" direction="column" gap={4}>
        <Text variant="bodyL">{englishText}</Text>

        <div>
          {isShowing ? (
            oneidaTextEl
          ) : (
            <button
              className="bg-slate-700"
              onClick={onClickAnswer}
              type="button"
            >
              <span aria-hidden className="invisible">
                {oneidaTextEl}
              </span>
              <span className="sr-only">Click to reveal</span>
            </button>
          )}
        </div>
      </Flex>
    </Card>
  );
}

function speak(content: string) {
  window.speechSynthesis.speak?.(new SpeechSynthesisUtterance(content));
}
