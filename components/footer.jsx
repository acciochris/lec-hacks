import React from "react";
import styles from "../styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className={styles.full}>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h2>Socials:</h2>

          <div className={styles.row}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            <p className={styles.text}>@lynbrookengineering</p>
          </div>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            <p className={styles.text}>lynbrookengineers@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
