"use client";

import React, { useState } from "react";
import styles from "./page.modules.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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
          <input type="text" placeholder="Pesquisar..." />
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
          <li className="notif-item">
            <Link href="#">
              <div>
                <span className="notif-title">Notificação 1: </span>
                <span className="notif-details">Detalhes da notificação</span>
              </div>
            </Link>
          </li>
          <li className="notif-item">
            <Link href="#">
              <div>
                <span className="notif-title">Notificação 2: </span>
                <span className="notif-details">Detalhes da notificação</span>
              </div>
            </Link>
          </li>
          <li className="notif-item">
            <Link href="#">
              <div>
                <span className="notif-title">Notificação 3: </span>
                <span className="notif-details">Detalhes da notificação</span>
              </div>
            </Link>
          </li>
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
            <li className="menu-item">
              <Link href="#">
                <div>
                  <img
                    src="/img/icon-tarefas.png"
                    alt="Tarefas"
                    className="menu-icon"
                  />
                  <span>Tarefas</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./chatGeral">
                <div>
                  <img
                    src="/img/icon-chats.png"
                    alt="Chats"
                    className="menu-icon"
                  />
                  <span>Chats</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./configuracoes">
                <div>
                  <img
                    src="/img/icon-config.png"
                    alt="Configurações"
                    className="menu-icon"
                  />
                  <span>Configurações</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="#">
                <div>
                  <img
                    src="/img/ico-calendario.png"
                    alt="Calendário"
                    className="menu-icon"
                  />
                  <span>Calendário</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="#">
                <div>
                  <img
                    src="/img/icon-lupa.png"
                    alt="Escolha o curso"
                    className="menu-icon"
                  />
                  <span>Escolha o curso</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./videoaula">
                <div>
                  <img
                    src="/img/icon-video.png"
                    alt="Vídeo-Aulas"
                    className="menu-icon"
                  />
                  <span>Vídeo-Aulas</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./materias">
                <div>
                  <img
                    src="/img/icon-materias.png"
                    alt="Matérias"
                    className="menu-icon"
                  />
                  <span>Matérias</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./todasRedacoes">
                <div>
                  <img
                    src="/img/icon-redações.png"
                    alt="Redações"
                    className="menu-icon"
                  />
                  <span>Redações</span>
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./perfilAluno">
                <div>
                  <img
                    src="/img/icon-perfil2.png"
                    alt="Perfil"
                    className="menu-icon"
                  />
                  <span>Perfil</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="button-container">
            <button className="back-button">
              <span className="arrow">←</span> Logout
            </button>
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
              <div className="day">10</div>
              <div className="month">Mar</div>
            </a>
            <div className="event">História e Química</div>
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
