import { useId } from "react";
import { Text } from "./text";
import { Flex } from "./flex";
import {
  Select as SelectPrimitive,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design/primitives/select";

export function Select ({
  label,
  onChange,
  options,
  value,
}: {
  label?: string;
  onChange: (value: string) => void;
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  value: string;
}) {
  const id = useId();

  return (
    <Flex direction="column" gap={2}>
      {label && <Text variant="labelL">{label}</Text>}

      <SelectPrimitive onValueChange={onChange} value={value}>
        <SelectTrigger className="w-[180px]" id={id}>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive>
    </Flex>
  );
}
