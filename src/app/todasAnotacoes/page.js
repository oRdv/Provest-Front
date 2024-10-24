import styles from './page.module.css'; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TodasAnotacoes() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>TODAS ANOTAÇÕES</h1>
      </div>
      
      <div className={styles.menu}>
        <div className={styles.item}>
          <div className={styles.box}>
            Ja pode almoçar??????
          </div>
          <div className={styles.box}>
            Quando puder trancar o curso avisa
          </div>
          <div className={styles.box}>
          Não aguento mais socorro
          </div>
          <div className={styles.box}>
            Dinho fica quieto
          </div>
          <div className={styles.box}>
            Quero minha casa
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodasAnotacoes;