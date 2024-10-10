"use client";

import React, { useState } from 'react';
import styles from'./page.modules.css';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
    return (
        <>
                <title>Dashboard</title>
                
            <div className="header">
                <i className="menu-icon"></i>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Pesquisar..." />
                </div>
            </div>
            <div className="container">
                <div className="dashboard-title">DashBoard</div>
                <div className="cards">
                    <a href="#" className="card">
                        <div className="icon"><Image
                src="/img/Vector.png"
                width={100}
                height={100}
                alt=".."
            /></div>
                        <div className="title1">Atividades</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <div className="icon"><Image
                src="/img/agenda.png"
                width={100}
                height={100}
                alt=".."
            /></div>
                        <div className="title1">Redações</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <div className="icon"><Image
                src="/img/Vector.png"
                width={100}
                height={100}
                alt=".."
            /></div>
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
                        <div className="event">Matematica e Geografia</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
