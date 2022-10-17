import styles from "../styles/ArrowDown.module.css";

const Arrow = ({ func }) => {
  return <button className={styles.scrolldown} onClick={() => func}></button>;
};

export default Arrow;
