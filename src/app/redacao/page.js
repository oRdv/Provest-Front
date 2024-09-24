"use client";
import styles from './page.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

function Redacao() {
  const router = useRouter(); // Initialize useRouter

  const handleTemaClick = () => {
    // Navigate to the desired page
    router.push('/temas');
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>REDAÇÕES</h1>
      <div className={styles.content}>
        <button className={styles.button} onClick={handleTemaClick}>
          <span>Escolha seu tema</span>
          <span className={styles.arrow}>&gt;</span>
        </button>

        <div className={styles.infoBox}>
          <h2 className={styles.subtitle}>O que fazer na sua redação?</h2>
          <p>
            Tenha sua redação avaliada segundo os critérios de correção
            do Enem (Exame Nacional do Ensino Médio), o maior exame
            vestibular do Brasil. A nota da redação, variando entre 0 (zero)
            e 1000 (mil) pontos, é atribuída com base em 5 competências
            (200 pontos por competência):
          </p>
          <ul className={styles.competencias}>
            <li>
              <strong>C1</strong> Domínio da escrita formal da língua
              portuguesa.
            </li>
            <li>
              <strong>C2</strong> Compreender o tema e não fugir do que é
              proposto.
            </li>
            <li>
              <strong>C3</strong> Selecionar, relacionar, organizar e
              interpretar informações, fatos, opiniões e argumentos em
              defesa de um ponto de vista.
            </li>
            <li>
              <strong>C4</strong> Conhecimento dos mecanismos linguísticos
              necessários para a construção da argumentação.
            </li>
            <li>
              <strong>C5</strong> Proposta de intervenção e respeito aos
              direitos humanos.
            </li>
          </ul>
          <p className={styles.footer}>Boa Redação!</p>
        </div>
      </div>

      <div className={styles.navbar}>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {/* Icon path here */}
          </svg>
        </button>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {/* Icon path here */}
          </svg>
        </button>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {/* Icon path here */}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Redacao;
