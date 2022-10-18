import React from "react";
import styles from "../styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className={styles.full}>
      <div className={styles.footer}>
        <div className={styles.text}>
          <div className={styles.row}>
            <div className={styles.row}>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              <p className={styles.text}>@lynbrookengineering</p>
            </div>
            <div className={styles.rowIcon}>
              <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
              <p className={styles.text}>lynbrookengineers@gmail.com</p>
            </div>
          </div>
          <div className={styles.center}>
            <p className={styles.footerText}>
              Webpage created by Aravindkrishna Ariuvdainmabi and Veerrohit
              Veeravadivel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
