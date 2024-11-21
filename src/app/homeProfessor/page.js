"use client";

import React, { useState } from 'react';
import styles from './page.modules.css'; 
import Link from 'next/link';
import Image from 'next/image';

export default function HomeProfessor() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pages = [
    { name: "Tarefas", link: "#" },
    { name: "Chats", link: "./chatGeral" },
    { name: "Configurações", link: "./configuracoes" },
    { name: "Calendário", link: "#" },
    { name: "Escolha o curso", link: "#" },
    { name: "Vídeo-Aulas", link: "./videoaula" },
    { name: "Matérias", link: "./materias" },
    { name: "Redações", link: "./todasRedacoes" },
    { name: "Perfil", link: "./perfilAluno" },
  ];

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const today = new Date();
  const day = today.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[today.getMonth()];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  return (
    <>
      <title>Dashboard</title>
      <div className="header">
        <Image
          src="/img/icone-menu.png"
          width={50}
          height={50}
          alt="Ícone do Menu"
          onClick={toggleMenu}
          className="menu-icon"
          style={{ cursor: "pointer" }}
        />
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Pesquisar páginas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {(menuOpen || notificationsOpen) && (
        <div
          className="overlay2"
          onClick={() => {
            setMenuOpen(false);
            setNotificationsOpen(false);
          }}
        ></div>
      )}

      {/* ABA DO MENU */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={`side-menu ${menuOpen ? "active" : ""}`}>
        <div className="barrinha">
          <div className="profile-header">
            <Image
              src="/img/profile.png"
              width={60}
              height={60}
              alt="Ícone de perfil"
              className="profile-icon"
            />
            <div>
              <h1>Bem-vindo, Celso!</h1>
            </div>
          </div>

          <ul className="menu-list">
            {filteredPages.map((page, index) => (
              <li key={index} className="menu-item">
                <Link href={page.link}>
                  <div>
                    <span>{page.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button className="back-button">
              <Link href="@/app/page.js" className="arrow">←</Link>
            </button>
            {/* <Image
              src="/img/Ppreto.png"
              width={60}
              height={60}
              alt="logo na cor preta"
              className="logo-image"
            /> */}
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-title">DashBoard</div>
        <div className="cards">
          <Link href="./adcAtividades" className="card">
            <div className="icon">
              <Image
                src="/img/book.png"
                width={100}
                height={100}
                alt="Atividades"
              />
            </div>
            <span>Atividades</span>
            <div className="underline"></div>
          </Link>
          <Link href="./minhasVideoaulasProf" className="card">
            <div className="icon">
              <Image
                src="/img/video.png"
                width={100}
                height={100}
                alt="Redação"
              />
            </div>
            <span>Videoaula</span>
            <div className="underline"></div>
          </Link>
          
        </div>
        <div className="calendar">
          <div className="calendar-title">Calendário</div>
          <div className="calendar-item">
            <a href="#" className="date">
              <div className="day">{day}</div>
              <div className="month">{month}</div>
            </a>
            <div className="event">Aula hoje às 16hrs</div>
          </div>
          <div className="calendar-item">
            <a href="#" className="date">
              <div className="day">1</div>
              <div className="month">Mar</div>
            </a>
            <div className="event">Postar vídeoaula hoje as 17hrs</div>
          </div>
        </div>
      </div>
    </>
  );
}

