import React from "react";
import styles from "../styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "next/link";

const footer = () => {
  return (
    <div className={styles.full}>
      <div className={styles.row}>
        <div className={styles.oneOfOne}>
          <h3 className={styles.title}>Socials</h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.oneOfTwo}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <div className={styles.text}>
            <a href="https://www.instagram.com/" className={styles.link}>
              @lynbrookengineering
            </a>
          </div>
        </div>
        <div className={styles.oneOfTwo}>
          <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
          <div className={styles.text}>
            <a href="https://www.google.com/" className={styles.link}>
              lynbrookengineers@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.oneOfOne}>
          <p className={styles.smallText}>
            Webpage created by Veerrohit Veeravadivel and Aravindkrishna
            Arivudanambi
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
