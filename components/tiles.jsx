import styles from "../styles/Tiles.module.css";

const CategoryTile = () => {
  return (
    <div>
      <h1>Competetive Tracks</h1>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h2>Machine Learning</h2>
            <br />
            <p>
              Projects submitted to this track mus have at least one machine
              learning or artificial intelligence component or application in
              the final product. Be prepared to explain your machine learning
              components and how you implemented the to our judges in your demo
              video
            </p>
          </div>
          <div className={styles.box}>
            <h2>Web Development</h2>
            <br />
            <p>
              Projects submitted to this track mus have at least one machine
              learning or artificial intelligence component or application in
              the final product. Be prepared to explain your machine learning
              components and how you implemented the to our judges in your demo
              video
            </p>
          </div>
          <div className={styles.box}>
            <h2>Mobile App Development</h2>
            <br />
            <p>
              Projects submitted to this track mus have at least one machine
              learning or artificial intelligence component or application in
              the final product. Be prepared to explain your machine learning
              components and how you implemented the to our judges in your demo
              video
            </p>
          </div>
          <div className={styles.box}>
            <h2>Game Development</h2>
            <br />
            <p>
              Projects submitted to this track mus have at least one machine
              learning or artificial intelligence component or application in
              the final product. Be prepared to explain your machine learning
              components and how you implemented the to our judges in your demo
              video
            </p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <h2>Game Development</h2>
        <br />
        <p>
          Projects submitted to this track mus have at least one machine
          learning or artificial intelligence component or application in the
          final product. Be prepared to explain your machine learning components
          and how you implemented the to our judges in your demo video
        </p>
      </div>
    </div>
  );
};

export default CategoryTile;
