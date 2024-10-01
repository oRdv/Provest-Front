"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../configuracoes/page.module.css';

function Config() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>CONFIGURAÇÕES</h1>
      </div>
      <div className={styles.menu}>
        <button className={styles.item} onClick={() => handleNavigation('/meu-perfil')}>
          <div className={styles.icon}>
            {/* SVG do ícone */}
          </div>
          <span className={styles.label}>Meu perfil</span>
          <div className={styles.chevron}>
            {/* SVG do chevron */}
          </div>
        </button>

        <button className={styles.item} onClick={() => handleNavigation('/politica')}>
          <div className={styles.icon}>
            {/* SVG do ícone */}
          </div>
          <span className={styles.label}>Política e privacidade</span>
        </button>

        <button className={styles.item} onClick={() => handleNavigation('/notificacoes')}>
          <div className={styles.icon}>
            {/* SVG do ícone */}
          </div>
          <span className={styles.label}>Notificações</span>
          <div className={styles.chevron}>
            {/* SVG do chevron */}
          </div>
        </button>

        <button className={styles.item} onClick={() => handleNavigation('/chat')}>
          <div className={styles.icon}>
            {/* SVG do ícone */}
          </div>
          <span className={styles.label}>Chat</span>
          <div className={styles.chevron}>
            {/* SVG do chevron */}
          </div>
        </button>

        <button className={styles.item} onClick={() => handleNavigation('/sobreNos')}>
          <div className={styles.icon}>
            {/* SVG do ícone */}
          </div>
          <span className={styles.label}>Sobre nós</span>
          <div className={styles.chevron}>
            {/* SVG do chevron */}
          </div>
        </button>
      </div>
      <div className={styles.backbutton}>
        {/* SVG do botão de voltar */}
      </div>
    </div>
  );
}

export default Config;
