import styles from './Password.module.css';
import { Input } from '../Input/Input';
import { useState } from 'react';

import openedEyeIcon from './assets/opened-eye.svg';
import closedEyeIcon from './assets/closed-eye.svg';

interface Props {
  labelSuffix?: React.ReactNode;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Password: React.FC<Props> = ({
  placeholder,
  label,
  labelSuffix,
  required,
  error,
  value,
  onChange
}) => {
  const [type, setType] = useState('password');

  const eyeIcon = type === 'password'
    ? closedEyeIcon
    : openedEyeIcon;

  const handleEyeClick = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }

  return (
    <Input
      placeholder={placeholder}
      label={label}
      labelSuffix={labelSuffix}
      required={required}
      error={error}
      value={value}
      onChange={onChange}
      type={type}
      postfix={
        <img src={eyeIcon} onClick={handleEyeClick} className={styles.eye} />
      }
      />
  );
};
