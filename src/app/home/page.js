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

                <i className="notification-icon" onClick={toggleNotifications}>
                    &#128276;
                </i>
                {notificationsOpen && (
                    <div className="notifications">
                        <ul>
                            <li>Você tem uma nova mensagem no chat</li>
                            <li>Nova redação corrigida</li>
                            <li>Tarefa de Matemática disponível</li>
                        </ul>
                    </div>
                )}
            </div>

            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <div className={`side-menu ${menuOpen ? 'active' : ''}`}>
                <div className="barrinha">
                    <div className="profile-header">
                        <Image src="/img/profile.png" width={40} height={40} alt="Ícone de perfil" className="profile-icon" />
                        <div>
                            <h1>Bem-vindo,</h1>
                            <h2>Celso!</h2>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-item"><Link href="#">Tarefas</Link></li>
                        <li className="menu-item"><Link href="#">Chats</Link></li>
                        <li className="menu-item"><Link href="#">Configurações</Link></li>
                        <li className="menu-item"><Link href="#">Escolha o curso</Link></li>
                        <li className="menu-item"><Link href="#">Calendário</Link></li>
                        <li className="menu-item"><Link href="#">Vídeo-Aulas</Link></li>
                        <li className="menu-item"><Link href="#">Matérias</Link></li>
                        <li className="menu-item"><Link href="#">Redações</Link></li>
                        <li className="menu-item"><Link href="#">Perfil</Link></li>
                    </ul>
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
