import styles from './page.module.css'; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TodasRedacoes() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todas redações</h1>
      </div>
      
      <div className={styles.menu}>
        <div className={styles.item}>
          <span className={styles.label}>Mudanças climáticas</span>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Valorização do trabalho</span>
          <div className={styles.box}>
          impacto das mudanças climáticas na vida das populações urbanas e rurais.
          </div>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Formação educacional</span>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
          <div className={styles.box}>
            Desafios para a valorização do trabalho e a geração de emprego no Brasil.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodasRedacoes;