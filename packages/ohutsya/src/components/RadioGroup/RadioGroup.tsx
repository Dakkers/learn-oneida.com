import React from "react";
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupItem,
} from "../../primitives/radio-group";
import { FormElement } from "../../internal/FormElement";
import { Flex } from "../Flex/Flex";

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
      <label htmlFor={id}>{children}</label>
    </Flex>
  );
};
