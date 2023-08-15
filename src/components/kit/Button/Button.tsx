import cn from 'classnames';
import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  progress?: boolean;
}

export const Button: React.FC<Props> = ({ 
  children,
  onClick,
  type = 'button',
  disabled = false,
  progress = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        styles.button,
        { 
          [styles.disabled]: disabled,
          [styles.progress]: progress 
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}