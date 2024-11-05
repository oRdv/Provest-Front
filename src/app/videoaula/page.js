"use client"; 

import React from 'react';
import styles from './page.module.css'; 
import { FaChevronLeft, FaPause, FaChevronRight } from 'react-icons/fa';

const VideoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>UniCamp - GEOGRAFIA - Geopolítica - VídeoAula 1</div>
      <div className={styles.videoPlaceholder}>
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src="/videos/aula-geopolitica.mp4" type="video/mp4" />
        </video>
      </div>
      </div>
      <div className={styles.content}>
        <p>Olá, estudante!</p>
        <p>Para iniciar os seus estudos sobre esse tema, selecionamos esse conteúdo para você.</p>
      </div>
      <div className={styles.buttons}>
    <a href="/chatAluno">
        <button>Entrar em contato com um professor</button>
    </a>
    <a href="/questoes-respostas">
        <button>Questões e Respostas</button>
    </a>
</div>

    </div>
  );
};

export default VideoPage;