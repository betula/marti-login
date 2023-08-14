import cn from 'classnames';
import styles from './Box.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Box: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(styles.box, className)}>
      {children}
    </div>
  )
}