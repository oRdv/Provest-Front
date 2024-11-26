'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner'; // Biblioteca para spinner
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database'; // Importa as funções necessárias
import styles from './page.module.css';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC81SDmVswAJgRxWZB7CEOdNW7iSCIcDF8",
  authDomain: "chatprovest.firebaseapp.com",
  databaseURL: "https://chatprovest-default-rtdb.firebaseio.com",
  projectId: "chatprovest",
  storageBucket: "chatprovest.firebasestorage.app",
  messagingSenderId: "102794475959",
  appId: "1:102794475959:web:efc6d230160fdf94d0d032"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Chat() {
  const [professores, setProfessores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastMessages, setLastMessages] = useState({});

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/profs`);
        const data = await response.json();
        setProfessores(data.professores);
        fetchLastMessages(data.professores); // Busca as últimas mensagens
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      } finally {
        setLoading(false);
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

  const fetchLastMessages = (professores) => {
    const alunoId = "2"; // Substitua pelo ID do aluno real, se necessário.
    const tempLastMessages = {};

    professores.forEach((professor) => {
      const chatRef = ref(database, `messages/${alunoId}_${professor.id}`);

      onValue(chatRef, (snapshot) => {
        if (snapshot.exists()) {
          const messages = Object.values(snapshot.val());
          const lastMessage = messages[messages.length - 1]; // Pega a última mensagem
          tempLastMessages[professor.id] = lastMessage.text; // Armazena o texto da última mensagem
        } else {
          tempLastMessages[professor.id] = "Sem mensagens ainda."; // Mensagem padrão
        }

        // Atualiza o estado com as últimas mensagens
        setLastMessages({ ...tempLastMessages });
      });
    });
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
            <p>{lastMessages[professor.id] || "Carregando última mensagem..."}</p> {/* Mostra a última mensagem ou um fallback */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
