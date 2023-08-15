import styles from './Input.module.css';
import { Control } from '../Control/Control';

interface Props {
  labelSuffix?: React.ReactNode;
  postfix?: React.ReactNode;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  value: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  labelSuffix,
  postfix,
  placeholder,
  label,
  required,
  error,
  value,
  type = 'text',
  onChange
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  }

  return (
    <Control
      label={label}
      labelSuffix={labelSuffix}
      required={required}
      error={error}
    >
      {(handleFocus, handleBlur) => (
        <div className={styles.inputContainer}>

          <input
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={styles.input}
            placeholder={placeholder}
          />

          {postfix ? (
            <div className={styles.postfixContainer}>
              {postfix}
            </div>
          ) : null}
        </div>
      )}
    </Control>
  );
};
