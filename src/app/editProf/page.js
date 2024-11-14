'use client'

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

          {/* Links Section */}
          <div className={styles.links}>
            <div className={styles.linkItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/img/Vector.png"  // Imagem para a atividade
                  alt="Image representing activities"
                  width={30}
                  height={27}
                />
              </div>
              <i className="fas fa-book" onClick={() => navigateTo('https://example.com/atividades')} />
              <a href="/adcAtividades" className={styles.link}>Atividades</a>
              <a
                className={styles.add}
                href="/adcAtividades"
              >
                + Adicionar nova atividade
              </a>
              <input
                className="file-input"
                id="file-input-atividades"
                type="file"
                style={{ display: 'none' }}
              />
            </div>

            <div className={styles.linkItem}>
              {/* Imagem de Vídeo Aula */}
              <div className={styles.imageWrapper}>
                <Image
                  src="/img/aula.png"  
                  alt="Image representing video classes"
                  width={30}
                  height={27}
                />
              </div>
              <i className="fas fa-video" onClick={() => navigateTo('https://example.com/videoaulas')} />
              <a href="/adcVideoaula" className={styles.link}>Vídeo Aulas</a>
              <a
                className={styles.add}
                href="/adcVideoaula"
              >
                + Adicionar nova vídeo aula
              </a>
              <input
                className="file-input"
                id="file-input-videoaulas"
                type="file"
                style={{ display: 'none' }}
              />
            </div>

            <div className={styles.linkItem}>
              {/* Imagem de Calendário */}
              <div className={styles.imageWrapper}>
                <Image
                  src="/img/calendario.png" 
                  alt="Image representing calendar"
                  width={37}
                  height={29}
                />
              </div>
              <i className="fas fa-calendar-alt" onClick={() => navigateTo('https://example.com/calendario')} />
              <a href="#" className={styles.link}>Calendário</a>
              <a
                className={styles.add}
                href="#"
                onClick={() => handleFileInputClick('file-input-calendario')}
              >
                + Adicionar novo lembrete
              </a>
              <input
                className="file-input"
                id="file-input-calendario"
                type="file"
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
