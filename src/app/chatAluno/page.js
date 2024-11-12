'use client';

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

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [alunoId, setAlunoId] = useState('');
  const [professorId, setProfessorId] = useState('');

  useEffect(() => {
    const storedAlunoId = localStorage.getItem("alunoId");
    const storedProfessorId = localStorage.getItem("professorId");

    if (storedAlunoId && storedProfessorId) {
      setAlunoId(storedAlunoId);
      setProfessorId(storedProfessorId);

      loadMessages(storedAlunoId, storedProfessorId);
    }
  }, []);

  const loadMessages = (alunoId, professorId) => {
    const chatRef = ref(database, `messages/${alunoId}_${professorId}`);
    onValue(chatRef, (snapshot) => {
      const messages = snapshot.val() ? Object.values(snapshot.val()) : [];
      setChat(messages);
    });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        senderId: alunoId,
        receiverId: professorId,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const chatRef = ref(database, `messages/${alunoId}_${professorId}`);
      push(chatRef, newMessage);
      setMessage('');
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <FaArrowLeft className={styles.backIcon} />
        <div className={styles.title}>Tamires Fernandes</div>
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
          <div key={index} className={`${styles.message} ${msg.senderId === alunoId ? styles.sent : styles.received}`}>
            {msg.text}
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

export default ChatInterface;
