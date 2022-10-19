import styles from "../styles/Tiles.module.css";
import Arrow from "./arrowDown";

const CategoryTile = () => {
  return (
    <div className={styles.full}>
      <div className={styles.margin}>
        <div className={styles.center}>
          <h2>Competetive Tracks</h2>
        </div>
        <br />
        <br />
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.box}>
              <h2 className={styles.subheading}>Machine Learning</h2>
              <br />
              <p>
                Projects submitted to this track must have at least one machine
                learning or artificial intelligence component or application in
                the final product. Be prepared to explain your machine learning
                components and how you implemented the to our judges in your
                demo video
              </p>
            </div>
            <div className={styles.box}>
              <h2 className={styles.subheading}>Web Development</h2>
              <br />
              <p>
                Projects submitted to this track must be based on the web. Feel
                free to host your own web apps and be prepared to submit a demo
                of your projects to our judges!
              </p>
            </div>
            <div className={styles.box}>
              <h2 className={styles.subheading}>Mobile App Development</h2>
              <br />
              <p>
                Projects submitted to this track must be based on a mobile
                operating system. Be prepared to show the judges a demo of your
                projects project in action.
              </p>
            </div>
            <div className={styles.box}>
              <h2 className={styles.subheading}>Game Development</h2>
              <br />
              <p>
                Develop a game in any game engine of your choosing. Be sure to
                create a demo video of your game in action and/or submit a
                playable version of your game.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.boxOther}>
          <h2 className={styles.subheading}>Overall</h2>
          <br />
          <p>
            No restrictions! Submit any project you create, you have full
            creative freedom to develop anything of your choosing. Besides being
            school appropriate, the only requirement is to be related to the
            theme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryTile;
