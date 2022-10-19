import React from "react";
import styles from "../styles/Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "next/link";

const footer = () => {
  return (
    <div className={styles.full}>
      <div className={styles.row}></div>
      <div className={styles.row}>
        <a href="https://www.instagram.com/lynbrookengineering">
          <div className={styles.oneOfTwo}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />

            <div className={styles.text}>
              <p href="https://www.instagram.com/" className={styles.link}>
                @lynbrookengineering
              </p>
            </div>
          </div>
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=lynbrookengineers@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com&tf=cm">
          <div className={styles.oneOfTwo}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div className={styles.text}>
              <p className={styles.link}>lynbrookengineers@gmail.com</p>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.oneOfOne}>
          <p className={styles.smallText}>
            Webpage created by Veerrohit Veeravadivel and Aravindkrishna
            Arivudainambi
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
