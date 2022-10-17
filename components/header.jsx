import React from "react";
import styles from "../styles/Header.module.css";
import Arrow from "./arrowDown";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.center}>
        <h1 className={styles.head}>LEC Hacks</h1>
        <a className={styles.subheading} href="https://www.google.com">
          Sign Up Here
        </a>
        {/* <button> */}
        {/* </button> */}
        <Arrow />
      </div>
    </div>
  );
};

export default Header;
