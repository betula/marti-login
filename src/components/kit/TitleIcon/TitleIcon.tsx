import styles from './TitleIcon.module.css';

interface Props {
  src: string;
}

export const TitleIcon: React.FC<Props> = ({ src }) => {
  return (
    <img src={src} className={styles.icon} />
  )
}