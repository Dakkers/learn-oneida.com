import { FormElement } from "../../internal/FormElement";
import { useControlStyles } from "../../design/controlStyles";
import { cn } from "../../utils";

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
  const styles = useControlStyles();

  return (
    <FormElement label={label}>
      <select
        className={cn(styles.baseStyle, styles.emphasisStyle, styles.sizeStyle, "px-2 rounded")}
        onChange={(e) => onChange(e.target.value)}
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
