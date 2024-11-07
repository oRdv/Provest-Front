'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const DetalhesAnotacao = ({ params }) => {
  const { id } = params;
  const [anotacao, setAnotacao] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnotacao = async () => {
      if (id) {
        try {
          const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/caderno/${id}`);
          const data = await response.json();

          console.log("Estrutura completa da resposta da API:", data);

          if (response.ok && data.redacao && data.redacao.length > 0) {
            setAnotacao(data.redacao[0]);
            console.log("Anotação definida:", data.redacao[0]);
          } else {
            setError(data.message || 'Erro ao buscar a anotação.');
          }
        } catch (error) {
          setError('Erro ao buscar a anotação.');
          console.error(error);
        }
      }
    };

    fetchAnotacao();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!anotacao) return <p>Carregando...</p>;

  return (
    <div className={styles['digital-notebook-container']}>
      <div className={styles.header}>
        <p className={styles.headerText}>CADERNO DO ALUNO</p>
      </div>

      <div className={styles['notebook-container']}>
        <div className={styles['notebook-header']}>
          <p className={styles.titleCaderno}>{anotacao.titulo || 'Título não encontrado'}</p>
        </div>

        <div className={styles.notebook}>
          <p className={styles['notebook-textarea']}>{anotacao.texto || 'Conteúdo não encontrado'}</p>
        </div>
      </div>
      
      {error && <p className={styles['error-message']}>{error}</p>}

      <Link href="/todasAnotacoes" className={styles.button}>Voltar para todas as anotações</Link>
    </div>
  );
};

export default DetalhesAnotacao;
