'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import styles from './page.module.css';

function Chat() {
  const [professores, setProfessores] = useState([]);
  
  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/profs`);
        const data = await response.json();
        setProfessores(data.professores);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };
    
    fetchProfessores();
  }, []);

  const handleChatClick = (professorId) => {
    localStorage.setItem("professorId", professorId);
    const alunoId = localStorage.getItem("alunoId"); 
    if (alunoId) {
      
      window.location.href = `/chat/${alunoId}/${professorId}`;
    }
  };

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
