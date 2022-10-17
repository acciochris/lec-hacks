import styles from "../styles/Schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>Schedule</h2>
        </div>
        <div className={styles.calendar}>
          <div className={styles.day}>
            <h3>Day 1 - Nov 18th</h3>
            <p>9:00PM - Opening Ceremony</p>
            <p>10:00PM - Game Time</p>
            <p>11:00PM - Hacking Begins</p>
          </div>
          <div className={styles.day}>
            <h3>Day 12 - Nov 19th</h3>
            <p>10:00AM - Workshop #1</p>
            <p>12:00PM - Team Check-in</p>
            <p>2:00PM - Workshop #2</p>
            <p>4:00PM - Workshop #3</p>
            <p>5:00PM - Hacking</p>
            <p>6:00PM - Workshop #4</p>
            <p>7:00PM - Workshop #5</p>
            <p>9:000PM - Hacking</p>
          </div>
          <div className={styles.day}>
            <h3>Day 13 - Nov 20th</h3>
            <p>8:00AM - Final Hour Reminder</p>
            <p>9:00AM - Submissions Due</p>
            <p>5:00pm - Results Released</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
