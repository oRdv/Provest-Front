
'use client'

import { useState } from 'react';
import Head from 'next/head';
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
          Sou professora de história a 4 anos, e estou disponivel na plataforma para transformar a maneira como estudantes se organizam vestibulares e exames, com a missão de simplificar o processo de preparação.
          </p>

          {/* Disponibilidade */}
          <div className={styles.inputGroup}>
            <label htmlFor="horarios">Horários disponíveis</label>
            <input
              id="horarios"
              type="text"
              value={horarios}
              onChange={(e) => setHorarios(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="dias">Dias disponíveis</label>
            <input
              id="dias"
              type="text"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Links Section */}
          <div className={styles.links}>
            {['atividades', 'videoaulas', 'calendario'].map((item) => (
              <div key={item} className={styles.linkItem}>
                <i
                  className={`fas fa-${item === 'atividades' ? 'book' : item === 'videoaulas' ? 'video' : 'calendar-alt'}`}
                  onClick={() => navigateTo(`https://example.com/${item}`)}
                />
                <a href="#" className={styles.link}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                <a
                  className={styles.add}
                  href="#"
                  onClick={() => handleFileInputClick(`file-input-${item}`)}
                >
                  + Adicionar nova {item === 'atividades' ? 'atividade' : item === 'videoaulas' ? 'videoaula' : 'lembrete'}
                </a>
                <input
                  className="file-input"
                  id={`file-input-${item}`}
                  type="file"
                  style={{ display: 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
