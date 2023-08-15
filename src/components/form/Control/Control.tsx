import { useState } from 'react';
import cn from 'classnames';
import styles from './Control.module.css';
import errorIcon from './assets/alert.svg';

interface Props {
  labelSuffix?: React.ReactNode;
  error?: string;
  label?: string;
  required?: boolean;
  children: (handleFocus: () => void, handleBlur: () => void) => React.ReactNode;
}

export const Control: React.FC<Props> = ({
  labelSuffix,
  error,
  label,
  required,
  children
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const controlContainerClassName = cn(
    styles.controlContainer,
    focused && styles.controlContainerFocused
  );

  return (
    <div className={cn(styles.container, 'body')}>
      {label || labelSuffix ? (
        <div className={styles.topContainer}>
          {label ? (
            <div className={styles.labelContainer}>
              {label}
              {required ? (
                <div className={styles.required}>*</div>
              ) : null}
            </div>
          ) : null}
          {labelSuffix ? (
            <div className={styles.labelSuffixContainer}>
              {labelSuffix}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={controlContainerClassName}>
        {children(handleFocus, handleBlur)}
      </div>

      {error ? (
        <div className={styles.errorContainer}>
          <img className={styles.errorIcon} src={errorIcon} />
          <div className={styles.errorText}>{error}</div>
        </div>
      ) : null}
    </div>
  );
};
