import styles from "../styles/Faqs.module.css";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapsible({ question, response }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [q1, setQ1] = useState(faChevronDown);
  const [q2, setQ2] = useState(faChevronDown);
  const [q3, setQ3] = useState(faChevronDown);

  const changeIcon = (theIcon) => {
    if (theIcon == faChevronDown) {
      setQ1(faChevronUp);
    } else {
      setQ1(faChevronDown);
    }
  };

  return (
    <div className={styles.collapsible}>
      <div className={styles.header} {...getToggleProps()}>
        {/* {isExpanded ? question : question} */}
        <p>{question}</p>
      </div>
      <div {...getCollapseProps()}>
        <div className={styles.content}>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

const Faqs = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h2>FAQs</h2>
        </div>
        <br />
        <Collapsible
          question="Do we need prior coding experience?"
          response="No! This event is open to all students, from experienced to complete rookie. The main objective is to learn."
        />
        <Collapsible
          question="Will we be able to learn anything from this event?"
          response="Yes, LEC has collaborated with several clubs on campus to offer hackathon participants several workshops relating to the tracks."
        />
        <Collapsible
          question="Are there prizes?"
          response="Yes, our sponsors have graciously agreed to offer a variety of licenses and other rewards as prizes for our hackathon.
"
        />
      </div>
    </div>
  );
};

export default Faqs;
