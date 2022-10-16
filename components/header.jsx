import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.center}>
        <h1 className={styles.head}>LEC Hacks</h1>
        <a className={styles.subheading} href="google.com">
          March 20-21, 2021
        </a>
      </div>
    </div>
  );
};

export default Header;
