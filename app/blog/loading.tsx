import styles from "./blog.module.css";

export default function Loading() {
  return <main className={styles.loadingPage} aria-label="Loading articles"><div className={styles.loadingShell}><div className={styles.loadingLine} /><div className={styles.loadingTitle} /><div className={styles.loadingFeature} /><div className={styles.loadingGrid}>{[1, 2, 3].map((item) => <div className={styles.loadingCard} key={item} />)}</div></div></main>;
}
