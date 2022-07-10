import styles from "./styles.module.scss";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridElement}>
        <div className={styles.grid}>
          <div className={styles.gridElement}>1</div>
          <div className={styles.gridElement}>2</div>
          <div className={styles.gridElement}>3</div>
          <div className={styles.gridElement}>4</div>
        </div>
      </div>
      <div className={styles.gridElement}>2</div>
      <div className={styles.gridElement}>3</div>
      <div className={styles.gridElement}>4</div>
    </div>
  );
};

export default Grid;
