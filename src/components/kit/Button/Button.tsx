import styles from './Button.module.css';

interface Props {
  text: string;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button: React.FC<Props> = ({ 
  text,
  onClick,
  type = 'button'
}) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}