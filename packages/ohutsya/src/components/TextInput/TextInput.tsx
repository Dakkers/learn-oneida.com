import { FormElement } from "../../internal/FormElement";
import { useControlStyles } from "../../design/controlStyles";
import { Intent, cn } from "../../utils";

export interface TextInputProps {
  autoComplete?: 'on' | 'off'
  disabled?: boolean;
  label?: string;
  intent?: Intent;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'button' | 'submit'
  value: string;
}

export function TextInput({ autoComplete = 'off', disabled, intent, label, onChange, placeholder, type = 'button', value }: TextInputProps) {
  const styles = useControlStyles({ intent });

  return (
    <FormElement label={label}>
      <input
        aria-disabled={disabled}
        autoComplete={autoComplete ?? 'off'}
        className={cn(
          styles.baseStyle,
          styles.emphasisStyle,
          styles.sizeStyle,
          "px-4"
        )}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type ?? 'button'}
        value={value}
      />
    </FormElement>
  );
}
