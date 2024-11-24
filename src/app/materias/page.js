import React from "react";
import styles from "./page.module.css";

const EventPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.event}>
            <div className={styles.eventTitle}>
              <span className={styles.day}>20</span>
              <span className={styles.month}>out</span>
              <span className={styles.eventName}>UniCamp - 1ª fase</span>
            </div>
          </div>
        </div>

        <div className={styles.subjects}>
          <div className={styles.subjectList}>
            <a href="/videos/matematica" className={styles.subject} style={{ backgroundColor: "#e57373" }}>
              MATEMÁTICA
            </a>
            <a href="/videos/historia" className={styles.subject} style={{ backgroundColor: "#f06292" }}>
              HISTÓRIA
            </a>
            <a href="/videos/lingua-portuguesa" className={styles.subject} style={{ backgroundColor: "#ffb74d" }}>
              LÍNGUA PORTUGUESA
            </a>
            <a href="/videos/ingles" className={styles.subject} style={{ backgroundColor: "#fff176" }}>
              INGLÊS
            </a>
          </div>
          <div className={styles.subjectList}>
            <a href="/videos/fisica" className={styles.subject} style={{ backgroundColor: "#aed581" }}>
              FÍSICA
            </a>
            <a href="/videos/quimica" className={styles.subject} style={{ backgroundColor: "#4db6ac" }}>
              QUÍMICA
            </a>
            <a href="/videos/biologia" className={styles.subject} style={{ backgroundColor: "#64b5f6" }}>
              BIOLOGIA
            </a>
            <a href="/videos/geografia" className={styles.subject} style={{ backgroundColor: "#9575cd" }}>
              GEOGRAFIA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
