'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
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
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastMessages, setLastMessages] = useState({});
  const [isaluno, setIsaluno] = useState(false); 

  useEffect(() => {

    const userType = localStorage.getItem("userType");
    console.log("Tipo de usuário:", userType); 
    if (userType === "alunos") {
      setIsaluno(true); 
      fetchUsuarios("profs");
    } else if (userType === "professor") {
      setIsaluno(false); 
      fetchUsuarios("alunos");
    } else {
      console.error("Tipo de usuário não encontrado");
    }

  }, []);

  const fetchUsuarios = async (tipo) => {
    try {
      const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/${tipo}`);
      const data = await response.json();
      console.log("Dados recebidos:", data);  // Para verificar a resposta da API
  
      // Verifique se a chave correta existe antes de atribuir
      const dataAtr = tipo === 'profs' ? data.professores : data.alunos;
  
      if (Array.isArray(dataAtr)) {
        setUsuarios(dataAtr);  // Passa o array correto para o estado
        fetchLastMessages(dataAtr);  // Passa os usuários para buscar as últimas mensagens
      } else {
        console.error("Esperado um array, mas recebemos:", data);
      }
    } catch (error) {
      console.error(`Erro ao buscar ${tipo}:`, error);
    } finally {
      setLoading(false);
    }
  };
  

  const fetchLastMessages = async (usuarios) => {
    const lastMessagesData = {};
    for (const usuario of usuarios) {
      const chatRef = ref(database, `chats/${usuario.id}`);
      onValue(chatRef, (snapshot) => {
        const messages = snapshot.val();
        if (messages) {
          const lastMessage = messages[messages.length - 1]?.text || "Sem mensagens";
          lastMessagesData[usuario.id] = lastMessage;
        } else {
          lastMessagesData[usuario.id] = "Sem mensagens";
        }
        setLastMessages(lastMessagesData); // Atualiza o estado com a última mensagem
      });
    }
  };

  const handleChatClick = (usuarioId) => {
    const usuarioIdLogado = localStorage.getItem("userId");
    if (usuarioIdLogado) {
      localStorage.setItem("usuarioId", usuarioIdLogado); 
      localStorage.setItem("profsId", usuarioId); 
      window.location.href = "/chatAluno";
    } else {
      console.error("ID do usuário não encontrado no localStorage.");
    }
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <RotatingLines strokeColor="#6A0DAD" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>CHATS</h1>
      </div>

      <div className={styles.menu}>
        {usuarios && usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <div key={usuario.id} className={styles.item} onClick={() => handleChatClick(usuario.id)}>
              <Image src="/img/perfil.png" width={70} height={70} alt={`${!isaluno ? "alunos" : "profs"} ${usuario.nome}`} />
              <h2>{`${!isaluno ? "alunos" : "profs"} ${usuario.nome}`}</h2>
              <p>{lastMessages[usuario.id] || "Carregando última mensagem..."}</p>
            </div>
          ))
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Chat;
