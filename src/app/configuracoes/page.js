import styles from './page.modules.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Config() {

  return (
    <div className="container">
      <div className="header">
        <h1 className={styles.title}>CONFIGURAÇÕES</h1>
      </div>
      <div className="menu">
        <div className="item">
          <div className="icon">
          <Image
                src="/img/perfil.png"
                width={60}
                height={60}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../perfilAluno">
            <span className="label">Meu perfil</span>
          </Link>
          
        </div>
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/privacidade.png"
                width={70}
                height={60}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../politicaPrivacidade">
          <span className="label">Política e privacidade</span>
          </Link>
        </div>
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/notification.png"
                width={70}
                height={60}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../notificacoes">
          <span className="label">Notificações</span>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="item" >
          <div className="icon">
          <Image
                src="/img/chat.png"
                width={70}
                height={60}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../notificacoes">
          <span className="label">Chat</span>
          </Link>
        </div>
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/info.png"
                width={70}
                height={60}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../sobreNos">
          <span className="label">Sobre nós</span>
          </Link>
      
        </div>
      </div>
      <div className="back-button" >
        <Link href="../home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        </Link>
       
      </div>
    </div>
  );
};

export default Config;