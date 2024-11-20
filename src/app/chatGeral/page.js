'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner'; // Biblioteca para spinner
import styles from './page.module.css';

function Chat() {
  const [professores, setProfessores] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/profs`);
        const data = await response.json();
        setProfessores(data.professores);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      } finally {
        setLoading(false); // Desativa o loading após o carregamento dos dados
      }
    };

    fetchProfessores();
  }, []);

  const handleChatClick = (professorId) => {
    const alunoId = "2"; 
    localStorage.setItem("alunoId", alunoId); 
    localStorage.setItem("professorId", professorId); 
    window.location.href = "/chatAluno"; 
  };

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
        <h1 className={styles.title}>CHATS</h1>
      </div>

      <div className={styles.menu}>
        {professores.map((professor) => (
          <div 
            key={professor.id} 
            className={styles.item} 
            onClick={() => handleChatClick(professor.id)}
          >
            <Image
              src="/img/perfil.png"
              width={70}
              height={70}
              alt={`Prof ${professor.nome}`}
            />
            <h2>{`Prof ${professor.nome}`}</h2>
            <p>mensagens...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
