import styles from "../styles/Schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>Schedule</h2>
          <div className={styles.calendar}>
            <div className={styles.day}>
              <h3>Day 1 - Nov 18th</h3>
              <br />
              <p>9:00PM - Opening Ceremony</p>
              <br />
              <p>10:00PM - Game Time</p>
              <br />
              <p>11:00PM - Hacking Begins</p>
            </div>
            <div className={styles.day}>
              <h3>Day 12 - Nov 19th</h3>
              <br />
              <p>10:00AM - Workshop #1</p>
              <br />
              <p>12:00PM - Team Check-in</p>
              <br />
              <p>2:00PM - Workshop #2</p>
              <br />
              <p>4:00PM - Workshop #3</p>
              <br />
              <p>5:00PM - Hacking</p>
              <br />
              <p>6:00PM - Workshop #4</p>
              <br />
              <p>7:00PM - Workshop #5</p>
              <br />
              <p>9:00PM - Hacking</p>
            </div>
            <div className={styles.day}>
              <h3>Day 13 - Nov 20th</h3>
              <br />
              <p>8:00AM - Final Hour Reminder</p>
              <br />
              <p>9:00AM - Submissions Due</p>
              <br />
              <p>5:00pm - Results Released</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
