import { FormElement } from "../../internal/FormElement";
import { useControlStyles } from "../../design/controlStyles";
import { cn } from "../../utils";

export interface SelectProps {
  disabled?: boolean;
  label?: string;
  onChange: (value: string) => void;
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  value: string;
}

export function Select({
  disabled = false,
  label,
  onChange,
  options,
  value,
}: SelectProps) {
  const styles = useControlStyles({ disabled });

  return (
    <FormElement label={label}>
      <select
        aria-disabled={disabled ? "true" : undefined}
        className={cn(
          styles.baseStyle,
          styles.emphasisStyle,
          styles.sizeStyle,
          "px-2 rounded",
        )}
        onChange={(e) => {
          if (!disabled) {
            onChange(e.target.value);
          }
        }}
        onMouseDown={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        value={value}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormElement>
  );
}
