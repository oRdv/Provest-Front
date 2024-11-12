import React from 'react';
import styles from './FeedbackCorrecao.module.css';

const FeedbackCorrecao = ({ feedback }) => {
  return (
    console.log(feedback.competencias),

    <div className={styles.feedbackContainer}>
      <h2 className={styles.subtitle}>Vamos corrigir!</h2>
      <p className={styles.theme}>Tema escolhido: <span className={styles.themeText}>{feedback?.tema ?? "Tema não encontrado"}</span></p>

      <div className={styles.scoreBox}>

        <h3 className={styles.competenciasTitle}>Competências</h3>
        <ul>
          <li>
            {feedback.competencias[0].competencias}
            {feedback.competencias[0].explicacao}
          </li>
          <li>
            {feedback.competencias[1].competencias}
            {feedback.competencias[1].explicacao}
          </li>
          <li>
            {feedback.competencias[2].competencias}
            {feedback.competencias[2].explicacao}
          </li>
          <li>
            {feedback.competencias[3].competencias}
            {feedback.competencias[3].explicacao}
          </li>
          <li>
            {feedback.competencias[4].competencias}
            {feedback.competencias[4].explicacao}
          </li>

        </ul>

        <h3 className={styles.finalScore}>Nota Final: <span className={styles.scoreValue}>{feedback?.notaFinal ?? "Nota não encontrada"}</span></h3>
      </div>
    </div>
  );
};

export default FeedbackCorrecao;
