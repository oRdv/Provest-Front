"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const notes = [
    { id: 1, day: 20, month: "out", description: "UniCamp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 2, day: 3, month: "nov", description: "ENEM - dia 1", url: "/authentication/loginAluno" },
    { id: 3, day: 10, month: "nov", description: "ENEM - dia 2", url: "/authentication/loginAluno" },
    { id: 4, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
    { id: 5, day: 15, month: "nov", description: "Unesp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 6, day: 17, month: "nov", description: "Fuvest - 1ª fase", url: "/authentication/loginAluno" },
    { id: 7, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
    { id: 8, day: 30, month: "nov", description: "PUC - 1ª fase", url: "/authentication/loginAluno" },
  ];

  return (
    <div className={styles.container}>
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
        <Link href="#" className={styles.button}>
          <img src="/img/calendario.png" alt="Calendar Icon" className={styles.iconImage} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.notesContainer}>
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
    </div>
  );


// export default function Home() {
//   const notes = [
//     { id: 1, day: 20, month: "out", description: "UniCamp - 1ª fase", url: "/authentication/loginAluno" },
//     { id: 2, day: 3, month: "nov", description: "ENEM - dia 1", url: "/authentication/loginAluno" },
//     { id: 3, day: 10, month: "nov", description: "ENEM - dia 2", url: "/authentication/loginAluno" },
//     { id: 4, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
//     { id: 5, day: 15, month: "nov", description: "Unesp - 1ª fase", url: "/authentication/loginAluno" },
//     { id: 6, day: 17, month: "nov", description: "Fuvest - 1ª fase", url: "/authentication/loginAluno" },
//     { id: 7, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
//     { id: 8, day: 30, month: "nov", description: "PUC - 1ª fase", url: "/authentication/loginAluno" },
//   ];

//   return (
//     <div className={styles.container}>
//     <div className={styles.container}>
//       <div className={styles.topIcons}>
//         <Link href="#" className={styles.button}>
//           <img src="/img/alfinete 1.png" alt="Cut Icon" className={styles.iconImage} />
//         </Link>
//         <Link href="#" className={styles.button}>
//           <img src="/img/agenda.png" alt="Sticky Note Icon" className={styles.iconImage} />
//         </Link>
//         <Link href="/home" className={styles.button}>
//           <img src="/img/icon-home.png" alt="Home Icon" className={styles.iconImage} />
//         </Link>
//         <Link href="#" className={styles.button}>
//           <img src="/img/icon-chat2.png" alt="Comment Icon" className={styles.iconImage} />
//         </Link>
//         <Link href="#" className={styles.button}>
//           <img src="/img/calendario.png" alt="Comment Icon" className={styles.iconImage} />
//         </Link>
//       </div>

      
//     </div>

//     <div className={styles.content}>
//     <div className={styles.notesContainer}>
//         <h2>Anotações</h2>
//         <div className={styles.notes}>
//             {notes.map((note) => (
//                 <Link key={note.id} href={note.url} className={styles.note}>
//                     <div className={styles.dateBox}>
//                         <div className={styles.day}>{note.day}</div>
//                         <div className={styles.month}>{note.month}</div>
//                     </div>
//                     <div className={styles.description}>{note.description}</div>
//                 </Link>
//             ))}
//         </div>
//     </div>
//     </div>
//     </div>
//   );
}
