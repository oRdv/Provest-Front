"use client";
import styles from './page.module.css';
import React, { useState } from 'react';

function TemaRedacao() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REDAÇÕES</h1>
      <div className={styles.content}>
        <div className={styles.infoBox}>
          <h2 className={styles.subtitle}>Escolha seu tema</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              Impacto das mudanças climáticas na vida das populações urbanas e rurais.
            </button>
            <button className={styles.button}>
              Desafios para a valorização do trabalho e a geração de emprego no Brasil
            </button>
            <button className={styles.button}>
              Os impactos das redes sociais nas relações interpessoais e na saúde mental.
            </button>
            <button className={styles.button}>
              A educação para o desenvolvimento de habilidades socioemocionais e cognitivas
            </button>
            <button className={styles.button}>
              A importância da preservação ambiental para a qualidade de vida das futuras gerações
            </button>
            <button className={styles.button}>
              Manipulação do comportamento do usuário por dados na internet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemaRedacao;



