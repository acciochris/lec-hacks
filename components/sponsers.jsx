import styles from "../styles/Sponsers.module.css";

const Sponsers = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>Sponsors</h2>
        </div>
        <div className={styles.align}>
          <div className={styles.row}>
            <div className={styles.SponserBox}></div>
            <div className={styles.SponserBox}></div>
            <div className={styles.SponserBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
