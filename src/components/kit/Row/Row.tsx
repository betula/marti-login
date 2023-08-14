import cn from 'classnames';
import styles from './Row.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Row: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(styles.row, className)}>
      {children}
    </div>
  )
}