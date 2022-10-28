import React from "react";
import styles from "../styles/Header.module.css";
import Arrow from "./arrowDown";

const Header = ({ func }) => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.center}>
        <h1 className={styles.head}>LEC Hacks</h1>
        <div className={styles.btn}>
          <a
            className={styles.subheading}
            href="https://forms.gle/R5w8apgR7PnjtzPa9"
          >
            Sign Up Here
          </a>
        </div>
        {/* <button> */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default Header;
