'use client'
import styles from './page.module.css'; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function TodasAnotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnotacoes = async () => {
      const aluno_id = localStorage.getItem("userId");

      if (!aluno_id) {
        setError('Erro ao obter o ID do usuário.');
        return;
      }

      try {
        const response = await fetch(`https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/caderno?aluno_id=${aluno_id}`);
        const data = await response.json();

        console.log(data);

        if (response.ok) {
          setAnotacoes(data.anotacoes);
        } else {
          setError(data.message || 'Erro ao buscar anotações.');
        }
      } catch (error) {
        setError('Erro ao buscar anotações.');
        console.error(error);
      }
    };

    fetchAnotacoes();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>TODAS ANOTAÇÕES</h1>
      </div>
      
      <div className={styles.menu}>
        <div className={styles.item}>
          {error && <p className={styles.error}>{error}</p>}
          {Array.isArray(anotacoes) && anotacoes.length > 0 ? (
            anotacoes.map((anotacao) => (
              <Link key={anotacao.id} href={`/anotacao/${anotacao.id}`}>
              <div className={styles.box}>
                <h2>{anotacao.titulo}</h2>
              </div>
            </Link>
            
            
            ))
          ) : (
            <p>Nenhuma anotação encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodasAnotacoes;
