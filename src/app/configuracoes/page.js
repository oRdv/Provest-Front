import React from 'react';
import '../configuracoes/page.css'

function Config() {

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">CONFIGURAÇÕES</h1>
      </div>
      <div className="menu">
        <div className="item">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.758 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <span className="label">Meu perfil</span>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-shield-check"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.117 1.195a.5.5 0 0 1 .788 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.788-.708L7.5 8.207 1.803 2.607a.5.5 0 0 1 0-.708l4-4z"
              />
              <path
                d="M10.883 15.81a.5.5 0 0 1-.788 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .788.708L8.5 8.207 14.197 2.607a.5.5 0 0 1 .708 0l-4 4z"
              />
              <path d="M5.394 7.352l-1.915-1.915a.5.5 0 0 0-.708.708L5.086 7.15l.846.847a.5.5 0 0 0 .708 0z" />
            </svg>
          </div>
          <span className="label">Política e privacidade</span>
        </div>
        <div
          className="item"
        >
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 2.083-1.24 2.877v1.04c.736.304 1.478.598 2.195.882l.537.23c.55.245 1.12.286 1.68.213a2.26 2.26 0 0 1 1.68-.213l.537-.23c.717-.284 1.459-.578 2.195-.882v-1.04c.74-.794 1.24-1.779 1.24-2.877a5.002 5.002 0 0 0-6-6.13z" />
            </svg>
          </div>
          <span className="label">Notificações</span>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v-.5a.5.5 0 0 1-.5-.5h-9a.5.5 0 0 1-.5.5v.5zm-2 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            </svg>
          </div>
          <span className="label">Chat</span>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1.029.123A.93.93 0 0 0 7 6.942H5.588a.5.5 0 0 0 0 1h.544a.926.926 0 0 0 .925-.925V5.077c.034-.1.1-.158.15-.158h.085a.5.5 0 0 0 .5.5v1.893a.926.926 0 0 0 .926.926H9.334c.034-.1.1-.158.15-.158h.085a.5.5 0 0 0 .5-.5V5.077c.034-.1.1-.158.15-.158h.085a.5.5 0 0 0 .5.5v1.893a.926.926 0 0 0 .926.926H10.913c.034-.1.1-.158.15-.158h.085a.5.5 0 0 0 .5.5v2.163a.926.926 0 0 0 .926.926H12.887a.5.5 0 0 0 0-1h-.544a.93.93 0 0 0-.926-.926V8.304a.926.926 0 0 0-.926-.926H8.93zM9.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
              />
            </svg>
          </div>
          <span className="label">Sobre nós</span>
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
      <div className="back-button" >
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
      </div>
    </div>
  );
};

export default Config;