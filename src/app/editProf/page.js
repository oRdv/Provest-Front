'use client'

import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';  
import styles from './page.module.css';

const ProfilePage = () => {
  const [horarios, setHorarios] = useState("10:00 - 12:30");
  const [dias, setDias] = useState("Seg, qui e sex");

  const handleFileInputClick = (inputId) => {
    document.getElementById(inputId).click();
  };

  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <img
            alt="Profile picture of a cat with a camera"
            height="100"
            id="profile-image"
            src="https://storage.googleapis.com/a1aa/image/86zzw2LFKWbzI1gvvXcfjJb0XzUcrGZeqZubwEvupQ2TVquTA.jpg"
            width="100"
            className={styles.profileImage}
            onClick={() => navigateTo('https://example.com')}
          />
          <h1 className={styles.title}>NYCOLLE LIMA</h1>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.description}>
          Sou professora de história a 4 anos, sou de SP e tenho 25 anos.
          </p>

          {/* Disponibilidade */}
          <div className={styles.inputGroup}>
            <label htmlFor="horarios">Horários disponíveis :</label>
            <input
              id="horarios"
              type="text"
              value={horarios}
              onChange={(e) => setHorarios(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="dias">Dias disponíveis :</label>
            <input
              id="dias"
              type="text"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.buttons}>
        <Link href="/home" legacyBehavior>
          <span className={styles.button}>SALVAR</span>
        </Link>
      </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
