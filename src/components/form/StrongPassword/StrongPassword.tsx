import cn from 'classnames';
import styles from './StrongPassword.module.css';
import { Password } from '../Password/Password';
import { MinLength } from '../../../lib/form/validator/passwordValidator';
import { hasLowercase } from '../../../lib/checker/hasLowercase';
import { hasNumber } from '../../../lib/checker/hasNumber';
import { hasSymbol } from '../../../lib/checker/hasSymbol';
import { hasUppercase } from '../../../lib/checker/hasUppercase';

interface Props {
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

function getStrongLevel(value: string) {
  let level = 0;
  if (value.length >= MinLength) level ++;
  if (hasLowercase(value)) level ++;
  if (hasUppercase(value)) level ++;
  if (hasNumber(value) || hasSymbol(value)) level ++;

  return level;
}

function strongLevelToText(level: number) {
  switch (level) {
    case 1: return 'Weak';
    case 2: return 'Average';
    case 3: return 'Strong';
    case 4: return 'Excellent';
    default: return '';
  }
}

function strongLevelToClassName(level: number) {
  switch (level) {
    case 1: return styles.weak;
    case 2: return styles.average;
    case 3: return styles.strong;
    case 4: return styles.excellent;
    default: return null;
  }
}

export const StrongPassword: React.FC<Props> = ({
  placeholder,
  label,
  required,
  error,
  value,
  onChange
}) => {

  const level = getStrongLevel(value);
  const text = strongLevelToText(level);
  const className = strongLevelToClassName(level);

  return (
    <Password
      placeholder={placeholder}
      label={label}
      labelSuffix={
        <div className={styles.container}>
          <div className={cn(styles.text, className)}>{text}</div>
          <div className={styles.indicatorContainer}>
            <div className={cn(styles.fill, className)}></div>
          </div>
        </div>
      }
      required={required}
      error={error}
      value={value}
      onChange={onChange}
      />
  );
};
