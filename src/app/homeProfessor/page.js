"use client";

import React, { useState } from 'react';
import styles from './page.modules.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeProfessor() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <title>Dashboard</title>
      <div className="header">
        <div className="search-bar">
          <i className="pesquisar">
          <input
            type="text"
            placeholder="Pesquisar páginas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </i>
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

      <div className="container">
        <div className="dashboard-title">DashBoard</div>
        <div className="cards">
          <Link href="./chatGeral" className="card">
            <div className="icon">
              <Image
                src="/img/chat-prof.png"
                width={100}
                height={100}
                alt="Atividades"
              />
            </div>
            <span>Chat</span>
            <div className="underline"></div>
          </Link>

          <Link href="./configuracoes" className="card">
            <div className="icon">
              <Image
                src="/img/profile-prof.png"
                width={100}
                height={100}
                alt="Redação"
              />
            </div>
            <span>Configurações</span>
            <div className="underline"></div>
          </Link>

          <Link href="./detalheProf" className="card">
            <div className="icon">
              <Image
                src="/img/school.png"
                width={100}
                height={100}
                alt="Atividades"
              />
            </div>
            <span>Perfil para Alunos</span>
            <div className="underline"></div>
          </Link>
        </div>
        
      </div>
    </>
  );
}

