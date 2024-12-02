'use client';
import React from "react";
import { FaArrowLeft } from "react-icons/fa"; 
import Link from "next/link";  // Importando Link do Next.js
import styles from "./page.module.css";

const EventPage = () => {
  return (
    <div className={styles.body}>
      {/* Usando Link do Next.js para navegação */}
      <Link href="/home" className={styles.backButton}>
        <FaArrowLeft /> 
      </Link>

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
            <a href="/submaterias/matematica" className={styles.subject} style={{ backgroundColor: "#e57373" }}>
              MATEMÁTICA
            </a>
            <a href="/submaterias/historia" className={styles.subject} style={{ backgroundColor: "#f06292" }}>
              HISTÓRIA
            </a>
            <a href="/submaterias/lingua-portuguesa" className={styles.subject} style={{ backgroundColor: "#ffb74d" }}>
              LÍNGUA PORTUGUESA
            </a>
            <a href="/submaterias/ingles" className={styles.subject} style={{ backgroundColor: "#fff176" }}>
              INGLÊS
            </a>
          </div>
          <div className={styles.subjectList}>
            <a href="/submaterias/fisica" className={styles.subject} style={{ backgroundColor: "#aed581" }}>
              FÍSICA
            </a>
            <a href="/submaterias/quimica" className={styles.subject} style={{ backgroundColor: "#4db6ac" }}>
              QUÍMICA
            </a>
            <a href="/submaterias/biologia" className={styles.subject} style={{ backgroundColor: "#64b5f6" }}>
              BIOLOGIA
            </a>
            <a href="/submaterias/geografia" className={styles.subject} style={{ backgroundColor: "#9575cd" }}>
              GEOGRAFIA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
