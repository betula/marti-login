import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}