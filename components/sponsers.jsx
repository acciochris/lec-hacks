import styles from "../styles/Sponsers.module.css";

import Image from "next/image";

const Sponsers = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>Sponsors</h2>
        </div>
        <div>
          <div className={styles.row}>
            <div className={styles.SponserBox}>
              <div className="sponser">
                <Image
                  src="/desmos.png"
                  width={300}
                  height={300}
                  alt="logo"
                  className="sponserImage"
                />
              </div>
            </div>
            <div className={styles.SponserBox}>
              <div className="sponser">
                <Image
                  src="/taskade.png"
                  width={300}
                  height={300}
                  alt="logo"
                  className="sponserImage"
                />
                <div class="middle">
                  <div className="text2">John Doe</div>
                </div>
              </div>
            </div>
            <div className={styles.SponserBox}>
              <div className="sponser">
                <Image
                  src="/image_3.jpg"
                  layout="fill"
                  alt="logo"
                  className="sponserImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
