'use client'

import React, { useState } from 'react';
import styles from './page.module.css'; 

const Schedule = () => {
    const [workloads, setWorkloads] = useState({
        Seg: '6h',
        Ter: '6h',
        Qua: '6h',
        Quin: '6h',
        Sex: '4h',
        Sab: '2h',
        Dom: '0h',
    });

    const handleTimeChange = (day) => {
        const newTime = prompt(`Defina a carga horária para ${day}:`, workloads[day]);
        if (newTime) {
            setWorkloads(prev => ({ ...prev, [day]: newTime }));
        }
    };

    const generateSchedule = () => {
        alert('Cronograma gerado!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>MONTE SEU CRONOGRAMA</h1>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.leftContent}>
                    <div className={styles.sectionTitle}>Informações de estudo</div>
                    <div className={styles.formGroup}>
                        <label htmlFor="data-prova">Data da prova:</label>
                        <input id="data-prova" type="text" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="curso-desejado">Curso desejado:</label>
                        <input id="curso-desejado" type="text" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="instituicao">Instituição:</label>
                        <input id="instituicao" type="text" />
                    </div>
                    <div className={styles.disciplines}>
                        <h3>Disciplinas</h3>
                        <ul>
                            {['Matematica', 'Ingles', 'Portugues', 'Historia', 'Geografia', 'Ciencias', 'Biologia', 'Fisica'].map(discipline => (
                                <li key={discipline}>
                                    <div className={styles.switch}>
                                        <span>Normal</span>
                                        <input defaultChecked name={discipline.toLowerCase()} type="radio" />
                                        <span>Dificil</span>
                                        <input name={discipline.toLowerCase()} type="radio" />
                                        <span>Facil</span>
                                        <input name={discipline.toLowerCase()} type="radio" />
                                    </div>
                                    {discipline}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.studyDays}>
                        <h3>Dias de estudo</h3>
                            {['Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab', 'Dom'].map(day => (
                                <div key={day} onClick={() => handleTimeChange(day)} className={styles.day}>
                                    {day}
                                </div>
                            ))}
                    </div>
                    <div className={styles.dailyHours}>
                        <h3>Carga horária diária</h3>
            
                            {Object.entries(workloads).map(([day, time]) => (
                                <div key={day} onClick={() => handleTimeChange(day)} className={styles.time}>
                                    {day} <span className={styles.timeValue}>{time}</span>
                                </div>
                            ))}
                      
                    </div>
                </div>
            </div>
            <button className={styles.generateButton} onClick={generateSchedule}>
                Gerar Cronograma
            </button>
        </div>
    );
};


export default Schedule;
