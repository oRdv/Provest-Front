'use client';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import Image from 'next/image';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import { RotatingLines } from 'react-loader-spinner';
import styles from './page.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyC81SDmVswAJgRxW7iSCIcDF8",
  authDomain: "chatprovest.firebaseapp.com",
  databaseURL: "https://chatprovest-default-rtdb.firebaseio.com",
  projectId: "chatprovest",
  storageBucket: "chatprovest.firebasestorage.app",
  messagingSenderId: "102794475959",
  appId: "1:102794475959:web:efc6d230160fdf94d0d032",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ChatGeral = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [professorNames, setProfessorNames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const alunoId = localStorage.getItem('usuarioId');
      const professorId = localStorage.getItem('profsId');

      if (alunoId && professorId) {
        const chatKey =
          alunoId < professorId ? `${alunoId}_${professorId}` : `${professorId}_${alunoId}`;
        
        console.log("Chat Key: ", chatKey);

        loadMessages(chatKey);
        fetchProfessorName(professorId, chatKey);
      } else {
        console.error('IDs de aluno ou professor não encontrados no localStorage.');
      }
    }
  }, []);

  const loadMessages = (chatKey) => {
    const chatRef = ref(database, `messages/${chatKey}`);
    onValue(
      chatRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const messagesObj = snapshot.val();
          const messages = Object.values(messagesObj).map((message) => ({
            text: message.text,
            time: message.time,
            senderId: message.senderId,
            receiverId: message.receiverId,
          }));

          setChat(messages);
        } else {
          console.warn('Nenhuma mensagem encontrada para este chat.');
        }
        setLoading(false);
      },
      (error) => {
        console.error('Erro ao carregar mensagens:', error);
        setLoading(false);
      }
    );
  };

  const fetchProfessorName = async (professorId, chatKey) => {
    try {
      const response = await fetch(
        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/prof/${professorId}`
      );
      const data = await response.json();
      if (data?.usuario?.[0]?.nome) {
        setProfessorNames((prevNames) => ({
          ...prevNames,
          [chatKey]: data.usuario[0].nome,
        }));
      } else {
        setProfessorNames((prevNames) => ({
          ...prevNames,
          [chatKey]: 'Professor não encontrado',
        }));
      }
    } catch (error) {
      console.error('Erro ao buscar o nome do professor:', error);
      setProfessorNames((prevNames) => ({
        ...prevNames,
        [chatKey]: 'Erro ao carregar nome',
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const alunoId = localStorage.getItem('usuarioId');
      const professorId = localStorage.getItem('profsId');

      const chatKey =
        alunoId < professorId ? `${alunoId}_${professorId}` : `${professorId}_${alunoId}`;
      const newMessage = {
        senderId: alunoId,
        receiverId: professorId,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const chatRef = ref(database, `messages/${chatKey}`);
      push(chatRef, newMessage)
        .then(() => setMessage(''))
        .catch((error) => console.error('Erro ao enviar mensagem:', error));
    }
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

  const alunoId = localStorage.getItem('usuarioId');
  const professorId = localStorage.getItem('profsId');
  const chatKey =
    alunoId && professorId
      ? alunoId < professorId
        ? `${alunoId}_${professorId}`
        : `${professorId}_${alunoId}`
      : null;

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => window.history.back()} />
        <div className={styles.title}>
          Chat com {professorNames[chatKey] || 'Carregando...'}
        </div>
      </div>

      <div className={styles.chatContainer}>
        {chat.length === 0 ? (
          <div className={styles.noMessages}>Nenhuma mensagem ainda.</div>
        ) : (
          chat.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.senderId === localStorage.getItem('usuarioId') ? styles.sent : styles.received
              }`}
            >
              <div className={styles.messageContent}>{msg.text}</div>
              <div className={styles.time}>{msg.time}</div>
            </div>
          ))
        )}
      </div>

      <div className={styles.footer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem"
          className={styles.input}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <FaPaperPlane className={styles.sendIcon} onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatGeral;
