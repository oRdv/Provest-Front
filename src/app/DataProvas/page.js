"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
// import "../calendario/page.module.css";
import styles from "./page.module.css";

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentDate] = useState(new Date());

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const notes = [
    { date: "20 out", description: "UniCamp - 1ª fase" },
    { date: "3 nov", description: "ENEM - dia 1" },
    { date: "10 nov", description: "ENEM - dia 2" },
    { date: "10 nov", description: "ENEM - dia 2" },
    { date: "15 nov", description: "Unesp - 1ª fase" },
    { date: "15 nov", description: "Unesp - 1ª fase" },
    { date: "15 nov", description: "Unesp - 1ª fase" },
  ];

  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const today = currentDate.getDate();

  const daysInMonth = Array.from(
    { length: new Date(currentYear, currentDate.getMonth() + 1, 0).getDate() },
    (_, i) => i + 1
  );


  return (
    <div className={styles.container}>
      {/* Ícones do topo */}
      <div className={styles.topIcons}>
        <Link href="#" className={styles.button}>
          <img src="/img/alfinete 1.png" alt="Cut Icon" className={styles.iconImage} />
        </Link>
        <Link href="#" className={styles.button}>
          <img src="/img/agenda.png" alt="Sticky Note Icon" className={styles.iconImage} />
        </Link>
        <Link href="/home" className={styles.button}>
          <img src="/img/icon-home.png" alt="Home Icon" className={styles.iconImage} />
        </Link>
        <Link href="#" className={styles.button}>
          <img src="/img/icon-chat2.png" alt="Comment Icon" className={styles.iconImage} />
        </Link>
        <div onClick={toggleCalendar} className={styles.button}>
          <img src="/img/calendario.png" alt="Calendar Icon" className={styles.iconImage} />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <div className={styles.notesContainer}>
          <h2>Anotações</h2>
          <div className={styles.notes}>
            {notes.map((note, index) => (
              <div key={index} className={styles.note}>
                <div className={styles.dateBox}>
                  <div className={styles.day}>{note.date.split(" ")[0]}</div>
                  <div className={styles.month}>{note.date.split(" ")[1]}</div>
                </div>
                <div className={styles.description}>{note.description}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Calendário Modal Lateral */}
      {isCalendarOpen && (
        <div className={styles.calendarModal}>
          <div className={styles.calendar}>
            <div className={styles.calendarHeader}>
              <span>{currentMonth}</span>
              <span className={styles.year}>{currentYear}</span>
            </div>
            <div className={styles.calendarBody}>
              {daysOfWeek.map((day, index) => (
                <div key={index} className={styles.day}>
                  {day}
                </div>
              ))}
              {daysInMonth.map((day) => (
                <div
                  key={day}
                  className={`${styles.date} ${day === today ? styles.today : ""
                    }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
