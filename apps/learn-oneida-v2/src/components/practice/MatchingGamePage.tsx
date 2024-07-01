"use client";

import { Divider } from "@ukwehuwehneke/ohutsya";
import React from "react";
import { useDrag, useDrop, type TextDropItem } from "react-aria";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { cn } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { arrayify } from "~/utils";
import { LucideIcon } from "lucide-react";
import _ from "lodash";

type Data = Array<{
  en: string | string[];
  key: string;
  on: string | string[];
}>;

interface MatchingGamePageContextProps {
  data: Data;
  isComplete: boolean;
  setValue: (key: string, value: string) => void;
  values: Record<string, string>;
}

const MatchingGamePageContext =
  React.createContext<MatchingGamePageContextProps | null>(null);

interface MatchingGamePageProps {
  data: Data;
  getIcon?: (key: string) => LucideIcon | undefined;
}

export function MatchingGamePage({ data, getIcon }: MatchingGamePageProps) {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  const isComplete = isCorrect !== null;

  function setValue(key: string, value: string) {
    const newValues = {
      ...values,
    };
    for (const otherKey in newValues) {
      if (newValues[otherKey] === value) {
        delete newValues[otherKey];
      }
    }
    newValues[key] = value;

    setValues(newValues);
    if (Object.keys(newValues).length >= data.length) {
      const success = !Object.keys(newValues).find(
        (key) => key !== newValues[key],
      );
      setIsCorrect(success);
    }
  }

  return (
    <MatchingGamePageContext.Provider
      value={{
        data,
        isComplete,
        setValue,
        values,
      }}
    >
      <Flex direction="column" gap={4}>
        <EnglishSection getIcon={getIcon} />
        <Divider />
        <OneidaSection />
      </Flex>
    </MatchingGamePageContext.Provider>
  );
}

function EnglishSection({
  getIcon,
}: {
  getIcon?: MatchingGamePageProps["getIcon"];
}) {
  const context = React.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }

  const numItems = context.data.length;
  const columnsClass =
    numItems <= 4
      ? "grid-cols-[repeat(4,200px)]"
      : numItems <= 6
        ? "grid-cols-[repeat(3,200px)]"
        : numItems <= 8
          ? "grid-cols-[repeat(4,200px)]"
          : numItems <= 9
            ? "grid-cols-[repeat(3,200px)]"
            : "grid-cols-[repeat(4,200px)]";
  // I am not proud of this code but I am very tired
  // I know there's a proper way to do this but eh
  const rowsClass =
    numItems <= 4
      ? "grid-rows-[repeat(1,200px)]"
      : numItems <= 8
        ? "grid-rows-[repeat(2,200px)]"
        : numItems <= 12
          ? "grid-rows-[repeat(3,200px)]"
          : numItems <= 16
            ? "grid-rows-[repeat(4,200px)]"
            : numItems <= 20
              ? "grid-rows-[repeat(5,200px)]"
              : numItems <= 24
                ? "grid-rows-[repeat(6,200px)]"
                : "grid-rows-[repeat(7,200px)]";

  return (
    <div className={`grid ${columnsClass} ${rowsClass} gap-4 mx-auto`}>
      {context.data.map((datum) => (
        <DropTarget
          key={datum.key}
          icon={getIcon?.(datum.key)}
          label={arrayify(datum.en)[0]}
          value={datum.key}
        />
      ))}
    </div>
  );
}

function OneidaSection() {
  const context = React.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const data = React.useMemo(() => {
    return _.shuffle(context.data);
  }, [context.data]);

  return (
    <Flex gap={4} justify="center" wrap>
      {data.map((datum) => (
        <Draggable key={datum.key} value={datum.key}>
          {arrayify(datum.on)[0]}
        </Draggable>
      ))}
    </Flex>
  );
}

function Draggable({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const context = React.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const { dragProps, isDragging } = useDrag({
    getItems() {
      return [
        {
          "text/plain": value,
        },
      ];
    },
  });
  const isUsed = Object.values(context.values).includes(value);

  return (
    <div
      {...dragProps}
      className={cn(
        "p-2",
        "border-2",
        "border-solid",
        "border-slate-300",
        "rounded",
        isDragging
          ? "bg-slate-300"
          : isUsed
            ? "bg-transparent"
            : "bg-slate-200",
      )}
      role="button"
      tabIndex={0}
    >
      <Text contrast={isUsed ? "mid" : "high"}>{children}</Text>
    </div>
  );
}

function DropTarget({
  icon: Icon,
  label,
  value,
}: {
  icon?: LucideIcon;
  label: string;
  value: string;
}) {
  const context = React.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const ref = React.useRef(null);
  const { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      const item = e.items[0] as TextDropItem;
      const text = await item.getText("text/plain");
      context.setValue(value, text);
    },
  });
  const droppedItemKey = context.values[value];
  const isCorrect = value === droppedItemKey;

  return (
    <div
      {...dropProps}
      className={cn(
        "border-2",
        droppedItemKey ? "border-solid" : "border-dashed",
        !context.isComplete
          ? ["border-slate-600", isDropTarget && "bg-slate-100"]
          : isCorrect
            ? ["border-green-600", "bg-green-100"]
            : ["border-red-600", "bg-red-100"],
        "w-[200px]",
        "h-[200px]",
      )}
      ref={ref}
      role="button"
      tabIndex={0}
    >
      <Flex
        align="center"
        direction="column"
        gap={2}
        height="fill"
        justify="center"
      >
        {label}
        {Icon && <Icon size={48} />}
      </Flex>

      {droppedItemKey && (
        <div className="relative w-full">
          <div className="absolute bottom-0 py-1 w-full flex justify-center bg-slate-200">
            {
              arrayify(
                context.data.find((d) => d.key === droppedItemKey)?.on,
              )[0]
            }
          </div>
        </div>
      )}
    </div>
  );
}
