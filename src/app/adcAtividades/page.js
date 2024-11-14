"use client";
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import styles from './page.module.css';

function AtividadesPage() {
  const [question, setQuestion] = useState("");
  const [alternatives, setAlternatives] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    console.log("Questão:", question);
    console.log("Alternativas:", alternatives);
    console.log("Resposta Correta:", correctAnswer);
    console.log("Imagem:", image);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>ATIVIDADES</div>

      <div className={styles.formGroup}>
        <label htmlFor="question">Adicionar questão</label>
        <input
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="alternatives">Adicionar alternativas</label>
        <input
          type="text"
          id="alternatives"
          name="alternatives"
          value={alternatives}
          onChange={(e) => setAlternatives(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="correct-answer">Resposta correta</label>
        <input
          type="text"
          id="correct-answer"
          name="correct-answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </div>

      <div className={styles.addImage}>
        <FaPlusCircle className={styles.icon} />
        <span>Adicionar uma imagem</span>
      </div>

      <button className={styles.saveButton} onClick={handleSave}>
        SALVAR
      </button>
    </div>
  );
}

export default AtividadesPage;
