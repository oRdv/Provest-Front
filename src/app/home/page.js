"use client";

import React, { useState } from 'react';
import styles from'./page.modules.css';

function Home() {
    return (
        <>
                <title>Dashboard</title>
                
            <div className="header">
                <i className="fas fa-bars menu-icon"></i>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Pesquisar..." />
                </div>
                <div className="icons">
                    <i className="fas fa-user"></i>
                    <i className="fas fa-bell"></i>
                </div>
            </div>
            <div className="container">
                <div className="dashboard-title">DashBoard</div>
                <div className="cards">
                    <a href="#" className="card">
                        <i className="fas fa-ellipsis-v"></i>
                        <div className="icon"><i className="fas fa-book"></i></div>
                        <div className="title1">Atividades</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <i className="fas fa-ellipsis-v"></i>
                        <div className="icon"><i className="fas fa-book-open"></i></div>
                        <div className="title1">Redações</div>
                        <div className="underline"></div>
                    </a>
                    <a href="#" className="card">
                        <i className="fas fa-ellipsis-v"></i>
                        <div className="icon"><i className="fas fa-book"></i></div>
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
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
