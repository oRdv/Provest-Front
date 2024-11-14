import React from 'react';
import styles from './page.module.css';

function VideoaulaForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        VIDEOAULAS
      </div>
      <div className={styles.content}>
        <button className={styles.addButton}>+ Adicionar uma VIDEOAULA</button>
        <div className={styles.videoSpace}></div>
        <input className={styles.input} type="text" placeholder="Crie um título" />
        <textarea className={styles.textarea} placeholder="Descrição"></textarea>
        <button className={styles.saveButton}>SALVAR</button>
      </div>
    </div>
  );
}

export default VideoaulaForm;
