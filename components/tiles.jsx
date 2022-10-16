import styles from "../styles/Tiles.module.css";

const CategoryTile = () => {
  return (
    <div>
      <div className={styles.box}>
        <h2>Machine Learning</h2>
        <p>
          Projects submitted to this track mus have at least one machine
          learning or artificial intelligence component or application in the
          final product. Be prepared to explain you r machine learning
          components and how you implemented the to our judges in your demo
          video
        </p>
      </div>
    </div>
  );
};

export default CategoryTile;
