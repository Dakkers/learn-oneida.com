import { FormElement } from "../../internal/FormElement";
import { useControlStyles } from "../../design/controlStyles";
import { type Intent, cn } from "../../utils";

export interface TextInputProps {
  autoComplete?: "on" | "off";
  disabled?: boolean;
  label?: string;
  intent?: Intent;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}

export function TextInput({
  autoComplete = "off",
  disabled = false,
  intent,
  label,
  onChange,
  placeholder,
  value,
}: TextInputProps) {
  const styles = useControlStyles({ intent });

  return (
    <FormElement label={label}>
      <input
        aria-disabled={disabled ? "true" : undefined}
        autoComplete={autoComplete ?? "off"}
        className={cn(
          styles.baseStyle,
          styles.emphasisStyle,
          styles.sizeStyle,
          "px-4",
          "text-black",
        )}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </FormElement>
  );
}
