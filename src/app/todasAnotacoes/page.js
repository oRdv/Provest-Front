'use client';
import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Link from 'next/link';
import styles from './page.module.css';

function TodasAnotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para o carregamento

  useEffect(() => {
    const fetchAnotacoes = async () => {
      const aluno_id = localStorage.getItem("userId");

      if (!aluno_id) {
        setError('Erro ao obter o ID do usuário.');
        setLoading(false); // Finaliza o carregamento
        return;
      }

      try {
        const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/caderno?aluno_id=${aluno_id}`);
        const data = await response.json();

        if (response.ok && Array.isArray(data.anotacoes)) {
          setAnotacoes(data.anotacoes);
        } else {
          setError(data.message || 'Erro ao buscar anotações.');
        }
      } catch (error) {
        setError('Erro ao buscar anotações.');
        console.error(error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchAnotacoes();
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <RotatingLines
          strokeColor="#6A0DAD"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

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

        <div className={styles.boxstyle}>
          <Link href="/home">
            <button className={styles.button}>Voltar para tela principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodasAnotacoes;
