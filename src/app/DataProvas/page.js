
import React from "react";
import styles from "./page.module.css";
import Link from "next/link"; 
import { FaCut, FaStickyNote, FaHome, FaCommentDots } from "react-icons/fa";

export default function Home() {
  const notes = [
    { id: 1, day: 20, month: "out", description: "UniCamp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 2, day: 3, month: "nov", description: "ENEM - dia 1", url: "/authentication/loginAluno" },
    { id: 3, day: 10, month: "nov", description: "ENEM - dia 2", url: "/authentication/loginAluno" },
    { id: 4, day: 15, month: "nov", description: "Unesp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 5, day: 17, month: "nov", description: "Fuvest - 1ª fase", url: "/authentication/loginAluno" },
    { id: 6, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
    { id: 7, day: 30, month: "nov", description: "PUC - 1ª fase", url: "/authentication/loginAluno" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.date}>Agosto, 15</div>
        <div className={styles.line}></div>
        <div className={styles.year}>2024</div>
      </header>

      <div className={styles.topIcons}>
        <Link href="/authentication/loginAluno" className={styles.button}>
          <FaCut />
        </Link>
        <Link href="/authentication/loginAluno" className={styles.button}>
          <FaStickyNote />
        </Link>
        <Link href="/authentication/loginAluno" className={styles.button}>
          <FaHome />
        </Link>
        <Link href="/authentication/loginAluno" className={styles.button}>
          <FaCommentDots />
        </Link>
      </div>

      <div className={styles.content}>
        <h2>Anotações</h2>
        <div className={styles.notes}>
          {notes.map((note) => (
            <Link key={note.id} href={note.url} className={styles.note}>
              <div className={styles.dateBox}>
                <div className={styles.day}>{note.day}</div>
                <div className={styles.month}>{note.month}</div>
              </div>
              <div className={styles.description}>{note.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
