"use client";

import React, { useState } from 'react';
import styles from './page.modules.css';
import Link from 'next/link';
import Image from 'next/image';

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
                <i className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </i>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Pesquisar..." />
                </div>
                </div>

                    {/* ABA DE NOTIFICAÇÕES */}
                <i className="notification-icon" onClick={toggleNotifications}>
                    &#128276;
                </i>

                {notificationsOpen && (
                    <>
                    <div className={styles.overlay} onClick={toggleNotifications}></div>
                    <div className="notifications">
                        <div className="barra-branca">
                            <h1>Notificações</h1>
                        </div>
                        <ul>
                        <ul className="menu-notificacoes">
                        <li className="notif-item">
                            <Link href="#">Notificação 1: Detalhes da notificação</Link>
                        </li>
                        <li className="notif-item">
                            <Link href="#">Notificação 2: Detalhes da notificação</Link>
                        </li>
                        <li className="notif-item">
                            <Link href="#">Notificação 3: Detalhes da notificação</Link>
                        </li>
                            </ul>
                        </ul>
                    </div>
                    </>
                )}
            


            {/* ABA DO MENU */}
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <div className={`side-menu ${menuOpen ? 'active' : ''}`}>
                <div className="barrinha">
                    <div className="profile-header">
                        <Image src="/img/profile.png" width={60} height={60} alt="Ícone de perfil" className="profile-icon" />
                        <div>
                            <h1>Bem-vindo, Celso!</h1>
                        </div>
                    </div>
                    

        <ul className="menu-list">
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-tarefas.png" alt="Tarefas" className="menu-icon" /> Tarefas
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-chats.png" alt="Chats" className="menu-icon" /> Chats
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-config.png" alt="" className="menu-icon" /> Configurações
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/ico-calendario.png" alt="" className="menu-icon" /> Calendário
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-lupa.png" alt="" className="menu-icon" /> Escolha o curso
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-video.png" alt="Vídeo-Aulas" className="menu-icon" /> Vídeo-Aulas
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-materias.png" alt="Matérias" className="menu-icon" /> Matérias
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-redações.png" alt="" className="menu-icon" /> Redações
                </Link>
            </li>
            <li className="menu-item">
                <Link href="#">
                    <img src="/img/icon-perfil2.png" alt="" className="menu-icon" /> Perfil
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
                    <a href="#" className="card">
                        <div className="icon">
                            <Image src="/img/Vector.png" width={100} height={100} alt="Atividades" />
                        </div>
                        <div className="title1">Atividades</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <div className="icon">
                            <Image src="/img/agenda.png" width={100} height={100} alt="Redações" />
                        </div>
                        <div className="title1">Redações</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <div className="icon">
                            <Image src="/img/Vector.png" width={100} height={100} alt="Atividades" />
                        </div>
                        <div className="title1">Atividades</div>
                        <div className="underline"></div>
                    </a>
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
