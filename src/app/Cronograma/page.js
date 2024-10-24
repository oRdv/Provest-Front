'use client'

import React, { useState, useEffect } from 'react';
import styles from './page.modules.css'; 

const Schedule = () => {
    const [workloads, setWorkloads] = useState({});
    const [disciplines, setDisciplines] = useState({
        matematica: false,
        ingles: true,
        portugues: true,
        historia: false,
        geografia: false,
    });

    const days = ['Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab', 'Dom'];

    useEffect(() => {
        const loadedWorkloads = {};
        days.forEach(day => {
            const value = localStorage.getItem(`workload-${day}`) || '6h V';
            loadedWorkloads[day] = value;
        });
        setWorkloads(loadedWorkloads);
        
        const loadedDisciplines = {};
        Object.keys(disciplines).forEach(discipline => {
            loadedDisciplines[discipline] = localStorage.getItem(discipline) === 'true';
        });
        setDisciplines(loadedDisciplines);
    }, []);

    const handleWorkloadChange = (day, value) => {
        setWorkloads(prev => {
            const newWorkloads = { ...prev, [day]: value };
            localStorage.setItem(`workload-${day}`, value);
            return newWorkloads;
        });
    };

    const handleDisciplineChange = (discipline) => {
        setDisciplines(prev => {
            const newStatus = !prev[discipline];
            localStorage.setItem(discipline, newStatus);
            return { ...prev, [discipline]: newStatus };
        });
    };

    const generateSchedule = () => {
        alert('Cronograma gerado com sucesso!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>MONTE SEU CRONOGRAMA</h1>
            </div>
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
            <div className={styles.disciplinas}>
                <h3>Disciplinas</h3>
                <ul>
                    {Object.keys(disciplines).map(discipline => (
                        <li key={discipline}>
                            <span>{discipline.charAt(0).toUpperCase() + discipline.slice(1)}</span>
                            <div className={styles.toggleSwitch}>
                                <input
                                    id={discipline}
                                    type="checkbox"
                                    checked={disciplines[discipline]}
                                    onChange={() => handleDisciplineChange(discipline)}
                                />
                                <div className={styles.slider}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.studyDays}>
                <h3>Dias de estudo</h3>
                <div className={styles.days}>
                    {days.map(day => (
                        <button key={day} onClick={() => handleWorkloadChange(day, workloads[day] === '6h V' ? '0h V' : '6h V')}>
                            {day}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.dailyHours}>
                <h3>Carga horária diária</h3>
                <div className={styles.hours}>
                    {days.map(day => (
                        <div key={day}>
                            {day}<br />
                            <input
                                value={workloads[day] || ''} // Garantir que o input seja sempre controlado
                                onChange={(e) => handleWorkloadChange(day, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.generateButton}>
                <button onClick={generateSchedule}>Gerar Cronograma</button>
            </div>
        </div>
    );
};

export default Schedule;
