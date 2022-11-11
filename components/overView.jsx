import styles from "../styles/OverView.module.css";
import Arrow from "./arrowDown";

const overView = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>Event Overview</h2>
        </div>
        <br />
        <br />
        <p>
          <x>Mission Statement:</x> LEC Hacks is a virtual hackathon for
          high-school students worldwide hosted by Lynbrook Engineering Club.
          Through learning and competing about a variety of topics we hope to
          foster an interest in the field of engineering and encourage people to
          explore the various branches of engineering.
        </p>
        <br />
        <p>
          <x>Location:</x> Online via Discord(Invite Only)
        </p>
        <br />
        <p>
          <x>When:</x> Friday 11/18 @ 9PM PST to Sunday 11/20 @ 9AM PST
        </p>
        <br />
        <p>
          <x>Theme:</x> Wellness
        </p>
        <br />
        <p>
          <x>Competitor Goal:</x> Complete a project in line with this years
          theme and following one of our 5 tracks. The main objective is to push
          yourselves to create a new and unique project while learning new
          skills.
        </p>
      </div>
    </div>
  );
};

export default overView;
