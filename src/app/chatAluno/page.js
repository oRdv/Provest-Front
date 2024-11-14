'use client'
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import Image from 'next/image';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import styles from './page.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyBPR-s9gjxwaFogDx7CEt7_Zwjrlayn8Io",
  authDomain: "chat-provest.firebaseapp.com",
  databaseURL: "https://chat-provest-default-rtdb.firebaseio.com",
  projectId: "chat-provest",
  storageBucket: "chat-provest.firebasestorage.app",
  messagingSenderId: "552821901016",
  appId: "1:552821901016:web:e9cccbbd59922bc6cf39ad"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ChatGeral = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [professorName, setProfessorName] = useState('');

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const alunoId = localStorage.getItem("alunoId");
      const professorId = localStorage.getItem("professorId");

      if (alunoId && professorId) {
        loadMessages(alunoId, professorId);
        
        fetchProfessorName(professorId);
      } else {
        console.error("IDs de aluno ou professor não encontrados no localStorage.");
      }
    }
  }, []);

  const loadMessages = (alunoId, professorId) => {
    const chatRef = ref(database, `messages/${alunoId}_${professorId}`);
    console.log("Attempting to load messages from Firebase...");

    onValue(chatRef, (snapshot) => {
      if (snapshot.exists()) {
        const messages = Object.values(snapshot.val());
        console.log("Loaded messages:", messages); 
        setChat(messages);
      } else {
        console.warn("Nenhuma mensagem encontrada para este chat.");
      }
    }, (error) => {
      console.error("Erro ao carregar mensagens:", error);
    });
  };

  const fetchProfessorName = async (professorId) => {
    try {
    
      console.log("professorId no localStorage:", professorId);
  
      const response = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/prof/${professorId}`);
      const data = await response.json();
      console.log("Dados recebidos da API:", data);  
  
     
      if (data && data.usuario && data.usuario.length > 0) {
        setProfessorName(data.usuario[0].nome); 
      } else {
        setProfessorName("Professor não encontrado");
      }
      
    } catch (error) {
      console.error("Erro ao buscar o nome do professor:", error);
    }
  }
  

  const handleSendMessage = () => {
    if (message.trim()) {
      const alunoId = localStorage.getItem("alunoId");
      const professorId = localStorage.getItem("professorId");

      const newMessage = {
        senderId: alunoId, 
        receiverId: professorId, 
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const chatRef = ref(database, `messages/${alunoId}_${professorId}`);
      push(chatRef, newMessage)
        .then(() => {
          console.log("Mensagem enviada com sucesso:", newMessage);
          setMessage('');
        })
        .catch((error) => {
          console.error("Erro ao enviar mensagem:", error);
        });
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => window.history.back()} />
        <div className={styles.title}>Chat com {professorName || 'Professor'}</div>
        <div className={styles.rightContainer}>
          <span className={styles.subject}>Biologia</span>
          <Image
            src="/img/icon-chatAluno.png"
            alt="Imagem na barra azul"
            width={40}
            height={40}
            className={styles.headerImage}
          />
        </div>
      </div>

      <div className={styles.chatContainer}>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.senderId === localStorage.getItem("alunoId") ? styles.sent : styles.received}`}
          >
            <div className={styles.messageContent}>
              {msg.text}
            </div>
            <div className={styles.time}>{msg.time}</div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Estou com uma dúvida em"
          className={styles.input}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <FaPaperPlane className={styles.sendIcon} onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatGeral;
