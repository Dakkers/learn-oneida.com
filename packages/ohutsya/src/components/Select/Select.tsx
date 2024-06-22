import { useId } from "react";
import {
  Select as SelectPrimitive,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../primitives/select";
import { FormElement } from "../../internal/FormElement";

export interface SelectProps {
  label?: string;
  onChange: (value: string) => void;
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  value: string;
}

export function Select({ label, onChange, options, value }: SelectProps) {
  const id = useId();

  return (
    <FormElement label={label}>
      <SelectPrimitive onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full" id={id}>
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
    </FormElement>
  );
}
