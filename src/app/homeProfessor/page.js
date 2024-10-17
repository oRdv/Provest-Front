"use client";

import React from 'react';
import Head from 'next/head';
import styles from './page.module.css'; 
import Link from 'next/link';
import Image from 'next/image';


const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <div className={styles.header}>
                <i className="fas fa-bars menu-icon"></i>
                <input type="text" placeholder="Pesquisar..." />
                <div className={styles.icons}>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-bell"></i>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.sectionTitle}>DashBoard</div>
                <div className={styles.dashboard}>
                    <label className={styles.card}>
                        <i className="fas fa-book"></i>
                        <i className="fas fa-plus plus-icon"></i>
                        <Image
                src="/img/Vector.png"
                width={90}
                height={90}
                alt=".."
            />
                        <div className={styles.title}>Atividades</div>
                        <input type="file" />
                    </label>
                    <label className={styles.card}>
                        <i className="fas fa-video"></i>
                        <i className="fas fa-plus plus-icon"></i>
                        <Image
                src="/img/aula.png"
                width={90}
                height={90}
                alt=".."
            />
                        <div className={styles.title}>VídeoAulas</div>
                        <input type="file" />
                    </label>
                </div>
                <div className={styles.sectionTitle}>Calendário</div>
                <div className={styles.calendar}>
                    <div className={styles.calendarCard}>
                        <div className={styles.date}>
                            <span className={styles.day}>10</span>
                            <span className={styles.month}>Mar</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>Calendário</div>
                            <div className={styles.event}>Aula hoje às 16hrs</div>
                            <div className={styles.event}>Postar vídeo aula hoje às 10:10hrs</div>
                        </div>
                    </div>
                    <div className={styles.calendarCard}>
                        <div className={styles.date}>
                            <span className={styles.day}>3</span>
                            <span className={styles.month}>Fev</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>Calendário</div>
                            <div className={styles.event}>Aula hoje às 13hrs</div>
                            <div className={styles.event}>Postar vídeo aula hoje às 17hrs</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
