"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css'; 
import Link from 'next/link';
import Image from 'next/image';

const Dashboard = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <i className="fas fa-bars">
            <Image
                src="/img/menu.png"
                width={30}
                height={30}
                alt="Desenho de uma mulher pensando"
            />
            </i>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className={styles.notificationIcon}>
            <i className="fas fa-bell"> <Image
                src="/img/notificacao.png"
                width={25}
                height={25}
                alt="Desenho de uma mulher pensando"
            /></i>
          </div>
        </div>
  
        {/* Menu */}
        {menuVisible && (
          <div className={styles.menu}>
            <Link href="/tasks">Tarefas</Link>
            <Link href="/chatGeral">Chats</Link>
            <Link href="/configuracoes">Configurações</Link>
            <Link href="/calendar">Calendário</Link>
            <Link href="/Cronograma">Escolha seu curso </Link>
            <Link href="/videoaula">Video-Aulas</Link>
            <Link href="/materias">Matérias</Link>
            <Link href="/redacao">Redações</Link>
            <Link href="/perfilAluno">Perfil</Link>
          </div>
        )}
  
        {/* Dashboard */}
        <div className={styles.sectionTitle}>DashBoard</div>
        <div className={styles.dashboardCards}>
          <div className={styles.card} onClick={() => window.location.href = "/atividades"}>
            <i className="fas fa-book">
            <Image
                src="/img/book.png"
                width={90}
                height={87}
            />
            </i>
            <div className={styles.cardTitle}>Atividades</div>
            <i className="fas fa-plus addIcon"></i>
          </div>
          <div className={styles.card} onClick={() => window.location.href = "/videoaulas"}>
            <i className="fas fa-video">  <Image
                src="/img/video.png"
                width={90}
                height={87}
            /></i>
            <div className={styles.cardTitle}>VídeoAulas</div>
            <i className="fas fa-plus addIcon"></i>
          </div>
        </div>
  
        {/* Calendar */}
        <div className={styles.sectionTitle}>Calendário</div>
        <div className={styles.calendarCards}>
          <div className={styles.calendarCard} onClick={() => window.location.href = "/calendario"}>
            <div className={styles.date}>10 Mar</div>
            <div className={styles.calendarTitle}>Calendário</div>
            <div className={styles.event}>Aula hoje às 16hrs</div>
            <div className={styles.event}>Postar vídeoAula hoje às 10:10hrs</div>
          </div>
          <div className={styles.calendarCard} onClick={() => window.location.href = "/calendario"}>
            <div className={styles.date}>3 Fev</div>
            <div className={styles.calendarTitle}>Calendário</div>
            <div className={styles.event}>Aula hoje às 13hrs</div>
            <div className={styles.event}>Postar vídeoAula hoje às 17hrs</div>
          </div>
          <div className={styles.calendarCard} onClick={() => window.location.href = "/calendario"}>
            <div className={styles.date}>7 Fev</div>
            <div className={styles.calendarTitle}>Calendário</div>
            <div className={styles.event}>Aula hoje às 10hrs</div>
            <div className={styles.event}>Postar vídeoAula hoje às 7:30hrs</div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
