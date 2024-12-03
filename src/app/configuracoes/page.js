import styles from './page.modules.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Config() {
  return (
    <div className="container">
      <div className="bodytela">
      <div className="header">
        <h1 className={styles.title}>CONFIGURAÇÕES</h1>
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <div className="icon">
          <Image
                src="/img/perfil.png"
                width={50}
                height={50}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../perfilAluno">
            <span className="label">Meu perfil</span>
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
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/privacidade.png"
                width={50}
                height={50}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../politicaPriv">
          <span className="label">Política e privacidade</span>
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
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/anotacao.png"
                width={50}
                height={50}
            />

          </div>
          <Link href="../todasAnotacoes">
          <span className="label">Anotações</span>
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
                width={50}
                height={50}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../chatGeral">
          <span className="label">Chat</span>
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
        <div
          className="item"
        >
          <div className="icon">
          <Image
                src="/img/info.png"
                width={50}
                height={50}
                alt="Desenho de uma mulher pensando"
            />

          </div>
          <Link href="../sobreNos">
          <span className="label">Sobre nós</span>
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
      </div>
    </div>
  );
};

export default Config;