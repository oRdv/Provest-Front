"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.modules.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([]);

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

  useEffect(() => {
    // Buscar notificações do endpoint
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          "https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/notificacoes"
        );
        const data = await response.json();

        // Atualizar estado com todas as notificações
        setNotifications(data.notificacoes); // Corrigido: acessando 'notificacoes' do JSON
      } catch (error) {
        console.error("Erro ao buscar notificações:", error);
      }
    };

    fetchNotifications();
  }, []);

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
          {searchQuery && (
            <div className="dropdown">
              {filteredPages.map((page, index) => (
                <Link key={index} href={page.link}>
                  <div className="dropdown-item">{page.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Image
          src="/img/icone-sino.png"
          width={50}
          height={50}
          alt="Ícone das Notificações"
          onClick={toggleNotifications}
          className="menu-icon"
          style={{ cursor: "pointer" }}
        />
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

      {/* ABA DE NOTIFICAÇÕES */}
      <div className={`notifications ${notificationsOpen ? "active" : ""}`}>
        <div className="barra-branca">
          <Image
            src="/img/Ppreto.png"
            width={60}
            height={60}
            alt="logo na cor preta"
            className="logo-image"
          />
          <h1>Notificações</h1>
        </div>
        <ul className="menu-notificacoes">
          {notifications.length > 0 ? (
            notifications.map((notif, index) => (
              <li key={index} className="notif-item">
                <Link href="#">
                  <div>
                    <span className="notif-title">{notif.titulo}: </span>
                    <span className="notif-details">{notif.descricao}</span>
                    <span className="notif-date">
                      {new Date(notif.data_prova).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="notif-item">
              <span className="notif-details">Sem notificações</span>
            </li>
          )}
        </ul>
      </div>

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
            <Link href="/" className="back-button">
              <button className="back-button">
                <span className="arrow">←</span> Logout
              </button>
            </Link>
            <Image
              src="/img/Ppreto.png"
              width={60}
              height={60}
              alt="logo na cor preta"
              className="logo-image"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-title">DashBoard</div>
        <div className="cards">
          <Link href="./chatGeral" className="card">
            <div className="icon">
              <Image
                src="/img/Vector.png"
                width={100}
                height={100}
                alt="Atividades"
              />
            </div>
            <span>Atividades</span>
            <div className="underline"></div>
          </Link>
          <Link href="./todasRedacoes" className="card">
            <div className="icon">
              <Image
                src="/img/agenda.png"
                width={100}
                height={100}
                alt="Redação"
              />
            </div>
            <span>Redação</span>
            <div className="underline"></div>
          </Link>
          <Link href="../todasAnotacoes" className="card">
            <div className="icon">
              <Image
                src="/img/icon-anotHome.png"
                width={100}
                height={100}
                alt="Anotações"
              />
            </div>
            <span>Anotações</span>
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
            <div className="event">Hoje: Evento automático</div>
          </div>
          <div className="calendar-item">
            <a href="#" className="date">
              <div className="day">1</div>
              <div className="month">Mar</div>
            </a>
            <div className="event">Matemática e Geografia</div>
          </div>
        </div>
      </div>
    </>
  );
}
