'use client'
import styles from './page.module.css'; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function TodasRedacoes() {
  const [redacoes, setRedacoes] = useState([]);

  useEffect(() => {
    const fetchRedacoes = async () => {
      try {
        const response = await fetch('https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/redacoes');
        const data = await response.json();
        setRedacoes(data.redacoes);  // Certifique-se de acessar o array "redacoes"
      } catch (error) {
        console.error("Erro ao buscar redações:", error);
      }
    };

    fetchRedacoes();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todas redações</h1>
      </div>
      
      <div className={styles.menu}>
        {redacoes.length > 0 ? (
          redacoes.map((redacao) => (
            <div key={redacao.id} className={styles.item}>
              <span className={styles.label}>{redacao.tema}</span> {/* Exibir o tema */}
              <div className={styles.box}>
                <strong>{redacao.titulo}</strong> {/* Exibir o título */}
                <p>{redacao.texto}</p> {/* Exibir o texto */}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma redação encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default TodasRedacoes;
