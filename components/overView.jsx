import styles from "../styles/OverView.module.css";

const overView = () => {
  return (
    <div className={styles.container}>
      <h2>Event Overview</h2>
      <p>
        <x>Mission Statement:</x> LEC Hacks is a virtual hackathon for
        high-school students hosted by Lynbrook Engineering Club of LHS. Through
        learning and competing about a variety of topics we hope to foster an
        interest in the field of engineering and ecourage people to explore the
        various branches of engineering
      </p>
      <p>
        <x>Location:</x> Online via Discord(Invite Only)
      </p>
      <p>Theme: Wellness</p>
      <p>
        <x>Competitor Goal:</x> Complete a project in line with this years
        themem and following one of our 5 tracks. The main objective is to push
        yourselves to create a new and unique project while learning new skills.
      </p>
    </div>
  );
};

export default overView;
