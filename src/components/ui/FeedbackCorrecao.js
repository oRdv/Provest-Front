// FeedbackCorrecao.js
import React from 'react';
import styles from './FeedbackCorrecao.module.css';

const FeedbackCorrecao = ({ feedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.subtitle}>Vamos corrigir!</h2>
      <p className={styles.theme}>Tema escolhido: <span className={styles.themeText}>{feedback?.tema}</span></p>
      
      <div className={styles.scoreBox}>
        <p className={styles.comment}>{feedback?.comentario}</p>
        <h3 className={styles.competenciasTitle}>Competências</h3>

        {feedback?.competencias && feedback.competencias.length > 0 ? (
          <ul className={styles.competenciasList}>
            {feedback.competencias.map((competencia, index) => (
              <li key={index} className={styles.competenciasItem}>{competencia}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma competência avaliada encontrada.</p>
        )}
        
        <h3 className={styles.finalScore}>Nota Final: <span className={styles.scoreValue}>{feedback?.notaFinal ?? "Nota não encontrada"}</span></h3>
      </div>
    </div>
  );
};

export default FeedbackCorrecao;
