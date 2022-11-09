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
                  src="/Untitled_Artwork 3.jpg"
                  layout="fill"
                  alt="logo"
                  className="sponserImage"
                />
                <div className="middle">
                  <h1 className="text">Desmos</h1>
                </div>
              </div>
            </div>
            <div className={styles.SponserBox}>
              <div className="sponser">
                <Image
                  src="/IMG_0777.jpg"
                  layout="fill"
                  alt="logo"
                  className="sponserImage"
                />
                <div className="middle">
                  <h1 className="text">Taskade</h1>
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
                <div className="middle">
                  <h1 className="text">echo3D</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
