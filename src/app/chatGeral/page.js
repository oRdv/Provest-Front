import React from 'react';
import Image from 'next/image'; 
import styles from './page.module.css';

function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>CHATS</h1>
        {/* <h2 className={styles.seta}>
        <Image
            src="/img/seta.png" 
            width={20} 
            height={20} 
          />
        </h2> */}
      </div>
      
      <div className={styles.menu}>

        {/* CHAT NYCOLLE LIMA 1 */}
        <div className={styles.item}>
          <Image
            src="/img/perfil.png" 
            width={70} 
            height={70} 
            alt="Prof Nycolle Lima" 
          />
          <h2>Prof Nycolle Lima</h2> 
          <p>mensagens...</p>
        </div>

        {/* CHAT Gabriela */}
        <div className={styles.item}>
          <Image
            src="/img/perfil.png"
            width={70}
            height={70}
            alt="Prof Gabriela Fernandes"
          />
          <h2>Prof Gabriela Fernandes</h2> 
          <p>mensagens...</p>
        </div>

        {/* CHAT PROFESSORA JULIA FONSECA 2 */}
        <div className={styles.item}>
          <Image
            src="/img/perfil.png"
            width={70}
            height={70}
            alt="Prof Julia Fonseca"
          />
          <h2>Prof Julia Fonseca</h2> 
          <p>mensagens...</p>
        </div>

        {/* CHAT PROFESSORA TAMIRES 3 */}
        <div className={styles.item}>
          <Image
            src="/img/perfil.png"
            width={70}
            height={70}
            alt="Prof Tamires"
          />
          <h2>Prof Tamires</h2>   
          <p>mensagens...</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
