import React from "react";
import { Label } from "../primitives/label";
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupItem,
} from "../primitives/radio-group";
import { FormElement } from "./FormElement";
import { Flex } from "./flex";

export function RadioGroup({
  children,
  label,
  onChange,
  value,
}: {
  children: React.ReactNode;
  label?: string;
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <FormElement label={label}>
      <RadioGroupPrimitive onValueChange={onChange} value={value}>
        {children}
      </RadioGroupPrimitive>
    </FormElement>
  );
}

RadioGroup.Option = function RadioGroupOption({
  children,
  value,
}: {
  children: string;
  value: string;
}) {
  const id = React.useId();
  return (
    <Flex gap={2}>
      <RadioGroupItem value={value} id={id} />
      <Label htmlFor={id}>{children}</Label>
    </Flex>
  );
};
