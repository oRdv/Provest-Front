'use client'; // Marque o componente como Client Component

import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image'; // Importar o componente de imagem
import { FaArrowLeft, FaUserCircle, FaPaperPlane, FaTrash } from 'react-icons/fa';
import styles from './page.module.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { type: 'received', text: 'Olá, Gostaria de tirar uma dúvida', time: '09:38' },
    { type: 'sent', text: 'Olá, bom dia! como posso te ajdar', time: '09:38' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { type: 'sent', text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setMessage('');
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedChat = chat.filter((_, i) => i !== index);
    setChat(updatedChat);
  };

  return (
    <>
      <Head>
        <title>Chat Interface</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <div className={styles.body}>
      <div className={styles.header}>
  <FaArrowLeft className={styles.backIcon} />
  <div className={styles.title}>Julia Fonseca</div>
  <div className={styles.rightContainer}>
    <span className={styles.subject}>Biologia</span>
    <Image
      src="/img/icon-chatProf.png"
      alt="Imagem na barra azul"
      width={40} 
      height={40}
      className={styles.headerImage}
    />
  </div>
</div>
        <div className={styles.chatContainer}>
          {chat.map((msg, index) => (
            <div key={index} className={`${styles.message} ${msg.type === 'sent' ? styles.sent : styles.received}`}>
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
    </>
  );
};

export default ChatInterface;
