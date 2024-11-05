'use client'

import Image from 'next/image';
import styles from './page.module.css'; 

export default function Home() {
  return (
    <div className={styles.body}> {}
      <div className={styles.header}>
      <Image
            src="/img/logo-verde.png" 
            width={80} 
            height={85} 
            alt="aaa" 
          />
        <h1>DETALHES DO SEU CRONOGRAMA</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.box}>
            <h2>Detalhes do seu plano de estudos</h2>
            <p>Prova: ENEM 2024</p>
            <p>Fase 1: 03/11/24</p>
            <p>Fase 2: 10/11/24</p>
          </div>

          <div className={styles.box}>
            <h2>Carga Horária</h2>
            <p>Língua Portuguesa: 3 horas</p>
            <p>Literatura: 5 horas</p>
            <p>Biologia: 3 horas</p>
            <p>História: 2 horas</p>
          </div>
        </div>

        <div className={styles.largeBox}>
          <h2>Disciplinas Selecionadas</h2>
          <p>Língua Portuguesa: Selecionado</p>
          <p>Literatura: Selecionado</p>
          <p>Artes: Selecionado</p>
          <p>Inglês: Selecionado</p>
          <p>Espanhol: Selecionado</p>
          <p>Redação: Selecionado</p>
          <p>História: Selecionado</p>
          <p>Geografia: Selecionado</p>
          <p>Filosofia: Selecionado</p>
          <p>Sociologia: Selecionado</p>
          <p>Biologia: Selecionado</p>
          <p>Física: Selecionado</p>
          <p>Química: Selecionado</p>
          <p>Matemática: Selecionado</p>
        </div>
      </div>
    </div>
  );
}
