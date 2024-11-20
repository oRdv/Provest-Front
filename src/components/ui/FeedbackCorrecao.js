import React from 'react';
import styles from './FeedbackCorrecao.module.css';

const FeedbackCorrecao = ({ feedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.theme}><span className={styles.themeText}>{feedback?.tema ?? "Tema não encontrado"}</span></p>

      <div className={styles.scoreBox}>
        
        <ul>

          {feedback?.competencias && feedback.competencias.length > 0 ? (
            feedback.competencias.map((competencia, index) => (
              <li key={index} className={styles.competenciaItem}>
                <strong>{competencia.competencias}</strong>
                <p>{competencia.explicacao}</p>
              </li>
            ))
          ) : (
            <li className={styles.competenciaItem}>Nenhuma competência encontrada.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCorrecao;
