import React from 'react';
import styles from './FeedbackCorrecao.module.css';

const FeedbackCorrecao = ({ feedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.subtitle}>Vamos corrigir!</h2>
      <p className={styles.theme}>Tema escolhido: <span className={styles.themeText}>{feedback?.tema ?? "Tema não encontrado"}</span></p>

      <div className={styles.scoreBox}>
        <h3 className={styles.competenciasTitle}>Competências</h3>
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

        <h3 className={styles.finalScore}>Nota Final: <span className={styles.scoreValue}>{feedback?.notaFinal ?? "Nota não encontrada"}</span></h3>
      </div>
    </div>
  );
};

export default FeedbackCorrecao;
